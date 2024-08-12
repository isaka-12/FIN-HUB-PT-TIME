<template>
    <div id="todo-list-items" >
        <slot />
    </div>
</template>

<style>
#todo-list-items {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}</style>