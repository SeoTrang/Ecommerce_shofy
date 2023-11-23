<template lang="">
    <div class="variation-component">
        <div class="box-variation">
            <div class="variation-items">
                <div class="variation-item">
                    <div class="title mt-3 mb-3">
                        <h5>
                            Biến thể 1
                        </h5>
                    </div>
                    <div class="row">
                        <div class="col-12 col-lg-6 variation">
                            <div class="input-variation">
                                    <v-select
                                    label="Màu"
                                    :items="['Hồng', 'Tím']"
                                    variant="outlined"
                                    ></v-select>
                                    <!-- v-model="selectvariation" -->
                            </div>


                        </div>

                        <div class="variation-value col-12 col-lg-6">
                            <div class="input-variation-value">
                                    <v-select
                                    label="Chọn size"
                                    :items="['L', 'M','XL']"
                                    variant="outlined"
                                    ></v-select>
                                    <!-- v-model="selectvariation" -->
                            </div>

                            
                        </div>
                    </div>

                    <div class="box-form-variation">
                        <div class="row">
                            <div class="col-12 col-lg-6">
                                <v-text-field label="Tên biến thể" variant="outlined"></v-text-field>
                            </div>
                            <div class="col-12 col-lg-6">
                                <v-text-field label="SKU" variant="outlined"></v-text-field>
                            </div>
                            <div class="col-12 col-lg-6">
                                <v-text-field type="number" label="Số lượng sản phẩm" variant="outlined"></v-text-field>
                            </div>
                            <div class="col-12 col-lg-6">
                                <v-text-field type="number" label="Giá nhập" variant="outlined"></v-text-field>
                            </div>
                            <div class="col-12 col-lg-6">
                                <v-text-field type="number" label="Giá bán" variant="outlined"></v-text-field>
                            </div>
                            <div class="col-12 col-lg-6">
                                <v-text-field type="number" label="Giảm giá" variant="outlined"></v-text-field>
                            </div>

                        </div>
                    </div>

                    <div class = "library">
                        <div class="row">
                            <div class="col-12 col-lg-6 mb-3">
                                <div class="title text-center">
                                    Thư viện ảnh
                                </div>
                                <div class="box-upload-avatar mt-2">
                                    <ImgMultiple height="250px" :handleGetLinkImg="handleGetLinkImgs"/>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="d-flex justify-content-end">
                        <button class="btn btn-success text-white">
                            Lưu lại
                        </button>
                    </div>

                </div>
                <div class="variation-item">
                    <div class="title mt-3 mb-3">
                        <h5>
                            Biến thể 2
                        </h5>
                    </div>
                    <div class="row">
                        <div class="col-12 col-lg-6 variation">
                            <div class="input-variation">
                                    <v-select
                                    label="Màu"
                                    :items="['Hồng', 'Tím']"
                                    variant="outlined"
                                    ></v-select>
                                    <!-- v-model="selectvariation" -->
                            </div>


                        </div>

                        <div class="variation-value col-12 col-lg-6">
                            <div class="input-variation-value">
                                    <v-select
                                    label="Chọn size"
                                    :items="['L', 'M','XL']"
                                    variant="outlined"
                                    ></v-select>
                                    <!-- v-model="selectvariation" -->
                            </div>

                            
                        </div>
                    </div>

                    <div class="box-form-variation">
                        <div class="row">
                            <div class="col-12 col-lg-6">
                                <v-text-field label="Tên biến thể" variant="outlined"></v-text-field>
                            </div>
                            <div class="col-12 col-lg-6">
                                <v-text-field label="SKU" variant="outlined"></v-text-field>
                            </div>
                            <div class="col-12 col-lg-6">
                                <v-text-field type="number" label="Số lượng sản phẩm" variant="outlined"></v-text-field>
                            </div>
                            <div class="col-12 col-lg-6">
                                <v-text-field type="number" label="Giá nhập" variant="outlined"></v-text-field>
                            </div>
                            <div class="col-12 col-lg-6">
                                <v-text-field type="number" label="Giá bán" variant="outlined"></v-text-field>
                            </div>
                            <div class="col-12 col-lg-6">
                                <v-text-field type="number" label="Giảm giá" variant="outlined"></v-text-field>
                            </div>

                        </div>
                    </div>

                    <div class = "library">
                        <div class="row">
                            <div class="col-12 col-lg-6 mb-3">
                                <div class="title text-center">
                                    Thư viện ảnh
                                </div>
                                <div class="box-upload-avatar mt-2">
                                    <ImgMultiple height="250px" :handleGetLinkImg="handleGetLinkImgs"/>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="d-flex justify-content-end">
                        <button class="btn btn-success text-white">
                            Lưu lại
                        </button>
                    </div>

                </div>

               

                <div class="mt-5">
                    <button class="btn btn-md btn-primary text-white">
                        <i class="fa-solid fa-plus"></i>
                        Thêm biến thể mới
                    </button>
                </div>
            </div>
                
        </div>
    </div>
</template>
<script>

import ImgMultiple from '../../../../components/Upload/ImgMultiple.vue'

export default {
    components:{
        ImgMultiple
    },
    setup(){

        return {

        }
    }
}
</script>
<style lang="">
    
</style>