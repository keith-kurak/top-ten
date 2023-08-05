import { ListItem } from "@rneui/themed";
import { FireSetter } from "./FireSetter";

export const TopTenItem = function TopTenItem({ item, onPressEdit }) {
  return <ListItem
      onPress={onPressEdit}
    >
      <ListItem.Content>
        <ListItem.Title>{item.title ? item.title : '-'}</ListItem.Title>
        <FireSetter numFires={item.fireCount} fireSize={12.5} showOnlyLitFires />
      </ListItem.Content>
    </ListItem>
};
