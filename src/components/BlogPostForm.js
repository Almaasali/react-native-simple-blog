import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Button,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const BlogPostForm = () => {
  return (
    <View>
      <Text style={styles.title}>Enter the title: </Text>
      <TextInput autoCapitalize={"none"} style={styles.inputStyle} />
      <Text style={styles.title}>Enter the content: </Text>
      <TextInput autoCapitalize={"none"} style={styles.inputStyle} />
      <TouchableOpacity style={styles.saveBtnStyle}>
        <Button title="Save blog" />
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
    color: "red",
    fontSize: 18,
  },
});

export default BlogPostForm;
