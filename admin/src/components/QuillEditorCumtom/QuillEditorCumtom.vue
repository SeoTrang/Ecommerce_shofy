<template>
  <div>
    <QuillEditor
    ref="quill"
    :modules="modules"
    toolbar="full"
    v-model="quillValue"
    id="quillEditor"
    @textChange="textChange"
  />
  <!-- <button @click="submit">Submit</button> -->
  </div>
</template>

<script>
import { ref, defineComponent, onMounted,  toRefs } from 'vue';
import { QuillEditor } from '@vueup/vue-quill';
import BlotFormatter from 'quill-blot-formatter';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { defineProps } from 'vue';

export default defineComponent({
  components: {
    QuillEditor,
  },
  props: {
    handleGetContent1: Function,
    contentArticle: String,
  },
  setup(props) {
    const { handleGetContent1, contentArticle } = toRefs(props);
    // const props = defineProps({
    //   handleGetContent1: Function,
    //   contentArticle: String
    // });

    // const { handleGetContent, content } = toRefs(props);

    const modules = {
      name: 'blotFormatter',
      module: BlotFormatter,
      options: {/* options */}
    }

    const quillValue = ref('');
    const test = ref('');
    const quillRef = ref(null);
  

    const submit = () => {
      let content = document.querySelector('#quillEditor .ql-editor').innerHTML;
      console.log(content);
      console.log(props.contentArticle);
      props.handleGetContent1(content);
    

    }

    const textChange = () => {
      // quillValue.value = props;

      let content = document.querySelector('#quillEditor .ql-editor').innerHTML;
      // console.log(content);
      props.handleGetContent1(content);
      // console.log(quillValue.value);
    }

    const handleBlur = () => {
      
    }

    const editorChange = (content, delta, source, editor) => {
      console.log('Editor content changed:', content);
    }

    onMounted(() => {
      
      // Lắng nghe sự kiện khi click vào nút chèn ảnh trong toolbar
      //const imageInput = document.querySelector('#app > div.layout > div.side-right > div > div > div > div.box-page-1.mt-4 > div > div > div:nth-child(16) > div > div.ql-toolbar.ql-snow > input');
      const imageButton = document.querySelector('.ql-image');
      const toolbar = document.querySelector('.ql-toolbar');
      const insertImg = imageButton.querySelector('svg');
      console.log(insertImg);
    
      // console.log(toolbar);
      imageButton.disabled = true;
      
      console.log(imageButton);
      if (imageButton) {
        imageButton.addEventListener('click', (e) => {
          
          // Thực hiện xử lý khi click vào nút chèn ảnh
          console.log('Insert image button clicked');
          // Hiển thị modal tại đây để upload ảnh và xử lý
        });
      }
      if (insertImg) {
        insertImg.addEventListener('click', (e) => {
          console.log('hello');
          // Thực hiện xử lý khi click vào nút chèn ảnh
          console.log('Insert image button clicked');
          // Hiển thị modal tại đây để upload ảnh và xử lý
        });
      }
    });

    return { modules, quillValue, submit, textChange, test, editorChange, handleBlur };
  },
});
</script>

<style>
.ql-container {
  min-height: 200px;
}
</style>
