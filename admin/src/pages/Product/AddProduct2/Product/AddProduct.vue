<template lang="">
    <div class="add-pd-component">
        <div class="box-add-pd">
            <div class="row">
                <div class="col-12 col-lg-6 col-xl-6">
                    <v-text-field v-model="fieldData.productName.value" label="Tên sản phẩm" variant="outlined"></v-text-field>
                </div>
                <div class="col-12 col-lg-6 col-xl-6">
                    <v-select
                        label="Chọn danh mục"
                        :items="categoriesData"
                        item-title="name"
                        item-value="id" 
                        v-model="fieldData.category.value"
                        variant="outlined"
                        
                        ></v-select>
                </div>

                <div class="col-12 col-lg-6 col-xl-6">
                    <v-select
                        label="Chọn nhãn hiệu"
                        :items="BrandsData"
                        v-model="fieldData.brand.value"
                        item-title="name"
                        item-value="id" 
                        variant="outlined"
                       
                        ></v-select>
                </div>
                <div class="col-12 col-lg-6 col-xl-6">
                    <v-text-field 
                        label="Giá bán" 
                        variant="outlined"
                        v-model="fieldData.price.value"
                        @input="validatePrice"
                        ></v-text-field>
                </div>
            </div>

            <div class="row ">
                <div class="col-12 col-lg-6 col-xl-6 mb-3">
                    <div class="title text-center">
                        Ảnh đại diện
                    </div>
                    <div class="box-upload-avatar mt-2">
                        <Avatar height="250px" :handleGetLinkImg="handleGetLinkImgAvatar"/>
                    </div>
                </div>

                <div class="col-12">
                    <div class="post mt-5">
                        <QuillEditorCumtom 
                        :handleGetContent1="handleGetContent1" 
                        contentArticle = "hello"
                        />
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
                    @click="handleAddProduct"
                    class="btn btn-md btn-add w-100">
                        Lưu lại
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted, ref, toRefs, watch } from 'vue';
import { defineProps } from 'vue';
import CategoryAPI from '../../../../services/NodeAPI/CategoryAPI';
import BrandAPI from '../../../../services/NodeAPI/BrandAPI';
import QuillEditorCumtom from '../../../../components/QuillEditorCumtom/QuillEditorCumtom.vue'
import Avatar from '../../../../components/Upload/Avatar.vue'
import ProductAPI from '../../../../services/NodeAPI/ProductAPI';
import { toast } from 'vue3-toastify';

export default {
    components:{
        QuillEditorCumtom,
        Avatar
    },
    props: {
        handleAddproducted: Function
    },
    setup(props){
        
        const notify = {
            success: (title) => {
                toast.success(title);
            },
            error: (title) => {
                toast.error(title);
            }
        }
        const fieldData = {
            category: ref(),
            brand: ref(),
            productName: ref(),
            price: ref(),
        }

        function validatePrice() {
            // Xóa các ký tự không phải là số và không phải là dấu '-'
            fieldData.price.value = fieldData.price.value.replace(/[^\d-]/g, '');

            // Nếu có nhiều hơn một dấu '-', giữ lại chỉ dấu '-' đầu tiên
            const dashIndex = fieldData.price.value.indexOf('-');
            if (dashIndex !== -1) {
                fieldData.price.value =
                fieldData.price.value.substring(0, dashIndex + 1) +
                fieldData.price.value.substring(dashIndex + 1).replace(/-/g, '');
            }
        }



        // category
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
                            name: result[index].name
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



        // brand

        const BrandsData = ref([]);
        const getBrands = async() => {
            try {
                // console.log("call api category");
                const result = await BrandAPI.GetByCategory(fieldData.category.value);
                if(result) BrandsData.value = result;


            } catch (error) {
                console.log(error);
            }
        }

        watch(fieldData.category,(newVal,oldValue)=>{
            if(!fieldData.category.value){

                return;
            }
            console.log(fieldData.category.value);
            getBrands();
           

        })



        // img preview
        // handle file
        const newProuctAvatarURL = ref('');
        const handleGetLinkImgAvatar = (url) => {
            console.log(url);
            if(url) return newProuctAvatarURL.value = url;
        }



        // description
        const article = ref();
        const handleGetContent1 = (content) => {
            if(content) article.value = content;
            console.log(article.value);
        };


        const handleAddProduct = async() => {
            console.log("name : "+ fieldData.productName.value);
            console.log("category : "+ fieldData.category.value);
            console.log("brand : "+ fieldData.brand.value);
            console.log("price : "+ fieldData.price.value);
            console.log("avatar : "+ newProuctAvatarURL.value);
            console.log("aricle : "+ article.value);
            console.log("price : "+ fieldData.price.value);

            
            props.handleAddproducted('true');
            
            const data = {
                name: fieldData.productName.value,
                img_preview: newProuctAvatarURL.value,
                description:article.value,
                brand_id: fieldData.brand.value,
                category_id: fieldData.category.value,
                price: fieldData.price.value
            }

            const result = await ProductAPI.Create(data);
            if(!result) return notify.error('Thêm thất bại 😔 !');
            localStorage.setItem("productId",result);
            localStorage.setItem("categoryId",fieldData.category.value);
            return notify.success('Thêm thành công 😊 !');
            
        }
        
        return {
            fieldData,
            categoriesData,
            BrandsData,
            handleGetContent1,
            handleGetLinkImgAvatar,
            validatePrice,
            handleAddProduct
            
        }
    }
}
</script>
<style scoped>
    @import './AddProduct.css';
</style>