import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";
import { colors, fontSizes } from "../constants";
import HeaderItems from "./HeaderItems";

export default function Header({ focus, onPress1, onPress2, onPress3 }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.uit}>UIT</Text>
        <Text style={styles.space}>–</Text>
        <Text style={styles.dkml}>ĐKML</Text>

        <HeaderItems text={'Sinh viên'} focus={focus===1} onPress={onPress1}/>
        <HeaderItems text={'Phòng đào tạo'} focus={focus===2} onPress={onPress2}/>
        <HeaderItems text={'Giáo vụ khoa'} focus={focus===3} onPress={onPress3}/>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.username}>Lý Huỳnh Quang Trí</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "23%",
    paddingHorizontal: "1%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  uit: { fontFamily: 'arial',fontWeight: "bold", fontSize: fontSizes.h4, color: colors.uit },
  space: { fontFamily: 'tahoma',fontSize: fontSizes.h4, color: colors.space },
  dkml: { fontFamily: 'arial',fontWeight: "bold", fontSize: fontSizes.h4, color: colors.dkml, marginRight: 17, },
  username: {
    fontFamily: 'arial',
    fontWeight: "bold",
    fontSize: fontSizes.h6*1.1,
    color: colors.black,
  },
});
