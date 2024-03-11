import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

import { Ionicons } from "@expo/vector-icons";

const hotel = () => {
  const params = useLocalSearchParams();
  console.log('THIS IS THE PARAMS', params, `${params.name}`);
  
  const router = useRouter();

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View
        style={{
          marginTop: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <Ionicons
          onPress={() => router.back()}
          name="arrow-back"
          style={{ padding: 5 }}
          size={24}
          color="black"
        />
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            paddingHorizontal: 14,
          }}>
          <Ionicons name="camera-outline" size={24} color="black" />
          <Ionicons name="bookmark-outline" size={24} color="black" />
          <Ionicons name="share-outline" size={24} color="black" />
        </View>
      </View>
      <View>
        <Text>{params?.name}</Text>
      </View>
    </ScrollView>
  );
};

export default hotel;

const styles = StyleSheet.create({});
