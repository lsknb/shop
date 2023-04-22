<template>
  <div class="content">
    <div class="box">
      <div class="left">
        <div class="left-tips">
          <img src="./images/logo.png" alt="" />
          <span>欢迎来到京西！</span>
          <div class="canvas3d-box">
            <canvas id="canvas3d"></canvas>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="login-wrapper">
          <div class="form-wrapper">
            <input
              type="text"
              placeholder="手机号"
              class="inputs"
              v-model="phone"
            />
            <input
              type="text"
              placeholder="验证码"
              class="inputs"
              v-model="code"
            />
            <input type="password" placeholder="密码" class="inputs" v-model="password" />
            <input type="password" placeholder="确认密码" class="inputs" v-model="password1"/>

            <button class="btn" @click="getCode()">获取验证码</button>
            <button class="btn" @click="userRegister">注册</button>
            <div class="tips"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
 <script>
export default {
  data() {
    return {
      phone: "",
      code: "",
      password:"",
      password1:""
    };
  },
  methods: {
    async getCode() {
      try {
        //如果获取到验证码
        const { phone } = this;
        phone & (await this.$store.dispatch("getCode", phone));
        //将组件的code属性值变为仓库中验证码[验证码直接自己填写了]
        this.code = this.$store.state.user.code;
      } catch (error) {}
    },
    async userRegister(){
      try {
        const{phone,code,password,password1}=this;
        console.log(phone,code,password);
      (phone&&code&&password==password1)&&await this.$store.dispatch('userRegister',{phone,code,password})
      this.$router.push('/Login')
      } catch (error) {
        
      }
    }
  },
};
</script>
 
 <style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: "Times New Roman", Times, serif;
}

.content {
  width: 100vw;
  height: 100vh;
  position: relative;
  margin: 0;
  min-height: 100vh;
  background-color: #abc6f8;
  background-image: radial-gradient(
      closest-side,
      rgb(245, 194, 175),
      rgba(235, 105, 78, 0)
    ),
    radial-gradient(closest-side, rgb(243, 203, 222), rgba(243, 11, 164, 0)),
    radial-gradient(closest-side, rgb(206, 230, 241), rgba(254, 234, 131, 0)),
    radial-gradient(closest-side, rgb(216, 217, 247), rgba(170, 142, 245, 0)),
    radial-gradient(closest-side, rgb(245, 217, 239), rgba(248, 192, 147, 0));
  background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax,
    110vmax 110vmax, 90vmax 90vmax;
  background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax,
    -30vmax -10vmax, 50vmax 50vmax;
  background-repeat: no-repeat;
  animation: 10s movement linear infinite;
}
.content .box {
  width: 70%;
  height: 75%;
  background-color: #fff;
  border-radius: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.content .box .left {
  width: 45%;
  border-radius: 30px 0 0 30px;
  background-color: #fdca76;
  height: 100%;
  position: absolute;
  padding: 40px;
  box-sizing: border-box;
  color: #fff;
  font-size: 25px;
  font-weight: 100;
}
.content .box .left img {
  width: 80px;
  height: 80px;
  display: block;
  border-radius: 50%;
}
.content .box .left span {
  position: relative;
  top: 10px;
}
.content .box .left .canvas3d-box {
  position: absolute;
  width: 70vw;
  height: 70vh;
  z-index: 1;
  left: -50%;
  top: 13%;
}
.content .box .right {
  width: 59%;
  border-radius: 50px 30px 30px 50px;
  position: absolute;
  right: 0;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content .box .right .login-wrapper {
  width: 60%;
  position: relative;
  z-index: 2;
}
.content .box .right .login-wrapper .create-tips {
  margin: 20px 0;
}
.content .box .right .login-wrapper .other-login {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.content .box .right .login-wrapper .other-login .qq-login {
  margin-right: 10px;
}
.content .box .right .login-wrapper .other-login .webchat-login {
  margin-left: 10px;
}
.content .box .right .login-wrapper .other-login .other-login-items {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #d8d8d8;
  text-align: center;
  vertical-align: middle;
  padding-top: 5px;
  box-sizing: border-box;
  transition: 0.3s;
  cursor: pointer;
}
.content .box .right .login-wrapper .other-login .other-login-items img {
  width: 35px;
  height: 35px;
  vertical-align: middle;
}
.content .box .right .login-wrapper .other-login .other-login-items:hover {
  border: 1px solid rgb(235, 112, 161);
}
.content .box .right .login-wrapper .or {
  text-align: center;
  margin: 20px 0;
}
.content .box .right .login-wrapper .form-wrapper {
  position: relative;
  z-index: 3;
}
.content .box .right .login-wrapper .form-wrapper .inputs {
  width: 100%;
  height: 55px;
  border: 0;
  border-bottom: 1px solid #6b6b6b;
  margin: 20px 0;
  padding: 20px;
  box-sizing: border-box;
  outline: none;
  letter-spacing: 2px;
  font-weight: 100;
  font-size: 24px;
  transition: 0.3s;
}
.content .box .right .login-wrapper .form-wrapper .inputs:focus {
  border-bottom: 1px solid rgb(235, 112, 161);
}
.content .box .right .login-wrapper .form-wrapper .btn {
  width: 100%;
  height: 55px;
  border-radius: 15px;
  font-size: 25px;
  color: #fff;
  background-color: #fdca76;
  border: 0;
  cursor: pointer;
  margin: 20px 0;
  transition: 0.3s;
}
.content .box .right .login-wrapper .form-wrapper .btn:hover {
  background-color: rgb(235, 112, 161);
}
.content .box .right .login-wrapper .form-wrapper .tips {
  font-size: 20px;
}
.content .box .right .login-wrapper .form-wrapper .tips span:last-child {
  color: rgb(242, 158, 192);
  cursor: pointer;
  transition: 0.3s;
}
.content .box .right .login-wrapper .form-wrapper .tips span:last-child:hover {
  color: #fdca76;
} /*# sourceMappingURL=style.css.map */
</style>