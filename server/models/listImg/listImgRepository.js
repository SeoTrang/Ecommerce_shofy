const ListImg = require("./listImg");


const ListImgRepository = {
    create: async (data) => {
        try {
            await ListImg.create(data);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getAll: async () => {
        try {
            const result = await ListImg.findAll();
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getByVariantion:async (variantion_id) => {
        try {
            const result = await ListImg.findAll({
                where:{
                    variation_id	: variantion_id
                },
                // logging: true
            });
            // console.log(result);
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getOne: async(id) => {
        try {
            const result = await ListImg.findByPk(id);
            if(result) return result;
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    getByColorId: async(id) => {
        try {
            const result = await ListImg.findAll(
                {
                    where:{
                        ColorId: id
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
            const [updated] = await ListImg.update(data, { where: { id: id } });
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
            const result = await ListImg.destroy({ where: { id: id } });
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

module.exports = ListImgRepository;