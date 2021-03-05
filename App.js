import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { Feather, FontAwesome } from "@expo/vector-icons";
import IndexScreen from "./src/screens/IndexScreen";
import { store } from "./src/redux/stores";
import ShowScreen from "./src/screens/ShowScreen";
import EditBlogScreen from "./src/screens/EditBlogScreen";
import CreateBlogScreen from "./src/screens/CreateBlogScreen";
import { StyleSheet, TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={({ navigation, route }) => ({
            title: "Blogs",
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                <Feather name="plus" style={styles.addIcon} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={({ navigation, route }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
                <FontAwesome name="pencil" style={styles.editIcon} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Edit" component={EditBlogScreen} />
        <Stack.Screen name="Create" component={CreateBlogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  addIcon: {
    fontSize: 30,
    margin: 5,
  },
  editIcon: {
    fontSize: 30,
    margin: 5,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
