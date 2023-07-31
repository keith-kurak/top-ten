import { ScrollView } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { useStore } from "@/stores";
import { TopTenItemDetail } from "@/components/TopTenItemDetail";

export default function ItemScreen() {
  const { id } = useLocalSearchParams();

  const topTen = useStore((state) => state.topTen);

  const topTenItem = topTen.find((t) => t.id == id);

  return (
    <ScrollView>
      <Stack.Screen options={{ title: topTenItem.title }} />
      <TopTenItemDetail item={topTenItem} />
    </ScrollView>
  );
}
