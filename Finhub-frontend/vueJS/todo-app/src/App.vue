<script setup>
import {ref} from "vue";
import ListItem from "./components/ListItem.vue";
import ListItemCard from "./components/ListItemCard.vue";


// Vue JS
var taskInput = ref('');

var itemsArray = ref([
]);

// const items = [1,2,3,4,5,6,7,8];
// const nums = ['one', 'two', 'three', 'four'];

// // for (var i = 0; i <= arr.length - 1; i ++ ) {
// //   console.log(arr[i]);
// // }


// items.forEach( (item, index) => {
//   console.log(item, index);
// })

// JS
// form.addEventListener('submit', saveItem);
var itemToEdit = ref(null);


function saveItem(){
  // console.log(itemsArray.value);
  // console.log(taskInput.value);
  console.log('itemToEdit');
  console.log(itemToEdit.value);
  
  if (itemToEdit.value !== null) {
    itemsArray.value[itemToEdit.value] = taskInput.value;
    itemToEdit.value = null;
  } else {
    itemsArray.value.push(taskInput.value);
  }
  taskInput.value = '';

  // console.log(itemsArray.value);
  
}

function deleteItem(index){
  itemsArray.value.splice(index, 1);
}


function editItem(index) {
  taskInput.value = itemsArray.value[index];
  itemToEdit.value = index
  // console.log(itemToEdit.value);
  
}


</script>

<template>

<div class="main-container" >
<div class="container" >
        <h1>To Do App</h1>

        <form v-on:submit.prevent="saveItem" id="input-form">
            <input v-model="taskInput" type="text" name="input" id="input" placeholder="Enter your task here.....">
            <button type="submit">
                <i class="fa-solid fa-plus"></i>
            </button>
        </form>

        <hr >
        <div style="width: 100%;" >
            

            <ListItemCard>
                <ListItem 
                    v-for="(item, index) in itemsArray" 
                    :key="index" 
                    :itemName="item" 
                    @edit="editItem(index)"
                    @delete="deleteItem(index)"
                />
            </ListItemCard>

            <!-- <ListItem></ListItem> -->
            

            <!-- <div class="todo-list-item"  >
                <div class="todo-list-item-name" >
                    <p 
                    class="todo-title" >
                      {{ item }}
                      {{ index }}
                    </p>
                </div>
                <div>
                    <button @click="editItem(index)" id="edit" class="icon edit">
                        <i class="fa-solid fa-pencil"></i>
                    </button>
                    <button v-on:click="deleteItem(index)" id="delete" class="icon delete">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div> -->




            <!-- <div :class="className" v-for="(num, index) in nums" :key="index" >
              {{ num }}

            </div> -->
    
        </div>
    </div>
  </div>

</template>

<style>

* {
    padding: 0;
    margin: 0;
}

.main-container{
    background-color: #3F72AF;
    height: 100vh;
    display: flex;
    /* flex-direction: co; */
    justify-content: center;  /* align horizontally */
    align-items: center; /* align vertically */

}

.container{
    background-color: #fff;
    width: 50%;
    border-radius: 20px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;  /* align horizontally */
}

hr{
    width: 100%;
    margin: 30px 0;
}

h1 {
    color: #112D4E;
    font-size: 40px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    margin: 10px 0;
}

#input-form {
    display: flex;

}

#input-form input{
    border: 1px solid #B1B1B1;
    padding: 10px 6px;
    font-size: 22px;
    border-radius: 5px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    background-color: #DBE2EF;
}

#input-form button{
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    background-color: #AAAAAA;
    cursor: pointer;
}


.icon{
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0px 10px;
}



.fa-trash{
    color: red;
}



</style>