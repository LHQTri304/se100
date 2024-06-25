import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "../components";
import { colors, fontSizes } from "../constants";

import SinhVien from "./sinhvien/sinhvien";
import PhongDaoTao from "./phongdaotao/phongdaotao";
import Khoa from "./khoa/khoa";

export default function MainScreen({ navigation }) {
  const NAV = navigation.navigate;

  const [focus, setFocus] = useState(1);

  const [LopHoc, setLopHoc] = useState([
    {
      maLopHoc: "SE100.O21.PMCL",
      maMonHoc: "SE100",
      giangVien: "Nguyen Van A",
      danhSachSV: [
        "21522704",
        "21521168",
        "21527234",
        "21522704",
        "21521168",
        "21527234",
        "21522704",
        "21521168",
        "21527234",
        "21522704",
        "21521168",
        "21527234",
        "21522704",
        "21521168",
        "21527234",
      ],
    },
    {
      maLopHoc: "IE303.O22.CNCL",
      maMonHoc: "IE303",
      giangVien: "Vo Van B",
      danhSachSV: [
        "21522704",
        "21521168",
        "21527234",
        "21522704",
        "21521168",
        "21527234",
        "21522704",
        "21521168",
        "21527234",
        "21522704",
        "21521168",
        "21527234",
        "21522704",
        "21521168",
        "21527234",
        "21522704",
        "21521168",
        "21527234",
        "21522704",
        "21521168",
        "21527234",
        "21522704",
        "21521168",
        "21527234",
        "21522704",
        "21521168",
        "21527234",
        "21522704",
        "21521168",
        "21527234",
      ],
    },
    {
      maLopHoc: "SE121.O21.PMCL",
      maMonHoc: "SE121",
      giangVien: "Tran Van C",
      danhSachSV: [
        "21522704",
        "21521168",
        "21527234",
        "21522704",
        "21521168",
        "21527234",
        "21522704",
        "21521168",
        "21527234",
        "21522704",
        "21521168",
        "21527234",
        "21522704",
        "21521168",
        "21527234",
        "21522704",
        "21521168",
        "21527234",
        "21522704",
        "21521168",
        "21527234",
      ],
    },
  ]);
  const [DonDangKy, setDonDangKy] = useState([
    {
      maDonDangKy: "001",
      maMonHoc: "SE121",
      maSinhVien: ["21521168","21521168"],
      giangVienMongMuon: "Nguyễn Văn A",
      trangThaiPhanHoi: "Đã duyệt",
    },
    {
      maDonDangKy: "002",
      maMonHoc: "SE323",
      maSinhVien: ["21522704"],
      giangVienMongMuon: "Lê Văn C",
      trangThaiPhanHoi: "Chờ duyệt",
    },
  ]);
  const [DonTomTat, setDonTomTat] = useState([
    {
      maDonTomTat: "DT001",
      maMonHoc: "S323",
      soLuongSV: 30,
      danhSachSV: '"SV001", "SV002", "SV003", "SV004", "SV005"',
      giangVienMongMuon: "Nguyễn Văn A",
    },
    {
      maDonTomTat: "DT002",
      maMonHoc: "SE122",
      soLuongSV: 25,
      danhSachSV: '"SV006", "SV007", "SV008", "SV009", "SV010"',
      giangVienMongMuon: "Lê Văn C",
    },
  ]);
  const [DetailKhoa, setDetailKhoa] = useState([
    {
      maKhoa: "K01",
      tenKhoa: "Khoa Công nghệ thông tin",
      motaKhoa: "Đào tạo các chuyên ngành về công nghệ thông tin.",
      danhSachGV: ["GV1", "GV2", "GV3"],
    },
    {
      maKhoa: "K02",
      tenKhoa: "Khoa Kinh tế",
      motaKhoa: "Đào tạo các chuyên ngành về kinh tế và quản lý.",
      danhSachGV: ["GV4", "GV5"],
    },
    {
      maKhoa: "K03",
      tenKhoa: "Khoa Khoa học tự nhiên",
      motaKhoa: "Đào tạo các chuyên ngành về toán, lý, hóa, sinh học.",
      danhSachGV: ["GV6", "GV7", "GV8", "GV9"],
    },
    {
      maKhoa: "K04",
      tenKhoa: "Khoa Ngoại ngữ",
      motaKhoa: "Đào tạo các chuyên ngành về ngôn ngữ và văn hóa.",
      danhSachGV: ["GV10", "GV11"],
    },
    {
      maKhoa: "K05",
      tenKhoa: "Khoa Y học",
      motaKhoa: "Đào tạo các chuyên ngành về y khoa và điều dưỡng.",
      danhSachGV: ["GV12", "GV13", "GV14"],
    },
  ]);
  const [GianVien, setGianVien] = useState([
    {
      maGV: "GV001",
      hotenGV: "Nguyễn Văn A",
      namSinh: 1980,
      khoa: "Công nghệ thông tin",
      email: "nguyenvana@example.com",
      tinhTrang: "Hoạt động",
    },
    {
      maGV: "GV002",
      hotenGV: "Trần Thị B",
      namSinh: 1985,
      khoa: "Kinh tế",
      email: "tranthib@example.com",
      tinhTrang: "Hoạt động",
    },
    {
      maGV: "GV003",
      hotenGV: "Lê Văn C",
      namSinh: 1975,
      khoa: "Kỹ thuật",
      email: "levanc@example.com",
      tinhTrang: "Nghỉ hưu",
    },
    {
      maGV: "GV004",
      hotenGV: "Phạm Thị D",
      namSinh: 1982,
      khoa: "Y dược",
      email: "phamthid@example.com",
      tinhTrang: "Hoạt động",
    },
    {
      maGV: "GV005",
      hotenGV: "Hoàng Văn E",
      namSinh: 1990,
      khoa: "Luật",
      email: "hoangvane@example.com",
      tinhTrang: "Hoạt động",
    },
    {
      maGV: "GV006",
      hotenGV: "Đặng Thị F",
      namSinh: 1988,
      khoa: "Ngoại ngữ",
      email: "dangthif@example.com",
      tinhTrang: "Hoạt động",
    },
    {
      maGV: "GV007",
      hotenGV: "Ngô Văn G",
      namSinh: 1983,
      khoa: "Vật lý",
      email: "ngovang@example.com",
      tinhTrang: "Nghỉ hưu",
    },
    {
      maGV: "GV008",
      hotenGV: "Bùi Thị H",
      namSinh: 1992,
      khoa: "Hóa học",
      email: "buithih@example.com",
      tinhTrang: "Hoạt động",
    },
    {
      maGV: "GV009",
      hotenGV: "Vũ Văn I",
      namSinh: 1978,
      khoa: "Sinh học",
      email: "vuvani@example.com",
      tinhTrang: "Nghỉ hưu",
    },
    {
      maGV: "GV010",
      hotenGV: "Phan Thị K",
      namSinh: 1986,
      khoa: "Toán học",
      email: "phanthik@example.com",
      tinhTrang: "Hoạt động",
    },
  ]);

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
        <SinhVien
          LopHoc={LopHoc}
          setDonDangKy={(NEW) => setDonDangKy([...DonDangKy, NEW])}
        />
      ) : focus === 2 ? (
        <PhongDaoTao DonDangKy={DonDangKy} DetailKhoa={DetailKhoa} setDonTomTat={(NEW) => setDonTomTat([...DonTomTat, NEW])}/>
      ) : focus === 3 ? (
        <Khoa DonTomTat={DonTomTat} GianVien={GianVien} setLopHoc={(NEW) => setLopHoc([...LopHoc, NEW])}/>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteContainer,
  },
});
