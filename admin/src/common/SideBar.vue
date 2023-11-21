<template lang="">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo" >
            Hello
        </div>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item key="1">
            <user-outlined />
            <span>nav 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <video-camera-outlined />
            <span>nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <upload-outlined />
            <span>nav 3</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
 
 //   import { StarOutlined, StarFilled, StarTwoTone,MenuFoldOutlined,MenuUnfoldOutlined} from '@ant-design/icons-vue';
   const selectedKeys = ref(['1']);
     const collapsed = ref(window.innerWidth < 768); // Kiểm tra kích thước màn hình khi khởi tạo
 
     const updateCollapsedState = () => {
     collapsed.value = window.innerWidth < 768; // Cập nhật giá trị collapsed dựa trên kích thước màn hình
     };
 
     // Thêm sự kiện lắng nghe khi component được tạo và loại bỏ khi component bị hủy
     onMounted(() => {
         updateCollapsedState();
         window.addEventListener('resize', updateCollapsedState);
     });
 
     onBeforeUnmount(() => {
         window.removeEventListener('resize', updateCollapsedState);
     });

</script>
<style lang="">
    
</style>