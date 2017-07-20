// @flow

import React, { Component } from "react";
import { View, ScrollView, Text, Animated } from "react-native";

import { TabNavigator } from "react-navigation";
import idx from "idx";

import Feed from "./Feed";
import Info from "./Info";

const HEADER_HEIGHT = 220;

const TabView = TabNavigator(
  {
    feed: { screen: Feed },
    info: { screen: Info },
  },
  {
    tabBarPosition: "top",
  }
);

export default class Home extends Component {
  componentWillMount() {
    this.offset = new Animated.Value(0);
  }

  render() {
    console.log(this.props.navigation);

    const translateY = this.offset.interpolate({
      inputRange: [0, HEADER_HEIGHT],
      outputRange: [0, -HEADER_HEIGHT],
      extrapolate: "clamp",
    });

    const { routes, index } = idx(this, _ => _.props.navigation.state) || {};
    if (routes && routes[index].key === "feed") {
      return (
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
              screenProps={{ scrollY: this.offset }}
            />
          </Animated.View>
        </View>
      );
    }

    return <TabView navigation={this.props.navigation} />;
  }
}

Home.router = TabView.router;
