import { ScrollView, Text } from "react-native";
import { Stack } from "expo-router";
import { useStore } from "@/stores";

export default function HistoryScreen() {

  return (
    <ScrollView>
      <Stack.Screen options={{ title: 'History' }} />
      <Text>History here</Text>
    </ScrollView>
  );
}
