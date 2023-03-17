<script setup>
    import { ref } from 'vue';
    import { store, calculate } from '../store/store';

    const total = ref(0);
    const tip = ref(0);
    const people = ref(0);

    const handleSubmit = () => {
        store.params.total = total;
        store.params.tip = tip;
        store.params.people = people;

        calculate();
    };

</script>


<template>

<div class="form">

    <form action="" @submit.prevent="handleSubmit()">
        <div class="form-container">
            <div>
                <label for="total">Total</label>
                <input type="number" name="total" id="total" required placeholder="0" min="0" v-model="total" >
            </div>
            <div>
                <label for="tip">Propina %</label>
                <input type="number" name="tip" id="tip" required placeholder="0" min="0" v-model="tip" >
            </div>
            <div>
                <label for="people">Cantidad de personas</label>
                <input type="number" name="people" id="people" required  min="0" v-model="people" >
            </div>
            <div>
                <input class="btn-calcular" type="submit" value="Calcular">
            </div>
        </div>
    </form>

</div>

</template>


<style scoped>

    .form {}

    form {}

    .form-container {
        display: flex;
        flex-direction: column;
        gap: var(--separacion);
    }

    .form-container label {
        font-weight: bold;
    }

    .form-container input[type="number"] {
        width: 100%;
        border: none;
        border-radius: var(--redondeo);
        padding: 1rem;
        outline: none;
        text-align: center;
    }

    .btn-calcular {
        border: none;
        outline: none;
        border-radius: var(--redondeo);
        padding: 1rem;
        cursor: pointer;
        font-weight: bolder;
        height: 100%;
        width: 100%;
    }

</style>