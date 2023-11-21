<template>
  <div class="upload-avatar" :style="{ minHeight: props ? props?.height : ''}">
    <a-upload
    v-model:file-list="fileList"
    name="photo"
    list-type="picture-card"
    class="avatar-uploader"
    action="http://localhost:5000/file/single"
    :show-upload-list="false"
    @change="handleChange"
    :style="{ minHeight: props ? props?.height : ''}"
    
  >
    <!-- <span>{{ propsHeight.height }}</span> -->
    <img v-if="imageUrl" :src="imageUrl" alt="avatar" />

    <div v-else :style="{ minHeight: props ? props?.height : ''}" class="d-flex flex-column justify-content-center"  >
      <loading-outlined v-if="loading"></loading-outlined>
      <plus-outlined v-else></plus-outlined>
      <div class="ant-upload-text"
      >Upload</div>
    </div>
  </a-upload>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { message } from 'ant-design-vue';
import { defineProps } from 'vue';

const API_URL = import.meta.env.VITE_API_URL;
const fileList = ref([]);
const loading = ref(false);
const imageUrl = ref('');

const props = defineProps({
  handleGetLinkImg: Function,
  height: Number,
  imageUrl: String,
});

if(props?.imageUrl){
  imageUrl.value = API_URL+props.imageUrl;
  console.log(imageUrl.value);
}

const handleChange = info => {
  console.log(info);
  props.handleGetLinkImg(info.file.response);
  // if(info){
  //   imageUrl.value = URL.createObjectURL(info.file.originFileObj);
  // }
  if (info.file.status === 'done') {
    imageUrl.value = URL.createObjectURL(info.file.originFileObj);
  } else if (info.file.status === 'error') {
    loading.value = false;
    message.error('Upload error');
  }

};


  console.log("hello");
  console.log(props.propsHeight);
</script>
<style >
@import './Avartar.css';
/* .avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
} */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}

.ant-upload-select{
  width: 100%;
}

/* body > div:nth-child(4) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > div > span > div{
  width: 100% !important;
} */


</style>
