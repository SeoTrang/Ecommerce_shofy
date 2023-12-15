import AttributeAPI from "../services/NodeAPI/AttributeAPI";

const AttributeAction = {
    getByCategory: async (category_id) => {
        const result = await AttributeAPI.GetByCategory(category_id);
        if(result) return result;
        return false;
    },
    create: async (name,category_id) => {
        let data = {
            name : name,
            category_id : category_id
        }

        const result = await AttributeAPI.Create(data);
        if(result) return result;
        return false;
    }
}

export default AttributeAction;