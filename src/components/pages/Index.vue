<template>
    <div>
      <div id="banner" class="banner">
        <div id="owl-demo" class="owl-carousel"></div>
      </div>

      <el-carousel indicator-position="outside" height="500px">
        <el-carousel-item v-for="(ban, index) in bannerList" :key="index">
          <h3><img :src="ban.image" height="100%" width="100%"></h3>
        </el-carousel-item>
      </el-carousel>
      <!--幻灯片-->
      <div class="bg_a">
        <div class="wrap">
          <div class="i_name">
            <p>OUR SERVICE</p>
            <em>我们的服务</em>
            <img src="../../assets/images/bg_1.png" alt=""/>
          </div>
          <ul class="i_service clearfix">
            <template v-for="(service, index) in serviceList">
              <li>
                <a>
                  <div class="tu">
                    <img :src="service.icon">
                  </div>
                  <div class="title">{{service.title}}</div>
                  <div class="ctn">{{service.content}}</div>
                </a>
              </li>
            </template>
          </ul>
        </div>
      </div>
      <div class="wrap">
        <div class="i_name">
          <p>THE PERMANENT WORKS</p>
          <em>吉兴产品</em>
          <img src="../../assets/images/bg_1.png" alt=""/>
        </div>
        <div class="works">
          <template v-for="(item, index) in productList">
            <dl class="clearfix">
              <dt>
                <img :src="item.bigImage" alt=""/>
                <div class="des">
                  <div class="title"><a href="">{{item.bigTitle}}</a></div>
                </div>
              </dt>
              <dd>
                <ul class="clearfix">
                  <li>
                    <img :src="item.image0" alt=""/>
                    <div class="des"><div class="title"><a>{{item.title0}}</a></div></div>
                  </li>
                  <li>
                    <img :src="item.image1" alt=""/>
                    <div class="des"><div class="title"><a>{{item.title1}}</a></div></div>
                  </li>
                  <li>
                    <img :src="item.image2" alt=""/>
                    <div class="des"><div class="title"><a>{{item.title2}}</a></div></div>
                  </li>
                  <li>
                    <img :src="item.image3" alt=""/>
                    <div class="des"><div class="title"><a>{{item.title3}}</a></div></div>
                  </li>
                </ul>
              </dd>
            </dl>
          </template>
          <div class="more"><a href=""><span>查看更多作品</span></a></div>
        </div>
      </div>
      <div class="bg_a">
        <div class="wrap">
          <div class="i_name">
            <p>THE PERMANENT WORKS</p>
            <em>关于吉兴</em>
            <img src="../../assets/images/bg_1.png" alt=""/>
          </div>
          <dl class="i_about clearfix">
            <dt><a href=""><img src="../../assets/upload/pic3.jpg" alt=""/></a></dt>
            <dd>
              <h6>jixing.DESIGN</h6>
              <p class="tip">{{infoMap.design}}</p>
              <span>服务内容</span>
              <p id="index_jixing_info_content">
                {{infoMap.content}}
              </p>
              <span>涉及行业</span>
              <p>{{infoMap.hangYe}}</p>
            </dd>
          </dl>
        </div>
      </div>
      <div class="wrap">
        <div class="i_name">
          <p>THE PERMANENT WORKS</p>
          <em>制作案例</em>
          <img src="../../assets/images/bg_1.png" alt=""/>
          <div class="i_news"></div>
          <div class="service">
            <template v-for="(item, index) in workList">
              <h6>{{item.title}}</h6>
              <ul class="clearfix">
                <li><img :src="item.img0"></li>
                <li><img :src="item.img1"></li>
                <li><img :src="item.img2"></li>
              </ul>
            </template>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import { getBannerListPage, getProductListPage, getWorkListPage, getServiceListPage,getConfigListPage } from '../../api/api';
    export default {
      data() {
          return{
            param:{
              pageNum: 1,
              pageSize: 20
            },
            bannerList:[],
            productList: [],
            workList: [],
            serviceList: [],
            infoMap:{
              design: "",
              content: '',
              hangYe: ''
            }
          }
      },
      methods: {
        initBannerList(){
          getBannerListPage(this.param).then((res)=>{
            res = res.data;
            if(res.code != 0){
              console.log(res);
              return;
            }
            this.bannerList = res.list;
          })
        },
        initProductList(){
          getProductListPage(this.param).then((res)=>{
            res = res.data;
            if(res.code != 0){
              console.log(res);
              return;
            }
            this.productList = res.list;
          })
        },
        initWorkList(){
          getWorkListPage(this.param).then((res)=>{
            res = res.data;
            if(res.code != 0){
              console.log(res);
              return;
            }
            this.workList = res.list;
          })
        },
        initServiceList(){
          getServiceListPage(this.param).then((res)=>{
            res = res.data;
            if(res.code != 0){
              console.log(res);
              return;
            }
            this.serviceList = res.list;
          })
        },
        initConfig(){
          getConfigListPage(this.param).then((res)=>{
            res = res.data;
            if(res.code != 0){
              console.log(res);
              return;
            }
            let list = res.list;
            let sum = list.length;

            for (let i = 0; i < sum; i++) {
              let item = list[i];
              let key = item.key;
              if(item.type == 'index_jixing_info'){
                this.infoMap[key] = item.value;
              }
            }
          })
        }
      },
      mounted() {
        this.initBannerList();
        this.initProductList();
        this.initWorkList();
        this.initServiceList();
        this.initConfig();
      }
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
