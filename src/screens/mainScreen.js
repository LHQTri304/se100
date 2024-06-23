import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Header } from "../components";
import { colors, fontSizes } from "../constants";

import SinhVien from "./sinhvien/sinhvien";
import PhongDaoTao from "./phongdaotao/phongdaotao";

export default function MainScreen({ navigation }) {
  const NAV = navigation.navigate;

  const [focus, setFocus] = useState(1);

  return (
    <View style={styles.container}>
      <Header
        focus={focus}
        onPress1={() => setFocus(1)}
        onPress2={() => setFocus(2)}
        onPress3={() => setFocus(3)}
        onPressUsername={() => NAV("Login")}
      />
      {focus === 1 ? (
        <SinhVien />
      ) : focus === 2 ? (
        <PhongDaoTao />
      ) : focus === 3 ? (
        <View style={{ height: 10, width: 10, backgroundColor: "lime" }} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteContainer,
  },
});
