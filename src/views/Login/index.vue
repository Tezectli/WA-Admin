<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tap">
        <li v-for="item in menuTab" :key="item.id" :class="{'current': item.current}" @click="toggleMneu(item)">{{item.txt}}</li>
      </ul>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form" size="medium">
        
        <el-form-item prop="username" class="item-form">
          <label>邮箱</label>
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
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
            <el-col :span="15"><el-input v-model.number="ruleForm.code" minlength="6" maxlength="6"></el-input></el-col>
            <el-col :span="9">
              <el-button type="success"  class="block">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        
        <el-form-item>
          <el-button type="danger" @click="submitForm('ruleForm')" class="login-btn block">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import{ stripscript,validataEmail,validataPass,validataVcode } from '@/utils/validates'
export default {
  name: "login",
  data(){
        var validateCode = (rule, value, callback) => {
        // this.ruleForm.code = stripscript(value)
        value = this.ruleForm.code
        if (!value) {
          return callback(new Error('请输入验证码'));
        } else if(validataVcode(value)){
          return callback(new Error('验证码格式有误'));
        } else {
          callback();
        }
      };
      //下为验证用户名是否为邮箱的方法：validateusername
      var validateusername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else if(validataEmail(value)){
          callback(new Error('用户名格式错误'));
        } else{
          callback();
        }
      };
      //下为验证密码是否符合格式的方法
      var validatePassword = (rule, value, callback) => {
        this.ruleForm.password = stripscript(value)
        value = this.ruleForm.password
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (validataPass(value)) {
          callback(new Error('密码为6-20位数字+字母!'));
        } else {
          callback();
        }
      };
            //下为验证**重复**密码是否符合格式的方法
      var validatePasswords = (rule, value, callback) => {
        if(this.model === 'login'){ callback(); }
        this.ruleForm.passwords = stripscript(value)
        value = this.ruleForm.passwords
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value != this.ruleForm.password) {
          callback(new Error('重复密码不正确 请再次输入'));
        } else {
          callback();
        }
      };
    return{
      menuTab:[
        {txt:'登录',current:false,type:'login'},
        {txt:'注册',current:true,type:'register'}
      ],
      model:'register',
      // isActive:true
      //以下为表单数据
      ruleForm: {
          username: '',
          password: '',
          passwords:'',
          code: ''
        },
        rules: {
          username: [
            { validator: validateusername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ],
          passwords: [
            { validator: validatePasswords, trigger: 'blur' }
          ],          
          code: [
            { validator: validateCode, trigger: 'blur' }
          ]
        }
    }
  },
  methods:{
    toggleMneu(data){
      this.menuTab.forEach((elem,index) => {
        elem.current = false
      });
      data.current=true
      //登录注册切换 修改模块值
      this.model=data.type
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  }
};
</script>
<style lang="scss" scoped>
#login {
  height: 100vh;
  background-color: #344a5f;
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
  .item-form { margin-bottom: 13px;}
  .block {
    width: 100%;
    display: block;
    }
  .login-btn {
    margin-top: 19px;
  }
}
</style>