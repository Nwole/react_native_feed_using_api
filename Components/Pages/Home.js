import React, { useState, useEffect } from "react";

import { SimpleLineIcons } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
import Spacer from "../Spacer/Spacer";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch("https://aurora-django-app.herokuapp.com/feed?feed_count=0")
      .then((res) => res.json())
      .then((res) => {
        setFeed(res.response);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Colors Show</Text>
      <Spacer height={20} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={searchInput}
          onChangeText={(val) => setSearchInput(val)}
          placeholder="Enter song title or artist name"
        />
      </View>
      <Spacer height={20} />

      <View style={styles.mainPostView}>
        {feed.length < 1 ? (
          <ActivityIndicator size={"large"} color={"orange"} />
        ) : (
          <FlatList
            data={feed}
            keyExtractor={(item, index) => {
              return item.post_id.toFixed();
            }}
            renderItem={({ item, index }) => (
              <View style={styles.postView}>
                <View style={styles.postTitle}>
                  <View style={styles.imageView}>
                    <Image
                      style={styles.artistPhoto}
                      source={{ uri: item.artist_photo }}
                    />
                    <View style={styles.titleView}>
                      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        {item.post_artist}
                      </Text>
                      <Text style={{ fontSize: 11, color: "#989898" }}>
                        {item.post_title}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <SimpleLineIcons
                      name="options-vertical"
                      size={20}
                      color={"#989898"}
                    />
                  </View>
                </View>
                <Image
                  style={styles.coverPhoto}
                  source={{ uri: item.cover_poto }}
                />
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 23,
    fontWeight: "bold",
  },
  inputContainer: {
    height: 45,
    backgroundColor: "lightgrey",
    borderRadius: 20,
    justifyContent: "center",
    alignContent: "center",
  },
  input: {
    fontSize: 16,
    fontWeight: "bold",
    color: "grey",
    flex: 1,
    marginLeft: 15,
  },
  mainPostView: {
    width: "100%",
    marginBottom: 100,
  },
  postView: {
    width: "100%",
    alignItems: "center",
    marginTop: 40,
  },
  postTitle: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  artistPhoto: {
    backgroundColor: "rgba(0,0,0,06)",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  imageView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  titleView: {
    marginLeft: 15,
  },
  coverPhoto: {
    width: "100%",
    height: 200,
    backgroundColor: "rgba(0,0,0,06)",
    marginTop: 20,
    borderRadius: 10,
  },
});
