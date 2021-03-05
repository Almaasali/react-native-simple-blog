import React from "react";
import { connect } from "react-redux";
import BlogPostForm from "../components/BlogPostForm";
import { editPost } from "../redux/actions";

const EditBlogScreen = ({ route, blogPosts, editPost, navigation }) => {
  const { id } = route.params;
  const blogPost = blogPosts.find((b) => b.id === id);

  const edit = (id, title, content) => {
    editPost(id, title, content);
    navigation.navigate("Index");
  };

  return <BlogPostForm type="edit" blogPost={blogPost} OnSubmit={edit} />;
};

const mapStateToProps = (state) => {
  return {
    blogPosts: state.blogPosts.blogPosts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editPost: (id, title, content) => dispatch(editPost(id, title, content)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBlogScreen);
