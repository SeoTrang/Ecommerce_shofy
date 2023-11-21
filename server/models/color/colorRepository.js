const Color = require("./color");

const ColorRepository = {
    create: async (data) => {
        try {
            const result = await Color.create(data);
            if(result?.id) return result.id;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getAll: async () => {
        try {
            const result = await Color.findAll();
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getOne: async(id) => {
        try {
            const result = await Color.findByPk(id);
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getByColorName: async (name)=>{
        try {
            const result = await Color.findAll(
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
            const [updated] = await Color.update(data, { where: { id: id } });
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
            const result = await Color.destroy({ where: { id: id } });
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

module.exports = ColorRepository;