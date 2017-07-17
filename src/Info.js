// @flow

import React, { Component } from "react";
import {
  View,
  Text,
} from "react-native";

export default class Info extends Component {
  static navigationOptions = {
    title: 'Info',
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Info</Text>
      </View>
    )
  }
}