import { Stack } from "expo-router";

export const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="hotel" />
      <Stack.Screen name="cart" />
    </Stack>
  );
};
