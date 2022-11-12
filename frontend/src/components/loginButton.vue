<template>
  <div>
    <button id="login">로그인</button>
  </div>
</template>

<script>
export default {
  methods: {
    isNone() {
      const link = document.location.href
      const button = document.getElementById('login')
      if (link === 'http://localhost:8080/') {
        button.setAttribute('display', 'hidden')
      }
    }
  }
}
</script>

<style>
  button {
    height: 100%;
    padding: 0 10px 0 10px;

    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #login {
    display: flex;
    float: right;

    width: auto;
    height: 30px;
    margin: 20px 15px 20px 15px;
    font-size: 12px;
    font-weight: 500;
    color: rgb(255, 142, 162);
    background-color: white;
    border: 1px solid rgb(255, 142, 162);
    border-radius: 15px;
  }

  #login:hover {
    color: white;
    background-color: rgb(255, 142, 162);
  }

</style>