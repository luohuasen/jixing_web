<template>
  <el-container>
    <el-header>
      <el-row :span="24">
        <el-col :span="8">
          <div class="logo">
            <a href=""><img src="./assets/logo.png" alt="吉兴广告装饰"/></a>
          </div>
        </el-col>
        <el-col :span="16">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
            <template v-for="(item,index) in $router.options.routes">
              <template v-if="!item.leaf">
                <el-submenu :index="item.path">
                  <template slot="title">{{item.name}}</template>
                  <el-menu-item v-for="subItem in item.children" :index="subItem.path" :key="subItem.path">{{subItem.name}}</el-menu-item>
                </el-submenu>
              </template>
              <template v-else>
                <el-menu-item :index="item.path">{{item.name}}</el-menu-item>
              </template>
            </template>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </el-main>
    <el-footer>
        <el-row :span="24" class="bg_b">
          <div class="wrap f_zx">
            <p id="index_information">
              吉兴广告装饰团队衷心希望成为您的商业合作伙伴，并以专业的态度和真诚的服务，赢得您的信任与支持。 相信我们的服务将会为您创造更高的经济效益！
            </p>
            <a href="">立即咨询</a>
          </div>
        </el-row>

      <div class="bg_c">
        <div class="wrap">
          <ul class="foot clearfix">
            <li>
              <a href="" class="f_logo"><img src="assets/images/0001.png" alt=""/></a>
              <p>Copyright ® 2015 - 2028</p>
              <p>Jixing advertising decoration Co., Ltd.</p>
              <p>All Rights Reserved.</p>
              <p>深圳市吉兴广告装饰有限公司</p>
              <p><a href="http://beian.miit.gov.cn" target="_blank" style="color:#FFFFFF">粤ICP备18039833号</a></p>
            </li>
            <li class="f_a">
              <b>联系方式</b>
              <p class="f_a1">深圳市龙华区民治街道向南4区20栋松花大厦415</p>
              <p class="f_a2">手机：13113662418</p>
              <p class="f_a3">电子邮箱：295573384@qq.com</p>
            </li>
            <li class="f_b">
              <div class="f_bm">
                <b>友情链接</b>
                <span><a href="">设计公司</a></span>
                <span><a href="">设计公司</a></span>
                <span><a href="">深圳VI设计</a></span>
                <span><a href="">深圳VI设计</a></span>
                <span><a href="">深圳设计公司</a></span>
                <span><a href="">深圳设计公司</a></span>
                <div class="code">
                  <img src="assets/images/code.jpg" alt=""/>
                  <p>扫二维码 联系我们</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>


      <dl class="toolbar" id="toolbar">
        <dd><a class="slide tel slide-tel" href="tel:13113662418" title="咨询热线" style="width: 0px;background-image:url(Assets/images/icon2.jpg)no-repeat" ><i><span></span></i>13113662418</a></dd>
        <dd><a id="toolbar_qq" href="tencent://message/?uin=295573384&amp;Menu=yes" title="在线QQ"><i class="qq"><span></span></i></a></dd>
        <dd>
          <i class="code">
            <span></span>
          </i>
          <ul class="pop pop-code">
            <li>
              <img src="Assets/images/code.jpg" alt="深圳市吉兴广告装饰有限公司"><h3><b>微信号：13113662418</b>微信二维码</h3>
            </li>
          </ul>
        </dd>
        <dd> <a href="javascript:;"><i id="top" class="top"><span></span></i></a></dd>
      </dl>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
      data() {
        return {
          activeIndex: '/index',
          activeIndex2: '1'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
        }
      }
    }
</script>

<style scoped>
  .logo {
    width:230px;
    height:60px;
    font-size: 22px;
    padding-left:20px;
    padding-right:20px;
    border-color: rgba(238,241,146,0.3);
    border-right-width: 1px;
    border-right-style: solid;
  }
  .tools{
    padding: 0px 23px;
    width:14px;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
  }

  .index_information{
    width:100%;
    background:#5AB531;
    padding:25px 0;
    position:relative;
  }

  .index_information p{ width:815px; font-size:18px; color:#FFF; line-height:100%;}
  .index_information a{ display:block; width:210px; height:60px; background:#FFF; position:absolute; right:0; top:27px; color:#5AB531; font-size:24px; text-align:center; line-height:60px;}

</style>
