import { useCallback } from "react";
import { ScrollView } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { useStore } from "@/stores";
import { TopTenItemDetail } from "@/components/TopTenItemDetail";

export default function ItemScreen() {
  const { id } = useLocalSearchParams();

  const topTen = useStore((state) => state.topTen);
  const updateItem = useStore((state) => state.updateItem);
  const completeItem = useStore((state) => state.completeItem);
  const cancelItem = useStore((state) => state.cancelItem);

  const topTenItem = topTen.find((t) => t.id == id);

  return (
    <ScrollView>
      <Stack.Screen options={{ title: topTenItem.title }} />
      <TopTenItemDetail
        item={topTenItem}
        onUpdateItem={updateItem}
        onCompleteItem={completeItem}
        onCancelItem={cancelItem}
      />
    </ScrollView>
  );
}
