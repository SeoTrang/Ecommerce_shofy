const CartItem = require("./CartItem");

const CartItemRepository = {
    create: async (data) => {
        try {
            let result = await CartItem.create(data);
            if(result) return true;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    update: async (data,id) => {
        try {
            const [updated] = await CartItem.update(data, { where: { id: id } });
            if (updated === 1) {
                return true;
            } else {
                console.error('Không tìm thấy CartItem hoặc lỗi khi cập nhật.');
                throw new Error('Không tìm thấy CartItem hoặc lỗi khi cập nhật.');
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    delete: async (id) => {
        try {
            const result = await CartItem.destroy({ where: { id: id } });
            if (result === 1) {
                return true;
              } else {
                console.error('Không tìm thấy CartItem hoặc lỗi khi xóa.');
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }

}

module.exports = CartItemRepository;