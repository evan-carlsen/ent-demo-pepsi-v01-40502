import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, FlatList, Image, Pressable } from "react-native";

const ProductListingScreen = params => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts([{
      id: 1,
      name: "Pepsi 24 pack (12 0z)",
      status: true,
      isFavorite: false,
      image: require("./assets/24-pack.jpeg")
    }, {
      id: 2,
      name: "Pepsi 15 pack (12 oz)",
      status: false,
      isFavorite: true,
      image: require("./assets/15-pack.jpeg")
    }, {
      id: 3,
      name: "Pepsi 20 oz",
      status: true,
      isFavorite: false,
      image: require("./assets/20-oz.jpeg")
    }, {
      id: 4,
      name: "Pepsi Wild Cherry",
      status: false,
      isFavorite: true,
      image: require("./assets/20-oz-wild-cherry.jpeg")
    }, {
      id: 5,
      name: "Mountain Dew 2 Liter",
      status: true,
      isFavorite: false,
      image: require("./assets/mountain-dew-2-liter.jpeg")
    }, {
      id: 6,
      name: "Mountain Dew 12 pack (12 oz)",
      status: false,
      isFavorite: true,
      image: require("./assets/mountain-dew-12-pack.jpeg")
    }]);
  }, []);
  return <View style={styles.container}>
      <TabView tabTitles={["All", "Best Products"]} selected={0} />
      <View style={styles.productsContainer}>
        <FlatList data={products} numColumns={2} keyExtractor={item => item.id.toString()} renderItem={({
        item
      }) => <Pressable><Product product={item} /></Pressable>} columnWrapperStyle={{
        justifyContent: "space-around"
      }} showsVerticalScrollIndicator={false} />
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  productsContainer: {
    paddingHorizontal: 20
  }
});
export default ProductListingScreen;

const TabView = ({
  tabTitles,
  selected
}) => {
  return <View style={tabViewStyles.paletteContainer}>
      {tabTitles.map((title, index) => <View style={index === selected ? tabViewStyles.selected : tabViewStyles.unSelected} key={index}>
          <Text>{title}</Text>
        </View>)}
    </View>;
};

const tabViewStyles = StyleSheet.create({
  paletteContainer: {
    width: "70%",
    height: 48,
    backgroundColor: "#F1F1F1",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 6,
    marginVertical: 10,
    marginHorizontal: 20
  },
  selected: {
    borderRadius: 10,
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "gray",
    elevation: 10
  },
  unSelected: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1F1F1",
    borderRadius: 10
  }
});

const Product = ({
  product
}) => {
  const availability = {
    color: product.status ? "#12D790" : "#EA4335",
    fontSize: 12,
    fontWeight: "bold"
  };
  return <View style={productStyles.container}>
      <View style={productStyles.imageContainer}>
        <Image source={product.image} style={productStyles.productImage} />

        <Image source={product.isFavorite ? require("./assets/isFavouriteIcon.png") : require("./assets/favIcon.png")} style={productStyles.favIcon} />
      </View>
      <View style={productStyles.descriptionContainer}>
        <Text style={productStyles.bold}>{product.name}</Text>
        <View style={productStyles.availabilityTextContainer}>
          <Text style={productStyles.availabilityText}>Purchase: </Text>
          <Text style={availability}>
            {product.status ? "Available" : "Not available"}
          </Text>
        </View>
      </View>
    </View>;
};

const productStyles = StyleSheet.create({
  container: {
    height: 240,
    width: 160,
    margin: 10
  },
  imageContainer: {
    height: 180,
    width: 160,
    borderRadius: 10
  },
  productImage: {
    height: "100%",
    width: "100%",
    borderRadius: 10
  },
  descriptionContainer: {
    justifyContent: "center",
    padding: 10
  },
  availabilityTextContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  availabilityText: {
    color: "#7C7C7C",
    fontSize: 12,
    fontWeight: "bold"
  },
  bold: {
    fontWeight: "bold"
  },
  favIcon: {
    position: "absolute",
    right: 10,
    top: 10
  }
});