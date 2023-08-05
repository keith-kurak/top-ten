import { useCallback } from "react";
import { View, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "@rneui/themed";

export const FireSetter = function TopTenItem({
  numFires = 0,
  onUpdateNumFires,
  isEditable,
}) {
  const { theme } = useTheme();

  const onPressFires = useCallback(() => {
    const newNumFires = numFires === 5 ? 0 : numFires + 1;
    onUpdateNumFires(newNumFires);
  }, [onUpdateNumFires, numFires]);

  let fires = [];
  for (let i = 0; i < 5; i++) {
    fires.push(
      <FontAwesome5
        key={i}
        style={{ margin: theme.spacing.sm }}
        name="fire"
        size={25}
        color={i < numFires ? theme.colors.primary : theme.colors.grey0}
      />
    );
  }

  return (
    <Pressable onPress={isEditable ? onPressFires : () => {}}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {fires}
      </View>
    </Pressable>
  );
};
