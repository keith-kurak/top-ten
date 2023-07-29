import { useCallback } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { sortBy } from "lodash";
import { useStore } from "@/stores";
import { TopTenItem } from "../components/TopTenItem";

export default function IndexScreen() {
  const topTen = useStore((state) => state.topTen);

  const renderItem = useCallback(({ item }) => {
    return <TopTenItem item={item} />;
  }, []);

  const myData = sortBy(topTen, (t) => t.rank);

  return (
    <View style={styles.container}>
      <FlatList
        data={myData}
        keyExtractor={(item, index) => `draggable-item-${item.id}`}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
