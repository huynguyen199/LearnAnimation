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
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: (_, gesture) => {
        // console.log('args', args[1]);
        pan.x.setValue(gesture.dx);
        pan.y.setValue(gesture.dy);
      },
      onPanResponderRelease: () => {
        console.log({...pan.x}, 'before');
        pan.flattenOffset();
        console.log({...pan.x}, 'after');
      },
    }),
  )[0];

  console.log('test2', pan.getTranslateTransform());

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            backgroundColor: 'red',
            transform: [
              {
                translateX: pan.x,
              },
              {
                translateY: pan.y,
              },
            ],
          },
          pan.getLayout(),
        ]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

export default App;
