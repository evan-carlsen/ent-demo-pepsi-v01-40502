import React from "react";
import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";

const ProductDetails = ({
  route
}) => {
  const {
    product
  } = route.params || {}; // const [productDetailss, setProductDetailss] = useState({});

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(3);
  useEffect(() => {// setProductDetailss({
    //   name: "Product name",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta sit bibendum nec tempor consequat consequat pretium. Mollis.",
    //   price: 12.5,
    //   discountedPrice: 10,
    //   caption: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    // });
  }, []);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(1);
    }
  };

  return <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={product?.image} style={styles.logo} />
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.bar} />
        <Text style={styles.title}>{product?.name}</Text>
        <Text style={styles.description}>{product?.description}</Text>

        <View style={styles.counterContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>
              $
              {product?.discountedPrice && product?.discountedPrice?.toFixed(2)}
            </Text>
            <Text style={styles.actualPrice}>
              ${product?.price && product?.price?.toFixed(2)}
            </Text>
          </View>
          <View style={styles.counter}>
            <Pressable style={[styles.counterBtn, styles.decrement]} onPress={() => decrement()}>
              <Image source={require("./assets/minusIcon.png")} style={styles.icon} />
            </Pressable>
            <Text style={styles.counterText}>{quantity}</Text>
            <Pressable style={[styles.counterBtn, styles.increment]} onPress={() => increment()}>
              <Image source={require("./assets/plusIcon.png")} style={styles.icon} />
            </Pressable>
          </View>
        </View>
        <Text style={styles.description}>{product?.caption}</Text>
        <Button buttonText="Confirm" style={styles.button} />
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3F3FA"
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 300
  },
  logo: {
    width: "100%",
    height: 300
  },
  cardContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 40
  },
  bar: {
    height: 6,
    backgroundColor: "#DDDDDD",
    borderRadius: 5,
    width: 60,
    alignSelf: "center",
    marginVertical: 10
  },
  title: {
    fontSize: 20,
    color: "#000",
    marginVertical: 10
  },
  description: {
    fontSize: 14,
    color: "#4E4E4E",
    textAlign: "justify"
  },
  priceText: {
    color: "#121212",
    fontSize: 24,
    fontWeight: "bold"
  },
  actualPrice: {
    fontSize: 16,
    color: "#9A9A9A",
    textDecorationLine: "line-through",
    marginLeft: 10
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  counterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20
  },
  counter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F8F5F2",
    width: 110,
    height: 35,
    borderRadius: 10
  },
  counterBtn: {
    width: 35,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderRadius: 10
  },
  decrement: {
    backgroundColor: "#E1E1E1"
  },
  increment: {
    backgroundColor: "#E84C4F"
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: "contain"
  },
  button: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20
  }
});
export default ProductDetails;

const Button = params => {
  const backgroundColor = params.color || "#000";
  const textColor = params.textColor || "#fff";
  const btnStyle = {
    backgroundColor: backgroundColor,
    borderColor: params.outlineColor || backgroundColor,
    borderWidth: 1
  };
  const btnText = {
    color: textColor
  };
  return <View style={[buttonStyles.btnContainer, params.style]}>
      <View style={!params.hideShadow ? buttonStyles.shadowContainer : null}>
        <Pressable style={[buttonStyles.btn, btnStyle]} onPress={params.onPress}>
          <Text style={[buttonStyles.btnText, btnText]}>
            {params.buttonText}
          </Text>
          <View style={styles.childrenContainer}>{params.children}</View>
        </Pressable>
      </View>
    </View>;
};

const buttonStyles = StyleSheet.create({
  btnContainer: {
    justifyContent: "center"
  },
  shadowContainer: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
    elevation: 10,
    backgroundColor: "#fff",
    borderRadius: 10
  },
  btn: {
    height: 50,
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});