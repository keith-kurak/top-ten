import { useCallback } from "react";
import { StyleSheet, View, FlatList, Pressable } from "react-native";
import { Stack, router, Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { sortBy } from "lodash";
import { useStore } from "@/stores";
import { TopTenItem } from "../components/TopTenItem";

export default function IndexScreen() {
  const topTen = useStore((state) => state.topTen);

  const renderItem = useCallback(({ item }) => {
    return (
      <TopTenItem item={item} onPressEdit={() => router.push(`/${item.id}`)} />
    );
  }, []);

  const myData = sortBy(topTen, (t) => t.rank);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: `Top ${myData.filter((f) => f.title).length}`,
          headerRight: () => (
            <Link href="/history" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name="ios-time-outline"
                    size={25}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <FlatList
        data={myData}
        keyExtractor={(item, index) => `draggable-item-${item.id}`}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
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
    height: 1,
    width: "80%",
  },
});
