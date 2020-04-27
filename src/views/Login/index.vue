<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tap">
        <li v-for="item in menuTab" :key="item.id" :class="{'current': item.current}" @click="toggleMenu(item)">
          {{item.txt}}</li>
      </ul>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="loginForm" class="login-form" size="medium">

        <el-form-item prop="username" class="item-form">
          <label for="mail">邮箱</label>
          <el-input type="text" v-model="ruleForm.username" autocomplete="off" id="mail"></el-input>
        </el-form-item>

        <el-form-item prop="password" class="item-form">
          <label>密码</label>
          <el-input type="text" v-model="ruleForm.password" autocomplete="off" minlength="6" maxlength="20"></el-input>
        </el-form-item>

        <el-form-item prop="passwords" class="item-form" v-show="model === 'register'">
          <label>重复密码</label>
          <el-input type="text" v-model="ruleForm.passwords" autocomplete="off" minlength="6" maxlength="20"></el-input>
        </el-form-item>

        <el-form-item prop="code" class="item-form">
          <label>验证码</label>
          <el-row :gutter="10">
            <el-col :span="15">
              <el-input v-model.number="ruleForm.code" minlength="6" maxlength="6"></el-input>
            </el-col>
            <el-col :span="9">
              <el-button type="success" class="block" @click="getsms()">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item>
          <el-button type="danger" @click="submitForm('loginForm')" class="login-btn block"
            :disabled="loginButtonStatus">{{model==='login' ? "登录" : "注册"}}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
