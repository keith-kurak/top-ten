import { ListItem } from "@rneui/themed";

export const TopTenItem = function TopTenItem({ item }) {
  return <ListItem
      onPress={() => {
        console.log("press");
      }}
    >
      <ListItem.Content>
        <ListItem.Title>{item.title ? item.title : '-'}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
};
