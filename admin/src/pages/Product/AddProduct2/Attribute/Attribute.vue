<template lang="">
    <div class="attribute-componnent">
        <div class="box-attribute">
            <div class="row">
                <div class="col-12  attribute">
                        <div class="input-attribute">
                                <v-select
                                label="Chọn biến thể"
                                :items="['Biến thể 1', 'Biến thể 2', 'Biến thể 3']"
                                variant="outlined"
                                ></v-select>
                                <!-- v-model="selectvariation" -->
                        </div>
                </div>

                <div class="col-12 col-lg-6">
                    <v-text-field label="Màn hình" variant="outlined"></v-text-field>
                </div>
                <div class="col-12 col-lg-6">
                    <v-text-field label="Chip xử lí" variant="outlined"></v-text-field>
                </div>
                <div class="col-12 col-lg-6">
                    <v-text-field label="Ram" variant="outlined"></v-text-field>
                </div>
                <div class="col-12 col-lg-6">
                    <v-text-field label="Dung lượng pin" variant="outlined"></v-text-field>
                </div>
                <div class="col-12 col-lg-6">
                    <v-text-field label="Bộ nhớ" variant="outlined"></v-text-field>
                </div>
                <div class="col-12 col-lg-6">
                    <v-text-field label="Công suất sạc" variant="outlined"></v-text-field>
                </div>
                <div class="col-12 col-lg-6">
                    <button class="btn btn-success">
                        Thêm thuộc tính mới
                    </button>
                </div>
            </div>

            <div class="action-bottom mt-4">
                <button class="w-100 btn-lg btn btn-primary pt-2 pb-2">
                    Lưu lại
                </button>
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