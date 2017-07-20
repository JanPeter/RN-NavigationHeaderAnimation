// @flow

import React, { Component } from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import idx from "idx";

const HEADER_HEIGHT = 220;

export default class Feed extends Component {
  static navigationOptions = {
    title: "Feed",
  };

  render() {
    let animation = {};
    let transform = [];
    if (idx(this, _ => _.props.screenProps.scrollY)) {
      animation = {
        onScroll: Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: this.props.screenProps.scrollY },
              },
            },
          ],
          { useNativeDriver: true }
        ),
      };

      const translateY = this.props.screenProps.scrollY.interpolate({
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
                onPress={() => this.props.navigation.navigate("profile")}
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
