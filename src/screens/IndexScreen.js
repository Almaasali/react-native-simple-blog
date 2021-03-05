import React from "react";
import { StyleSheet, View, Text, FlatList, Button } from "react-native";
import { connect } from "react-redux";
import { Feather } from "@expo/vector-icons";
import { deletePost } from "../redux/actions";
import { TouchableOpacity } from "react-native-gesture-handler";

const IndexScreen = ({ blogPosts, addPost, deletePost, navigation }) => {
  return (
    <View>
      <FlatList
        data={blogPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Show", { id: item.id })}
          >
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deletePost(item.id)}>
                <Feather style={styles.icon} name="trash" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    marginVertical: 1,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
    color: "red",
  },
});

const mapStateToProps = (state) => {
  return {
    blogPosts: state.blogPosts.blogPosts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexScreen);
