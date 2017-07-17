// @flow

import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  Animated,
} from "react-native";

export default class App extends Component {
  componentWillMount() {
    this.height = new Animated.Value(0);
  }

  render() {
    const y = this.height.interpolate({
      inputRange: [-1, 0, 120, 121],
      outputRange: [0, 0, -120, -120],
      extrapolate: 'clamp',
    });
    // const height = 120;

    return (
      <View style={{ flex: 1 }}>
        <Animated.View style={[{ position: 'absolute', top: 0, left: 0, right: 0, overflow: "hidden", backgroundColor: "red", height: 120 }, { transform: [{ translateY: y }] }]}>
          <Text>Test</Text>
        </Animated.View>
        <Animated.ScrollView
          style={{ flex: 1 }}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.height}}}],
            { useNativeDriver: true }
          )}>
          <View style={{ marginTop: 120 }}>
            <View style={{ backgroundColor: 'green', height: 300 }}>
              <Text>Test</Text>
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