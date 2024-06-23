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
  TextInput,
} from "react-native";
import { colors, fontSizes } from "../../constants";
import fakeData from "../../fakeData";

const { width, height } = Dimensions.get("window");

export default function SinhVien() {
  const [selectedClass, setSelectedClass] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [subjectCode, setSubjectCode] = useState("");
  const [studentCode, setStudentCode] = useState("");
  const [desiredLecture, setDesiredLecture] = useState("");

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
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Tạo đơn đăng ký mở lớp học mới</Text>

          <TextInput
            style={styles.input}
            placeholder="Mã môn học"
            keyboardType="numeric"
            value={subjectCode}
            onChangeText={setSubjectCode}
          />

          <TextInput
            multiline
            style={styles.input}
            placeholder={`Mã sinh viên đăng ký\n(nếu nhiều sinh viên thì cách nhau bằng dấu ',')`}
            value={studentCode}
            onChangeText={setStudentCode}
          />

          <TextInput
            style={styles.input}
            placeholder="Giảng viên phụ trách mong muốn (không bắt buộc)"
            value={desiredLecture}
            onChangeText={setDesiredLecture}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                // Xử lý logic khi tạo đơn đăng ký
                setModalVisible(false);
              }}
              style={styles.buttonModal}
            >
              <Text style={styles.buttonText}>Xác nhận</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setSubjectCode("");
                setStudentCode("");
                setDesiredLecture("");
                setModalVisible(false);
              }}
              style={[styles.buttonModal, styles.cancelButton]}
            >
              <Text style={styles.buttonText}>Hủy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
            //contentContainerStyle={styles.flatListContainer}
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
    height: "90%",
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
    color: colors.grayObjects,
  },
  //
  modalContainer: {
    marginHorizontal: "auto", // ~= alignSelf: 'center'
    minWidth: 700,
    maxWidth: 1000,
    padding: 16,
    marginTop: "15%",
    borderRadius: 12,
    backgroundColor: colors.whiteContainer,
  },
  modalTitle: {
    fontSize: fontSizes.h4,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 45,
    borderColor: colors.grayBorder,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonModal: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: colors.tertiary,
  },
});
