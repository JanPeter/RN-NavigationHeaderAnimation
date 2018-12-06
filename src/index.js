// @flow

import { createAppContainer, createStackNavigator } from "react-navigation";

import Home from "./Home";
import Profile from "./Profile";

export default createAppContainer(
  createStackNavigator({
    Home,
    Profile,
  }, {
    initialRouteName: "Home"
  })
);
