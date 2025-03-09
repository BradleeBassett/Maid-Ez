<template>
  <div id="ServicesMain">
    <h3>{{ this.Header }}</h3>
  </div>
</template>

<script>
export default {
    props: {
        Header: {
            type: String
        }
    }
}
</script>

<style scoped>
#ServicesMain{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
}

h3{
    text-align: center;
    font-size: medium;
    font-weight: 200;
    font-family:'Roboto','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: rgb(0, 0, 0);
}
</style>