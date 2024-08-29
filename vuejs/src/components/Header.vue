<template>
  <div>
    <!-- Modal -->
    <a-modal
      v-model:open="open"
      title="Login"
      :ok-button-props="{ style: { display: 'none' } }"
      :cancel-button-props="{ style: { display: 'none' } }"
    >
      <a-form
        :model="formState"
        name="normal_login"
        class="login-form"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="Username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-form-item name="remember" no-style>
            <a-checkbox v-model:checked="formState.remember"
              >Remember me</a-checkbox
            >
          </a-form-item>
          <a class="login-form-forgot" href="">Forgot password</a>
        </a-form-item>

        <a-form-item>
          <a-button
            :disabled="disabled"
            type="primary"
            html-type="submit"
            class="login-form-button"
          >
            Log in
          </a-button>
          Or
          <a href="">register now!</a>
        </a-form-item>
      </a-form>
    </a-modal>
    <!-- Header -->
    <header>
      <div id="menu-bar" class="fa fa-bars"></div>
      <a href="#" class="logo">Logo</a>
      <nav class="navbar">
        <a href="#home">Home</a>
        <a href="#product">Product</a>
        <a href="#featured">Featured</a>
        <a href="#blog">Blog</a>
        <a href="#news">News</a>
      </nav>
      <div class="icons">
        <!--  -->
        <a-badge count="0" show-zero>
          <a-dropdown trigger="click">
            <template #overlay>
              <a-menu @click="handleMenuClick">
                <a-menu-item key="1">
                  <UserOutlined />
                  1st
                </a-menu-item>
                <a-menu-item key="2">
                  <UserOutlined />
                  2nd
                </a-menu-item>
                <a-menu-item key="3">
                  <UserOutlined />
                  3rd
                </a-menu-item>
              </a-menu>
            </template>
            <a @click="handleMenuClick"><i class="fa fa-heart"></i></a>
          </a-dropdown>
        </a-badge>
        <!-- shop -->
        <a-badge count="0" show-zero>
          <a-dropdown trigger="click">
            <template #overlay>
              <a-menu @click="handleMenuClick">
                <a-menu-item key="1">
                  <UserOutlined />
                  1st
                </a-menu-item>
                <a-menu-item key="2">
                  <UserOutlined />
                  2nd
                </a-menu-item>
                <a-menu-item key="3">
                  <UserOutlined />
                  3rd
                </a-menu-item>
              </a-menu>
            </template>
            <a @click="handleMenuClick"><i class="fa fa-shopping-cart"></i></a>
          </a-dropdown>
          <!-- <a href="#"><i class="fa fa-shopping-cart"></i></a> -->
        </a-badge>
        <!-- login -->
        <a @click="showModal"><i class="fa fa-user"></i></a>
      </div>
    </header>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { ref } from "vue";
import { LockOutlined, UserOutlined } from "@ant-design/icons-vue";

const open = ref(false);

const showModal = () => {
  open.value = true;
};
const handleOk = (e) => {
  console.log(e);
  open.value = false;
};
const formState = reactive({
  username: "",
  password: "",
  remember: true,
});
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const handleButtonClick = (e) => {
  console.log("click left button", e);
};
const handleMenuClick = (e) => {
  console.log("click", e);
};
//
</script>

<style  scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  padding: 2rem 9%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}
header .logo {
  font-size: 2rem;
  color: #000;
  font-weight: 500;
}
header .navbar a {
  font-size: 1.5rem;
  color: #000;
  margin: 0 2rem;
}
header .navbar a:hover {
  color: orangered;
}
header .icons a {
  font-size: 2rem;
  color: #000;
  margin-left: 1.5rem;
}
header .icons a:hover {
  color: orangered;
}
#menu-bar {
  font-size: 2rem;
  padding: 0.5rem 1rem;
  border: 0.1rem solid #000;
  color: #000;
  border-radius: 0.3rem;
  cursor: pointer;
  display: none;
}
.login-form {
  max-width: 300px;
}
.login-form-forgot {
  float: right;
}
.login-form-button {
  width: 100%;
}
.demo-dropdown-wrap :deep(.ant-dropdown-button) {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
