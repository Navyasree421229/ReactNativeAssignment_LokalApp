import { View, FlatList, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Jobitems from "../Jobitems";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Bookmark({ navigation }) {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      loadBookmarks();
    }, [])
  );

  const loadBookmarks = async () => {
    try {
      const storedBookmarks = await AsyncStorage.getItem("bookmarkedJobs");
      setBookmarkedJobs(storedBookmarks ? JSON.parse(storedBookmarks) : []);
    } catch (err) {
      console.warn("Error loading bookmarks:", err);
    }
  };

  const removeBookmark = async (jobId) => {
    try {
      const updatedBookmarks = bookmarkedJobs.filter((job) => job.id !== jobId);
      setBookmarkedJobs(updatedBookmarks);
      await AsyncStorage.setItem("bookmarkedJobs", JSON.stringify(updatedBookmarks));

      navigation.navigate("Job", { refresh: true });
    } catch (err) {
      console.warn("Error removing bookmark:", err);
    }
  };

  return (
    <View style={styles.container}>
      {bookmarkedJobs.length === 0 ? (
        <Text style={styles.noBookmarks}>No Bookmarked Jobs</Text>
      ) : (
        <FlatList
          data={bookmarkedJobs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.jobItem}>
              <Jobitems card={item} index={index} />
              
              <TouchableOpacity onPress={() => removeBookmark(item.id)} style={styles.removeButton}>
                <Ionicons name="trash" size={24} color="red" />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#041f52",
    padding: 20,
    width:"100%"
  },
  noBookmarks: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    marginTop: 20,
  },
  jobItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    backgroundColor: "#1a2a4d",
    padding: 10,
    borderRadius: 5,
    width:'73%'
  },
  removeButton: {
    padding: 10,
  },
});
