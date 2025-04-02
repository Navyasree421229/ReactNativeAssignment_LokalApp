import { View, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import Jobitems from "../Jobitems";
import { random_users } from "../../component/api/request";
import { useFocusEffect } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function Job() {
  const [card, setCard] = useState([]); 
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);
  const router = useRouter(); 

  useEffect(() => {
    fetchUsers();
    loadBookmarks();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadBookmarks();
    }, [])
  );

  const fetchUsers = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const res = await random_users(page);
      if (res && res.results.length > 0) {
        setCard((prevData) => [...prevData, ...res.results]);
        setPage((prevPage) => (prevPage === 3 ? 1 : prevPage + 1)); 
      }
    } catch (err) {
      console.warn("Error fetching jobs:", err);
    }
    setLoading(false);
  };

  const loadBookmarks = async () => {
    try {
      const storedBookmarks = await AsyncStorage.getItem("bookmarkedJobs");
      setBookmarkedJobs(storedBookmarks ? JSON.parse(storedBookmarks) : []);
    } catch (err) {
      console.warn("Error loading bookmarks:", err);
    }
  };

  const toggleBookmark = async (job) => {
    try {
      let updatedBookmarks = bookmarkedJobs.some((j) => j.id === job.id)
        ? bookmarkedJobs.filter((j) => j.id !== job.id)  
        : [...bookmarkedJobs, job];  
  
      setBookmarkedJobs(updatedBookmarks);
      await AsyncStorage.setItem("bookmarkedJobs", JSON.stringify(updatedBookmarks));
    } catch (err) {
      console.warn("Error updating bookmarks:", err);
    }
  };
  
  return (
    <View style={styles.container}>
      <FlatList
        data={card}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item, index }) =>
          item?.id ? (
            <View style={styles.jobItem}>
              <TouchableOpacity 
                onPress={() => router.push({ pathname: "../jobDetails", params: { job: JSON.stringify(item) } })} 
                style={{ flex: 1 }}
              >
                <Jobitems card={item} index={index} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => toggleBookmark(item)} style={styles.bookmarkButton}>
                <Ionicons
                  name={bookmarkedJobs.some((j) => j.id === item.id) ? "bookmark" : "bookmark-outline"}
                  size={24}
                  color="gold"
                />
              </TouchableOpacity>
            </View>
          ) : null
        }
        onEndReached={fetchUsers}
        onEndReachedThreshold={0.5} 
        ListFooterComponent={loading ? <ActivityIndicator size="large" color="#fff" /> : null} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#041f52",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  jobItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  bookmarkButton: {
    padding: 10,
  },
});
