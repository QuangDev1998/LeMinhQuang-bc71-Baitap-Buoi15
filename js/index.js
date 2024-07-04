// bài tập 1

function ex1() {
  var diemChuan = document.getElementById("diemChuan").value * 1;
  var chonKhuVuc = document.getElementById("chonkhuvuc").value * 1;
  var chonDoiTuong = document.getElementById("chondoituong").value * 1;
  var diemMonThu1 = document.getElementById("diemMonThu1").value * 1;
  var diemMonThu2 = document.getElementById("diemMonThu2").value * 1;
  var diemMonThu3 = document.getElementById("diemMonThu3").value * 1;

  var tongDiem = 0;
  tongDiem = Math.round(
    diemMonThu1 + diemMonThu2 + diemMonThu3 + chonKhuVuc + chonDoiTuong
  );
  console.log(tongDiem);
  if (tongDiem >= diemChuan) {
    document.getElementById(
      "Result"
    ).innerHTML = `Bạn đã đậu - Tổng Diểm : ${tongDiem}`;
  } else {
    document.getElementById(
      "Result"
    ).innerHTML = `Bạn đã rớt - Tổng Điểm : ${tongDiem}`;
  }
}

//  bài tập 2
function ex2() {
  var tenKhachHang = document.getElementById("tenKhachHang").value;
  var soKw = document.getElementById("soKw").value * 1;

  var tinhTienDien = 0;
  if (!isNaN(tenKhachHang)) {
    alert("VUI LÒNG NHẬP TÊN KHÁCH HÀNG");
    document.getElementById("tenKhachHang").value = "";
    return;
  } else if (!isNaN(soKw)) {
    alert("VUI LÒNG NHẬP SỐ KW");
    document.getElementById("soKw").value = "";
    return;
  }

  if (soKw <= 50) {
    tinhTienDien = soKw * 500;
  } else if (soKw < 100) {
    tinhTienDien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw < 200) {
    tinhTienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw < 350) {
    tinhTienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    tinhTienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }
  document.getElementById(
    "tinhTienDien"
  ).innerHTML = `Tên : ${tenKhachHang} <br>
   Tiền Điện : ${tinhTienDien.toLocaleString()}`;
}

//  bài tập 3

function ex3() {
  var hoTen = document.getElementById("nhapHoTen").value;
  var tongThuNhapNam = document.getElementById("tongThuNhapNam").value * 1;
  var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;

  var thuNhapChiuThue = 0;
  var thueThuNhapCaNhan = 0;

  thuNhapChiuThue = tongThuNhapNam - 4e+6 - soNguoiPhuThuoc * 1600000;
  if (thuNhapChiuThue <= 60e+6) {
    thueThuNhapCaNhan = thuNhapChiuThue * (5 / 100);
  } else if (60e+6 < thuNhapChiuThue && thuNhapChiuThue <= 120e+6) {
    thueThuNhapCaNhan = thuNhapChiuThue * (10 / 100);
  } else if (120e+6 < thuNhapChiuThue && thuNhapChiuThue <= 210e+6) {
    thueThuNhapCaNhan = thuNhapChiuThue * (15 / 100);
    console.log(thueThuNhapCaNhan);
  } else if (210e+6 < thuNhapChiuThue && thuNhapChiuThue <= 384e+6) {
    thueThuNhapCaNhan = thuNhapChiuThue * (20 / 100);
  } else if (384e+6 < thuNhapChiuThue && thuNhapChiuThue <= 624e+6) {
    thueThuNhapCaNhan = thuNhapChiuThue * (25 / 100);
  } else if (624e+6 < thuNhapChiuThue && thuNhapChiuThue <= 960e+6) {
    thueThuNhapCaNhan = thuNhapChiuThue * (30 / 100);
  } else {
    thueThuNhapCaNhan = thuNhapChiuThue * (35 / 100);
    console.log(thueThuNhapCaNhan)
  }

  document.getElementById("tinhTienThue").innerHTML = `Họ Tên : ${hoTen} 
  <br>
  Tiền Thuế Thu Nhập Cá Nhân : ${thueThuNhapCaNhan.toLocaleString()
    } `;
}


function toggleConnectionsField() {
  var customerType = document.getElementById("customerType").value;
  var connectionsField = document.getElementById("connectionsField");
  if (customerType === "Business") {
    connectionsField.classList.remove("hidden");
  } else {
    connectionsField.classList.add("hidden");
  }
}

function calculateFee() {
  var customerType = document.getElementById("customerType").value;
  var premiumChannels = parseInt(document.getElementById("premiumChannels").value);
  var fee = 0;

  if (customerType === "Residential") {
    fee = 4.5 + (20.5 + 7.5 * premiumChannels);
  } else if (customerType === "Business") {
    var connections = parseInt(document.getElementById("connections").value);
    fee = 15 + 75; // Phí cơ bản + trọn gói 75$ cho 10 kết nối đầu tiên
    if (connections > 10) {
      fee += (connections - 10) * 5;
    }
    fee += 50 * premiumChannels; // 50$ cho mỗi kênh cao cấp
  }

  document.getElementById("result").innerText = "Tổng phí: $" + fee.toFixed(2);
}