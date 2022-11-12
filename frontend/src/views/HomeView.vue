<template>
  <div id="bigBody">
    <Frame />
    <div id="body">

    </div>
  </div>
</template>

<script>
import Frame from '@/components/Frame.vue'

export default {
  components: {
    Frame
  }
}
</script>

<style scoped>
  #bigBody {
    width: 100vw;
    height: 100vh;
  }

  #body {
    height: 100%;
    background-color: rgb(255, 142, 162);
  }
</style>
