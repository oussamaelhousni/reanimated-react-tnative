import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import Page from "./components/Page";

const words = ["What's", "Up", "Mobile", "Devs"];
export default function App() {
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((e) => {
    translateX.value = e.contentOffset.x;
  });
  return (
    <Animated.ScrollView
      horizontal={true}
      style={styles.container}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
    >
      {words.map((w, i) => (
        <Page key={i} title={w} index={i} translateX={translateX} />
      ))}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
