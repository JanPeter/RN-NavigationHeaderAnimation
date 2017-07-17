// @flow

import React, { Component } from "react";
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
} from "react-native";

export default class Feed extends Component {
  static navigationOptions = {
    title: "Feed",
  };

  render() {
    let animation = {};
    if (this.props.screenProps.scrollY) {
      animation = {
        onScroll: Animated.event(
          [{nativeEvent: {contentOffset: {y: this.props.screenProps.scrollY}}}],
          { useNativeDriver: true }
        )
      };
    }

    return (
      <View style={{ flex: 1 }}>
        <Animated.ScrollView
          style={{ flex: 1 }}
          scrollEventThrottle={1}
          {...animation}
          >
          <View>
            <View style={{ backgroundColor: 'green', height: 300 }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("profile")} ><Text>Profile</Text></TouchableOpacity>
            </View><View style={{ backgroundColor: 'blue', height: 300 }}>
              <Text>Test</Text>
            </View><View style={{ backgroundColor: 'green', height: 300 }}>
              <Text>Test</Text>
            </View><View style={{ backgroundColor: 'blue', height: 300 }}>
              <Text>Test</Text>
            </View>
          </View>
        </Animated.ScrollView>
      </View>
    )
  }
}