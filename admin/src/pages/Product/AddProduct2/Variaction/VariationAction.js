
import { data } from 'jquery';
import VariationAPI from '../../../../services/NodeAPI/VariationAPI';
import ListImgAPI from '../../../../services/NodeAPI/ListImgAPI';
import CombinationAPI from '../../../../services/NodeAPI/CombinationAPI';

const VariationAction = {
    AddVariaction: async (props,product_id)=>{
        // console.log(data?.value);
        // console.log(data);
        const data = {
            name: props.variantName.value,
            SKU: props.SKU.value,
            qty_in_stock: props.qty_in_stock.value,
            import_price: props.import_price.value,
            price: props.price.value,
            sale_price: props.sale_price.value,
            product_id: product_id
        }

        const result = await VariationAPI.create(data);
        if(result) return result;
        console.log(data);
        return false;
    },
    AddListImg: async (props,variation_id)=>{
        console.log(props?.value);
        console.log(variation_id);
        let data = [];
        props.value.forEach((img) => {
            data.push({
                variation_id: variation_id,
                url : img
            })
        });
        const result = await ListImgAPI.Create(data);
        if(result) return result;
    },
    AddCombination: async (props,variation_id)=>{
        let Arrdata = [];
        console.log(props.value);

        for (const key in props.value) {
            // console.log(props.value[key].id);
            Arrdata.push(
                {
                    option_value_id: props.value[key].id,
                    variation_id : variation_id
                }
            )
        }
        console.log(Arrdata);
        const result = true;
        for (let index = 0; index < Arrdata.length; index++) {
            let data = Arrdata[index];
            await CombinationAPI.create(data);
        }

        if(result) return result;
        return false;
    },
}

export default VariationAction;