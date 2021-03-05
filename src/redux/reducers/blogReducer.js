import { generateID } from "../../utils/idGenerator";
import {
  ADD_POST,
  DELETE_POST,
  ON_CHANGE_CONTENT,
  ON_CHANGE_TITLE,
  ON_SUBMIT,
  UPDATE_POST,
} from "../actions/types";
import { initilaState } from "./initialState";

export function blogReducer(state = initilaState, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        blogPosts: [
          ...state.blogPosts,
          {
            id: generateID(),
            title: action.payload.title,
            content: action.payload.content,
          },
        ],
      };
    case UPDATE_POST:
      return {
        ...state,
        blogPosts: state.blogPosts.map((p) =>
          p.id === action.payload.id ? { ...action.payload } : p
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        blogPosts: state.blogPosts.filter((b) => b.id !== action.id),
      };
    case ON_CHANGE_TITLE:
      return {
        ...state,
        newBlogPost: { ...state.newBlogPost, title: action.payload },
      };
    case ON_CHANGE_CONTENT:
      return {
        ...state,
        newBlogPost: { ...state.newBlogPost, content: action.payload },
      };
    //clear form after submitted
    case ON_SUBMIT:
      return {
        ...state,
        newBlogPost: { id: "", title: "", content: "" },
      };

    default:
      return state;
  }
}
