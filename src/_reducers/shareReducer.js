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
} from "../_actions/types";

const shareReducer = (state = { user: {}, mails: [] }, action) => {
  switch (action.type) {
    case SHARE_EMAIL_REQUEST:
      return { ...state, shareLoading: true };
    case SHARE_EMAIL_SUCCESS:
      return { ...state, shareLoading: false, shareMessage: action.message };
    case SHARE_EMAIL_FAILED:
      return { ...state, shareLoading: false, shareError: action.error };
    case LOAD_EMAILS_REQUEST:
      return { ...state, loadLoading: true };
    case LOAD_EMAILS_SUCCESS:
      return {
        ...state,
        loadLoading: false,
        loadError: "",
        mails: action.mails,
      };
    case LOAD_EMAILS_FAILED:
      return { ...state, loadLoading: false, loadError: action.error };
    case ADD_EMAIL_REQUEST:
      return { ...state, addLoading: true };
    case ADD_EMAIL_SUCCESS:
      return {
        ...state,
        addLoading: false,
        addError: "",
        mails: [...state.mails, action.mail],
      };
    case ADD_EMAIL_FAILED:
      return { ...state, addLoading: false, addError: action.error };
    default:
      return state;
  }
};

export { shareReducer };
