import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const SIZE = 100;

export default function App() {
  const progress = useSharedValue(1);
  const scale = useSharedValue(1);
  const handleRotation = (progress) => {
    "worklet";
    return `${Math.PI * 2 * progress}rad`;
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [
        { scale: scale.value },
        { rotate: handleRotation(progress.value) },
      ],
    };
  }, []);

  useEffect(() => {
    progress.value = withTiming(0.3, {
      duration: 10000,
    });
    scale.value = withTiming(0.5, {
      duration: 10000,
    });
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.square, animatedStyle]}></Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "blue",
  },
});
