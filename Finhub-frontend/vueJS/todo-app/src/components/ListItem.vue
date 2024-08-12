<script setup >
import IconButton from '@/components/IconButton.vue'

defineProps({
    itemName: {
        type: String,
        required: true
    }
})

const emit = defineEmits([
    'edit',
    'delete'
])
</script>

<template>
    <div class="todo-list-item" >
                <div class="todo-list-item-name" >
                    <p 
                    class="todo-title" >
                      <!-- {{ item }} -->

                      {{ itemName }}
                    </p>
                </div>
                <div class="button-group" >
                    <IconButton @click="$emit('edit')" iconClass="fa-pencil" />            
                    <IconButton @click="$emit('delete')" iconClass="fa-trash" />            
                    <!-- <IconButton icon-class="fa-trash" /> -->
                </div>
                <!-- <div>
                    <button @click="editItem(index)" id="edit" class="icon edit">
                        <i class="fa-solid fa-pencil"></i>
                    </button>
                    <button v-on:click="deleteItem(index)" id="delete" class="icon delete">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div> -->
            </div>
</template>

<style scoped>
.button-group {
    display: flex;
}

.todo-list-item{
    background-color: #DBE2EF;
    border-radius: 5px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;

}

.todo-list-item-name{
    display: flex;
    align-items: center;
    gap: 20px;

}


.todo-title{
    font-size: 22px;
}
</style>