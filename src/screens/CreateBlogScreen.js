import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import BlogPostForm from "../components/BlogPostForm";
import { addPost, clearForm } from "../redux/actions";

const CreateBlogScreen = ({ addPost, clearForm, navigation }) => {
  useEffect(() => {
    clearForm();
  }, []);
  return (
    <BlogPostForm
      type="add"
      OnSubmit={(title, content) => {
        addPost(title, content);
        navigation.navigate("Index");
        clearForm();
      }}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (title, content) => dispatch(addPost(title, content)),
    clearForm: () => dispatch(clearForm()),
  };
};

export default connect(null, mapDispatchToProps)(CreateBlogScreen);
