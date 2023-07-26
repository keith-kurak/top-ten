import { useCallback } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import DraggableFlatList, {
    ScaleDecorator,
    ShadowDecorator,
    OpacityDecorator,
    RenderItemParams,
} from 'react-native-draggable-flatlist'
import { sortBy } from "lodash";
import { Text, View } from "@/components/Themed";
import { useStore } from "@/stores";

export default function TabOneScreen() {
  const topTen = useStore((state) => state.topTen);
  const updateOrder = useStore((state) => state.updateOrder);

  const renderItem = useCallback(
    ({ item, drag, isActive }: RenderItemParams<any>) => {
      return (
        <ShadowDecorator>
          <ScaleDecorator>
            <OpacityDecorator>
              <TouchableOpacity
                activeOpacity={1}
                onLongPress={drag}
                disabled={isActive}
                style={[
                  { height: 100, alignItems: 'center', justifyContent: 'center'},
                  { backgroundColor: isActive ? "blue" : item.backgroundColor },
                ]}
              >
                <Text>{item.title}</Text>
              </TouchableOpacity>
            </OpacityDecorator>
          </ScaleDecorator>
        </ShadowDecorator>
      );
    },
    []
  );

  const myData = sortBy(topTen, t => t.rank);

  return (
    <View style={styles.container}>
      <DraggableFlatList
        data={myData}
        onDragEnd={({ data }) => updateOrder(data)}
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
