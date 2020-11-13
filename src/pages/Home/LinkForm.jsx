import { Grid, makeStyles, TextField, Button } from "@material-ui/core";

import React from "react";
import { useForm, Form } from "../../components/useForm";

const initialFValues = {
  link: "",
  image: "",
};

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const LinkForm = () => {
  const { values, handleInputChange } = useForm(initialFValues);
  const classes = useStyles();

  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  }

  const handleSubmit = () => {
    if (validURL(values.link) === false) {
      alert("Invalid Link...Enter a valid link");
    } else {
      alert("Valid link...Sending....");
    }
  };

  return (
    <Form>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            value={values.link}
            variant="outlined"
            label="Enter the Link"
            name="link"
            onChange={handleInputChange}
          />
          <div style={{ marginLeft: "10px", fontSize: "16px" }}>
            <input
              color="primary"
              accept="image/*"
              type="file"
              id="icon-button-file"
              name="image"
              onChange={handleInputChange}
              style={{ display: "none" }}
            />
            <label htmlFor="icon-button-file">
              <span>
                {values.image.length === 0 ? "No Image selected" : values.image}{" "}
              </span>
              <Button
                variant="contained"
                component="span"
                className={classes.button}
                size="large"
                color="secondary"
              >
                Upload
              </Button>
            </label>
          </div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSubmit}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default LinkForm;
