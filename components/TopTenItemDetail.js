import { useState } from "react";
import { View } from "react-native";
import { ListItem, Button, Input, useTheme } from "@rneui/themed";
import { FireSetter } from "./FireSetter";

export const TopTenItemDetail = function TopTenItemDetail({
  item,
  onUpdateItem,
  onCompleteItem,
  onCancelItem,
}) {
  const [isEditing, setIsEditing] = useState(false);

  if (!isEditing && !item.title) {
    return <EmptyTopTenItem onPressAdd={() => setIsEditing(true)} />;
  }

  if (isEditing) {
    return (
      <EditingTopTenItem
        item={item}
        onPressSave={(updatedItem) => {
          setIsEditing(false);
          onUpdateItem(updatedItem);
        }}
        onPressCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <ViewTopTenItem
      item={item}
      onPressCancel={() => onCancelItem(item)}
      onPressComplete={() => onCompleteItem(item)}
      onPressEdit={() => setIsEditing(true)}
    />
  );
};

function ViewTopTenItem({ item, onPressEdit, onPressComplete, onPressCancel }) {
  return (
    <ListItem>
      <ListItem.Content>
        <ListItem.Title>{item.title ? item.title : "-"}</ListItem.Title>
        <ListItem.Subtitle>{item.notes ? item.notes : "-"}</ListItem.Subtitle>
        <FireSetter numFires={item.fireCount} />
        <ListItem.Content>
          <ButtonRow>
            <Button onPress={onPressEdit}>Edit</Button>
            <Button onPress={onPressComplete}>Complete</Button>
            <Button onPress={onPressCancel}>Cancel</Button>
          </ButtonRow>
        </ListItem.Content>
      </ListItem.Content>
    </ListItem>
  );
}

function EmptyTopTenItem({ onPressAdd }) {
  return (
    <ListItem>
      <ListItem.Content>
        <ListItem.Title>Nothing here yet!</ListItem.Title>
        <ButtonRow>
          <Button onPress={onPressAdd}>Add something</Button>
        </ButtonRow>
      </ListItem.Content>
    </ListItem>
  );
}

function EditingTopTenItem({ item, onPressSave, onPressCancel }) {
  const [editingItem, setEditingItem] = useState(item);
  function updateEditingItem(newValues) {
    console.log("updateEditingItem", newValues)
    setEditingItem({ ...editingItem, ...newValues });
  }

  return (
    <ListItem>
      <ListItem.Content>
        <Input
          placeholder="Title"
          value={editingItem.title}
          onChangeText={(title) => updateEditingItem({ title })}
        />
        <Input
          placeholder="Notes"
          value={editingItem.notes}
          onChangeText={(notes) => updateEditingItem({ notes })}
        />
        <FireSetter
          numFires={editingItem.fireCount}
          onUpdateNumFires={(fireCount) => updateEditingItem({ fireCount })}
          isEditable={true}
        />
        <ButtonRow>
          <Button onPress={() => onPressSave(editingItem)}>Save</Button>
          <Button onPress={onPressCancel}>Cancel</Button>
        </ButtonRow>
      </ListItem.Content>
    </ListItem>
  );
}

function ButtonRow({ children }) {
  const { theme } = useTheme();
  return (
    <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
      {children &&
        children.length &&
        children.map((child, index) => (
          <View
            key={index.toString()}
            style={{
              marginHorizontal: theme.spacing.sm,
              marginTop: theme.spacing.sm,
            }}
          >
            {child}
          </View>
        ))}
    </View>
  );
}
