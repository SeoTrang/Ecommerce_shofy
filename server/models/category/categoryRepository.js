const Category = require('./category');

const CategoryRepository = {
    create:async (data) => {
        try {
            await Category.create(data);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    getOne:async (id) => {
        try {
            const result = await Category.findByPk(id);
            return result;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getAll: async() => {
        try {
            const result = await Category.findAll();
            return result;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    update: async (id,data) => {
        try {
            const [updated] = await Category.update(data, { where: { id: id } });
            if (updated === 1) {
                return true;
            } else {
                console.error('Không tìm thấy category hoặc lỗi khi cập nhật.');
                throw new Error('Không tìm thấy category hoặc lỗi khi cập nhật.');
            }
        } catch (error) {
            console.error('Lỗi khi cập nhật:', error);
            return false;
        }
    },

    delete: async(id) => {
        try {
            const result = await Category.destroy({ where: { id: id } });
            if (result === 1) {
                return true;
              } else {
                console.error('Không tìm thấy category hoặc lỗi khi xóa.');
                return false;
            }
        } catch (error) {
            console.error('Lỗi khi cập nhật:', error);
            return false;
        }
    }
}


module.exports = CategoryRepository;