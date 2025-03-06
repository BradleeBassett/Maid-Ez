<template>
  <div id="mainDiv">
    <NavBar :home-selected="true"></NavBar>
    <HomePage></HomePage>
  </div>
</template>

<script>
import NavBar from '@/components/Nav-Bar.vue';
import HomePage from '@/components/Home-Page.vue';

export default {
    name:"home-page",
    components: {
        NavBar,
        HomePage
    }
}
</script>

<style scoped>
#mainDiv{
    height: 100%;
    width: 100%;
}
</style>