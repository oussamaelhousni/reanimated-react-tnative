import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

const SIZE = 100;
const CIRCLE_RADIUS = 150;
export default function App() {
  const pan = Gesture.Pan()
    .runOnJS(true)
    .onStart((e) => {
      console.log("hi", e);
      context.value.x = translateX.value;
      context.value.y = translateY.value;
    })
    .onUpdate((e) => {
      console.log("g", e);
      translateX.value = e.translationX + context.value.x;
      translateY.value = e.translationY + context.value.y;
    })
    .onEnd((e) => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
      if (distance < CIRCLE_RADIUS) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    });
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const context = useSharedValue({ x: 0, y: 0 });
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.circle}>
        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.square, rStyle]}></Animated.View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
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
    opacity: 0.5,
    borderRadius: 10,
  },
  circle: {
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderColor: "blue",
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZE * 1.5,
  },
});
