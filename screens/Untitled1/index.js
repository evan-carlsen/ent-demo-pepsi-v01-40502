import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";

const Onboarding2 = ({
  route
}) => {
  const {
    product
  } = route.params || {};
  return <ScrollView style={styles.container}>
      <View style={styles.imgContainer}>
        <ImageBackground style={styles.FcECZKji} source={require("./Pepsi_logo_2014.svg.png")} resizeMode="cover"></ImageBackground>
      </View>
      <Text style={styles.title}>Onboarding</Text>
      <View style={styles.descContainer}>
        <Text style={styles.desc}>
          There is no better advertisement campaign that’s is low and also
          successful at the same time. Great business ideas.
        </Text>
      </View>
      <Button buttonText={"Get started"} />
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  title: {
    fontSize: 30,
    marginHorizontal: 25,
    marginTop: 10,
    marginBottom: 10
  },
  descContainer: {
    paddingHorizontal: 25
  },
  desc: {
    color: "#757575",
    marginBottom: 5
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
    left: 87
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
    paddingHorizontal: 40,
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 40,
    backgroundColor: "#ffffff"
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