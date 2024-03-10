import React from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");
const Page = ({ index, title, translateX }) => {
  const boxWidth = width * 0.7;
  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 1, 0],
      Extrapolation.CLAMP
    );
    return {
      transform: [
        {
          scale: scale,
        },
      ],
    };
  });
  return (
    <View
      style={[styles.page, { backgroundColor: `rgba(0,0,255,0.${5 - index})` }]}
    >
      <Animated.View
        style={[styles.box, rStyle, { width: boxWidth, height: boxWidth }]}
      >
        <Animated.Text style={styles.text}>{title}</Animated.Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "blue",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 45,
    color: "#fff",
  },
});
export default Page;
