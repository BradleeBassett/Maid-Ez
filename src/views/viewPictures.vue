<template>
  <div id="main">
    <NavBar :pictures-selected="true"></NavBar>
    <ViewPictures></ViewPictures>
  </div>
</template>

<script>
import NavBar from '@/components/Nav-Bar.vue';
import ViewPictures from '@/components/View-Pictures';
export default {
    name: "view-pictures",
    components: {
        NavBar,
        ViewPictures
    }
}
</script>

<style scoped>
#main{
    height: 100%;
    width: 100%;
}
</style>