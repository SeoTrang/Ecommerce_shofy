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
                                    :items="['Size', 'Color']"
                                    variant="outlined"
                                    ></v-select>
                                    <!-- v-model="selectOption" -->
                            </div>

                            <div>
                                <button class="btn btn-primary text white">
                                    Thêm option mới
                                </button>
                            </div>

                            <div class="box-options mt-3">
                                <ul>
                                    <li>
                                        Màu
                                    </li>
                                    <li>
                                        Size
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
                                <button class="btn btn-primary text white">
                                    Thêm dữ liệu mới
                                </button>
                            </div>

                            <div class="box-options-value mt-3">
                                <ul>
                                    <li>
                                        L
                                    </li>
                                    <li>
                                        M
                                    </li>
                                    <li>
                                        XL
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
    </div>
    
</template>
<script>

export default {
    
    setup(){


        return {

        }
    }
}
</script>
<style lang="">
    
</style>