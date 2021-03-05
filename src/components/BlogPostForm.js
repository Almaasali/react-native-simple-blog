import React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { onChangeContent, onChangeTitle } from "../redux/actions";

const BlogPostForm = ({ OnSubmit, type, blogPost }) => {
  const [title, setTitle] = useState(type === "edit" ? blogPost.title : "");
  const [content, setContent] = useState(
    type === "edit" ? blogPost.content : ""
  );

  return (
    <View>
      <Text style={styles.title}>Enter the title: </Text>
      <TextInput
        autoCapitalize={"none"}
        style={styles.inputStyle}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.title}>Enter the content: </Text>
      <TextInput
        autoCapitalize={"none"}
        style={styles.inputStyle}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <TouchableOpacity style={styles.saveBtnStyle}>
        <Button
          title="Save blog"
          onPress={() => {
            type === "edit"
              ? OnSubmit(blogPost.id, title, content)
              : OnSubmit(title, content);
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    margin: 10,
  },
  inputStyle: {
    padding: 10,
    borderWidth: 1,
    margin: 10,
  },
  saveBtnStyle: {
    margin: 10,
    fontSize: 18,
  },
});

export default BlogPostForm;
