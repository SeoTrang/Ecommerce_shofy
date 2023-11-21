<template lang="">
    <div class="add-product-page">
        <div class="content-page">
            <div class="title-top row align-items-center">
                <div class="left col-7">
                    <div class="title-page">
                        Thêm sản phẩm
                    </div>
                    <div class="route mt-2">
                        <span><i class="fa-solid fa-house"></i> </span>
                        <span class="ms-2 me-2">/</span>
                        <span>Thêm sản phẩm</span>
                    </div>
                </div>
                <div class="right col-5 text-end">
                    <router-link to="/product">
                        <button class="btn btn-md btn-dark">
                        <span><i class="fa-solid fa-arrow-left"></i></span>
                        <span class="ms-1">Quay lại</span>
                    </button>
                    </router-link>
                </div>
            </div>

            <div class="box-page-1 mt-4">
                <div class="box-form">
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <v-select
                            label="Thêm mới"
                            :items="['Thêm mới', 'Có sẵn']"
                            variant="outlined"
                            v-model="selectOption"
                            ></v-select>
                        </div>
                        <div class="col-12 col-lg-6">
                            <v-autocomplete
                            label="Chọn sản phẩm"
                            :items="AllProducts"
                            :item-title="item => `${item.Name} - ${item.Version}`"
                            item-value="id" 
                            v-model="productExitValue"
                            variant="outlined"
                            return-object
                            single-line
                            :disabled="fieldDisable.productExit"
                            ></v-autocomplete>
                        </div>
                        <!-- :items="categoriesData"  -->
                        <div class="col-12 col-lg-6">
                            <v-select
                            label="Chọn danh mục"
                            :items="categoriesData"
                            item-title="Name"
                            item-value="id" 
                            v-model="fieldData.category.value"
                            :disabled="fieldDisable.category"
                            variant="outlined"
                            return-object
                            single-line
                            ></v-select>
                        </div>
                        <div class="col-12 col-lg-6">
                            <v-select
                            label="Chọn nhãn hiệu"
                            :items="BrandsData"
                            v-model="fieldData.brand.value"
                            item-title="Name"
                            item-value="id" 
                            variant="outlined"
                            :disabled="fieldDisable.brand"
                            return-object
                            single-line
                            ></v-select>
                        </div>

                        <div class="col-12 col-lg-6">
                            <v-text-field 
                            label="Tên sản phẩm" 
                            variant="outlined"
                            v-model="fieldData.productName.value"
                            :disabled="fieldDisable.productName"
                            ></v-text-field>
                        </div>
                        <div class="col-12 col-lg-6">
                            <!-- <template> -->
                                <v-text-field 
                                    label="Phiên bản" 
                                    variant="outlined"
                                    v-model="fieldData.version.value"
                                    :disabled="fieldDisable.version"
                                ></v-text-field>
                            <!-- </template> -->
                            <!-- <template v-else-if="selectOption == 'Có sẵn'">
                                <v-select
                                    label="Phiên bản"
                                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                                    variant="outlined"
                                ></v-select>
                            </template> -->
                        </div>
                        <div class="col-12 col-lg-6">
                            <v-text-field 
                            label="Tên màu" 
                            v-model="fieldData.colorName.value"
                            variant="outlined"
                            ></v-text-field>
                        </div>

                        <div class="col-12 col-lg-6">
                            <div class="input-color">
                                <v-text-field 
                                    label="Màu" 
                                    variant="outlined"
                                    v-model="fieldData.color.value"
                                    @input="updateColorValue"
                                    type="color"></v-text-field>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <v-text-field 
                            label="Giá nhập" 
                            variant="outlined" 
                            type="number" 
                            v-model="fieldData.importPrice.value"
             
                            ></v-text-field>
                        </div>
                        <div class="col-12 col-lg-6">
                            <v-text-field 
                            label="Giá bán" 
                            variant="outlined"
                            v-model="fieldData.price.value"
                            type="number"></v-text-field>
                        </div>
                        <div class="col-12 col-lg-6">
                            <v-text-field 
                            label="Giảm giá" 
                            variant="outlined"
                            v-model="fieldData.priceDiscount.value"
                            type="number"></v-text-field>
                        </div>

                        

                        
                        <div class="col-12 col-lg-6 d-none d-lg-block"></div>

                        <div class="col-12 col-lg-6 mb-3">
                            <div class="title text-center">
                                Ảnh đại diện
                            </div>
                            <div class="box-upload-avatar mt-2">
                                <Avatar height="250px" :handleGetLinkImg="handleGetLinkImgAvatar"/>
                            </div>
                        </div>

                        <div class="col-12 col-lg-6 mb-3">
                            <div class="title text-center">
                                Chi tiết
                            </div>
                            <div class="box-upload-avatar mt-2">
                                <ImgMultiple height="250px" :handleGetLinkImg="handleGetLinkImgs"/>
                            </div>
                        </div>


                        <template v-if="atributes">
                            <div
                            class="col-12 col-lg-6"
                            v-for="(x, index) in atributes" 
                            :key="x.id"
                            >
                                <v-text-field 
                                :label="x.Name" 
                                variant="outlined"
                                v-model="inputAtributeValues[index].Value"
                                ></v-text-field>
                            </div>
                        </template>


                        <div class="col-12 col-lg-6" v-if="fieldData.category.value" >
                            <button 
                            @click="showModalAddInput"
                            class="btn btn-dark btn-md btn-add-new-input">
                                <i class="fa-solid fa-plus"></i>
                                <span class="ms-1">
                                    Thêm trường nhập mới
                                </span>
                            </button>
                        </div>

                        <div class="col-12">
                            <div class="post mt-5">
                                <QuillEditorCumtom 
                                :handleGetContent1="handleGetContent1" 
                                contentArticle = "hello"
                                />
                            </div>

                        </div>

                        <div class="col-12">
                            <div class="btn-action-botom mt-5 mb-5 row">
                                <div class="col-6 d-flex align-items-center justify-content-center">
                                    <button class="btn-cancel">
                                        Huỷ
                                    </button>

                                </div>
                                <div class="col-6 d-flex align-items-center justify-content-center">
                                    <button class="btn-submit" @click = "onSubmit">
                                        Thêm
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>

    <a-modal
      v-model:open="openModelAddInput"
      title="Thêm trường nhập mới?"
      okText="Thêm"
      cancelText="Hủy"
      okType= 'primary'
      @ok="handleAddInputOk"

    >
     <div class="mt-3">
        <v-text-field 
        v-model="newInputName"
        label="Tên trường nhập" 
        variant="outlined"
        ></v-text-field>

     </div>
    </a-modal>
