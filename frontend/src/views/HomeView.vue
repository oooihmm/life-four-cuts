<template>
  <div id="bigBody">
    <Frame />
    <div id="main">
      <span id="ment1">당신께 딱 어울릴</span>
      <span id="ment2">추천 포즈</span>
      <img id="randomImg" src="http://13.209.81.198:8083/randomPose">
      <span id="ment3" @click="click()">다른 포즈가 보고 싶다면?</span>
      <!-- <PoseImage /> -->
    </div>
  </div>
</template>

<script>
import Frame from '@/components/Frame.vue'
// import PoseImage from '@/components/PoseImage.vue'
import router from '../router'

export default {
  components: {
    Frame
    // PoseImage
  },
  methods: {
    click() {
      router.go()
    }
  }
}
</script>

<style scoped>
  #bigBody {
    width: 100vw;
    height: 100vh;
    margin: auto;
    max-width:525px;
    min-height:670px;
  }

  #main {
    height: 100vh;
    overflow: scroll;
    background-color: rgb(255, 142, 162);

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    color: white;
  }

  #ment1 {
    margin-top: 5%;
  }

  #ment2 {
    color: black;
    font-size: 50px;
    font-weight: 800;
  }

  #ment3 {
    background-color: black;
    /* color: rgb(255, 142, 162); */
    color: white;

    padding: 10px;
    margin: 5%;
    font-weight: 800;
    border: 1px solid rgb(255, 142, 162);
    border-radius: 15px;
  }

  #randomImg {
    width: 90%;
    margin: 5% 5% 0px 5%;
  }
</style>
