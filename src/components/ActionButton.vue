<template>
    <button aria-label="button" v-bind="$attrs">
        {{ btnvalue }}
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "ActionButton",
    props: {
        btnvalue: String,
    },
};
</script>

<style scoped>
button {
    border: none;
    background-color: rgb(1, 76, 41);
    padding: 10px 20px;
    /* border: 2px solid rgb(1, 76, 41); */
    font-size: 1.7rem;
    color: white;
}

button:hover {
    background-color: #083e46;
    border-color: #083e46;
}
</style>
