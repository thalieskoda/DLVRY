import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Hotels = ({ hotel }) => {
  const router = useRouter();
  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/hotel",
          params: {
            id: hotel.id,
            name: hotel.name,
            adress: hotel.adress,
            smalladress: hotel.smalladress,
            cuisines: hotel.cuisines,
            aggregate_rating: hotel.aggregate_rating,
          },
        })
      }
      style={{
        marginHorizontal: 6,
        marginVertical: 12,
        borderRadius: 20,
        backgroundColor: "white",
      }}>
      <Image
        style={{
          width: "100%",
          aspectRatio: 6 / 4,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
        source={{ uri: hotel?.featured_image }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <View style={{ paddingHorizontal: 3, paddingVertical: 4 }}>
          <Text>{hotel?.name}</Text>
          <Text>cuisine</Text>
          <Text>{hotel?.time}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#006a4e",
            borderRadius: 4,
            paddingHorizontal: 4,
            paddingVertical: 5,
            marginRight: 10,
          }}>
          <Text>{hotel.aggregate_rating}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Hotels;

const styles = StyleSheet.create({});
