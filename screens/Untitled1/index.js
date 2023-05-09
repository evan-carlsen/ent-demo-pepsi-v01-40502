import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";

const Onboarding2 = ({}) => {
  return <ScrollView style={styles.container}>
      <View style={styles.imgContainer}>
        <ImageBackground style={styles.FcECZKji} source={require("./Pepsi_logo_2014.svg.png")} resizeMode="cover"></ImageBackground>
      </View>

      <View style={styles.descContainer}></View>
      <Button buttonText={"Get started"} />
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  descContainer: {
    paddingHorizontal: 25
  },
  imgContainer: {
    height: 258,
    width: 343,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    alignSelf: "center"
  },
  FcECZKji: {
    width: 169,
    height: 236,
    position: "absolute",
    left: 87,
    top: 60
  }
});

const Button = params => {
  const navigation = useNavigation();
  const btnStyle = {
    backgroundColor: params.outline ? "#fff" : "#000",
    borderColor: params.outline ? "#000" : "#fff",
    borderWidth: 1
  };
  const btnText = {
    color: params.outline ? "#000" : "#fff"
  };
  return <View style={buttonStyles.btnContainer}>
      <Pressable style={[buttonStyles.btn, btnStyle]} onPress={() => {
      navigation.navigate("productListing");
    }}>
        <Text style={[buttonStyles.btnText, btnText]}>{params.buttonText}</Text>
        <View style={styles.childrenContainer}>{params.children}</View>
      </Pressable>
    </View>;
};

const buttonStyles = StyleSheet.create({
  btnContainer: {
    position: 'absolute',
    bottom: '0',
    paddingHorizontal: 40,
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 40,
    backgroundColor: "#ffffff",
    left: 66,
    top: 192
  },
  btn: {
    backgroundColor: "#12D790",
    height: 50,
    width: "100%",
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    elevation: 10,
    flexDirection: "row"
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});
export default Onboarding2;