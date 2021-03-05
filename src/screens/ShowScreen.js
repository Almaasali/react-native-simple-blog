import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

const ShowScreen = ({ route, blogPosts }) => {
  const { id } = route.params;
  const blogPost = blogPosts.find((b) => b.id === id);
  return (
    <View>
      <Text> {blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  return {
    blogPosts: state.blogPosts,
  };
};

export default connect(mapStateToProps, null)(ShowScreen);
