import { ADD_POST, DELETE_POST } from "./types";

export function addPost() {
  return {
    type: ADD_POST,
  };
}

export function updatePost() {
  return {
    type: UPDATE_POST,
  };
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    id: id,
  };
}
