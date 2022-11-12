<template>
<div class="login-wrap">
  <Frame/>
  <div class="login-html">
    <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign In</label>
    <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label>
    <div class="login-form">
      <div class="sign-in-htm">
        <div class="group">
          <label for="loginUser" class="label">Username</label>
          <input id="loginUser" type="text" class="input">
        </div>
        <div class="group">
          <label for="pass" class="label">Password</label>
          <input id="pass" type="password" class="input" data-type="password">
        </div>
        <div class="group">
          <input type="submit" class="button" value="Sign In" @click="signIn()">
        </div>
        <div class="hr"></div>
      </div>
      <div class="sign-up-htm">
        <div class="group">
          <label for="signUpUser" class="label">Username</label>
          <input id="signUpUser" type="text" class="input">
        </div>
        <div class="group">
          <label for="pass" class="label">Password</label>
          <input id="password1" type="password" class="input" data-type="password">
        </div>
        <div class="group">
          <label for="pass" class="label">Repeat Password</label>
          <input id="password2" type="password" class="input" data-type="password">
        </div>
        <div class="group">
          <input type="submit" class="button" id="signUp"
            value="Sign Up" name="Sign up" @click="signUp()">
        </div>
        <div class="foot-lnk">
        </div>
      </div>
    </div>
  </div>
</div>
</template>
  
<script>
import Frame from '../components/Frame.vue'
import router from '../router'

export default {
  name: 'App',
  components: {
    Frame
  },
  methods: {
    signUp() {
      const signUpUser = document.getElementById('signUpUser').value
      const password1 = document.getElementById('password1').value
      const password2 = document.getElementById('password2').value
      if((signUpUser === '') || (password1 === '') || password2 === '') {
        alert('정보를 모두 입력해주세요.')
      } else {
        if (password1 === password2) {
          alert('회원가입에 성공했습니다.')
          router.go()
        } else { alert('비밀번호가 일치하지 않습니다. 다시 입력해주세요.') }
      }
    },
    signIn() {
      const loginUser = document.getElementById('loginUser').value
      const password = document.getElementById('pass').value
      if ((loginUser === '') || (password === '')) {
        alert('정보를 모두 입력해주세요')
      } else {
        alert('로그인에 성공했습니다.')
        router.push({path:'/home'})
      }
    }
  }
}

</script>
  
<style>
body{
  margin:0;
  color:rgb(200, 117, 117);
  background:#c8c8c8;
  font:600 16px/18px 'Open Sans',sans-serif;
}
*,:after,:before{box-sizing:border-box}
.clearfix:after,.clearfix:before{content:'';display:table}
.clearfix:after{clear:both;display:block}
a{color:inherit;text-decoration:none}

.login-wrap{
  width:100vw;
  height: 100vh;
  margin:auto;
  max-width:525px;
  min-height:670px;
  position:relative;
}
.login-html{
  width:100%;
  height:100%;
  position:absolute;
  padding:90px 70px 50px 70px;
  background:rgb(254, 219, 219);
}
.login-html .sign-in-htm,
.login-html .sign-up-htm{
  top:0;
  left:0;
  right:0;
  bottom:0;
  position:absolute;
  transform:rotateY(180deg);
  backface-visibility:hidden;
  transition:all .4s linear;
}
.login-html .sign-in,
.login-html .sign-up,
.login-form .group .check{
  display:none;
}
.login-html .tab,
.login-form .group .label,
.login-form .group .button{
  text-transform:uppercase;
}
.login-html .tab{
  font-size:22px;
  margin-right:15px;
  padding-bottom:5px;
  margin:0 15px 10px 0;
  display:inline-block;
  border-bottom:2px solid transparent;
}
.login-html .sign-in:checked + .tab,
.login-html .sign-up:checked + .tab{
  color:rgb(255, 142, 162);
  border-color:rgb(255, 142, 162);
}
.login-form{
  min-height:20em;
  position:relative;
  perspective:1000px;
  transform-style:preserve-3d;
}
.login-form .group{
  margin-bottom:1em;
}
.login-form .group .label,
.login-form .group .input,
.login-form .group .button{
  width:100%;
  color:black;
  display:block;
}
.login-form .group .input,
.login-form .group .button{
  border:none;
  padding:15px 20px;
  border-radius:20px;
  background:white;
}
.login-form .group input[data-type="password"]{
  text-security:circle;
  -webkit-text-security:circle;
}
.login-form .group .label{
  color:#aaa;
  font-size:12px;
}
.login-form .group .button{
  background:rgb(255, 142, 162);
}
.login-form .group label .icon{
  width:15px;
  height:15px;
  border-radius:2px;
  position:relative;
  display:inline-block;
  background:white;
}
.login-form .group label .icon:before,
.login-form .group label .icon:after{
  content:'';
  width:10px;
  height:2px;
  background:#fff;
  position:absolute;
  transition:all .2s ease-in-out 0s;
}
.login-form .group label .icon:before{
  left:3px;
  width:5px;
  bottom:6px;
  transform:scale(0) rotate(0);
}
.login-form .group label .icon:after{
  top:6px;
  right:0;
  transform:scale(0) rotate(0);
}
.login-form .group .check:checked + label{
  color:black;
}
.login-form .group .check:checked + label .icon{
  background:rgb(255, 142, 162);
}
.login-form .group .check:checked + label .icon:before{
  transform:scale(1) rotate(45deg);
}
.login-form .group .check:checked + label .icon:after{
  transform:scale(1) rotate(-45deg);
}
.login-html .sign-in:checked + .tab + .sign-up + .tab + .login-form .sign-in-htm{
  transform:rotate(0);
}
.login-html .sign-up:checked + .tab + .login-form .sign-up-htm{
  transform:rotate(0);
}

.foot-lnk{
  text-align:center;
}
</style>