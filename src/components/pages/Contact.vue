<template>
  <div>
    <div class="banners"><img src="../../assets/upload/banner_a.jpg"></div>
    <div class="wrap">
      <div class="about">
        <div class="tabBox_t">
          <el-tabs v-model="activeName">
            <el-tab-pane label="联系方式" name="first"
                         align="center" style="padding: 0px 30% 0px 30%; font-size: 20px">
              <el-header style="font-size: 24px; font-weight: bolder">公司信息</el-header>
              <el-row>
                <el-col :span="12"><div class="grid-content bg-purple-dark">手机:</div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-dark" v-html="editForm.phone"></div></el-col>
              </el-row>
              <el-row>
                <el-col :span="12"><div class="grid-content bg-purple-dark">邮箱:</div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-dark" v-html="editForm.email"></div></el-col>
              </el-row>
              <el-row>
                <el-col :span="12"><div class="grid-content bg-purple-dark">地址:</div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-dark" v-html="editForm.address"></div></el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="在线留言" name="second">
              <el-form ref="form" :rules="rules" :model="form" label-width="100px" style="padding: 0px 30% 0px 30%; font-size: 20px">
                <el-form-item label="您的姓名：" prop="username">
                  <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="联系电话：" prop="phone">
                  <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="电子邮箱：" prop="email">
                  <el-input v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item label="微信/QQ：" prop="qq">
                  <el-input v-model="form.qq"></el-input>
                </el-form-item>
                <el-form-item label="公司名称：" prop="companyName">
                  <el-input v-model="form.companyName"></el-input>
                </el-form-item>
                <el-form-item label="留言内容：" prop="body">
                  <el-input type="textarea" rows="10" v-model="form.body"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">立即留言</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {findConfig,addLeaveWord } from '../../api/api';
  export default {
    name: 'App',
    data(){
      return {
        editForm: {
          phone: '',
          email: '',
          address: '',
        },
        activeName: "first",
        form: {
          username: '',
          phone: '',
          email: '',
          qq: '',
          companyName: '',
          body: '',
        },
        rules: {
          username: [
            { required: true, message: '请输入您的姓名', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入您的联系电话', trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      onSubmit(){
        this.$refs["form"].validate((valid) => {
          if (valid) {
            let para = Object.assign({}, this.form);
            addLeaveWord(para).then((res) => {
              this.$message({
                message: '提交成功',
                type: 'success'
              });
              this.$refs['form'].resetFields();
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
    mounted() {
      let para = { id: 7 };
      findConfig(para).then((res) =>{
        let data = res.data.data;
        let parse = JSON.parse(data.value);
        this.editForm = parse;
      }).catch(()=>{});
    }
  }
</script>

<style scoped>

</style>
