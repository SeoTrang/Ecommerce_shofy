<template lang="">
    <div>
        <span>count is : {{count}}</span>
        <button v-on:click="handleCount">count</button>
    </div>
</template>
<script>
import { ref } from 'vue';

export default {
    
    setup() {
        const count = ref(0)
        const handleCount = () => {
            return count.value++;
        }

        // expose the ref to the template
        return {
            count,
            handleCount
        }
  }
}
</script>
<style lang="">
    
</style>