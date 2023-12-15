const CombinationService = require("../services/combinationService");

const CombinationController = {
    create: async (req, res) => {
        try {
            console.log(req.body.data);
            const data = req.body.data || null;
            
            if( !data ) return res.status(400).json('missing data');
            const result = await CombinationService.create(data);
            if(result) return res.status(200).json(result);
            return res.status(500).json({ error: 'lỗi khi thêm vào databases.' });
        } catch (error) {
            console.log(error);
            return res.status(500).json('server error',error.message);
        }
    }
}

module.exports = CombinationController;