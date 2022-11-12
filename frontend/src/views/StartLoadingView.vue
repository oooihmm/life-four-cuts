<template>
    <div id="div1">
        <div id="div2">
            <div id="div3">
            인생 포즈를 원하시나요?
            </div>
            <img id="mainLogo" src="@/assets/logo.png" />
        </div>
    </div>
</template>

<script>
import router from '../router'
export default {
    name: 'StartLoading',
    mounted(){
        setTimeout(function() {
            console.log('ChangeToHome');
            router.push({path:'/home'});
        }, 3000);
    }
}
</script>

<style>
    #div1{
        width: 100vw;
        height:100vh;
        background: rgb(254, 219, 219);
    }

    #div2{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }

    #div3{
        text-align: center;
        color: rgb(200, 117, 117);
        font-weight: bold;
        font-style: italic;
    }

    #text{
        width:100%;
        height:100%;
    }

    #mainLogo {
        position: relative;
        width: 200px;
        margin: 30px;
    }
</style>
