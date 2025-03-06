<template>
  <div id="main">
    <NavBar :socials-Selected = "true"></NavBar>
    <ViewSocials></ViewSocials>
  </div>
</template>

<script>
import NavBar from '@/components/Nav-Bar.vue'
import ViewSocials from '@/components/View-Socials.vue';
export default {
    name: 'view-socials',
  components: { 
    NavBar,
    ViewSocials
   },

}
</script>

<style scoped>
#main{
    height: 100%;
    width: 100%;
}
</style>