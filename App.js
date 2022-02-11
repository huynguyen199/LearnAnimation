/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Animated, TouchableOpacity} from 'react-native';

const App = () => {
  const value = useState(new Animated.ValueXY({x: 0, y: 0}))[0];
  console.log('DEBUG: - file: App.js - line 7 - App - value', value);

  function moveBall() {
    Animated.timing(value, {
      toValue: {x: 100, y: 100},
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }

  return (
    <View>
      <Animated.View style={value.getLayout()}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            backgroundColor: 'red',
          }}
        />
      </Animated.View>
      <TouchableOpacity onPress={moveBall}>
        <Text>clicked me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
