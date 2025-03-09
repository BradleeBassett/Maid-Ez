<template>
  <div id="main">
    <div id="PageHeader"> 
        <img id="logo" src="..\assets\logo.png"/>
    </div>
    <div id="panelDiv">
    <div id="panel1">
        <div id="panelBox">
            <h3>Supported Locations</h3>
        </div>
        <div id="panelBox">
            <h3>Services</h3>
        </div>
    </div>
    <div id="panel2">
        <div id="panelBox">
            <h3>Service Hours</h3>
            <h2>9am - 3pm</h2>
            <h1>Monday - Friday</h1>

        </div>
        <div id="panelBox">
            <h3>Mobile Hours</h3>
            <h2>9am - 5pm</h2>
            <h1>Monday - Friday</h1>
        </div>
    </div>
    <div id="panel3"> 
        <div id="panelBox">
            <h3>Customer Reviews</h3>
        </div>
    </div>
</div>
  </div>
</template>

<script>
export default {
    components: {

    }
}
</script>

<style scoped>
#main{
    display: flex;
    width: auto;
    height: 90%;
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
#panelDiv{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 10px;
}
#panelBox{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 100%;
}
#panel1{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35%;
    width: 70%;
    background: linear-gradient(to top left,rgb(192, 192, 192), rgb(224, 224, 224) );
    margin: 20px;
    border-radius: 10px;
    border: 1px solid rgb(0, 0, 0);
    box-shadow: 0 10px 20px rgba(109, 109, 109, 0.3);
}
#panel2{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15%;
    width: 70%;
    background: linear-gradient(to top left,rgb(192, 192, 192), rgb(224, 224, 224) );
    margin: 20px;
    border-radius: 10px;
    border: 1px solid rgb(0, 0, 0);
    box-shadow: 0 10px 20px rgba(109, 109, 109, 0.3);
}
#panel3{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25%;
    width: 70%;
    background: linear-gradient(to top left,rgb(192, 192, 192), rgb(224, 224, 224) );
    margin: 20px;
    border-radius: 10px;
    border: 1px solid rgb(0, 0, 0);
    box-shadow: 0 10px 20px rgba(109, 109, 109, 0.3);
}
#panel1:hover{
    background: linear-gradient(to top left, rgb(224, 224, 224),rgb(192, 192, 192) );
    box-shadow: 0 10px 20px rgba(255, 159, 159, 0.3);
}
#panel2:hover{
    background: linear-gradient(to top left, rgb(224, 224, 224),rgb(192, 192, 192) );
    box-shadow: 0 10px 20px rgba(255, 159, 159, 0.3);
}
#panel3:hover{
    background: linear-gradient(to top left, rgb(224, 224, 224),rgb(192, 192, 192) );
    box-shadow: 0 10px 20px rgba(255, 159, 159, 0.3);
}
#logo{
    height: 100%;
    width: 25%;
}
h3{
    text-align: center;
    font-size: medium;
    font-weight: 200;
    font-family:'Roboto','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: rgb(0, 0, 0);
    margin: 0px;
    text-decoration: underline;
}
h2{
    text-align: center;
    font-size: medium;
    font-family:'Roboto','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: rgb(0, 0, 0); 
    margin: 0px;
}
h1{
    text-align: center;
    font-size: x-large;
    font-family:'Roboto','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: rgb(0, 0, 0); 
    margin: 0px;
}
@media (max-width: 1500px) {
    #logo{
    height: 100%;
    width: 50%;
    }
    h3{

    }
    h1{
        font-size: large;
    }
};
</style>