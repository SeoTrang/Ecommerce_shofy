<template lang="">
    <div class="category-page">
      <div class="content-page">
        <div class="title-top row align-items-center">
          <div class="left col-6">
            <div class="title-page">Danh mục</div>
            <div class="route mt-2">
              <span><i class="fa-solid fa-house"></i> </span>
              <span class="ms-2 me-2">/</span>
              <span>Danh mục</span>
            </div>
          </div>
  
          <div class="right col-6 text-end">
            <button class="btn btn-md btn-dark" @click="showModalAddCategory">
              <span><i class="fa-solid fa-plus"></i></span>
              <span class="ms-1">Thêm mới</span>
            </button>
          </div>
        </div>
  
        <div class="mt-4">
          <div class="row">
            <div class="mb-4 col-12 col-lg-6">
              <div class="pie-chart w-100 h-100">
                <div class="title text-center">Top danh mục bán chạy</div>
                <div class="d-flex align-items-center justify-content-center">
                  <div id="chart-2 mb-3 text-center">
                    <apexchart
                      class="pie-chart"
                      type="pie"
                      width="380"
                      :options="chartOptionsPie"
                      :series="seriesPie"
                    ></apexchart>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6 mb-4">
              <div class="box-page w-100 h-100 d-flex overflow-auto">
                <div class="table-category w-100">
                  <table class="table table-striped table-borderless table-xxl">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Nhãn hàng</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody class="table-group-divider">
                      <tr v-for="(category, index) in Categories" :key="category.id">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{category.Name}}</td>
                        <td>{{category.BrandCount}}</td>
                        <td>
                          <div class="action">
                            <v-menu>
                              <template v-slot:activator="{ props }">
                                <button v-bind="props">
                                  <i
                                    class="fa-solid fa-ellipsis-vertical pe-2 ps-2"
                                  ></i>
                                </button>
                              </template>
                              <v-list class="list-action-category">
                                <v-list-item>
                                  <v-list-item-title>
                                    <router-link :to="'/brand?categoryid=' + category.id">
                                      <div class="view action">
                                        <i class="fa-solid fa-eye"></i>
                                        <span class="ms-3">Xem</span>
                                      </div>
                                    </router-link>
                                  </v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                  <v-list-item-title>
                                    <div 
                                    @click = "handleShowModalEdit(category.Name,category.id)"
                                    class="edit action">
                                      <i class="fa-solid fa-pen-to-square"></i>
                                      <span class="ms-3">Sửa</span>
                                    </div>
                                  </v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                  <v-list-item-title>
                                    <div
                                      class="delete action"
                                      @click="showModalDelete(category.id)"
                                    >
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
      </div>
    </div>
  
    <!-- modal delete -->
    <a-modal
      v-model:open="openModelDelete"
      title="Xác nhận xóa?"
      okText="Xóa"
      cancelText="Hủy"
      okType="danger"
      @ok="handleDeleteOk"
    >
      <p>Bạn chắc chắn muốn xóa danh mục sản phẩm ?</p>
    </a-modal>
  
    <!-- modal add new category -->
    <a-modal
      v-model:open="openAddCategory"
      title="Thêm danh mục mới"
      okText="Thêm"
      cancelText="Hủy"
      class="modal-ok-primary"
      okType="primary"
      @ok="handleOkAddCategory"
    >
      <div class="mt-4">
        <v-text-field
          v-model="newCategoryValue"
          label="Nhập tên danh mục..."
          variant="outlined"
        ></v-text-field>
      </div>
    </a-modal>
  
     <!-- modal edit category -->
     <a-modal
      v-model:open="openEditCategory"
      title="Sửa danh mục"
      okText="Sửa"
      cancelText="Hủy"
      class="modal-ok-primary"
      okType="primary"
      @ok="handleEditCategory"
    >
      <div class="mt-4">
        <v-text-field
          v-model="editCategoryValue"
          label="Nhập tên danh mục..."
          variant="outlined"
        ></v-text-field>
      </div>
    </a-modal>
  </template>
  <script>
  import { ref, watch } from "vue";
  import VueApexCharts from "vue3-apexcharts";
  import { toast } from "vue3-toastify";
  import { useStore } from "vuex";
  import { computed } from "vue";
  import { onMounted } from 'vue';
  
  import CategoryAPI from "../../services/NodeAPI/CategoryAPI";
  
  export default {
    components: {
      apexchart: VueApexCharts,
    },
    setup() {
      const store = useStore();
      const Refresh = ref(false);
      const Categories = ref([]);
      const categoryIdDelete = ref();
  
      watch(Categories,(newVal,oldVal) => {
          // console.log(Categories.value);
      })
  
      //console.log(store);
  
      // console.log(d);
  
      // // Lấy trạng thái từ Vuex
      // const loading = computed(() => store.state.loading);
      // const category = computed(() => store.state.category.categories);
      // console.log("loading state : " + loading.value);
      // console.log("category state : " + category.value);
      // watch(loading,(newVal,oldVal)=>{
      //     console.log("loading state watch: " + loading.value);
      //     console.log("loading newVal watch: " + newVal);
      //     console.log("loading oldVal watch: " + oldVal);
      // })
      
      
  
      const notify =  {
         success: (title) =>{
              return toast.success(title);
         },
         error: (title) =>{
          return toast.error(title);
         }
      };
      
      const seriesPie = ref([44, 55, 13, 43, 22]);
      const chartOptionsPie = ref({
        chart: {
          width: 380,
          type: "pie",
        },
        legend: {
          position: "bottom",
        },
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 300,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      });
  
      // modal delete
      const openModelDelete = ref(false);
      const showModalDelete = (value) => {
          // console.log(value);
          categoryIdDelete.value = value;
          openModelDelete.value = true;
      };
      const handleDeleteOk = (e) => {
      //   console.log(e);
        openModelDelete.value = false;
        deleteCategory();
      };
  
      //new category
      const newCategoryValue = ref("");
  
      // modal add new category
      const openAddCategory = ref(false);
      const showModalAddCategory = () => {
        openAddCategory.value = true;
      };
      const handleOkAddCategory = async(e) => {
      //   console.log(e);
        
        console.log("new category value : ", newCategoryValue.value);
        const result = await AddCategory();
        if(result) return openAddCategory.value = false;
        
      //   setTimeout
  
        return;
      };
  
      // api call
  
      // get all categories
      const GetAllCategories = async () => {
          try {
              // console.log("call api category");
              const result = await CategoryAPI.GetAll();
              if(result) Categories.value = result;
  
  
          } catch (error) {
              console.log(error);
          }
      }
       // Thực hiện cuộc gọi API lần đầu khi component được onMounted
      onMounted(() => {
          GetAllCategories();
      });
  
      // thực hiện gọi api khi thêm thành công danh mục mới
      watch(Refresh,(newVal,oldVal) => {
          // console.log("Refresh");
          GetAllCategories();
      })
  
      // onMounted
  
      // add categories
      const AddCategory = async () => {
        try {
          // Gọi action từ store
          // await store.dispatch("category/fetchCategories");
          if(!newCategoryValue.value) {
              notify.error("Vui lòng nhập thông tin 😒!")
              return false;
          }
          store.dispatch("startLoading");
          const result = await CategoryAPI.create(newCategoryValue.value);
          setTimeout(() => {
              store.dispatch("stopLoading");
          }, 1500);
          if(result) {
              Refresh.value = !Refresh.value;
              notify.success("Thêm thành công 😊!")
              return true;
          }
          notify.error("Thêm thất bại 😢!")
          return false;
        } catch (error) {
          console.error(error);
        }
      };
  
  
      // delete categories
      const deleteCategory = async () => {
          try {
              const result = await CategoryAPI.delete(categoryIdDelete.value);
              if(result) {
                  Refresh.value = !Refresh.value;
                  return  notify.success("Xóa thành công 😊!")
              }
              notify.error("Xóa thất bại 😌 !")
          } catch (error) {
              console.log(error);
          }
      }
  
      // update category
      const editCategoryValue = ref('');
      const editcategoryId = ref();
      const openEditCategory = ref(false);
      const showModalEditCategory = () => {
        openEditCategory.value = true;
      };
      const handleShowModalEdit = (value, id)=>{
          console.log(value);
          console.log(id);
          editCategoryValue.value = value;
          editcategoryId.value = id;
          showModalEditCategory();
      }
      const handleEditCategory = async()=> {
          // console.log(editCategoryValue.value);
          // console.log(editcategoryId.value);
          try {
              const result = await CategoryAPI.update(editcategoryId.value, editCategoryValue.value);
              if(result) {
                  Refresh.value = !Refresh.value;
                  openEditCategory.value = false;
                  return notify.success("Sửa danh mục thành công 😍😍 !");
              }
              return notify.error("Sửa danh mục thất bại 😔 |");
          } catch (error) {
              console.log(error);
          }
      }
  
      return {
        seriesPie,
        chartOptionsPie,
        notify,
        openModelDelete,
        handleDeleteOk,
        showModalDelete,
        // modal add category
        openAddCategory,
        handleOkAddCategory,
        showModalAddCategory,
        newCategoryValue,
  
        Categories,
        handleShowModalEdit,
        openEditCategory,
        showModalEditCategory,
        handleEditCategory,
        editCategoryValue
  
  
      };
    },
  };
  </script>
  <style scoped>
  @import "./Category.css";
  </style>
  