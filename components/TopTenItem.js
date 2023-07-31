import { ListItem } from "@rneui/themed";

export const TopTenItem = function TopTenItem({ item, onPressEdit }) {
  return <ListItem
      onPress={onPressEdit}
    >
      <ListItem.Content>
        <ListItem.Title>{item.title ? item.title : '-'}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
};
