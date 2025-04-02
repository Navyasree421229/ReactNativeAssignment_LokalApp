
import { View, Text, StyleSheet, ActivityIndicator , ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";

export default function JobDetails() {
  const { job } = useLocalSearchParams();
  const jobData = JSON.parse(job); 

  if (!jobData) {
    return <Text style={styles.error}>Job details not found</Text>;
  }

  return (
    <ScrollView style={styles.scrollContainer}>
    <View style={styles.container}>

        <Text style={styles.place}>id: {jobData.id}</Text>
        <Text style={styles.title}>Title: {jobData.title}</Text>
        <Text style={styles.place}>type: {jobData.type}</Text>
        <Text style={styles.place}>Place: {jobData.primary_details?.Place}</Text>
        <Text style={styles.place}>Salary: {jobData.primary_details?.Salary}</Text>
        <Text style={styles.place}>Job_Type: {jobData.primary_details?.Job_Type}</Text>
        <Text style={styles.place}>Experience: {jobData.primary_details.Experience}</Text>
        <Text style={styles.place}>Fees_Charged: {jobData.primary_details.Fees_Charged}</Text>
        <Text style={styles.place}>Qualification: {jobData.primary_details?.Qualification}</Text>
        <Text style={styles.text}>Job Type: {jobData.job_type}</Text>
        <Text style={styles.text}>Job Category ID: {jobData.job_category_id}</Text>
        <Text style={styles.text}>Qualification: {jobData.qualification}</Text>
        <Text style={styles.text}>Experience: {jobData.experience}</Text>
        <Text style={styles.text}>Shift Timing: {jobData.shift_timing}</Text>
        <Text style={styles.text}>Job Role ID: {jobData.job_role_id}</Text>
        <Text style={styles.text}>Salary Max: {jobData.salary_max}</Text>
        <Text style={styles.text}>Salary Min: {jobData.salary_min}</Text>
        <Text style={styles.text}>City Location: {jobData.city_location}</Text>
        <Text style={styles.text}>Locality: {jobData.locality}</Text>
        <Text style={styles.text}>Premium Till: {jobData.premium_till}</Text>
        <Text style={styles.contact}>Contact: {jobData.whatsapp_no}</Text>
        <Text style={styles.company}>Company Name: {jobData.company_name}</Text>
        <Text style={styles.advertiser}>Advertiser ID: {jobData.advertiser}</Text>
        <Text style={styles.buttonText}>Action: {jobData.button_text}</Text>
        <Text style={styles.customLink}>Contact: {jobData.custom_link}</Text>
        <Text style={styles.amount}>Amount: ₹{jobData.amount}</Text>
        <Text style={styles.views}>Total Views: {jobData.views}</Text>
        <Text style={styles.shares}>Total Shares: {jobData.shares}</Text>
        <Text style={styles.fbShares}>Facebook Shares: {jobData.fb_shares}</Text>
        <Text style={styles.bookmarked}>
          Bookmarked: {jobData.is_bookmarked ? "Yes" : "No"}
        </Text>
        <Text style={styles.applied}>
          Applied: {jobData.is_applied ? "Yes" : "No"}
        </Text>
        <Text style={styles.owner}>
          Job Owner: {jobData.is_owner ? "Yes" : "No"}
        </Text>
        <Text style={styles.updatedOn}>
          Last Updated: {new Date(jobData.updated_on).toLocaleString()}
        </Text>

    </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  company: {
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  salary: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postedDate: {
    fontSize: 14,
    fontStyle: "italic",
    marginBottom: 5,
  },
  requirements: {
    fontSize: 14,
    marginTop: 10,
  },
  error: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    marginTop: 50,
  },
});
