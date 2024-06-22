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
} from "react-native";
import { Header } from "../components";
import { colors, fontSizes } from "../constants";
import fakeData from "../fakeData";
import { TouchableOpacity } from "react-native-web";
import { flushSync } from "react-dom";

const { width, height } = Dimensions.get("window");

export default function MainScreen({ navigation }) {
  const NAV = navigation.navigate;

  const [focus, setFocus] = useState(1);
  const [selectedClass, setSelectedClass] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            focus === 1
              ? null
              : focus === 2
              ? "cyan"
              : focus === 3
              ? "lime"
              : null,
        },
      ]}
    >
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.buttonText}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Header
        focus={focus}
        onPress1={() => setFocus(1)}
        onPress2={() => setFocus(2)}
        onPress3={() => setFocus(3)}
        onPressUsername={() => NAV("Login")}
      />

      <View style={styles.mainViewContainer}>
        <View style={styles.leftSide}>
          <Text style={styles.title}>Danh sách lớp đã tồn tại.</Text>

          <View style={styles.flatListContainer}>
            <View style={styles.header}>
              <Text style={[styles.cell, styles.headerText]}>Mã Lớp Học</Text>
              <Text style={[styles.cell, styles.headerText]}>Mã Môn Học</Text>
              <Text style={[styles.cell, styles.headerText]}>Giảng Viên</Text>
              <Text style={[styles.cell, styles.headerText]}>Số Lượng SV</Text>
            </View>
            <FlatList
              data={fakeData.LopHoc}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => setSelectedClass(item)}
                  style={styles.row}
                >
                  <Text style={styles.cell}>{item.maLopHoc}</Text>
                  <Text style={styles.cell}>{item.maMonHoc}</Text>
                  <Text style={styles.cell}>{item.giangVien}</Text>
                  <Text style={styles.cell}>{item.danhSachSV.length}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.listContainer}
            />
          </View>
        </View>
        <View style={styles.rightSide}>
          <View>
            <Text style={styles.title}>Thông tin chi tiết</Text>
            {selectedClass != null ? (
              <View style={styles.detailContainer}>
                <Text
                  style={styles.detailText}
                >{`Mã Lớp: ${selectedClass.maLopHoc}`}</Text>
                <Text
                  style={styles.detailText}
                >{`Mã Môn: ${selectedClass.maMonHoc}`}</Text>
                <Text
                  style={styles.detailText}
                >{`Giảng Viên: ${selectedClass.giangVien}`}</Text>
                <Text
                  style={styles.detailText}
                >{`Số Lượng SV: ${selectedClass.danhSachSV.length}`}</Text>
              </View>
            ) : null}
          </View>
          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.buttonText}>Đăng ký mở lớp mới</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteContainer,
  },
  mainViewContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  leftSide: {
    width: "75%",
    height: height - 63,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  rightSide: {
    width: "20%",
    height: height - 63,
    padding: 10,
  },
  title: {
    fontSize: fontSizes.h3 * 1.1,
    fontWeight: "bold",
    marginVertical: 8,
    marginLeft: 10,
  },
  //
  button: {
    marginVertical: 50,
    borderRadius: 12,
    padding: 10,
    backgroundColor: colors.secondary,
  },
  buttonText: {
    fontSize: fontSizes.h4,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.white,
  },
  //
  flatListContainer: {
    backgroundColor: colors.white,
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  header: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.grayBorder,
    paddingBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.grayBorder,
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 5,
  },
  headerText: {
    fontWeight: "bold",
  },
  //
  detailContainer: {
    backgroundColor: colors.white,
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  detailText: {
    fontSize: 16,
    color: "#333",
  },
});
