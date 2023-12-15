<template>
  <div class="upload-avatar" :style="{ minHeight: props ? props?.height : ''}">
    <a-upload
      v-model:file-list="fileList"
      name="photo"
      list-type="picture-card"
      class="avatar-uploader"
      :show-upload-list="false"
      @change="handleChange"
      action="http://localhost:5000/file/single"
      :style="{ minHeight: props ? props?.height : ''}"
      multiple
    >
      <div v-if="fileList1.length > 0">
        <div class="list-img">
          <div v-for="(file, index) in fileList1" :key="file.uid" class="list-item">
            <img :src="API_URL+file" alt="avatar" class="avatar-image" />
            <div class="action">
              <i class="fa-solid fa-eye"></i>
              <i @click="actionDelete" class="fa-solid fa-trash"></i>

            </div>
          </div>
        </div>
      </div>

      <div v-else :style="{ minHeight: props ? props?.height : ''}" class="d-flex flex-column justify-content-center">
        <loading-outlined v-if="loading"></loading-outlined>
        <plus-outlined v-else></plus-outlined>
        <div class="ant-upload-text">Upload</div>
      </div>
    </a-upload>
  </div>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue';
import { message } from 'ant-design-vue';
import { defineProps } from 'vue';

const fileList = ref([]);
const fileList1 = ref([]); // Mảng chứa danh sách các ảnh
const loading = ref(false);


const API_URL = import.meta.env.VITE_API_URL;


const props = defineProps({
  handleGetLinkImg: Function,
  height: Number,
  ListImg: [],
});

watchEffect(() => {
  console.log(props.ListImg);
  fileList1.value = props.ListImg;
  fileList.value.push =  props.ListImg;
});

if(props?.imageUrl){
  imageUrl.value = API_URL+props.imageUrl;
  console.log(imageUrl.value);
}

const handleChange = info => {
  
  if (info.file.status === 'done') {
    // console.log(info);
    props.handleGetLinkImg(info.file.response);
    const newFile = {
      uid: info.file.uid,
      name: info.file.name,
      url: URL.createObjectURL(info.file.originFileObj)
    };
    console.log(newFile);
    // Thêm ảnh mới vào danh sách fileList
    // fileList1.value.push(newFile);
   } else if (info.file.status === 'error') {
    loading.value = false;
    message.error('Upload error');
  }
};


const actionDelete = (e) => {
    // Hủy bỏ sự kiện click của thẻ cha
    e.stopPropagation();
    console.log(e);
    console.log("hello");
    // Thêm xử lý khi click vào biểu tượng xóa ở đây
};




// const propsHeight = defineProps(['height']);
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
