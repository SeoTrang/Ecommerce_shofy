<template lang="">
    <div class="brand-page">
        <div class="content-page">
            <div class="title-top row align-items-center">
                <div class="left col-6">
                    <div class="title-page">
                        Nhãn hiệu
                    </div>
                    <div class="route mt-2">
                        <span><i class="fa-solid fa-house"></i> </span>
                        <span class="ms-2 me-2">/</span>
                        <span>Nhãn hiệu</span>
                    </div>
                </div>

                <div class="right col-6 text-end">
                    <button class="btn btn-md btn-dark" @click="showModalAddBrand">
                        <span><i class="fa-solid fa-plus"></i></span>
                        <span class="ms-1">Thêm mới</span>
                    </button>
                </div>
            </div>

            <div class="box-page mt-4">
                <div class="min-width-960">
                    <div class="table-brand">
                        <table class="table table-striped table-borderless table-xxl">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Ảnh</th>
                                        <th scope="col">Tên </th>
                                        <th scope="col">Danh mục</th>
                                        <th scope="col">Số lượng sản phẩm</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody  class="table-group-divider">
                                    <tr v-for="(brand, index) in Brands" :key="brand.id">
                                        <td><input type="checkbox"></td>
                                        <td>
                                            <div class="img d-flex align-items-center justify-content-center">
                                                <img :src="brand.Avatar ? API_URL + brand.Avatar : ''" alt="">
                                            </div>
                                        </td>
                                        <td>{{brand?.Name}}</td>
                                        <td>{{brand?.CategoryName}}</td>
                                        <td>20</td>
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
                                                                <div class="edit action" @click="showModalEdit(brand?.id,brand?.Name,brand.Avatar  )">
                                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                                    <span class="ms-3">Sửa</span>
                                                                </div>
                                                            </v-list-item-title>
                                                        </v-list-item>
                                                        <v-list-item
                                                        >
                                                            <v-list-item-title>
                                                                <div class="delete action" @click="showModalDelete(brand?.id)">
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
        </div>
    </div>

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

    <!-- modal add new category -->
    <a-modal 
    v-model:open="openAddBrand" 
    title="Thêm nhãn hiệu mới" 
    okText="Thêm"
    cancelText="Hủy"
    class="modal-ok-primary"
    okType= 'primary'

    @ok="handleOkAddBrand">
        <div class="mt-4">
            <v-text-field v-model="newBrandValue" label="Nhập nhãn hiệu..." variant="outlined"></v-text-field>
          
            <Avatar height="100px" :handleGetLinkImg="handleGetLinkImg"/>
        </div>
    </a-modal>

    <a-modal 
    v-model:open="openEditBrand" 
    title="Sửa nhãn hiệu" 
    okText="Lưu lại"
    cancelText="Hủy"
    class="modal-ok-primary"
    okType= 'primary'

    @ok="handleOkEditBrand">
        <div class="mt-4">
            <v-text-field v-model="editBrandValue" label="Nhập nhãn hiệu..." variant="outlined"></v-text-field>
          
            <Avatar height="100px" :handleGetLinkImg="handleGetLinkImgUpdate" :imageUrl="editBrandImgUrl"/>
        </div>
    </a-modal>
</template>
<script>
import { nextTick, onMounted, ref, watch } from 'vue'
import { toast } from 'vue3-toastify';
import { useRoute } from 'vue-router';
import { useStore } from "vuex";

