import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Search = () => {
  return (
    <View style={styles.header}>
      <Text>search</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 45,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
});
