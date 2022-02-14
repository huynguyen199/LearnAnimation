/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Animated, TouchableOpacity} from 'react-native';

const App = () => {
  const opacity = useState(new Animated.Value(0))[0];

  function fadeInBall() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }
  function fadeOutBall() {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
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
              opacity,
              borderRadius: 100 / 2,
              backgroundColor: 'red',
            },
          ]}
        />
        <TouchableOpacity onPress={fadeInBall}>
          <Text>Fade in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fadeOutBall}>
          <Text>Fade out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
