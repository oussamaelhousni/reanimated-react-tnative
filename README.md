# reanimated-react-tnative

Reanimated is a React Native library that empowers developers to create smooth and performant animations by leveraging the power of the device's native capabilities. Unlike traditional animation approaches that rely solely on JavaScript, Reanimated performs animation calculations directly on the native side, freeing up the main JavaScript thread and ensuring smoother, more responsive user interfaces. This native execution allows for complex animations, gestures, and interactions to be handled efficiently, resulting in apps with fluid motion and improved user experience. Additionally, Reanimated seamlessly integrates with React Native components and provides a declarative API, making it easier for developers to express animation logic and create visually engaging experiences without sacrificing performance.

### 1 - useSharedValue

- useSharedValue is a hook used to create shared values that can be animated and accessed across different parts of your application. Shared values are special variables that are stored and managed natively, rather than in JavaScript memory, which enhances performance by offloading animation calculations to the native side.

### 2 - useAnimatedStyle

- useAnimatedStyle is a React Native Reanimated hook that allows you to define dynamic styles for components based on animated values, enabling smoother animations with better performance by handling style updates on the native side.

* qst 1 : why we do not use shared values styles directly in the component ?
* answer : The reason we don't directly use style={{ translateX: translateX.value }} in React Native for animations is because traditional styles in React Native are processed on the JavaScript thread, which can lead to performance issues, especially when dealing with complex animations.

### 3 - withTiming

- In React Native's Reanimated library, withTiming is a function used to create timing-based animations. It's commonly used to animate values smoothly from their current state to a target value over a specified duration, applying easing functions to control the animation's acceleration and deceleration.

```import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const MyComponent = () => {
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, { duration: 1000 }),
    };
  });

  const handlePress = () => {
    opacity.value = opacity.value === 0 ? 1 : 0; // Toggle between 0 and 1
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button title="Toggle Opacity" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default MyComponent;

```
