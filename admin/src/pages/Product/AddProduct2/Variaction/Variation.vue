<template>
    <div class="variation-component">
      <div class="box-variation">
        <div class="variation-items">
          <div class="variation-item">
            <div class="title mt-3 mb-3">
              <h5>Biến thể</h5>
            </div>
            <div class="row">
              <div v-for="(item, index) in optionDatas" class="col-12 col-lg-6 variation">
                <div class="input-variation">
                  <v-select
                    :label="item.name"
                    :items="item?.OptionValues"
                    v-model="dynamicVariables[item.name]"
                    item-title="value"
                    item-value="id"
                    variant="outlined"
                    return-object
                    single-line
                  ></v-select>
                </div>
              </div>
            </div>
  
            <div class="box-form-variation">
              <div class="row">
                <div class="col-12 col-lg-6">
                  <v-text-field 
                  v-model="fieldData.variantName.value"
                  label="Tên biến thể" variant="outlined"></v-text-field>
                </div>
                <div class="col-12 col-lg-6">
                  <v-text-field 
                  v-model="fieldData.SKU.value"
                  label="SKU" variant="outlined"></v-text-field>
                </div>
                <div class="col-12 col-lg-6">
                  <v-text-field 
                  v-model="fieldData.qty_in_stock.value"
                  type="number" label="Số lượng sản phẩm" variant="outlined"></v-text-field>
                </div>
                <div class="col-12 col-lg-6">
                  <v-text-field 
                  v-model="fieldData.import_price.value"
                  type="number" label="Giá nhập" variant="outlined"></v-text-field>
                </div>
                <div class="col-12 col-lg-6">
                  <v-text-field 
                  v-model="fieldData.price.value"
                  type="number" label="Giá bán" variant="outlined"></v-text-field>
                </div>
                <div class="col-12 col-lg-6">
                  <v-text-field 
                  v-model="fieldData.sale_price.value"
                  type="number" label="Giảm giá" variant="outlined"></v-text-field>
                </div>
              </div>
            </div>
  
            <div class="library">
              <div class="row">
                <div class="col-12 col-lg-6 mb-3">
                  <div class="title text-center">Thư viện ảnh</div>
                  <div class="box-upload-avatar mt-2">
                    <ImgMultiple height="250px" 
                    :handleGetLinkImg="handleGetLinkImgs"
                    :ListImg = "newProuctImgsURL" />
                  </div>
                </div>
              </div>
            </div>

            <div class="row action-bottom mt-3">
                <div class="col-6 ">
                    <button class="btn btn-md btn-cancel w-100">
                        Hủy
                    </button>
                </div>
                <div class="col-6 ">
                    <button 
                    @click="handleAddVariation"
                    class="btn btn-md btn-add w-100">
                        Lưu lại
                    </button>
                </div>
            </div>
  
            <!-- <div class="d-flex justify-content-end">
              <button class="btn btn-success text-white">Lưu lại</button>
            </div> -->
          </div>
  
          <!-- <div class="mt-5">
            <button class="btn btn-md btn-primary text-white">
              <i class="fa-solid fa-plus"></i> Thêm biến thể mới
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted, ref, watch } from 'vue';
  import ImgMultiple from '../../../../components/Upload/ImgMultiple.vue';
  import OptionAPI from '../../../../services/NodeAPI/OptionAPI';
  import VariationAction from './VariationAction'
  import { toast } from 'vue3-toastify';
  
  export default {
    components: {
      ImgMultiple
    },
    setup() {
        const optionDatas = ref([]);
        const dynamicVariables = ref({});

        const notify = {
            success: (title) => {
                toast.success(title);
            },
            error: (title) => {
                toast.error(title);
            }
        }
    
        const getOptionData = async () => {
            let product_id = localStorage.getItem('productId');
            let data = await OptionAPI.getByProduct(product_id);
            if (data) optionDatas.value = data;
        };
    
        onMounted(() => {
            getOptionData();
        });
    
        watch(optionDatas, (newValue, oldValue) => {
            dynamicVariables.value = generateDynamicVariables(newValue);
        });
    
        function generateDynamicVariables(optionDatas) {
            let dynamicVars = {};
            optionDatas.forEach(item => {
            dynamicVars[item.name] = ref(null);
            });
            return dynamicVars;
        }

        watch(
            dynamicVariables,
            (newValue, oldValue) => {
                console.log(newValue);
            },
            { deep: true }
        );
        
        const fieldData = {
            variantName : ref(null),
            SKU : ref(null),
            qty_in_stock : ref(null),
            import_price : ref(null),
            price : ref(null),
            sale_price : ref(null),
        }

        const newProuctImgsURL = ref([]);
        const handleGetLinkImgs = (url) => {
            if(url) newProuctImgsURL.value = [...newProuctImgsURL.value,url];
            console.log(url);
            
            return ;
        }

        const resetVariable = () => {
          // for (const item of fieldData) {
          //     item
          // }
          
          for (const key in fieldData) {
            // console.log(key);
              fieldData[key].value = null;
          }
          newProuctImgsURL.value = [];
        }

        const handleAddVariation = async () => {
          let product_id = localStorage.getItem("productId");
          let addVariation = await VariationAction.AddVariaction(fieldData,product_id);
          
          if(!VariationAction) return notify.error("Thêm biến thể thất bại 😔 ! ");
          let addListImg = VariationAction.AddListImg(newProuctImgsURL,addVariation);
          let addCombination = VariationAction.AddCombination(dynamicVariables,addVariation);
          
          resetVariable();
          return notify.success("Thêm thành công 😊 !");
          // console.log(dynamicVariables);
          // console.log(fieldData);
          // console.log(newProuctImgsURL);

        }
  
        return {
            optionDatas,
            dynamicVariables,
            fieldData,
            newProuctImgsURL,

            handleAddVariation,
            handleGetLinkImgs
        };
    }
  };
  </script>
  
  <style>
    /* <!-- Your styles here --> */
    @import './Variation.css';
  </style>
  