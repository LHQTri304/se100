import React, { useEffect, useState } from "react";
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

const { width, height } = Dimensions.get("window");

export default function PhongDaoTao({ DonDangKy, DetailKhoa, setDonTomTat }) {
  const [selectedForm, setSelectedForm] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [subjectCode, setSubjectCode] = useState("");
  const [studentQuantity, setStudentQuantity] = useState("");
  const [studentCode, setStudentCode] = useState("");
  const [desiredLecture, setDesiredLecture] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    let danhSachGiangVien = [];
    DonDangKy.forEach((item) => {
      // Kiểm tra điều kiện nếu maMonHoc là SE121
      if (item.maMonHoc === subjectCode) {
            danhSachGiangVien.push(item.giangVienMongMuon);
      }
    });
    setDesiredLecture(danhSachGiangVien.join(", "));
    let danhSachMaSinhVien = [];
    DonDangKy.forEach((item) => {
      // Kiểm tra điều kiện nếu maMonHoc là SE121
      if (item.maMonHoc === subjectCode) {
        // Duyệt qua từng mã sinh viên trong thuộc tính maSinhVien của từng phần tử
        item.maSinhVien.forEach((maSV) => {
          // Kiểm tra xem mã sinh viên đã tồn tại trong danh sách chưa, nếu chưa thì thêm vào
          if (!danhSachMaSinhVien.includes(maSV)) {
            danhSachMaSinhVien.push(maSV);
          }
        });
      }
    });
    setStudentCode(danhSachMaSinhVien.join(", "));
    setStudentQuantity(danhSachMaSinhVien.length)
  }, [subjectCode]);

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Tạo đơn tóm tắt</Text>

          <TextInput
            style={styles.input}
            placeholder="Mã môn học"
            keyboardType="numeric"
            value={subjectCode}
            onChangeText={setSubjectCode}
          />

          <TextInput
            style={styles.input}
            placeholder={`Số lượng sinh viên đăng ký`}
            value={studentQuantity}
            editable={false}
          />

          <TextInput
            multiline
            style={styles.input}
            placeholder={`Danh sách sinh viên đăng ký\n(hệ thống tự lọc và cập nhật theo mã môn học)`}
            value={studentCode}
            editable={false}
          />

          <TextInput
            style={styles.input}
            placeholder="Giảng viên phụ trách mong muốn (nếu có)"
            value={desiredLecture}
            onChangeText={setDesiredLecture}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                // Xử lý logic khi tạo đơn đăng ký
                setDonTomTat({
                  maDonTomTat: "123",
                  maMonHoc: subjectCode,
                  soLuongSV: studentQuantity,
                  danhSachSV: studentCode,
                  giangVienMongMuon: desiredLecture,
              })
                setStatus('')
                setDesiredLecture('')
                setStudentCode('')
                setStudentQuantity('')
                setSubjectCode('')
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
        <Text style={styles.title}>Danh sách đơn đăng ký.</Text>
        <View style={styles.flatListContainer}>
          <View style={styles.header}>
            <Text style={[styles.cell, styles.headerText]}>Số thứ tự</Text>
            <Text style={[styles.cell, styles.headerText]}>Mã sinh viên</Text>
            <Text style={[styles.cell, styles.headerText]}>Môn đăng ký</Text>
            <Text style={[styles.cell, styles.headerText]}>Trạng thái</Text>
          </View>
          <FlatList
            data={DonDangKy}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => setSelectedForm(item)}
                style={styles.row}
              >
                <Text style={styles.cell}>{index + 1}</Text>
                <Text style={styles.cell}>{item.maSinhVien.join(", ")}</Text>
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
            data={DetailKhoa}
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
          <Text style={styles.buttonText}>Tạo Đơn Tóm Tắt</Text>
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
  //*** button ***/
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
  //*** flat list ***/
  flatListContainer: {
    height: "40%",
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
  //*** detail ***/
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
  //*** modal ***/
  modalContainer: {
    marginHorizontal: "auto", // ~= alignSelf: 'center'
    minWidth: 700,
    maxWidth: 1000,
    padding: 16,
    marginTop: "10%",
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