// import {Message} from 'element-ui';
import sha1 from "js-sha1";
import qs from "qs";
import { GetSms, Register, Login } from "@/api/login";
// import{xxx} from '@/api/login.js'
import {
  stripscript,
  validataEmail,
  validataPass,
  validataVcode
} from "@/utils/validates";
import { reactive, ref, isRef, toRefs, onMounted } from "@vue/composition-api";
export default {
  name: "login",
  setup(prop, { refs, root }) {
    //函数
    let validateCode = (rule, value, callback) => {
      // this.ruleForm.code = stripscript(value)
      value = ruleForm.code;
      if (!value) {
        return callback(new Error("请输入验证码"));
      } else if (validataVcode(value)) {
        return callback(new Error("验证码格式有误"));
      } else {
        callback();
      }
    };
    //下为验证用户名是否为邮箱的方法：validateusername
    let validateusername = (rule, value, callback) => {
      // if (value === "") {
      //   callback(new Error("请输入用户名"));
      // } else if (validataEmail(value)) {
      //   callback(new Error("用户名格式错误"));
      // } else {
      callback();
      // }
    };
    //下为验证密码是否符合格式的方法
    let validatePassword = (rule, value, callback) => {
      ruleForm.password = stripscript(value);
      value = ruleForm.password;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (validataPass(value)) {
        callback(new Error("密码为6-20位数字+字母!"));
      } else {
        callback();
      }
    };
    //下为验证**重复**密码是否符合格式的方法
    let validatePasswords = (rule, value, callback) => {
      if (model.value === "login") {
        callback();
      }
      ruleForm.passwords = stripscript(value);
      value = ruleForm.passwords;
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value != ruleForm.password) {
        callback(new Error("重复密码不正确 请再次输入"));
      } else {
        callback();
      }
    };

    /*----------------分-----------------------*/
    //主要放置dota数据，生命周期，自定义函数
    const menuTab = reactive([
      { txt: "登录", current: true, type: "login" },
      { txt: "注册", current: false, type: "register" }
    ]);
    // 模块值
    const model = ref("login");
    //表单绑定数据
    const ruleForm = reactive({
      username: "",
      password: "",
      passwords: "",
      code: ""
    });
    //表单验证数据
    const rules = reactive({
      username: [{ validator: validateusername, trigger: "blur" }],
      password: [{ validator: validatePassword, trigger: "blur" }],
      passwords: [{ validator: validatePasswords, trigger: "blur" }],
      code: [{ validator: validateCode, trigger: "blur" }]
    });
    const loginButtonStatus = ref(false);
    /**
     * 声明函数
     */
    const toggleMenu = data => {
      console.log(data);

      menuTab.forEach((elem, index) => {
        elem.current = false;
      });
      data.current = true;
      //登录注册切换 修改模块值
      model.value = data.type;
      //重置表单
      // refs:(...) == this.$refs
      // this.$refs[loginForm].resetFields(); -------->此为2.0写法
      // refs.loginForm.resetFields();---------------->3.0写法的另一种方法
      refs["loginForm"].resetFields();
    };
    const submitForm = formName => {
      console.log(model.value);

      refs[formName].validate(valid => {
        if (valid) {
          model.value === "login" ? login() : register();
          // alert("subm55555it!");

          //   if (model.value === "login") {
          //     login();
          //   } else {
          //     register();
          //   }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    //登录接口
    const login = () => {
      let requestData = {
        account: ruleForm.username,
        password: sha1(ruleForm.password)
      };

      let postData = qs.stringify({
        account: ruleForm.username,
        password: ruleForm.password
      });
      console.log(requestData);
      console.log(postData);
      Login(postData)
        .then(Response => {
          //console.log(response);
          //页面跳转
          console.log("login good!!!");
          root.timer = setTimeout(() => {
            root.$router.push({
              name: "Console"
            });
            console.log("ok");
          }, 1000);
          // root.$router.push({
          //   name: "Console"
          // });
        })
        .catch(error => {
          console.log(error);
        });
    };
    //注册接口
    const register = () => {
      let requestData = {
        account: ruleForm.username,
        password: sha1(ruleForm.password)
      };
      //数据转换为formdata
      let postData = qs.stringify({
        account: ruleForm.username,
        password: ruleForm.password
      });
      console.log(requestData);
      Register(postData)
        .then(Response => {
          console.log(Response);
          alert("submitsuccess!");
          toggleMenu(menuTab[0]);
        })
        .catch(error => {
          alert("NO!!submit!");
          console.log(error);
        });
    };
    /**
     * 获取验证码
     */
    const getsms = () => {
      if (ruleForm.username == "") {
        root.$message.error("邮箱不能为空");
        return false;
      }
      if (validataEmail(ruleForm.username)) {
        root.$message.error("格式有误！！！");
        return false;
      }
      /**
       * 下为只传输一个数据的代码与传输多组数据的代码
       */
      // GetSms({username:ruleForm.username})
      let ldata = { username: ruleForm.username };
      GetSms(ldata);

      // .then(response => {
      //   console.log(response)

      // }).catch(error => {
      //   console.log(error)
      // })
    };
    /**
     * 生命周期
     */
    //挂载完成后
    onMounted(() => {
      console.log(process.env.VUE_APP_ABC);
    });

    return {
      menuTab,
      model,
      toggleMenu,
      submitForm,
      ruleForm,
      rules,
      getsms,
      loginButtonStatus
    };
  }
};
</script>
<style lang="scss" scoped>
#login {
  height: 89vh;
  background-color: #344a5f;
  padding-top: 11vh;
}
.login-wrap {
  width: 330px;
  margin: auto;
}
.menu-tap {
  text-align: center;
  li {
    display: inline-block;
    width: 80px;
    line-height: 36px;
    font-size: 14px;
    color: #ffffff;
    border-radius: 2px;
  }
  .current {
    background-color: rgb(86, 168, 179);
  }
}
.login-form {
  margin-top: 29px;
  label {
    display: block;
    margin-bottom: 3px;
    font-size: 14px;
    color: #ffffff;
  }
  .item-form {
    margin-bottom: 13px;
  }
  .block {
    width: 100%;
    display: block;
  }
  .login-btn {
    margin-top: 19px;
  }
}
</style>