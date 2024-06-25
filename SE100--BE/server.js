const express = require("express");
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

// Một route để xử lý dữ liệu từ client
app.post("/data", (req, res) => {
  const data = req.body;
  console.log(data);
  res.send("Data received");
});

// Danh sách các lớp học có sẵn
let lopHocList = [
  {
    maLopHoc: "SE100.O21.PMCL",
    maMonHoc: "SE100",
    giangVien: "Nguyen Van A",
    danhSachSV: ["21522704", "21521168", "21527234","21522704", "21521168", "21527234","21522704", "21521168", "21527234","21522704", "21521168", "21527234","21522704", "21521168", "21527234",],
  },
  {
    maLopHoc: "IE303.O22.CNCL",
    maMonHoc: "IE303",
    giangVien: "Vo Van B",
    danhSachSV: ["21522704", "21521168", "21527234", "21522704", "21521168", "21527234","21522704", "21521168", "21527234","21522704", "21521168", "21527234","21522704", "21521168", "21527234","21522704", "21521168", "21527234","21522704", "21521168", "21527234","21522704", "21521168", "21527234","21522704", "21521168", "21527234","21522704", "21521168", "21527234",],
  },
  {
    maLopHoc: "SE121.O21.PMCL",
    maMonHoc: "SE121",
    giangVien: "Tran Van C",
    danhSachSV: ["21522704", "21521168", "21527234", "21522704", "21521168", "21527234","21522704", "21521168", "21527234","21522704", "21521168", "21527234","21522704", "21521168", "21527234","21522704", "21521168", "21527234","21522704", "21521168", "21527234",],
  },
];

// Route để lấy danh sách các lớp học
app.get("/lop-hoc", (req, res) => {
  res.json(lopHocList);
});

// Route để thêm một lớp học mới
app.post("/lop-hoc", (req, res) => {
  const newLopHoc = req.body;
  console.log(lopHocList)
  console.log(newLopHoc)
  //lopHocList.push(newLopHoc);
  //res.status(201).json(newLopHoc);
});

// Route để lấy thông tin chi tiết của một lớp học theo maLopHoc
app.get("/lop-hoc/:maLopHoc", (req, res) => {
  const maLopHoc = req.params.maLopHoc;
  const lopHoc = lopHocList.find((lh) => lh.maLopHoc === maLopHoc);
  if (lopHoc) {
    res.json(lopHoc);
  } else {
    res.status(404).send("Lớp học không tồn tại");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
