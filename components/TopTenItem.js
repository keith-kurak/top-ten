import { ListItem, useTheme } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import { FireSetter } from "./FireSetter";

export const TopTenItem = function TopTenItem({
  item,
  onPressEdit,
  onStartDrag,
  isDragging,
}) {
  const { theme } = useTheme();

  return (
    <ListItem
      containerStyle={[
        isDragging && { backgroundColor: theme.colors.grey5 },
        {
          backgroundColor:
            item.rank <= 3 ? theme.colors.grey5 : theme.colors.white,
        },
      ]}
      onPress={onPressEdit}
      disabled={isDragging}
      onLongPress={onStartDrag}
    >
      <ListItem.Content>
        <ListItem.Title>{item.title ? item.title : "-"}</ListItem.Title>
        <FireSetter numFires={item.fireCount} fireSize={10} showOnlyLitFires />
      </ListItem.Content>
      <Ionicons
        color={theme.colors.grey0}
        name="reorder-three-outline"
        size={25}
      />
    </ListItem>
  );
};
