<template>
    <a-upload
      v-model:file-list="fileList"
      list-type="picture-card"
      class="avatar-uploader"
      :show-upload-list="false"
      multiple
      @change="handleChange"
    >
      <plus-outlined v-if="!loading" />
      <div v-else>
        <loading-outlined />
      </div>
    </a-upload>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { message } from 'ant-design-vue';
  import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
  
  export default {
    setup() {
      const fileList = ref([]);
      const loading = ref(false);
  
      const handleChange = info => {
        if (info.file.status === 'uploading') {
          loading.value = true;
          return;
        }
        if (info.file.status === 'done') {
          loading.value = false;
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          loading.value = false;
          message.error(`${info.file.name} file upload failed.`);
        }
      };
  
      return {
        fileList,
        loading,
        handleChange,
      };
    },
  };
  </script>
  
  <style scoped>
  .avatar-uploader {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 128px;
    height: 128px;
    background: #f7f7f7;
  }
  
  .ant-upload-list-picture-card .ant-upload-list-item {
    width: 128px;
    height: 128px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .ant-upload-list-picture-card .ant-upload-list-item-info {
    display: flex;
    flex-direction: column;
  }
  </style>
  