</template>

<script>
import { onMounted, ref, watch } from 'vue';
import Avatar from '../../../components/Upload/Avatar.vue'
import ImgMultiple from '../../../components/Upload/ImgMultiple.vue'
import { toast } from 'vue3-toastify';

import QuillEditorCumtom from '../../../components/QuillEditorCumtom/QuillEditorCumtom.vue';


import AttributeAPI from '../../../services/NodeAPI/AttributeAPI'
import CategoryAPI from '../../../services/NodeAPI/CategoryAPI'
import BrandAPI from '../../../services/NodeAPI/BrandAPI'
import ProductAPI from '../../../services/NodeAPI/ProductAPI'
import ColorAPI from '../../../services/NodeAPI/ColorAPI'
import AttributeValueAPI from '../../../services/NodeAPI/AttributeValueAPI'
import ListImgAPI from '../../../services/NodeAPI/ListImgAPI'

export default {

    components:{
        Avatar,
        ImgMultiple,
        QuillEditorCumtom
    },
    
    setup(){
        const selectOption = ref();
        const RefreshAttribute = ref(false);
        
        const notify = {
            success: (title) => {
                toast.success(title);
            },
            error: (title) => {
                toast.error(title);
            }
        }
        const fieldDisable = {
            productExit: true,
            category: true,
            brand: true,
            productName: true,
            version: true

        }

        // ref seclect input
        const productExitValue = ref();
        const fieldData = {
            category: ref(),
            brand: ref(),
            productName: ref(),
            version: ref(),
            importPrice: ref(),
            price: ref(),
            priceDiscount: ref(),
            colorName: ref(),
            color: ref("#000000"),
        }

        const updateColorValue = (event) => {
            fieldData.color.value = event.target.value;
        }
       

       

        // call api category
        const categoriesData = ref([]);
        const getCategories = async() => {
            try {
                const result = await CategoryAPI.GetAll();
                console.log(result);
                if(result) {
                    // categoriesData.value = result;
                    for (const index in result) {
                        categoriesData.value = [...categoriesData.value,{
                            id: result[index].id,
                            Name: result[index].Name
                        }];
                    }
                    
                    
                }
            } catch (error) {
                console.log(error);
            }
        }

        onMounted(() => {
            async function fetchCategories(){
                await getCategories();
            }

            fetchCategories();

        })

        
        const atributes = ref([]);
        const inputAtributeValues = ref([]);
        const getAttibutes = async() => {
            try {
                // console.log("call api category");
                const result = await AttributeAPI.GetByCategory(fieldData.category.value.id);
                // console.log(result);
                if(result) {
                    atributes.value = result;
                    for (const index in result) {
                        const attributeId = result[index].id;
                        const newValue = {
                            ProductId: null, // Gán giá trị colorId dựa trên logic của bạn
                            AttributeId: attributeId,
                            Value: '',
                        };

                        inputAtributeValues.value.push(newValue);

                    }
                }


            } catch (error) {
                console.log(error);
            }
        }

        const BrandsData = ref([]);
        const getBrands = async() => {
            try {
                // console.log("call api category");
                const result = await BrandAPI.GetByCategory(fieldData.category.value.id);
                if(result) BrandsData.value = result;


            } catch (error) {
                console.log(error);
            }
        }

        watch(fieldData.category,(newVal,oldValue)=>{
            if(!fieldData.category.value){

                return;
            }
            console.log(fieldData.category);
            fieldDisable.brand = false;
            
            getAttibutes();
            getBrands();
           

        })

        

        watch(selectOption,(newVal,oldValue)=>{
            console.log(selectOption.value);
            if(selectOption.value == 'Thêm mới'){
                // disable
                fieldDisable.category = false;
                fieldDisable.productName = false;
                fieldDisable.productExit = true;
                fieldDisable.brand = true;
                fieldDisable.version = false;

                productExitValue.value = null;
                fieldData.category.value = null;
                fieldData.brand.value = null;
                fieldData.productName.value = null;
                fieldData.version.value = null;
                

                return;
            }
            if(selectOption.value == 'Có sẵn'){
                // disable
                fieldDisable.category = true;
                fieldDisable.productName = true;
                fieldDisable.productExit = false;
                fieldDisable.brand = true;
                fieldDisable.brand = true;
                fieldDisable.version = true;

                fieldData.category.value = null;
                fieldData.brand.value = null;
                fieldData.productName.value = null;
                fieldData.version.value = null;

                // categoriesData.value = [];
                // BrandsData.value = [];

                // value

                return;
            }
        });

       watch(RefreshAttribute,(newVal,oldVal) => {
            getAttibutes();
       })
        // modal add input
        const openModelAddInput = ref(false);
        const newInputName = ref("");
        const showModalAddInput = () => {
            openModelAddInput.value = true;
        };
        const handleAddInputOk = async () => {
            
            console.log("category : ",fieldData.category.value.id);
            console.log("newInputName : "+newInputName.value);
            // return notify("Thêm thành công !");
            if(!fieldData?.category.value.id || !newInputName.value){
                return notify.error("Vui lòng nhập tên trường 😊!")
            }

            const result = await AttributeAPI.Create(fieldData.category.value.id,newInputName.value)
            if(!result) return notify.error("Thêm thất bại 😔!");
            RefreshAttribute.value = !RefreshAttribute.value;
            newInputName.value = null;
            openModelAddInput.value = false;
            return notify.success("Thêm thành công 😊 !");

        };


        // handle file
        const newProuctAvatarURL = ref('');
        const handleGetLinkImgAvatar = (url) => {
            console.log(url);
            if(url) return newProuctAvatarURL.value = url;
        }

        const newProuctImgsURL = ref([]);
        const handleGetLinkImgs = (url) => {
            if(url) newProuctImgsURL.value = [...newProuctImgsURL.value,url];
            console.log(url);
            
            return ;
        }

        watch(newProuctImgsURL,(newVal,oldVal)=>{
            console.log(newProuctImgsURL);
        })


        // article

        const article = ref();
        const handleGetContent1 = (content) => {
            if(content) article.value = content;
            console.log(article.value);
        };

        const checkEmptyValueProduct = () => {
            for (const key of Object.keys(fieldData)) {
            
                // Check if the field is empty (falsy value)
                if (!fieldData[key].value) {
                    console.log(key);
                    console.log(fieldData[key].value);
                    return false; // If any field is empty, return false
                }

                // If the field is an array, check if it's empty
                // if (Array.isArray(fieldData[key].value) && fieldData[key].value.length === 0) {
                //     return false; // If any array field is empty, return false
                // }
            }

            return true; // All fields are non-empty, return true
        };


         // product exit

        // get all products
        const AllProducts = ref();
        const handleGetAllProducts = async () => {
            const result = await ProductAPI.GetAll();
            console.log(result);
            if(result) AllProducts.value = result;
        }

        onMounted(()=>{
            handleGetAllProducts();
        })

        watch(productExitValue,()=>{
            console.log(productExitValue.value);
            if(productExitValue.value){
                fieldData.category.value = productExitValue?.value.category.Name;
                fieldData.brand.value = productExitValue?.value.brand.Name;
                fieldData.productName.value = productExitValue?.value.Name;
                fieldData.version.value = productExitValue?.value.Version;
            }
        })
        

        // action add to product

        const ProductIdRef = ref();
        const ColorIdRef = ref();

        const handleAddProduct = async() => {
            console.log("Name : ",fieldData.productName.value);
            console.log("BrandId : ",fieldData.brand.value);
            console.log("CategoryId : ",fieldData.category.value);
            console.log("Version : ",fieldData.version.value);
            console.log("Article : ",article.value);
            
            const data = {
                Name: fieldData.productName.value,
                Version: fieldData.version.value,
                Article: article.value,
                CategoryId: fieldData.category.value.id,
                BrandId: fieldData.brand.value.id
            }
            // if(!data.Name || !data.Version || !data.CategoryId || !data.BrandId){
            //     return notify.error('Vui lòng nhập đầy đủ dữ liệu 😔 !')
            // }
            const result = await ProductAPI.Create(data);
            if(result) return result;
            return false;
        }
        const handleAddColor = async() => {
            let ProductId = null;
            if(selectOption.value == 'Thêm mới') ProductId =  await handleAddProduct();
            else ProductId = productExitValue.value.id;
            ProductIdRef.value = ProductId;
            console.log("productId: " + ProductId);
            if(!ProductId) return notify.error("Thêm dữ thất bại color😔 !");
            console.log("=== color ====");
            console.log("Name : ",fieldData.colorName.value);
            console.log("Color : ",fieldData.color.value);
            console.log("ImportPrice : ",fieldData.importPrice.value);
            console.log("Price : ",fieldData.price.value);
            console.log("DiscountPrice : ",fieldData.priceDiscount.value);
            console.log("Avatar : ",newProuctAvatarURL.value);

            const data = {
                Name: fieldData.colorName.value,
                Color: fieldData.color.value,
                ImportPrice: fieldData.importPrice.value,
                Price: fieldData.price.value,
                DiscountPrice : fieldData.priceDiscount.value,
                Avatar: newProuctAvatarURL.value,
                ProductId: ProductId
            }

            const result = await ColorAPI.Create(data);
            if(result) return result;
            return false;
        }

        const handleAddListImg = async(ColorId) => {
            console.log("Color ID: " + ColorId);
            if(!ColorId) return notify.error('Thêm sản phẩm thất bại color😔 !')
            console.log("=== AddListImg ===");
            console.log("ColorId : ",ColorId);
            console.log("listImg : ",newProuctImgsURL.value);
            let data = [];
            for (let index = 0; index < newProuctImgsURL.value.length; index++) {
                let item = {
                    Url: newProuctImgsURL.value[index],
                    ColorId: ColorId
                }
                data.push(item);
                
            }

            console.log(data);

            const result = await ListImgAPI.Create(data);
            if(result) return result;
            return false;
        }


        const onSubmit = async () => {
            const isEmpty = checkEmptyValueProduct();
            if(!isEmpty) return notify.error('Vui lòng nhập đầy đủ các trường dữ liệu !');
            console.log('onsubmit');
            const ColorId = await handleAddColor();
            await handleAddListImg(ColorId);

            let result = true;

            if(selectOption.value == 'Thêm mới'){
                let data = inputAtributeValues.value;
                for (const index in inputAtributeValues.value) {
                    data[index].ProductId = ProductIdRef.value;
                }

                result = await AttributeValueAPI.Create(data);
            }

            
            if(result) return notify.success("Thêm sản phẩm thành công 😊 !");
            return notify.error("Thêm sản phẩm thất bại 😔 !");
            

        }


       
       


        
       

        return {
            BrandsData,
            categoriesData,
            fieldDisable,
            selectOption,
            productExitValue,
            fieldData,
            atributes,
            inputAtributeValues,
            updateColorValue,
            AllProducts,

            // file
            handleGetLinkImgAvatar,
            handleGetLinkImgs,

            // article
            handleGetContent1,

            // modal add input
            openModelAddInput,
            showModalAddInput,
            handleAddInputOk,
            newInputName,
            onSubmit


            

        }
    },

}
</script>
<style >
    @import './AddProduct.css';
</style>