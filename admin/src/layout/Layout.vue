<template>
  <a-drawer :placement="'left'" :size="size" :open="open" @close="onClose">
    <!-- <template #extra>
      <a-button style="margin-right: 8px" @click="onClose">Cancel</a-button>
      <a-button type="primary" @click="onClose">Submit</a-button>
    </template> -->
    <div class="box-side-bar">
      <div class="side-bar side-bar-modal">
        <div class="logo-top">
          <div class="img">
            <img src="./logo.svg" alt="" />
          </div>
        </div>

        <!-- <div class="user mt-5 mb-3">
                    <div class="img">
                        <img src="./avatar.jpg" alt="">
                    </div>
                    <div class="user-name ms-3">
                        John Doe
                    </div>
                </div> -->
        <!-- <div class="mt-4">
                    OVERVIEW
                </div> -->

        <div class="list-navs mt-4">
          <router-link @click="onClose" to="/" class="list-one-item">
            <v-expansion-panels :readonly="true">
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <div class="side-bar-title d-flex align-items-center">
                    <div class="icon">
                      <span class="icon-home"> </span>
                    </div>
                    <div class="text ms-1">Trang chủ 123</div>
                  </div>
                </v-expansion-panel-title>
              </v-expansion-panel>
            </v-expansion-panels>
          </router-link>

          <div class="list-navs-collapse">
            <v-expansion-panels multiple>
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <div class="side-bar-title d-flex align-items-center">
                    <div class="icon">
                      <span class="icon-icon-cate"> </span>
                    </div>
                    <!-- <div class="icon">
                                            <img src="https://minimals.cc/assets/icons/navbar/ic_menu_item.svg" alt="">
                                        </div> -->
                    <div class="text ms-1">Quản lý danh mục</div>
                  </div>
                </v-expansion-panel-title>
                <router-link @click="onClose" to="/category">
                  <v-expansion-panel-text>
                    <div class="text-child">
                      <span class="dot-text-child"> </span>
                      <span class="text-child-2"> Danh mục </span>
                    </div>
                  </v-expansion-panel-text>
                </router-link>
                <router-link to="/subcategory" @click="onClose">
                  <v-expansion-panel-text>
                    <div class="text-child">
                      <span class="dot-text-child"> </span>
                      <span class="text-child-2"> Danh mục con </span>
                    </div>
                  </v-expansion-panel-text>
                </router-link>
                <router-link to="/product" @click="onClose">
                  <v-expansion-panel-text>
                    <div class="text-child">
                      <span class="dot-text-child"> </span>
                      <span class="text-child-2"> Nhãn hiệu </span>
                    </div>
                  </v-expansion-panel-text>
                </router-link>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-title>
                  <div class="side-bar-title d-flex align-items-center">
                    <div class="icon">
                      <span class="icon-icon-product"> </span>
                    </div>
                    <!-- <div class="icon">
                                            <img src="https://minimals.cc/assets/icons/navbar/ic_product.svg" alt="">
                                        </div> -->
                    <div class="text ms-1">Quản lý sản phẩm</div>
                  </div>
                </v-expansion-panel-title>
                <router-link to="/product" @click="onClose">
                  <v-expansion-panel-text>
                    <div class="text-child">
                      <span class="dot-text-child"> </span>
                      <span class="text-child-2"> Xem sản phẩm </span>
                    </div>
                  </v-expansion-panel-text>
                </router-link>
                <router-link @click="onClose" to="/add-product-2">
                  <v-expansion-panel-text>
                    <div class="text-child">
                      <span class="dot-text-child"> </span>
                      <span class="text-child-2"> Thêm sản phẩm </span>
                    </div>
                  </v-expansion-panel-text>
                </router-link>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-title>
                  <div class="side-bar-title d-flex align-items-center">
                    <div class="icon">
                      <span class="icon-icon-order"> </span>
                    </div>
                    <!-- <div class="icon">
                                            <img src="https://minimals.cc/assets/icons/navbar/ic_order.svg" alt="">
                                        </div> -->
                    <div class="text ms-1">Quản lý đơn hàng</div>
                  </div>
                </v-expansion-panel-title>
                <router-link to="/order">
                  <v-expansion-panel-text>
                    <div class="text-child">
                      <span class="dot-text-child"> </span>
                      <span class="text-child-2"> Xem đơn hàng </span>
                    </div>
                  </v-expansion-panel-text>
                </router-link>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-title>
                  <div class="side-bar-title d-flex align-items-center">
                    <div class="icon">
                      <span class="icon-icon-user"> </span>
                    </div>
                    <!-- <div class="icon">
                                            <img src="https://minimals.cc/assets/icons/navbar/ic_order.svg" alt="">
                                        </div> -->
                    <div class="text ms-1">Quản lý người dùng</div>
                  </div>
                </v-expansion-panel-title>
                <router-link to="">
                  <v-expansion-panel-text>
                    <div class="text-child">
                      <span class="dot-text-child"> </span>
                      <span class="text-child-2"> Danh sách người dùng </span>
                    </div>
                  </v-expansion-panel-text>
                </router-link>
                <router-link to="">
                  <v-expansion-panel-text>
                    <div class="text-child">
                      <span class="dot-text-child"> </span>
                      <span class="text-child-2"> Danh sách người dùng </span>
                    </div>
                  </v-expansion-panel-text>
                </router-link>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </div>
      </div>
    </div>
  </a-drawer>
  <div class="layout">
    <div class="header">
      <div class="row">
        <div class="col-5">
          <div class="header-left d-flex align-items-center">
            <div @click="showDrawer('default')" class="icon-header show-menu">
              <!-- <i class="fa-solid fa-sliders"></i> -->
              <i class="fa-solid fa-bars"></i>
            </div>
            <div class="search icon-header">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="chang-screen icon-header">
              <i class="fa-solid fa-expand"></i>
            </div>
          </div>
        </div>
        <div class="col-7">
          <div class="header-right">
            <div class="country me-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="component-iconify MuiBox-root css-1virv8 iconify iconify--flagpack"
                width="1.34em"
                height="1em"
                viewBox="0 0 32 24"
              >
                <defs>
                  <path
                    id="iconifyReact2472"
                    fill="#fff"
                    d="M0 0h32v24H0z"
                  ></path>
                </defs>
                <g fill="none">
                  <g clip-path="url(#iconifyReact2475)">
                    <use href="#iconifyReact2472"></use>
                    <path
                      fill="#2E42A5"
                      fill-rule="evenodd"
                      d="M0 0v24h32V0H0Z"
                      clip-rule="evenodd"
                    ></path>
                    <mask
                      id="iconifyReact2473"
                      width="32"
                      height="24"
                      x="0"
                      y="0"
                      maskUnits="userSpaceOnUse"
                      style="mask-type: luminance"
                    >
                      <path
                        fill="#fff"
                        fill-rule="evenodd"
                        d="M0 0v24h32V0H0Z"
                        clip-rule="evenodd"
                      ></path>
                    </mask>
                    <g mask="url(#iconifyReact2473)">
                      <path
                        fill="#fff"
                        d="m-3.563 22.285l7.041 2.979L32.16 3.238l3.714-4.426l-7.53-.995l-11.698 9.491l-9.416 6.396l-10.793 8.581Z"
                      ></path>
                      <path
                        fill="#F50100"
                        d="M-2.6 24.372L.989 26.1L34.54-1.599h-5.037l-32.102 25.97Z"
                      ></path>
                      <path
                        fill="#fff"
                        d="m35.563 22.285l-7.042 2.979L-.159 3.238l-3.715-4.426l7.53-.995l11.698 9.491l9.416 6.396l10.793 8.581Z"
                      ></path>
                      <path
                        fill="#F50100"
                        d="m35.323 23.783l-3.588 1.728l-14.286-11.86l-4.236-1.324l-17.445-13.5H.806l17.434 13.18l4.631 1.588l12.452 10.188Z"
                      ></path>
                      <mask id="iconifyReact2474" fill="#fff">
                        <path
                          fill-rule="evenodd"
                          d="M19.778-2h-7.556V8H-1.973v8h14.195v10h7.556V16h14.25V8h-14.25V-2Z"
                          clip-rule="evenodd"
                        ></path>
                      </mask>
                      <path
                        fill="#F50100"
                        fill-rule="evenodd"
                        d="M19.778-2h-7.556V8H-1.973v8h14.195v10h7.556V16h14.25V8h-14.25V-2Z"
                        clip-rule="evenodd"
                      ></path>
                      <path
                        fill="#fff"
                        d="M12.222-2v-2h-2v2h2Zm7.556 0h2v-2h-2v2ZM12.222 8v2h2V8h-2ZM-1.973 8V6h-2v2h2Zm0 8h-2v2h2v-2Zm14.195 0h2v-2h-2v2Zm0 10h-2v2h2v-2Zm7.556 0v2h2v-2h-2Zm0-10v-2h-2v2h2Zm14.25 0v2h2v-2h-2Zm0-8h2V6h-2v2Zm-14.25 0h-2v2h2V8Zm-7.556-8h7.556v-4h-7.556v4Zm2 8V-2h-4V8h4Zm-16.195 2h14.195V6H-1.973v4Zm2 6V8h-4v8h4Zm12.195-2H-1.973v4h14.195v-4Zm2 12V16h-4v10h4Zm5.556-2h-7.556v4h7.556v-4Zm-2-8v10h4V16h-4Zm16.25-2h-14.25v4h14.25v-4Zm-2-6v8h4V8h-4Zm-12.25 2h14.25V6h-14.25v4Zm-2-12V8h4V-2h-4Z"
                        mask="url(#iconifyReact2474)"
                      ></path>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="iconifyReact2475">
                      <use href="#iconifyReact2472"></use>
                    </clipPath>
                  </defs>
                </g>
              </svg>
            </div>
            <div class="notication icon-header">
              <i class="fa-solid fa-bell"></i>
            </div>

            <div class="setting icon-header">
              <i class="fa-solid fa-gear"></i>
            </div>

            <div class="user-header">
              <div class="user-name me-2 d-none d-md-block">John Doe</div>
              <div class="avatar">
                <img src="./avatar.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box-side-bar d-none d-xl-block">
      <div class="side-bar">
        <div class="logo-top">
          <div class="img" @click="handleTangTest">
            <img src="./logo.svg" alt="" />
          </div>
        </div>

        <!-- <div class="user mt-5 mb-3">
                    <div class="img">
                        <img src="./avatar.jpg" alt="">
                    </div>
                    <div class="user-name ms-3">
                        John Doe
                    </div>
                </div> -->
        <!-- <div class="mt-4">
                    OVERVIEW
                </div> -->

        <div class="list-navs mt-4">
          <!-- <router-link ></router-link> -->
          <router-link to="/" class="list-one-item">
            <v-expansion-panels :readonly="true">
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <div class="side-bar-title d-flex align-items-center">
                    <div class="icon">
                      <span class="icon-home"> </span>
                    </div>
                    <div class="text ms-1">Trang chủ</div>
                  </div>
                </v-expansion-panel-title>
              </v-expansion-panel>
            </v-expansion-panels>
          </router-link>

          <div class="list-navs-collapse">
            <v-expansion-panels multiple>
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <div class="side-bar-title d-flex align-items-center">
                    <div class="icon">
                      <span class="icon-icon-cate"> </span>
                    </div>
                    <!-- <div class="icon">
                                            <img src="https://minimals.cc/assets/icons/navbar/ic_menu_item.svg" alt="">
                                        </div> -->
                    <div class="text ms-1">Quản lý danh mục</div>
                  </div>
                </v-expansion-panel-title>
                <router-link to="/category">
                  <v-expansion-panel-text>
                    <div class="text-child">
                      <span class="dot-text-child"> </span>
                      <span class="text-child-2"> Danh mục </span>
                    </div>
                  </v-expansion-panel-text>
                </router-link>

                <router-link to="/brand">
                  <v-expansion-panel-text>
                    <div class="text-child">
                      <span class="dot-text-child"> </span>
                      <span class="text-child-2"> Nhãn hiệu </span>
                    </div>
                  </v-expansion-panel-text>
                </router-link>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-title>
                  <div class="side-bar-title d-flex align-items-center">
                    <div class="icon">
                      <span class="icon-icon-product"> </span>
                    </div>
                    <!-- <div class="icon">
                                            <img src="https://minimals.cc/assets/icons/navbar/ic_product.svg" alt="">
                                        </div> -->
                    <div class="text ms-1">Quản lý sản phẩm</div>
                  </div>
                </v-expansion-panel-title>
                <router-link to="/product">
                  <v-expansion-panel-text>
                    <div class="text-child">
                      <span class="dot-text-child"> </span>
                      <span class="text-child-2"> Xem sản phẩm </span>
                    </div>
                  </v-expansion-panel-text>
                </router-link>
                <router-link to="/add-product-2">
                  <v-expansion-panel-text>
                    <div class="text-child">
                      <span class="dot-text-child"> </span>
                      <span class="text-child-2"> Thêm sản phẩm </span>
                    </div>
                  </v-expansion-panel-text>
                </router-link>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-title>
                  <div class="side-bar-title d-flex align-items-center">
                    <div class="icon">
                      <span class="icon-icon-order"> </span>
                    </div>
                    <!-- <div class="icon">
                                            <img src="https://minimals.cc/assets/icons/navbar/ic_order.svg" alt="">
                                        </div> -->
                    <div class="text ms-1">Quản lý đơn hàng</div>
                  </div>
                </v-expansion-panel-title>
                <router-link to="/order">
                  <v-expansion-panel-text>
                    <div class="text-child">
                      <span class="dot-text-child"> </span>
                      <span class="text-child-2"> Xem đơn hàng </span>
                    </div>
                  </v-expansion-panel-text>
                </router-link>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-title>
                  <div class="side-bar-title d-flex align-items-center">
                    <div class="icon">
                      <span class="icon-icon-user"> </span>
                    </div>
                    <!-- <div class="icon">
                                            <img src="https://minimals.cc/assets/icons/navbar/ic_order.svg" alt="">
                                        </div> -->
                    <div class="text ms-1">Quản lý người dùng</div>
                  </div>
                </v-expansion-panel-title>
                <router-link to="">
                  <v-expansion-panel-text>
                    <div class="text-child">
                      <span class="dot-text-child"> </span>
                      <span class="text-child-2"> Danh sách người dùng </span>
                    </div>
                  </v-expansion-panel-text>
                </router-link>
                <router-link to="">
                  <v-expansion-panel-text>
                    <div class="text-child">
                      <span class="dot-text-child"> </span>
                      <span class="text-child-2"> Danh sách người dùng </span>
                    </div>
                  </v-expansion-panel-text>
                </router-link>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </div>
      </div>
    </div>

    <div class="side-right">
      <div class="content mt-3">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    let test = 1;
    const handleTangTest = () => {
      test++;
      return console.log(test);
    };
    const panel = [0, 1, 2];

    const open = ref(false);
    const size = ref("default");
    const showDrawer = (val) => {
      size.value = val;
      open.value = true;
    };
    const onClose = () => {
      open.value = false;
    };

    const handleShow = (value) => {
      if (panel.includes(value)) {
        // Nếu giá trị đã tồn tại, xóa nó khỏi mảng
        const index = panel.indexOf(value);
        if (index !== -1) {
          panel.splice(index, 1);
        }
      } else {
        // Nếu giá trị không tồn tại, thêm nó vào mảng
        panel.push(value);
      }

      console.log(panel);
    };

    return {
      panel,
      handleShow,
      open,
      size,
      onClose,
      showDrawer,
      handleTangTest,
    };
  },
};
</script>
<style>
@import "./Layout.css";
/* #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  
  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }
  
  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }
  
  .site-layout .site-layout-background {
    background: #fff;
  } */
</style>
