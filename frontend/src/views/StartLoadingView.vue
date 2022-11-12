<template>
  <div id="div1">
    <img id="logo" src="@/assets/logo.png" />
    <div id="div2">
        인생 포즈를 원하시나요?
    </div>
  </div>
</template>

<script>
import router from "../router"
export default {
    name: 'StartLoading',
    components: {
    },
    mounted(){
        setTimeout(function() {
            console.log('ChangeToHome');
            router.push({path:'/'});
        }, 3000);
    }
}
</script>

<style>
    #div1{
        weight:100%;
        height:100%;
        background: rgb(254, 219, 219);
    }

    #div2{
        text-align: center;
        margin-top: -10px;
        color: rgb(200, 117, 117);
        font-weight: bold;
        font-style: italic;
    }

    #text{
        weight:100%;
        height:100%;
    }

    #logo {
        position: relative; 
        top: 50%; 
        left: 50%; 
        transform: translate(-50%, -50%); 
        width: 50%;
        height: 30%;
    }
</style>
