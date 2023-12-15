import AttributeValueAPI from "../services/NodeAPI/AttributeValueAPI";


const AttributeValueAction = {
    create: async (props,variant_id)=> {
        console.log(props);
        console.log(variant_id);
        let data = [];
        // [
        //     {
        //         "variation_id": 1,
        //         "attribute_id": 1,
        //         "value": "OLED"
        //     }
        // ]
        for (const key in props) {
            // console.log(key);
            // console.log(props[key]);
            data.push(
                {
                    "variation_id": variant_id,
                    "attribute_id": key,
                    "value": props[key]
                }
            )
        }

        // console.log(data);
        let result = await AttributeValueAPI.Create(data);
        if(result) return result;
        return false;
    }
}

export default AttributeValueAction;