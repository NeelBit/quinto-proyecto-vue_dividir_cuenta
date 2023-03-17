<script setup>

import { defineProps, ref } from "vue";

import { pay }  from "../store/store";

const props = defineProps(['id', 'numberOfPerson', 'totalPerPerson', 'paid']);
let paid = ref(false);

function handleChange(e) {
    paid.value = e.target.checked;
    pay(props.id, paid);
}

</script>

<template>

    <div :class="['person', props.paid ? 'pago' : 'impago']">

        <div class="person-nombre">
            Persona {{ props.numberOfPerson }}
        </div>

        <div class="person-to-pay">
            {{ 
                new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(props.totalPerPerson)
            }}
        </div>

        <div class="persona-paid">
            <input type="checkbox" name="paid" id="paid" @change="handleChange($event)"/> Paid
        </div>

    </div>


</template>

<style scoped>

.person {
    display: flex;
    flex-direction: column;
    text-align: center;

    border: .5rem black solid;
    border-radius: var(--redondeo);
    gap: .5rem;

    justify-content: center;
    
    margin: 0;
    padding: 0;
}

.person-nombre {
    background-color: var(--colorNegroRelax);
    color: var(--colorBlancoRelax);
    font-weight: bolder;
    border-radius: var(--redondeo) var(--redondeo) 0 0;
}

.pago {
    color: green;
}

.impago {
    color: red;
}

.persona-paid {
    background-color: var(--colorNegroRelax);
}

</style>