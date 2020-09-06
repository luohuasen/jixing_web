<template>
  <div>
    <div class="banners"><img src="../../assets/upload/banner_a.jpg"></div>

    <div class="wrap">
      <div class="about">
        <div class="tabBox_t">
          <el-header style="font-size: 24px; font-weight: bolder">行业知识</el-header>
          <el-table :data="works" highlight-current-row  :show-overflow-tooltip="true" v-loading="listLoading">
            <el-table-column type="index" min-width="10%"> </el-table-column>
            <el-table-column prop="title" label="标题" min-width="70%"> </el-table-column>
            <el-table-column label="Icon图片" min-width="20%">
              <template slot-scope="scope">
                <img :src="scope.row.icon" style="max-height: 50px;max-width: 200px"/>
              </template>
            </el-table-column>
          </el-table>
          <el-col :span="24" class="toolbar">
            <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
            </el-pagination>
          </el-col>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getIndustryListPage } from '../../api/api';

  export default {
      data(){
        return {
          works: [],
          total: 0,
          page: 1,
          listLoading: false
        }
      },
      methods: {
        handleCurrentChange(val) {
          this.page = val;
          this.list();
        },
        //获取用户列表
        list() {
          let para = {
            pageNum: this.page,
            pageSize: 20
          };
          this.listLoading = true;
          getIndustryListPage(para).then((res) => {
            this.total = res.data.sum;
            this.works = res.data.list;
            this.listLoading = false;
          });
        }
      },
      mounted() {
        this.list();
      }
    }
</script>

<style scoped>

</style>
