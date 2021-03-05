import { color } from "react-native-reanimated";
import { generateID } from "../../utils/idGenerator";
import { ADD_POST, DELETE_POST, UPDATE_POST } from "../actions/types";
import { initilaState } from "./initialState";

export function blogReducer(state = initilaState.blogPosts, action) {
  switch (action.type) {
    case ADD_POST:
      console.log("state from reducer", state);
      return [
        ...state,
        { id: generateID(), title: `Blog Post #${state.length + 1}` },
      ];
    case UPDATE_POST:
      return state;
    case DELETE_POST:
      return state.filter((b) => b.id !== action.id);
    // return {
    //   ...state,
    //   blogPosts: [
    //     ...blogPosts,
    //     {
    //       id: generateID(),
    //       title: `Blog Post #${state.length + 1}`,
    //     },
    //   ],
    // };

    default:
      return state;
  }
}
