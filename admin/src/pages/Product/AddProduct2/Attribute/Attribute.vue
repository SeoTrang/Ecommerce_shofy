<template lang="">
    <div class="attribute-componnent">
        <div class="box-attribute">
            <div class="row">
                <div class="col-12  attribute">
                        <div class="input-attribute">
                                <v-select
                                v-model="variantSelected"
                                label="Chọn biến thể"
                                :items="variantionData"
                                item-title="name"
                                item-value="id"
                                variant="outlined"
                                
                                
                                ></v-select>
                                <!-- v-model="selectvariation" -->
                        </div>
                </div>

                <div v-for="(item,index) in attributeData" class="col-12 col-lg-6">
                    <v-text-field 
                    :label="item.name" 
                    v-model="fieldData[item.id]"
                    variant="outlined"></v-text-field>
                </div>
                
                <div class="col-12 col-lg-6">
                    <button
                    @click = "handleOpenModelAddAttribute"
                     class="btn btn-success">
                        Thêm thuộc tính mới
                    </button>
                </div>
            </div>

            <div class="action-bottom mt-4">
                <button @click="handleAddOption" class="w-100 btn-lg btn btn-primary pt-2 pb-2">
                    Lưu lại
                </button>
            </div>
        </div>

        
    </div>

    <a-modal
      v-model:open="openModelAddAttribute"
      title="Thêm thuộc tính mới"
      okText="Thêm"
      cancelText="Hủy"
      okType= 'primary'
      @ok="handleAddAttributeOk"

    >
     <div class="mt-3">
        <v-text-field 
        v-model="newAttribute"
        label="Tên thuộc tính mới" 
        variant="outlined"
        ></v-text-field>

     </div>
    </a-modal>
    
</template>
<script setup>
    import { onMounted, ref, watch } from 'vue';
    import { toast } from 'vue3-toastify';
    import VariationAction from '../../../../action/variantAction';
    import AttributeAction from '../../../../action/attributeAction';
    import AttributeValueAction from '../../../../action/attributeValueAction';


    const variantionData = ref([]);
    const attributeData = ref([]);
    const fieldData = ref({});
    const product_id = localStorage.getItem("productId");
    const category_id = localStorage.getItem("categoryId");

    const notify = {
        success: (title) => {
            toast.success(title);
        },
        error: (title) => {
            toast.error(title);
        }
    }

    const resetFieldData = () => {
        // console.log(fieldData);
        for (const key in fieldData.value) {
            // console.log(key);
            // console.log( fieldData.value[key]);
            fieldData.value[key] = null;
        }
    }

    const variantSelected = ref(null);
    async function getData(){
        variantionData.value = await VariationAction.getVariationByProduct(product_id);
        attributeData.value = await AttributeAction.getByCategory(category_id);
    }

    onMounted(() => {
        console.log("onmounted");
        getData();
    })

    watch([variantionData,attributeData], ([newVariationValue, oldVariationValue],[newAttributeValue, oldAttributeValue])=>{
        console.log(variantionData.value);

        console.log(attributeData.value);
    })
    watch(attributeData, (newAttributeValue, oldAttributeValue)=>{
        console.log(attributeData.value);
        let dynamicVars = {};
        attributeData.value.forEach(item => {
            dynamicVars[item.id] = ref(null);
        });

        fieldData.value = dynamicVars;
    })

    const openModelAddAttribute = ref(false);
    const newAttribute = ref(null);
    const handleOpenModelAddAttribute = () => {
        openModelAddAttribute.value = true;
    }
    const handleAddAttributeOk = async () => {
        console.log(newAttribute.value);
        console.log(localStorage.getItem("categoryId"));
        let result = await AttributeAction.create(newAttribute.value,category_id);
        if(!result) return notify.error("Thêm thất bại 😔 ! ");
        openModelAddAttribute.value = false;
        newAttribute.value = null;
        getData();
        return notify.success("Thêm thành công 😊 ! ");
    }
    
    

    const handleAddOption = async () => {
        // console.log(variantSelected.value);
        // console.log(fieldData.value);
        let result =  await AttributeValueAction.create(fieldData.value, variantSelected.value);
        if(!result) return notify.error("Thêm thất bại 😔 ! ");
        // resetFieldData();
        return notify.success("Thêm thành công 😊 ! ");
    }
        
</script>
<style lang="">
    
</style>