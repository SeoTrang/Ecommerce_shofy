const User = require("./user");


const UserRepository = {
    register: async (data) => {
        try {
            const result = await User.create(data);
            // console.log(result);
            if(result?.id) return true;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    findUserByEmail: async (Email) => {
        try {
          const user = await User.findOne({
            where:{
                Email: Email
            }
          });
          if (user) {
            return user;
          } else {
            console.error('Không tìm thấy người dùng với ID đã cho.');
            return null;
          }
        } catch (error) {
          console.error('Lỗi khi tìm người dùng theo ID:', error);
          return null;
        }
    },
    getOne: async (id) => {
      try {
        const user = await User.findByPk(id);
        if (user) {
          return user;
        } else {
          console.error('Không tìm thấy người dùng với ID đã cho.');
          return null;
        }
      } catch (error) {
        console.error('Lỗi khi tìm người dùng theo ID:', error);
        return null;
      }
  },
}

module.exports = UserRepository;