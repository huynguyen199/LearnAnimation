/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Animated, TouchableOpacity} from 'react-native';

const App = () => {
  const leftValue = useState(new Animated.Value(0))[0];
  console.log('DEBUG: - file: App.js - line 7 - App - leftValue', leftValue);

  function moveBall() {
    Animated.timing(leftValue, {
      toValue: 1000,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View
          style={[
            {
              width: 100,
              height: 100,
              marginLeft: leftValue,
              borderRadius: 100 / 2,
              backgroundColor: 'red',
            },
          ]}
        />
        <TouchableOpacity onPress={moveBall}>
          <Text>Move Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
