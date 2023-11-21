function formatCurrencyVND(number) {
    // Chuyển đổi số thành chuỗi và xóa dấu phân cách
  const strNumber = String(number).replace(/,/g, '');

  // Kiểm tra xem số nhập vào có phải là một số hợp lệ hay không
  if (isNaN(strNumber)) {
    return 'Không phải là số';
  }

  // Chuyển đổi số thành tiền tệ Việt Nam với định dạng đúng
  return Number(strNumber).toLocaleString('vi-VN');
  }


export default formatCurrencyVND;