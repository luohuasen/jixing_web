<template>
  <div>
    <div class="banners"><img src="../../assets/upload/banner_a.jpg"></div>

    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="[menuId + ' ']" @select="onChange">
          <template v-for="(item,index) in menuList">
          <el-submenu :index="item.id + ' '">
            <template slot="title"><i class="el-icon-message"></i>{{item.catagoryName}}</template>
            <el-menu-item v-for="(sub) in item.subList" :index="sub.id + ''">{{sub.subCatagoryName}}</el-menu-item>
          </el-submenu>
          </template>
        </el-menu>
      </el-aside>

      <el-main width="800px">
        <div>
          <ul>
            <li v-for="(item, index) in productList" style="display: inline; float: left">
              <a @dblclick="handleClick(index, item)">
                <el-image :src="item.icon" style="max-height: 300px;max-width: 300px"></el-image>
                <div class="des">{{item.productTitle}}</div>
              </a>
            </li>
          </ul>
        </div>
      </el-main>
    </el-container>
    <el-dialog :title="productTitle" :visible.sync="productVisible" :close-on-click-modal="false" :fullscreen="true">
      <div class="about" style="min-height: 400px">
        <div v-html="productBody"></div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="productVisible = false">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {getCatagoryList,getRelatedListProductInfoListPage} from '../../api/api';
    export default {
      data(){
          return{
            menuList: [],
            menuId: 1,
            subMenuId: 1,
            productList: [],
            productVisible: false,
            productBody: '',
            productTitle: ''
          }
        },
      methods: {
        getMenuList(){
          let para = {
          };
          getCatagoryList(para).then((res) => {
            this.menuList = res.data.list;
          });
        },
        onChange(index, indexPath){
          this.getProductList(index);
          this.subMenuId = index;
        },

        getProductList(){
          let para = {
            subCatagoryId: this.subMenuId
          };

          getRelatedListProductInfoListPage(para).then((res) => {
            this.productList = res.data.list;
          });
        },
        handleClick: function (index, row){
          this.productVisible = true;
          this.productBody = row.body;
          this.productTitle = row.productTitle;
        }
      },
      mounted() {
        this.getMenuList();
        this.getProductList(this.subMenuId);
      }
    }
</script>

<style scoped>

</style>
