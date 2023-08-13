import { useCallback, useState } from "react";
import { View, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme, Text } from "@rneui/themed";
import DatePicker from 'react-native-date-picker'
import { formatDate, jsDateToIsoDate, isoDateToJsDate } from "../utils/dates";

export const DateEditor = function DateEditor({
  date,
  onUpdateDate,
  isEditable,
}) {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Pressable onPress={isEditable ? () => setOpen(true) : () => {}}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesome
            style={{ marginRight: theme.spacing.sm }}
            name="calendar"
            size={25}
            color={theme.colors.grey0}
          />
          <Text>{date ? formatDate(date) : 'No due date'}</Text>
        </View>
        <DatePicker
          modal
          open={open}
          date={isoDateToJsDate(date)}
          onConfirm={(date) => {
            setOpen(false);
            onUpdateDate(jsDateToIsoDate(date));
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </Pressable>
    </>
  );
};
