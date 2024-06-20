import React, { useState } from "react";
import { Pressable, Text, View, Image, StyleSheet } from "react-native";
import { colors, fontSizes } from "../constants";

export default function HeaderItems({ onPress, focus, text }) {
  const [hover, setHover] = useState(false);

  const getColorContainer = () => {
    return hover ? (focus ? colors.primary : colors.secondary) : null;
  };

  const getColorText = () => {
    return hover ? colors.white : focus ? colors.primary : colors.secondary;
  };

  const getColorUnderline = () => {
    return hover ? colors.white : focus ? colors.primary : null;
  };

  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, { backgroundColor: getColorContainer() }]}
      onHoverIn={() => {
        setHover(true);
      }}
      onHoverOut={() => {
        setHover(false);
      }}
    >
      <Text style={[styles.text, { color: getColorText() }]}>{text}</Text>
      <View
        style={[styles.underline, { backgroundColor: getColorUnderline() }]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 9,
    paddingHorizontal: 16,
    marginHorizontal: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  underline: {
    height: 2,
    width: 30,
    position: "absolute",
    bottom: 3,
  },
  text: {
    fontWeight: "bold",
    fontSize: fontSizes.h6 * 1.05,
  },
});
