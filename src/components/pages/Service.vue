<template>
  <div>
    <div class="banners"><img src="../../assets/upload/banner_a.jpg"></div>
    <div class="wrap">
      <div class="about">
        <div class="tabBox_t" v-html="content">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {findConfig,updateConfig } from '../../api/api';
  export default {
    name: 'App',
    data(){
      return {
        content: `<p>hello world</p>`,
      }
    },
    methods: {

    },
    mounted() {
      let para = { id: 6 };
      findConfig(para).then((res) =>{
        var data = res.data.data;
        this.content = data.value;
      }).catch(()=>{});
    }
  }
</script>

<style scoped>

</style>
