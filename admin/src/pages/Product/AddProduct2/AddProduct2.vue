<template lang="">
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
            <div class="content-form">
                <a-tabs
                    v-model:activeKey="activeKey"
                    :tab-position="'left'"
                    :style="{ height: '100%' }"
                    @tabScroll="callback"
                    >
                    <!-- <a-tab-pane v-for="i in 5" :key="i" :tab="`Tab-${i}`">Content of tab {{ i }}</a-tab-pane> -->
                    <a-tab-pane :key="1" :tab="'Thêm sản phẩm'">
                        <AddProductVue :handleAddproducted="handleAddproducted"/>
                    </a-tab-pane>
                    <a-tab-pane :key="2" :tab="'Thêm Option'" :disabled="!productAdded">
                        <Option />
                    </a-tab-pane>
                    <a-tab-pane :key="3" :tab="'Biến thể'" :disabled="!productAdded">
                        <Variation/>
                    </a-tab-pane>
                    <a-tab-pane :key="4" :tab="'Thuộc tính'" :disabled="!productAdded">
                        <Attribute/>
                    </a-tab-pane>
                    
                </a-tabs>
            </div>

            
            
        </div>
    </div>
</template>
<script>
import { ref, watch } from 'vue';
import AddProductVue from './Product/AddProduct.vue';
import Option from './Option/Option.vue';
import Variation from './Variaction/Variation.vue';
import Attribute from './Attribute/Attribute.vue';

export default {
    components:{
        AddProductVue,
        Option,
        Variation,
        Attribute
    },
    setup(){
        const activeKey = ref(1);
        const productAdded = ref(false);

        if(localStorage.getItem('productId')){
            console.log("hello world "+localStorage.getItem('productId'));
        }
        const handleAddproducted = (value) => {
            productAdded.value = value;
        }
        watch(productAdded,(newVal,oldVal)=>{
            console.log(productAdded.value);
        })

        return {
            activeKey,
            productAdded,
            handleAddproducted
        }
    }
}
</script>
<style lang="">
    
</style>