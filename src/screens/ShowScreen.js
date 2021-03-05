import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

const ShowScreen = ({ route, blogPosts }) => {
  const { id } = route.params;
  const blogPost = blogPosts.find((b) => b.id === id);
  return (
    <View>
      <Text style={styles.title}> {blogPost.title}</Text>
      <Text style={styles.content}> {blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    alignSelf: "center",
  },
  content: {
    fontSize: 18,
    margin: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    blogPosts: state.blogPosts.blogPosts,
  };
};

export default connect(mapStateToProps, null)(ShowScreen);
