<template>
  <div id="app">
    <k-form :model="model" :rules="rules" ref="loginForm">
      <k-form-item label="用户名" prop="username">
        <Demo>
          <k-input v-model="model.username"></k-input>
        </Demo>
      </k-form-item>
      <k-form-item label="确认密码" prop="password">
        <k-input type="password" v-model="model.password"></k-input>
      </k-form-item>
      <k-form-item>
        <el-button @click="submitForm('loginForm')">提交</el-button>
      </k-form-item>
    </k-form>
  </div>
</template>

<script>
import KForm from "./components/KForm";
import KInput from "./components/KInput";
import KFormItem from "./components/KFormItem";
export default {
  name: "app",
  provide: {
    name: "哈哈哈我是谁"
  },
  components: {
    KForm,
    KInput,
    KFormItem
  },
  data() {
    return {
      name: "hansking",
      showMsg: false,
      model: { username: "", password: "" },
      rules: {
        username: [
          { required: true, message: "请输入用户名" },
          { type: "email", message: "邮箱格式不正确" }
        ],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  methods: {
    message() {
      this.showMsg = true;
      setTimeout(() => {
        this.showMsg = false;
      }, 2000);
      // window.alert()
      this.$Notice.info({
        content: "必须的！",
        duration: 200
      });
    },
    submitForm(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          alert("请求登录!");
        } else {
          alert("校验失败！");
        }
      });
    }
  }
};
</script>


