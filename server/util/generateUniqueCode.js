var randomstring = require("randomstring");

// const randomCodeString = randomstring.generate({
//     charset: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
//     length: 12
//   });
// console.log(randomCodeString);

const generateUniqueCode = () => {
    // Tạo mã ngẫu nhiên chỉ gồm chữ cái hoa và chữ số có độ dài 8
    // const randomCode = cryptoRandomString({ length: 8, characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' });
    const randomCodeString = randomstring.generate({
        charset: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        length: 12
      });


    return randomCodeString;
}

module.exports = generateUniqueCode;