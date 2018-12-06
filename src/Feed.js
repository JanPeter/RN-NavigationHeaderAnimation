// @flow

import React, { Component } from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import { AnimationContext } from "./Home";

const HEADER_HEIGHT = 220;

class Feed extends Component {
  static navigationOptions = {
    title: "Feed",
  };

  render() {
    let animation = {};
    let transform = [];
    if (this.props.scrollY) {
      animation = {
        onScroll: Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: this.props.scrollY },
              },
            },
          ],
          { useNativeDriver: true }
        ),
      };

      const translateY = this.props.scrollY.interpolate({
        inputRange: [0, HEADER_HEIGHT],
        outputRange: [0, HEADER_HEIGHT],
        extrapolate: "clamp",
      });

      transform.push({ translateY });
    }

    return (
      <View style={{ flex: 1 }}>
        <Animated.ScrollView
          style={{ flex: 1 }}
          scrollEventThrottle={1}
          {...animation}
        >
          <Animated.View style={{ paddingBottom: HEADER_HEIGHT, transform }}>
            <View style={{ backgroundColor: "green", height: 300 }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Profile")}
              >
                <Text>Profile</Text>
              </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: "blue", height: 300 }}>
              <Text>Test</Text>
            </View>
            <View style={{ backgroundColor: "green", height: 300 }}>
              <Text>Test</Text>
            </View>
            <View style={{ backgroundColor: "blue", height: 300 }}>
              <Text>Test</Text>
            </View>
          </Animated.View>
        </Animated.ScrollView>
      </View>
    );
  }
}

export default props => (
  <AnimationContext.Consumer>
    {({ offset }) => (
      <Feed {...props} scrollY={offset} />
    )}
  </AnimationContext.Consumer>
);
