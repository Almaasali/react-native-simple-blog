import {
  ADD_POST,
  DELETE_POST,
  ON_CHANGE_CONTENT,
  ON_CHANGE_TITLE,
  ON_SUBMIT,
  UPDATE_POST,
} from "./types";

export function addPost(title, content) {
  return {
    type: ADD_POST,
    payload: { title, content },
  };
}

export function editPost(id, title, content) {
  return {
    type: UPDATE_POST,
    payload: {
      id,
      title,
      content,
    },
  };
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    id: id,
  };
}

export function onChangeTitle(title) {
  console.log("new title-->", title);
  return {
    type: ON_CHANGE_TITLE,
    payload: title,
  };
}
export function onChangeContent(content) {
  console.log("new content-->", content);
  return {
    type: ON_CHANGE_CONTENT,
    payload: content,
  };
}
export function clearForm() {
  return {
    type: ON_SUBMIT,
  };
}
