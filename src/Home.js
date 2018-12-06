// @flow

import React, { Component } from "react";
import { View, ScrollView, Text, Animated } from "react-native";

import { createMaterialTopTabNavigator } from "react-navigation";

import Feed from "./Feed";
import Info from "./Info";

const HEADER_HEIGHT = 220;

const TabView = createMaterialTopTabNavigator(
  {
    Feed,
    Info,
  },
);

export const AnimationContext = React.createContext({
  offset: null,
});

export default class Home extends Component {
  state = {
    offset: new Animated.Value(0)
  };
  static router = TabView.router;

  render() {
    const translateY = this.state.offset.interpolate({
      inputRange: [0, HEADER_HEIGHT],
      outputRange: [0, -HEADER_HEIGHT],
      extrapolate: "clamp",
    });

    const { routes, index } = this.props.navigation?.state || {};
    if (routes && routes[index].key === "Feed") {
      return (
        <AnimationContext.Provider value={{ offset: this.state.offset }}>
          <View style={{ flex: 1, position: "relative", overflow: "hidden" }}>
            <Animated.View
              style={[
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  overflow: "hidden",
                  backgroundColor: "red",
                  height: HEADER_HEIGHT,
                },
                { transform: [{ translateY }] },
              ]}
            >
              <Text>Test</Text>
            </Animated.View>
            <Animated.View
              style={[
                {
                  marginTop: HEADER_HEIGHT,
                  flex: 1,
                  marginBottom: -HEADER_HEIGHT,
                },
                { transform: [{ translateY }] },
              ]}
            >
              <TabView
                navigation={this.props.navigation}
              />
            </Animated.View>
          </View>
        </AnimationContext.Provider>
      );
    }

    return <TabView navigation={this.props.navigation} />;
  }
}
