import {
  SHARE_EMAIL_REQUEST,
  SHARE_EMAIL_SUCCESS,
  SHARE_EMAIL_FAILED,
  ADD_EMAIL_REQUEST,
  ADD_EMAIL_SUCCESS,
  ADD_EMAIL_FAILED,
  LOAD_EMAILS_REQUEST,
  LOAD_EMAILS_SUCCESS,
  LOAD_EMAILS_FAILED,
} from "./types";
import axios from "axios";

const backendurl = process.env.REACT_APP_BASE_URL;

export const sendEmail = ({ image, link, description, doc }) => async (
  dispatch
) => {
  const formData = new FormData();
  formData.append("image", image, image.name);
  formData.append("document", doc, doc.name);
  formData.append("link", link);
  formData.append("description", description);
  dispatch({ type: SHARE_EMAIL_REQUEST });
  try {
    const token = localStorage.getItem("token");
    const { data } = await axios.post(
      backendurl + "/api/sendlink/email",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-auth-token": token,
        },
      }
    );
    if (data.error) {
      dispatch({
        type: SHARE_EMAIL_FAILED,
        error: data.error,
      });
    } else {
      dispatch({ type: SHARE_EMAIL_SUCCESS, message: data.message });
    }
  } catch (error) {
    dispatch({ type: SHARE_EMAIL_FAILED, error: error.response.data.message });
  }
};

export const loadEmails = () => async (dispatch) => {
  dispatch({ type: LOAD_EMAILS_REQUEST });
  try {
    const token = localStorage.getItem("token");
    const { data } = await axios.get(backendurl + "/api/get/mail", {
      headers: { "x-auth-token": token },
    });

    dispatch({ type: LOAD_EMAILS_SUCCESS, mails: data.mails });
  } catch (error) {
    dispatch({ type: LOAD_EMAILS_FAILED, error: error.response.data.message });
  }
};

export const saveEmail = (mail) => async (dispatch) => {
  dispatch({ type: ADD_EMAIL_REQUEST });
  try {
    const token = localStorage.getItem("token");
    const { data } = await axios.post(backendurl + "/api/add/mail", mail, {
      headers: { "x-auth-token": token },
    });

    dispatch({ type: ADD_EMAIL_SUCCESS, mail: data.emailCont });
  } catch (error) {
    dispatch({ type: ADD_EMAIL_FAILED, error: error.response.data.message });
  }
};
