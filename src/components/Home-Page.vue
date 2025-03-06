<template>
  <div id="main">
    <div id="PageHeader"> 
        <img id="logo" src="..\assets\LogoV4.png"/>
    </div>
    <div id="panel"> 
        <ServicesBanner :-header="'Supported Locations'"></ServicesBanner>
        <ServicesBanner :-header="'Services'"></ServicesBanner>
    </div>
    <div id="panel">

    </div>
    <div id="panel"> 

    </div>
  </div>
</template>

<script>

import ServicesBanner from '@/homeComponents/Services-Banner.vue';

export default {
    components: {
        ServicesBanner
    }
}
</script>

<style scoped>
#main{
    display: flex;
    width: 100%;
    height: 100%;
    background: rgb(235, 235, 235);
    border: 2px solid black;
    border-top: 0px;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
#PageHeader{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25%;
    width: 70%;
    border-radius: 10px;
}
#panel{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 70%;
    background: linear-gradient(to top left,rgb(192, 192, 192), rgb(224, 224, 224) );
    margin: 20px;
    border-radius: 10px;
    border: 2px solid rgb(101, 194, 218);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}
#logo{
    height: 100%;
    width: 25%;
}
</style>