import Avatar from '../../../components/Upload/Avatar.vue'
import BrandAPI from '../../../services/NodeAPI/BrandAPI'
export default {
    components:{
        Avatar
    },
    setup(){
        const API_URL = import.meta.env.VITE_API_URL;
        // console.log(url);
        const store = useStore();
        const Refresh = ref(false);
        const route = useRoute();
        const queryParam = ref(null);
        // onMounted(() => {
        //     queryParam.value = route.query["categoryid"] || null;
        // });
        // console.log(queryParam.value);
        // watch(queryParam, (newVal) => {
        //     console.log(queryParam.value);
        // }); 

        const notify = {
            success : title => {
                toast.success(title);
            },
            error: title => {
                toast.error(title);
            }
        }
        
     

        // modal delete
        const openModelDelete = ref(false);
        const showModalDelete = (brandId) => {
            brandIdDelete.value = brandId;
            openModelDelete.value = true;
        };
        const handleDeleteOk = async (e) => {
            console.log(e);
            
            const result  = await deleteBrand();
            if(result) {
                openModelDelete.value = false;
                return Refresh.value = !Refresh.value;
            }
            return;
            // return notify("Xóa thành công !");
        };

        // modal add new brand
        const openAddBrand = ref(false);
        const showModalAddBrand = () => {
            openAddBrand.value = true;
        };
        const handleOkAddBrand = async(e) => {
            console.log(e);
            const result = await addNewBrand();
            if(!result) return;

            return openAddBrand.value = false;
            
        };

        // api
        const Brands = ref([]);
        const fetchData = async () => {
            
            await nextTick(); // Đảm bảo rằng component đã được render
            queryParam.value = route.query["categoryid"] || null;
            console.log(queryParam.value);
            if(!queryParam.value) return false;
            store.dispatch("startLoading");
            const result = await BrandAPI.GetByCategory(queryParam.value);
            setTimeout(() => {
                store.dispatch("stopLoading");
            }, 1000);
            if(!result) return false;
            console.log(result);
            Brands.value = result;
            // Sau khi queryParam được cập nhật, bạn có thể truy vấn API server ở đây.
        }
  
        onMounted(() => {
            fetchData(); // Gọi fetchData sau khi component đã được render
        });

        watch(Refresh,(newVal,oldVal) => {
            fetchData(); // Gọi fetchData sau khi component đã được render
        });


        // add-new brand

        const newBrandValue = ref('');
        const newBrandAvatarURL = ref('');
        const handleGetLinkImg = (url) => {
            console.log(url);
            if(url) return newBrandAvatarURL.value = url;
        }

        const addNewBrand = async () => {
            if(!queryParam.value || !newBrandValue.value) {
                notify.error('Vui lòng nhập đầy đủ thông tin 😊 !')
                return false;
            }
            const result = await BrandAPI.AddBrand(newBrandValue.value,newBrandAvatarURL.value, queryParam.value)
            if(result) {
                newBrandValue.value = '';
                Refresh.value = !Refresh.value;
                notify.success("Thêm thành công 😊 !");
                return true;
            }
            notify.error("Thêm thất bại 😔 !");
            return false;


        }

        // delete brand
        const brandIdDelete = ref();
        const deleteBrand = async () => {
            console.log(brandIdDelete.value);
            store.dispatch("startLoading");
            const result = await BrandAPI.DeleteBrand(brandIdDelete.value);
            setTimeout(() => {
                store.dispatch("stopLoading");
            }, 1000);
            if(result){
                notify.success("Xóa thành công !");
                return true;
            }
            notify.error("Xóa thất bại");
            return false;
        }

        // edit brand 
        const openEditBrand = ref(false)
        const editBrandValue = ref('')
        const editBrandId = ref('')
        const editBrandImgUrl = ref('')
        const handleGetLinkImgUpdate = (url) => {
            console.log(url);
            if(url) return editBrandImgUrl.value = url;
        }
        
        const showModalEdit = (id, name, img)=>{
            openEditBrand.value = true;
            editBrandValue.value = name;
            editBrandImgUrl.value = img;
            editBrandId.value = id;
            // console.log(id, name, img);
        }

        const EditBrand = async () => {
            if(!queryParam.value || !editBrandValue.value) {
                notify.error('Vui lòng nhập đầy đủ thông tin 😊 !')
                return false;
            }
            store.dispatch("startLoading");
            const result = await BrandAPI.UpdateBrand(editBrandId.value,editBrandValue.value,editBrandImgUrl.value)
            setTimeout(() => {
                store.dispatch("stopLoading");
            }, 1000);

            if(result) {
                openEditBrand.value = false;
                notify.success("Sửa thành công 😊😊 !");
                Refresh.value = !Refresh.value;
                return true;

            }
           
            notify.success("Sửa thất bại 😔 !");
            return false;
        }

        const handleOkEditBrand = async () => {
            await EditBrand();
        }
        

        return{
            notify,
            openModelDelete,
            handleDeleteOk,
            showModalDelete,
            // modal add category
            openAddBrand,
            handleOkAddBrand,
            showModalAddBrand,
            handleGetLinkImg,

            // 
            newBrandValue,
            Brands,
            API_URL,

            // delete brand
            brandIdDelete,

            // edit brand 
            showModalEdit,
            editBrandValue,
            handleOkEditBrand,
            openEditBrand,
            editBrandImgUrl,
            handleGetLinkImgUpdate
        }
    }
    
}
</script>
<style scoped>
    @import './Brand.css';
</style>