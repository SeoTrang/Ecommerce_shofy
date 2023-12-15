const VariationService = require("../services/variationService");

const VariationController = {
    create: async (req,res) => {
        try {
            console.log(req.body.data);
            const data = req.body.data || null;
            if(!data) return res.status(400).json('missing data');
            const result  = await VariationService.create(data);
            if(result) return res.status(200).json(result);
            return res.status(500).json({ error: 'lỗi khi thêm vào databases.' });
        } catch (error) {
            console.log(error);
            return res.status(500).json('server error',error.message);
        }
    },

    getByProduct: async (req, res) => {
        try {
            const product_id = req.params.product_id || null;
            if(!product_id) return res.status(400).json('missing data');
            let result = await VariationService.getByProduct(product_id);
            if(!result) return res.status(404).json('not found');
            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
            return res.status(500).json('server error',error.message);
        }
    }
}

module.exports = VariationController;