const Attribute = require("./attribute");

const AttributeRepository = {
    create: async (data) => {
        try {
            await Attribute.create(data);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getAll: async () => {
        try {
            const result = await Attribute.findAll();
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getOne: async(id) => {
        try {
            const result = await Attribute.findByPk(id);
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getByAttributeName: async (name)=>{
        try {
            const result = await Attribute.findAll(
                {
                    where:{
                        Name: name
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
            const [updated] = await Attribute.update(data, { where: { id: id } });
            if (updated === 1) {
                return true;
            } else {
                console.error('Không tìm thấy lỗi khi cập nhật.');
                throw new Error('Không tìm thấy lỗi khi cập nhật.');
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    delete: async(id) => {
        try {
            const result = await Attribute.destroy({ where: { id: id } });
            if (result === 1) {
                return true;
              } else {
                console.error('Không tìm thấy hoặc lỗi khi xóa.');
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getByCategoryId: async (id)=>{
        try {
            const result = await Attribute.findAll(
                {
                    where:{
                        CategoryId: id
                    },
                },
               
            );
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
}

module.exports = AttributeRepository;