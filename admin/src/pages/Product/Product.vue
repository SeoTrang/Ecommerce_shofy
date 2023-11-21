<template lang="">
    <div class="product-page">
        <div class="content-page">
            <div class="title-top row align-items-center">
                <div class="left col-6">
                    <div class="title-page">
                        Sản phẩm
                    </div>
                    <div class="route mt-2">
                        <span><i class="fa-solid fa-house"></i> </span>
                        <span class="ms-2 me-2">/</span>
                        <span>Sản phẩm</span>
                    </div>
                </div>

                <div class="right col-6 text-end">
                    <router-link to="/add-product">
                        <button class="btn btn-md btn-dark">
                        <span><i class="fa-solid fa-plus"></i></span>
                        <span class="ms-1">Thêm mới</span>
                    </button>
                    </router-link>
                </div>
            </div>

            <div class="box-page mt-4">
                <div class="options-top">
                    <div class="row">
                        <div class="col-12 col-lg-5">
                           <div class="input-left row d-flex align-items-center">
                            <div class="col-12 col-lg-6 mb-3">
                                    <v-combobox
                                    v-model="selectStock"
                                    :items="itemsStock"
                                    label="Còn hàng"
                                    variant="underlined"
                                    multiple
                                    chips
                                    ></v-combobox>
                                </div>
                                <div class="col-12 col-lg-6 mb-3">
                                    <v-combobox
                                    v-model="selectPublic"
                                    :items="itemsPublic"
                                    label="Công khai"
                                    variant="underlined"
                                    multiple
                                    chips
                                    ></v-combobox>
                                </div>
                           </div>
                            
                        </div>

                        <div class="col-12 col-lg-7">
                            <div class="row">
                                <div class="input-searh col-9 col-md-10">
                                    <div class="box-search row align-items-center">
                                        <v-text-field 
                                            variant="underlined"
                                            label="Tìm kiếm..."
                                            append-inner-icon="mdi-magnify"
                                            ></v-text-field>
                                    </div>
                                </div>
                                <div class="action col-3 col-md-2">
                                    <div class="d-flex h-100 align-items-center justify-content-center">
                                        <div class="box-menu">
                                            <i class="fa-solid  fa-ellipsis-vertical"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="results mt-4">
                    <div class="title">
                        <b>7</b>
                        <span class="ms-2">kết quả được tìm thấy</span>
                    </div>

                    <div class="filter mt-3 d-flex flex-wrap align-items-center">
                        <div class="filter-box filer-stock d-flex mb-2 me-2">
                            <div class="text">
                                Tình trạng :
                            </div>
                            <div class="ms-2 filter-value d-flex flex-wrap">
                                <div class="value me-2">
                                    Còn hàng
                                </div>
                                <div class="value me-2">
                                    Hết hàng
                                </div>
                            </div>
                        </div>
                        <div class="filter-box filter-public d-flex mb-2 me-2">
                            <div class="text">
                                Trạng thái :
                            </div>
                            <div class="ms-2 filter-value d-flex flex-wrap">
                                <div class="value me-2">
                                    Còn hàng
                                </div>
                                <div class="value me-2">
                                    Hết hàng
                                </div>
                            </div>
                        </div>

                        <div class="clear-filter mb-2">
                            <i class="fa-solid fa-trash"></i>
                            <span class="ms-2">Xóa bộ lọc</span>
                        </div>
                    </div>

                </div>
                <div class="container-table-product">
                    <div class="min-width-960">

                        <div class="table-product mt-4">
                            <table class="table  table-borderless table-hover table-xxl">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Ảnh</th>
                                            <th scope="col">Tên </th>
                                            <th scope="col">Đã bán</th>
                                            <th scope="col">Tình trạng</th>
                                            <th scope="col">Giá</th>
                                            <th scope="col">Trạng thái</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody  class="table-group-divider">
                                        <tr>
                                            <td><input type="checkbox"></td>
                                            <td>
                                                <div class="img d-flex align-items-center ">
                                                    <img src="https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_17.jpg" alt="">
                                                </div>
                                            </td>
                                            <td>
                                                <div class="name-category">
                                                    <div class="name">
                                                        2750 Cotu Classic Sneaker
                                                    </div>

                                                    <div class="category mt-1">
                                                        Shose
                                                    </div>
                                                </div>
                                            </td>

                                            

                                            <td>
                                                <div class="sold">
                                                    235
                                                </div>
                                            </td>
                                            <td>
                                                <div class="stock">
                                                    <div class="time-line">
                                                        <div class="progress-bg progress-bg-success">
                                                            <div class="progress-status progress-success" style="width:80%">

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="value mt-1">
                                                        80 sản phẩm
                                                    </div>

                                                </div>
                                            </td>
                                            <td>
                                                <div class="price">
                                                    $93.68
                                                </div>
                                            </td>

                                            <td>
                                                <div class="status">
                                                    <div class="publiced">
                                                        Hiện
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="action">
                                                    <v-menu>
                                                        <template v-slot:activator="{ props }">
                                                            
                                                            <button
                                                            v-bind="props">
                                                                <i class="fa-solid fa-ellipsis-vertical pe-2 ps-2"></i>
                                                            </button>
                                                        </template>
                                                        <v-list class="list-action-category">
                                                            <v-list-item
                                                            >
                                                                <v-list-item-title>
                                                                    <router-link to="/brand">
                                                                        <div class="view action">
                                                                            <i class="fa-solid fa-eye"></i>
                                                                            <span class="ms-3">Xem</span>
                                                                        </div>
                                                                    </router-link>
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                            <v-list-item
                                                            >
                                                                <v-list-item-title>
                                                                    <div class="edit action">
                                                                        <i class="fa-solid fa-pen-to-square"></i>
                                                                        <span class="ms-3">Sửa</span>
                                                                    </div>
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                            <v-list-item
                                                            >
                                                                <v-list-item-title>
                                                                    <div class="delete action" @click="showModalDelete">
                                                                        <i class="fa-solid fa-trash"></i>
                                                                        <span class="ms-3">Xóa</span>
                                                                    </div>
                                                                    
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                        </v-list>
                                                        </v-menu>
                                                </div>
                                            
                                            </td>

                                        </tr>
                                        <tr>
                                            <td><input type="checkbox"></td>
                                            <td>
                                                <div class="img d-flex align-items-center ">
                                                    <img src="https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_8.jpg" alt="">
                                                </div>
                                            </td>
                                            <td>
                                                <div class="name-category">
                                                    <div class="name">
                                                        2750 Cotu Classic Sneaker
                                                    </div>

                                                    <div class="category mt-1">
                                                        Shose
                                                    </div>
                                                </div>
                                            </td>

                                            

                                            <td>
                                                <div class="sold">
                                                    235
                                                </div>
                                            </td>
                                            <td>
                                                <div class="stock">
                                                    <div class="time-line">
                                                        <div class="progress-bg progress-bg-warning">
                                                            <div class="progress-status progress-warning" style="width:50%">

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="value mt-1">
                                                        50 sản phẩm
                                                    </div>

                                                </div>
                                            </td>
                                            <td>
                                                <div class="price">
                                                    $93.68
                                                </div>
                                            </td>

                                            <td>
                                                <div class="status">
                                                    <div class="hidden">
                                                        Ẩn
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="action">
                                                    <v-menu>
                                                        <template v-slot:activator="{ props }">
                                                            
                                                            <button
                                                            v-bind="props">
                                                                <i class="fa-solid fa-ellipsis-vertical pe-2 ps-2"></i>
                                                            </button>
                                                        </template>
                                                        <v-list class="list-action-category">
                                                            <v-list-item
                                                            >
                                                                <v-list-item-title>
                                                                    <router-link to="/brand">
                                                                        <div class="view action">
                                                                            <i class="fa-solid fa-eye"></i>
                                                                            <span class="ms-3">Xem</span>
                                                                        </div>
                                                                    </router-link>
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                            <v-list-item
                                                            >
                                                                <v-list-item-title>
                                                                    <div class="edit action">
                                                                        <i class="fa-solid fa-pen-to-square"></i>
                                                                        <span class="ms-3">Sửa</span>
                                                                    </div>
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                            <v-list-item
                                                            >
                                                                <v-list-item-title>
                                                                    <div class="delete action" @click="showModalDelete">
                                                                        <i class="fa-solid fa-trash"></i>
                                                                        <span class="ms-3">Xóa</span>
                                                                    </div>
                                                                    
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                        </v-list>
                                                        </v-menu>
                                                </div>
                                            
                                            </td>

                                        </tr>
                                        <tr>
                                            <td><input type="checkbox"></td>
                                            <td>
                                                <div class="img d-flex align-items-center ">
                                                    <img src="https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_20.jpg" alt="">
                                                </div>
                                            </td>
                                            <td>
                                                <div class="name-category">
                                                    <div class="name">
                                                        2750 Cotu Classic Sneaker
                                                    </div>

                                                    <div class="category mt-1">
                                                        Shose
                                                    </div>
                                                </div>
                                            </td>

                                            

                                            <td>
                                                <div class="sold">
                                                    235
                                                </div>
                                            </td>
                                            <td>
                                                <div class="stock">
                                                    <div class="time-line">
                                                        <div class="progress-bg progress-bg-error">
                                                            <div class="progress-status progress-error" style="width:10%">

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="value mt-1">
                                                        10 sản phẩm
                                                    </div>

                                                </div>
                                            </td>
                                            <td>
                                                <div class="price">
                                                    $93.68
                                                </div>
                                            </td>

                                            <td>
                                                <div class="status">
                                                    <div class="publiced">
                                                        Hiện
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="action">
                                                    <v-menu>
                                                        <template v-slot:activator="{ props }">
                                                            
                                                            <button
                                                            v-bind="props">
                                                                <i class="fa-solid fa-ellipsis-vertical pe-2 ps-2"></i>
                                                            </button>
                                                        </template>
                                                        <v-list class="list-action-category">
                                                            <v-list-item
                                                            >
                                                                <v-list-item-title>
                                                                    <router-link to="/brand">
                                                                        <div class="view action">
                                                                            <i class="fa-solid fa-eye"></i>
                                                                            <span class="ms-3">Xem</span>
                                                                        </div>
                                                                    </router-link>
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                            <v-list-item
                                                            >
                                                                <v-list-item-title>
                                                                    <div class="edit action">
                                                                        <i class="fa-solid fa-pen-to-square"></i>
                                                                        <span class="ms-3">Sửa</span>
                                                                    </div>
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                            <v-list-item
                                                            >
                                                                <v-list-item-title>
                                                                    <div class="delete action" @click="showModalDelete">
                                                                        <i class="fa-solid fa-trash"></i>
                                                                        <span class="ms-3">Xóa</span>
                                                                    </div>
                                                                    
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                        </v-list>
                                                        </v-menu>
                                                </div>
                                            
                                            </td>

                                        </tr>



                                    
                                        
                                    
                                    </tbody>
                                    </table>
                        </div>
                        </div>
                </div>

                <div class="pagination mt-3 d-flex align-items-center justify-content-center">
                    <a-pagination 
                    v-model:current="currentPage" 
                    @change="changePage"
                    :total="500" />
                </div>
            </div>



        </div>
    </div>


    <!-- modal -->
    <!-- modal delete -->
    <a-modal
      v-model:open="openModelDelete"
      title="Xác nhận xóa?"
      okText="Xóa"
      cancelText="Hủy"
      okType= 'danger'
      @ok="handleDeleteOk"

    >
      <p>Bạn chắc chắn muốn xóa danh mục sản phẩm ?</p>
    </a-modal>

   
</template>
<script>
import { ref } from 'vue'
import { toast } from 'vue3-toastify';
export default {
    
    setup(){
        const currentPage = ref(1);
        const changePage = (page, pageSize) => {
            console.log(page);
            console.log(pageSize);
        }
        let itemsStock =[
          'Còn hàng',
          'Hết hàng',
          'Dưới 10 sản phẩm',
          'Dưới 50 sản phẩm',
        ];
        const selectStock = ref([])

        let itemsPublic =[
          'Công khai',
          'Ẩn'
        ];
        const selectPublic = ref([])

        const notify = (title) => {
            toast.success(title);
        }

        // modal delete
        const openModelDelete = ref(false);
        const showModalDelete = () => {
            openModelDelete.value = true;
        };
        const handleDeleteOk = e => {
            console.log(e);
            openModelDelete.value = false;
            return notify("Thêm thành công !");
        };
        return {
            itemsStock,
            selectStock,
            itemsPublic,
            selectPublic,
            notify,
            openModelDelete,
            handleDeleteOk,
            showModalDelete,
            currentPage,
            changePage,

            
        }
    }
}
</script>
<style >
    @import './Product.css';
</style>