import VariationAPI from "../services/NodeAPI/VariationAPI";

const VariationAction = {
    getVariationByProduct: async (product_id) => {
        let result = await VariationAPI.getVariantionByProduct(product_id);
        if(result) return result;
        return false;
    }
}

export default VariationAction;