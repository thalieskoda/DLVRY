import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Hotels = ({ item }) => {
  return (
    <Pressable style={{marginHorizontal:6, marginVertical:12, borderRadius:20, backgroundColor:"white"}}>
      <Image
        style={{
          width: "100%",
          aspectRatio: 6 / 4,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
        source={{ uri: item.featured_image }}
      />
      <View>
        <View>
            <Text>{item.name}</Text>
            <Text>cuisine</Text>
            <Text>{item.time}</Text>


        </View>
      </View>
    </Pressable>
  );
};

export default Hotels;

const styles = StyleSheet.create({});
