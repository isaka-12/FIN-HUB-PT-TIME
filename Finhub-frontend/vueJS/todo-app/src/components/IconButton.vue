<script setup >
 defineProps({
    // text: {
    //     type: String,
    //     default: 'Hello'
    // },
    // name: {
    //     type: String,
    //     required: true
    // },
    // age : {
    //     type: Number,
    //     required: true
    // }

    iconClass: {
        type: String,
        required: true
    }
 })



</script>

<template>
    <div style="color:red;" >
        <button class="icon">
            <!-- <i :class="`fa-solid ${iconClass}`" ></i> -->
            <i :class="'fa-solid ' + iconClass" ></i>
        </button>



        <!-- {{ text }}
        {{ name }}
        {{ age }} -->
    </div>
</template>