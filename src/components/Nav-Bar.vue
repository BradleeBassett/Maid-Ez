<template>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <div id="NavBarMain">
    <router-link to="/" class="NavButton" :class="{selected: this.homeSelected}">Home</router-link>
    <router-link to="/pictures" class="NavButton" :class="{selected: this.picturesSelected}" >Pictures</router-link>
    <router-link  to="/socials"  class="NavButton" :class="{selected: this.socialsSelected}">Socials</router-link>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  props: {
      homeSelected: {
        type: Boolean
      },
      picturesSelected: {
        type: Boolean
      },
      socialsSelected: {
        type: Boolean
      }
      
    },
  methods: {
   
    
}
}
</script>

<style scoped>
#NavBarMain{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: auto;
  width: auto;
}
.NavButton{
width: 100%;
height: auto;
padding: 10px;
margin-left: 0px;
margin-right: 0px;
background: rgb(101, 194, 218);
border: 0px;
border-bottom: 2px solid black;
}
.NavButton:hover{
  background: rgb(145, 238, 255);
}
.selected{
  border: 2px solid black;
  border-bottom: 0px;
  background: rgb(235, 235, 235);
}
.selected:hover{
  background: rgb(235, 235, 235);
}
a{
  display: flex;
  justify-content: center;
  padding: 0px;
  text-decoration: none;
  color: black;
  font-family:'Roboto','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>