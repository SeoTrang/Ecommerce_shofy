<template lang="">
    <div class="option-component">
        <div class="box-option">
            <div class="option-items">
                <div class="option-item">
                    <div class="row">
                        <div class="col-12 col-lg-6 option">
                            <div class="input-option">
                                    <v-select
                                    label="Chọn option"
                                    :items="optionDatas"
                                    variant="outlined"
                                    item-title="name"
                                    item-value="id" 
                                    v-model="optionSelected"
                                    ></v-select>
                                    <!-- v-model="selectOption" -->
                            </div>

                            <div>
                                <button 
                                @click="showModalAddOption"
                                class="btn btn-primary text white">
                                    Thêm option mới
                                </button>
                            </div>

                            <div class="box-options mt-3">
                                <ul>
                                    <li v-for="(item,index) in optionDatas">
                                        {{item.name}}
                                    </li>
                                    
                                </ul>
                            </div>

                        </div>

                        <div class="option-value col-12 col-lg-6">
                            <!-- <div class="input-option-value">
                                    <v-select
                                    label="Chọn option value"
                                    :items="['L', 'M','XL']"
                                    variant="outlined"
                                    v-model="selectOption"
                                    ></v-select>
                                   
                            </div> -->

                            <div>
                                <button 
                                @click="showModalAddOptionValue"
                                :disabled="optionValueDisable"
                                class="btn btn-primary text white">
                                    Thêm dữ liệu mới
                                </button>
                            </div>

                            <div class="box-options-value mt-3">
                                <ul>
                                    <li v-for="(item,index) in optionValueDatas">
                                        {{item.value}}
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
    </div>
    
    <a-modal
      v-model:open="openModelAddOption"
      title="Thêm option mới"
      okText="Thêm"
      cancelText="Hủy"
      okType= 'primary'
      @ok="handleAddOptionOk"

    >
     <div class="mt-3">
        <v-text-field 
        v-model="newOption"
        label="Tên option mới" 
        variant="outlined"
        ></v-text-field>

     </div>
    </a-modal>

    <a-modal
      v-model:open="openModelAddOptionValue"
      title="Thêm giá trị mới"
      okText="Thêm"
      cancelText="Hủy"
      okType= 'primary'
      @ok="handleAddOptionValueOk"

    >
     <div class="mt-3">
        <v-text-field 
        v-model="newOptionValueName"
        label="Tên giá trị mới" 
        variant="outlined"
        ></v-text-field>

     </div>
     <div class="d-flex">
        <div @click="handleShowInputColor" class="btn-add-color-code">
            Thêm mã màu
        </div>
        <div v-if="inputColorCode" @click="handleHideInputColor" class=" ms-2 btn-add-color-code">
            Bỏ mã màu
        </div>
     </div>

     <div
     v-if="inputColorCode">
        <div class="input-color-field mt-3">
            <v-text-field 
            v-model="colorCodeValue"
            label="Mã màu" 
            variant="outlined"
            type="color"
            @input="updateColorValue"
            ></v-text-field>
        </div>
     </div>
    </a-modal>
</template>
<script>
import { onMounted, ref, watch } from 'vue';
import { toast } from 'vue3-toastify';

import OptionAPI from '../../../../services/NodeAPI/OptionAPI'
import OptionValueAPI from '../../../../services/NodeAPI/OptionValueAPI'

export default {
    
    setup(){

        const notify = {
            success: (title) => {
                toast.success(title);
            },
            error: (title) => {
                toast.error(title);
            }
        }

        


        // handle get option
        const optionDatas = ref([]);

        const getOptionData = async () => {
            let product_id = localStorage.getItem('productId');
            let data = await OptionAPI.getByProduct(product_id);
            console.log(data);
            if(data) optionDatas.value = data;
        }
        onMounted(()=>{
            getOptionData();
        })
        

        const optionSelected = ref(null);
        const optionValueDisable = ref(true);

        


        // modal add option
        const openModelAddOption = ref(false);
        const newOption = ref("");
        const showModalAddOption = () => {
            openModelAddOption.value = true;
        };
        const handleAddOptionOk = async () => {
            console.log("handleAddOptionOk");
            const product_id = localStorage.getItem('productId');
            if(!product_id) return notify.error('Vui lòng nhập đầy đủ thông tin !');
            const data = {
                name: newOption.value,
                product_id: product_id

            }

            const result = await OptionAPI.create(data);
            if(result) {
                getOptionData();
                openModelAddOption.value = false;
                newOption.value = null;
                return notify.success("Thêm option thành công !");
            }
            return notify.error('Thêm option thất bại !');
        }


        // handle get optionvalue data
        // handle get option
        const optionValueDatas = ref([]);

        const getOptionValueData = async () => {
            let data = await OptionValueAPI.getByOption(optionSelected.value);
            console.log(data);
            if(data) optionValueDatas.value = data;
        }
        onMounted(()=>{
            getOptionValueData();
        })

        watch(optionSelected,(newValue,oldValue)=>{
            console.log(optionSelected.value);
            if(optionSelected.value){
                optionValueDisable.value = false;
                getOptionValueData();
            }
        })

        // modal add option value
        const openModelAddOptionValue = ref(false);
        const newOptionValueName = ref("");
        const colorCodeValue = ref(null);
        const inputColorCode = ref(false);
        const handleShowInputColor = () => {
            inputColorCode.value = true;
        }

        const handleHideInputColor = () => {
            inputColorCode.value = false;
        }

        const updateColorValue = (event) => {
            colorCodeValue.value = event.target.value;
        }

        
        const showModalAddOptionValue = () => {
            openModelAddOptionValue.value = true;
        };
        const handleAddOptionValueOk = async () => {
            console.log("handleAddOptionValueOk");
            console.log("new option value : "+newOptionValueName.value);
            console.log("color code : "+colorCodeValue.value);
            console.log("option Id : "+optionSelected.value);

            if(!newOptionValueName.value){
                return notify.error("Vui lòng nhập đầy đủ thông tin 😊 !");
            }
            let data = {
                value: newOptionValueName.value,
                color_code: colorCodeValue.value,
                option_id: optionSelected.value
            }

            let result  = await OptionValueAPI.create(data);
            if(!result) return notify.error("Thêm thất bại 😊 !");
            getOptionValueData();
            newOptionValueName.value = null;
            colorCodeValue.value = null;
            openModelAddOptionValue.value = false;
            return notify.success("Thêm thành công 😊 !");

        }


        return {
            openModelAddOption,
            newOption,
            showModalAddOption,
            handleAddOptionOk,

            openModelAddOptionValue,
            newOptionValueName,
            showModalAddOptionValue,
            handleAddOptionValueOk,

            optionDatas,
            optionValueDatas,
            optionSelected,
            optionValueDisable,
            inputColorCode,
            handleShowInputColor,
            handleHideInputColor,
            updateColorValue,
            colorCodeValue
        }
    }
}
</script>
<style scoped>
    @import './Option.css';
</style>