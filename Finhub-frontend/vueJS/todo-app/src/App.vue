<script setup>
    import {ref} from "vue";

    var taskinput = ref('');

    //  console.log(taskinput.value);

     function buttonClicked() {
      console.log(taskinput.value);
     }
    
</script>

<template>
   <div class="main-container">
    <div class="container">
            <h1>To Do App</h1>
            <form action="" @submit.prevent="buttonClicked" id="input-form">   

                    <input v-model=taskinput type="text" id="input"  name="input" placeholder="Enter a task">
                    <button  type="submit" id="submit"><i class="fa-solid fa-plus"></i></button>
                 
            </form>
            <hr>
            <div id="to-do-list-items">
               <!-- <div class="to-do-list-item">
                    <div class="to-do-list-item-name">
                        <p class="to-do-list-item-title">Create a new Design</p>
                    </div>
                    <div>
                        <button id="edit" class="icon edit"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button id="delete" class="icon delete"><i class="fa-solid fa-trash"></i></button>
                    </div>
               </div> -->
            </div>
        </div>
   </div>
</template>
<style>
 *{
    margin: 0;
    padding: 0;
    
}
.main-container{
    background-color: rgb(113, 113, 168);
    display: flex;
    height: 100vh; 
    justify-content: center;
    align-items: center;
}
.container{
    background-color: white;
    width: 50%;
    border-radius: 20px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
hr{
    width: 100%;
    margin: 30px 0;
}
h1{
    color: #112d4e;
    font-size: 40px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 10px 0;
}
#input-form{
    display: flex;

    
    
}
#input-form input{
    border: 1px solid #b1b1b1;
    padding: 10px 6px;
    font-size: 22px;
    border-radius: 5px 0 0 5px;
    background-color: #c1e2e0;
}

#input-form button{
    margin: 0;
    border: none;
    padding: 10px 20px;
    border-radius:0  5px 5px 0;
    background-color: #d7bb7a;
}
#to-do-list-items{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
}
.to-do-list-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #c1e2e0;
    border-radius: 5px;

}
.to-do-list-item-name{
    display: flex;
    gap: 20px;
}
#checkbox{
    height: 20px;
    width: 20px;
}
.to-do-title{
    font-size: 24px;
}
.icon{
    cursor: pointer;
    border: 0;
    background-color: transparent;
    font-size: 24px;
    padding: 10px;
}
</style>