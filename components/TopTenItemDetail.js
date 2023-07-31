import { ListItem } from "@rneui/themed";

export const TopTenItemDetail = function TopTenItemDetail({ item }) {
  return <ListItem
    >
      <ListItem.Content>
        <ListItem.Title>{item.title ? item.title : '-'}</ListItem.Title>
        <ListItem.Subtitle>Description here</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
};
