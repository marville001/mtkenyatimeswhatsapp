import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  makeStyles,
  TextField,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import { sendEmail } from "../../_actions";
import { Form } from "../../components/useForm";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const EmailForm = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:750px)");
  const dispatch = useDispatch();
  const { shareLoading, shareError, shareMessage } = useSelector(
    (state) => state.shareReducer
  );

  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [doc, setDoc] = useState("");

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
    if (validURL(link) === false) {
      alert("Invalid Link...Enter a valid link");
    } else if (
      link.length <= 1 ||
      image.length <= 1 ||
      description.length <= 1 ||
      doc.length <= 1
    ) {
      alert("All fields are required!");
    } else {
      dispatch(sendEmail({ image, link, description, doc }));
    }
  };

  const [imageData, setImageData] = useState("");

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImageData(reader.result);
    });
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <Form>
      <Grid container>
        <Grid item xs={12} sm={12}>
          {shareLoading && <h4>Loading.... please wait</h4>}
          {shareError && <h4>{shareError}</h4>}
          {shareMessage && <h4>{shareMessage}</h4>}
        </Grid>
        <Grid item xs={12} sm={5}>
          <div style={{ marginLeft: "10px", fontSize: "16px" }}>
            <input
              color="primary"
              accept="image/*"
              type="file"
              id="icon-button-file"
              name="image"
              required
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <label htmlFor="icon-button-file">
              <Button
                variant="contained"
                component="span"
                className={classes.button}
                size="large"
                color="secondary"
              >
                Upload Image{" "}
              </Button>
            </label>
          </div>
          <TextField
            value={description}
            variant="outlined"
            label="Enter Description"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <TextField
            value={link}
            variant="outlined"
            label="Enter the Link"
            name="link"
            onChange={(e) => setLink(e.target.value)}
            required
          />
          <div style={{ marginLeft: "10px", fontSize: "16px" }}>
            <input
              color="primary"
              // accept="image/*"
              type="file"
              id="attach-file"
              name="doc"
              required
              onChange={(e) => setDoc(e.target.files[0])}
              style={{ display: "none" }}
            />
            <label htmlFor="attach-file">
              <span>
                {doc.length <= 1 ? "No File attached yet!" : doc.name}{" "}
              </span>
              <Button
                variant="contained"
                component="span"
                className={classes.button}
                size="large"
                // color="secondary"
              >
                Attach document
              </Button>
            </label>
          </div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSubmit}
            style={{ display: "inline-block" }}
          >
            Send
          </Button>
          <br />
        </Grid>
        <Grid item xs={12} sm={7}>
          <div style={{ margin: !matches ? "10px 0px" : "60px" }}>
            {image.length <= 1 ? (
              <h4>"Image Preview"</h4>
            ) : (
              <img
                style={{ width: "350px", height: "160px" }}
                src={imageData}
                alt="hello"
              />
            )}
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmailForm;
