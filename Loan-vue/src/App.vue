<script setup>
import { ref } from 'vue';
var principal = ref();
var rate = ref();
var time = ref();
var result = ref();

function calculate(){
    var p = principal.value;
    var r = rate.value;
    var t = time.value;
    var interest = (p * r * t) / 100;
    result.value = interest;
}
</script>

<template>
  <body class="body">
    <div class="container">
            <h1>Loan Calculator</h1>
            <div class="content-container">
                <div class="calc-actions">
                    <label  for="principal">Principal</label>
                    <input v-model="principal" type="text" id="principal">

                    <label for="rate">Rate(%)</label>
                    <input v-model="rate" type="text" id="rate">

                    <label for="time">Time</label>
                    <input v-model="time" type="text" id="time">

                    <button @click.prevent="calculate" id="calculate">Calculate</button>
                </div>
                <div class="calc-results">
                    <label for="result">The interest is: </label>
                    <input v-model="result" type="text" id="result" readonly>
                </div>
            </div>
        </div>

  </body>
</template>
  
<style >
*{
    margin: 0;
    padding: 0;
    
}
body{
    
    width: 100vw;
    height: 100vh;
    background-color:rgba(241, 241, 241, 1);
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
h1{
    font-size: 32px;
    color: black;
    padding: 0;
}
.container{
    background-color: rgba(255, 255, 255, 1);
    width: 50vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 26px;
}
.content-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px 40px 10px 40px;
    
}
.calc-actions{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
    height: 100%;
    text-align: left;
    background:rgba(240, 240, 240, 1);   
}
label{
    font-size: 20px;
    padding: 20px 0 0 0;
    color: black;
}
button{
    background-color: rgb(255, 255, 255);
    color: black;
    font-size: 20px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    margin: 40px 0 0 0;
}
input{
    width: 100%;
    height: 30px;
    outline: none;
    border: none;
    border-radius: 5px;
    font-size: 20px; 
    text-align: center;
}
.calc-results{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(26, 26, 26, 1);
    width: 100%;
    height: 100%;
    padding: 20px;
    color: white;
    justify-content: center;
}
/* wew tttt 34tu*/
.calc-results label{
    padding: 0 0 20px 0;
    font-size: 32px;
    color: white;
}
.calc-results input{
    width: 100%;
    height: 30px;
    outline: none;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: rgba(26, 26, 26, 1);
    font-size: 24px; 
    text-align: center;
    border-bottom: 2px solid white;
}
</style>
