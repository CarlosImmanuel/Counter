<script setup>
import { ref } from "vue";

const count = ref(0);

const increment = () => count.value++;
const decrement = () => count.value--;
const reset = () => (count.value = 0);
</script>

<template>
    <div class="counter">
        <h1 style="color: white;">Counter App</h1>
        <p class="count"> {{ count }}</p>
        <div class="buttons">
            <button @click="decrement">
                -
            </button>
            <button @click="increment">
                +
            </button>
            <button @click="reset">
                Reset
            </button>
        </div>
    </div>
</template>

<style>
.counter {
    text-align: center;
    margin-top: 10px;
}

.count {
    font-size: 2rem;
    margin: 10px;
    color: white;
}

.buttons button {
    margin: 5px;
    padding: 10px 15px;
    font-size: 1.2rem;
    cursor: pointer;
}
</style>