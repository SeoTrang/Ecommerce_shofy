<template lang="">
    <div class="add-pd-component">
        <div class="box-add-pd">
            <div class="row">
                <div class="col-12 col-lg-6 col-xl-6">
                    <v-text-field label="Tên sản phẩm" variant="outlined"></v-text-field>
                </div>
                <div class="col-12 col-lg-6 col-xl-6">
                    <v-select
                        label="Chọn danh mục"
                        :items="categoriesData"
                        item-title="Name"
                        item-value="id" 
                        v-model="fieldData.category.value"
                        variant="outlined"
                        return-object
                        single-line
                        ></v-select>
                </div>

                <div class="col-12 col-lg-6 col-xl-6">
                    <v-select
                        label="Chọn nhãn hiệu"
                        :items="BrandsData"
                        v-model="fieldData.brand.value"
                        item-title="Name"
                        item-value="id" 
                        variant="outlined"
                        return-object
                        single-line
                        ></v-select>
                </div>
            </div>

            <div class="row">
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
        </div>
    </div>
</template>
<script>
import { onMounted, ref, watch } from 'vue';
import CategoryAPI from '../../../../services/NodeAPI/CategoryAPI';
import BrandAPI from '../../../../services/NodeAPI/BrandAPI';
import QuillEditorCumtom from '../../../../components/QuillEditorCumtom/QuillEditorCumtom.vue'
import Avatar from '../../../../components/Upload/Avatar.vue'

export default {
    components:{
        QuillEditorCumtom,
        Avatar
    },
    setup(){

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



        // brand

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
        
        return {
            fieldData,
            categoriesData,
            BrandsData,
            handleGetContent1,
            handleGetLinkImgAvatar
            
        }
    }
}
</script>
<style lang="">
    
</style>