import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View style={styles.header}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 45,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
