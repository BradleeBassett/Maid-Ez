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
  height: 10%;
  width: auto;
}
.NavButton{
width: 100%;
height: 100%;
padding: 0px;
margin-left: 0px;
margin-right: 0px;
background: rgb(185, 185, 185);
border: 0px;
border-bottom: 2px solid black;
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
text-decoration: none;
color: black;
font-family:'Roboto','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
#NavBarMain > a:nth-child(3){
  border-right: 2px solid black;
}
.NavButton:hover{
  background: rgb(255, 173, 173);
}
.selected{
  border: 2px solid black;
  border-bottom: 0px;
  background: rgb(235, 235, 235);
  text-decoration: underline;
}
.selected:hover{
  background: rgb(235, 235, 235);
}
</style>