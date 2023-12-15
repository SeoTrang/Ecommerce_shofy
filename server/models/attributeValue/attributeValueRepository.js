const Attribute = require("../attribute/attribute");
const AttributeValue = require("./AttributeValue");

const AttributeValueRepository = {
    create: async (data) => {
        try {
            await AttributeValue.create(data);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getAll: async () => {
        try {
            const result = await AttributeValue.findAll();
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    GetByVariation: async (variation_id) => {
        try {
            const result = await AttributeValue.findAll({
                where:{variation_id: variation_id},
                include:[
                    {
                        model: Attribute
                    }
                ]
            });
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getOne: async(id) => {
        try {
            const result = await AttributeValue.findByPk(id);
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    

    update: async(id,data)=>{
        try {
            const [updated] = await AttributeValue.update(data, { where: { id: id } });
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
            const result = await AttributeValue.destroy({ where: { id: id } });
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
    }
}

module.exports = AttributeValueRepository;