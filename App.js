/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  PanResponder,
} from 'react-native';

const App = () => {
  const pan = useState(new Animated.ValueXY())[0];

  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        console.log(
          'DEBUG: - file: App.js - line 18 - App - onPanResponderGrant',
        );

        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  )[0];

  console.log(panResponder.panHandlers);

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            backgroundColor: 'red',
          },
          pan.getLayout(),
        ]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

export default App;
