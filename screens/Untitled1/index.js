import { ImageBackground } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Pepsi = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <ImageBackground style={styles.zGUiZnHt} source={require("./twil-can.png")} resizeMode="cover"></ImageBackground>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  zGUiZnHt: {
    width: 355,
    height: 565,
    position: "absolute",
    left: 4.5,
    top: 3.5
  }
});
export default Pepsi;