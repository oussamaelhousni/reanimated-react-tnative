import { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from "react-native-reanimated";
import { Colors } from "react-native/Libraries/NewAppScreen";
const colors = {
  dark: {
    background: "#1e1e1e",
    circle: "#252525",
    text: "white",
  },
  light: {
    background: "#f8f8f8",
    circle: "#fff",
    text: "#000",
  },
};

const SWITCH_TRACK_COLOR = {
  true: "rgba(256,0,256,0.2)",
  false: "rgba(0,0,0,0.1)",
};

export default function App() {
  const [theme, setTheme] = useState("light");
  const progress = useDerivedValue(() => {
    return withSpring(theme === "dark" ? 1 : 0);
  }, [theme]);

  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.light.background, colors.dark.background]
    );
    return {
      backgroundColor: backgroundColor,
    };
  });

  const rCircleStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.light.circle, colors.dark.circle]
    );
    return {
      backgroundColor: backgroundColor,
    };
  });

  const rTextStyle = useAnimatedStyle(() => {
    const textColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.light.text, colors.dark.text]
    );
    return {
      color: textColor,
    };
  });
  return (
    <Animated.View style={[styles.container, rStyle]}>
      <Animated.Text style={[styles.text, rTextStyle]}>
        rn dark mode
      </Animated.Text>
      <Animated.View style={[styles.circle, rCircleStyle]}>
        <Switch
          value={theme === "dark"}
          onValueChange={(toggled) => setTheme(!toggled ? "light" : "dark")}
          trackColor={SWITCH_TRACK_COLOR}
          thumbColor={"violet"}
        />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    height: 200,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
