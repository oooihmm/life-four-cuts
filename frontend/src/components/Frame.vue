<template>
  <div id="body">
    <header>
      <div class="nav" id="logo">
        <router-link to="/">
          <img src="@/assets/logo.png" id="logoImg">
        </router-link>
      </div>
      <router-link to="/login">
        <login v-show="show"/>
      </router-link>
    </header>
  </div>
</template>

<script>
import login from '@/components/loginButton.vue'

export default {
  components: {
    login
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
    isNone() {
      const link = document.location.href
      const loginLink = 'http://localhost:8080/login'
      console.log(link)
      if (link === loginLink) {
        this.show = false
      }
    }
  },
  mounted() {
    this.isNone()
  }
}
</script>

<style scoped>
  header {
    height: 70px;
    width: 100wh;
    position:relative;
    background-color: white;
  }

  .nav {
    height: 100%;
    padding: 0 10px 0 10px;

    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #logo {
    width: 100px;
    position:absolute;
    left:50%;
    margin-left:-50px;
  }

  #logoImg {
    height: 50px;
  }
</style>
