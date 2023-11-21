function isValidEmail(email) {
    // Biểu thức chính quy để kiểm tra địa chỉ email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Kiểm tra giá trị với biểu thức chính quy
    return emailRegex.test(email);
}

export default isValidEmail;