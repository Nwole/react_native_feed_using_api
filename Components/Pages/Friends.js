import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Friends = () => {
  return (
    <View style={styles.header}>
      <Text>Friends</Text>
    </View>
  );
};

export default Friends;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 45,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
