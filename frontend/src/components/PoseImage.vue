<template>
  <div id="imageBox">
    <ul class="wrap">
      <li class="item" v-for="(pose, idx) in pose" :key="{idx}">
          <img :src="pose.file">
          <span class="tit">{{pose.name}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pose: [
        {
          name: '하트컷',
          file: require('@/assets/pose/2.jpg'),
          number: 2
        },
        {
          name: '새싹컷',
          file: require('@/assets/pose/3.jpg'),
          number: 2
        },
        {
          name: '연결컷',
          file: require('@/assets/pose/4.jpg'),
          number: 2
        },
        {
          name: '끌려가기컷',
          file: require('@/assets/pose/5.jpg'),
          number: 2
        },
        {
          name: '산발컷',
          file: require('@/assets/pose/6.jpg'),
          number: 2
        },
        {
          name: '친한척컷',
          file: require('@/assets/pose/7.jpg'),
          number: 2
        },
        {
          name: '패트와매트컷',
          file: require('@/assets/pose/8.jpg'),
          number: 2
        },
        {
          name: '희도유림컷',
          file: require('@/assets/pose/9.jpg'),
          number: 2
        },
        {
          name: '패트와매트컷2',
          file: require('@/assets/pose/10.jpg'),
          number: 2
        }
      ]
    }
  }
}
</script>

<style>
#imageBox {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  height: 150px;
}
</style>
