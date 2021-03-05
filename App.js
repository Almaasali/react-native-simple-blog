import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import IndexScreen from "./src/screens/IndexScreen";

import { store } from "./src/redux/stores";
import ShowScreen from "./src/screens/ShowScreen";
import EditBlogScreen from "./src/screens/EditBlogScreen";
import CreateBlogScreen from "./src/screens/CreateBlogScreen";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{ title: "Blogs" }}
        />
        <Stack.Screen name="Show" component={ShowScreen} />
        <Stack.Screen name="Edit" component={EditBlogScreen} />
        <Stack.Screen name="Create" component={CreateBlogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
