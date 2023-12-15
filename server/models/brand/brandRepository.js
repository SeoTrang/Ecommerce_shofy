const Brand = require('./Brand');

const BrandRepository = {
    create: async (data) => {
        try {
            await Brand.create(data);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getAll: async () => {
        try {
            const result = await Brand.findAll();
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getOne: async(id) => {
        try {
            const result = await Brand.findByPk(id);
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    getByCategoryId: async (categoryId)=>{
        try {
            const result = await Brand.findAll(
                {
                    where:{
                        category_id: categoryId
                    }
                }
            );
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    update: async(id,data)=>{
        try {
            const [updated] = await Brand.update(data, { where: { id: id } });
            if (updated === 1) {
                return true;
            } else {
                console.error('Không tìm thấy nhãn hiệu hoặc lỗi khi cập nhật.');
                throw new Error('Không tìm thấy nhãn hiệu hoặc lỗi khi cập nhật.');
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    delete: async(id) => {
        try {
            const result = await Brand.destroy({ where: { id: id } });
            if (result === 1) {
                return true;
              } else {
                console.error('Không tìm thấy nhãn hiệu hoặc lỗi khi xóa.');
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

module.exports = BrandRepository;