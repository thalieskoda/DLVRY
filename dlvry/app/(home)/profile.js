import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const profile = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 8,
          marginBottom: 15,
        }}>
        <Ionicons name="menu-outline" size={24} color="black" />
        <Text>Settings</Text>
        <Text>Logout</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}>
        <Text>this is an image</Text>
        <View>
          <Text style={{ fontWeight: 500 }}>Thalie Skoda</Text>
          <Text style={{ color: "gray" }}>thalieskoda@hotmail.com</Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <Text>Account</Text>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-evenly",
              height: 300,
            }}>
            <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding:10,
            }}>
              <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems:'center'
            }}>

              <Ionicons name="notifications-outline" size={24}  color="black" style={{marginRight:20, backgroundColor:"blue", borderRadius:20, padding:5}} />
              <Text>Push Notifications</Text>
              </View>
              <Ionicons name="notifications-outline" size={24} color="black" />
            </View>
            <View>
              <Ionicons name="location-outline" size={24} color="black" />
              <Text>Location</Text>
            </View>
            <View>
              <MaterialIcons name="language" size={24} color="black" />
              <Text>Language</Text>
            </View>
            <View>
              <MaterialIcons name="attach-money" size={24} color="black" />
              <Text>Currency</Text>
            </View>
          </View>
        </View>

        <View>
          <Text>More</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({});
