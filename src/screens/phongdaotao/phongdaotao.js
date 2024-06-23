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
import { colors, fontSizes } from "../../constants";
import fakeData from "../../fakeData";

const { width, height } = Dimensions.get("window");

export default function PhongDaoTao() {
  const [selectedForm, setSelectedForm] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={false}
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

      <View style={styles.leftSide}>
        <Text style={styles.title}>Danh sách đơn đăng ký.</Text>
        <View style={styles.flatListContainer}>
          <View style={styles.header}>
            <Text style={[styles.cell, styles.headerText]}>Số thứ tự</Text>
            <Text style={[styles.cell, styles.headerText]}>Mã sinh viên</Text>
            <Text style={[styles.cell, styles.headerText]}>Môn đăng ký</Text>
            <Text style={[styles.cell, styles.headerText]}>Trạng thái</Text>
          </View>
          <FlatList
            data={fakeData.DonDangKy}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => setSelectedForm(item)}
                style={styles.row}
              >
                <Text style={styles.cell}>{index}</Text>
                <Text style={styles.cell}>{item.maSinhVien}</Text>
                <Text style={styles.cell}>{item.maMonHoc}</Text>
                <Text style={styles.cell}>{item.trangThaiPhanHoi}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        
        <Text style={styles.title}>Danh sách khoa hiện tại.</Text>
        <View style={styles.flatListContainer}>
          <View style={styles.header}>
            <Text style={[styles.cell, styles.headerText]}>Mã Khoa</Text>
            <Text style={[styles.cell, styles.headerText]}>Tên Khoa</Text>
          </View>
          <FlatList
            data={fakeData.Khoa}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => setSelectedDepartment(item)}
                style={styles.row}
              >
                <Text style={styles.cell}>{item.maKhoa}</Text>
                <Text style={styles.cell}>{item.tenKhoa}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>

      <View style={styles.rightSide}>
        <View>
          <Text style={styles.title}>Thông tin chi tiết</Text>
          {selectedForm != null ? (
            <View style={styles.detailContainer}>
              <Text
                style={styles.detailText}
              >{`Mã Đơn Đăng Ký: ${selectedForm.maDonDangKy}`}</Text>
              <Text
                style={styles.detailText}
              >{`Mã Môn Học: ${selectedForm.maMonHoc}`}</Text>
              <Text
                style={styles.detailText}
              >{`Mã Sinh Vien: ${selectedForm.maSinhVien}`}</Text>
              <Text
                style={styles.detailText}
              >{`Giảng Viên Mong Muốn: ${selectedForm.giangVienMongMuon}`}</Text>
              <Text
                style={styles.detailText}
              >{`Trạng Thái Phản Hồi: ${selectedForm.trangThaiPhanHoi}`}</Text>
            </View>
          ) : null}
          {selectedDepartment != null ? (
            <View style={styles.detailContainer}>
              <Text
                style={styles.detailText}
              >{`Mã Khoa: ${selectedDepartment.maKhoa}`}</Text>
              <Text
                style={styles.detailText}
              >{`Tên Khoa: ${selectedDepartment.tenKhoa}`}</Text>
              <Text
                style={styles.detailText}
              >{`Mô tả Khoa: ${selectedDepartment.motaKhoa}`}</Text>
            </View>
          ) : null}
        </View>
        <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Đăng ký mở lớp mới</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    height: '40%',
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
    marginBottom: 10,
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
