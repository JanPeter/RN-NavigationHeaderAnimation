// @flow

import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  Animated,
} from "react-native";

import { StackNavigator } from "react-navigation";

import Home from "./Home";
import Profile from "./Profile";

export default StackNavigator({
  home: { screen: Home },
  profile: { screen: Profile, path: "profile" },
});
