<script setup>
    import { store, getGrandTotal } from '../store/store';

    import Label from './Label.vue';
import Person from './Person.vue';

</script>


<template>

<div class="contenedor">

    <div class="no-item centrar-texto" v-if="store.people.length === 0">
        
        No items

    </div>
    <div class="si-item centrar-texto" v-else>

        <div class="header">
            <div>
                <!-- <span>Total a pagar: </span> -->
                <Label :title="'Total + tip: '" :value="getGrandTotal()" />
                <!-- <div class="header__total">{{getGrandTotal()}}</div> -->
            </div>

            <div>
                <!-- <span>Falta por pagar: </span> -->
                <Label :title="'Remaining: '" :value="store.params.remaining" />
                <!-- <div class="header__remaining">{{store.params.remaining}}</div> -->
            </div>
        </div>

        <div class="people-container">

            <div>
            
                <Person v-for="person in store.people" :key="person.id" :id="person.id" :number-of-person="person.numberOfPerson" :total-per-person="person.totalPerPerson" :paid="person.paid"/>

            </div>


        </div>

    </div>

</div>

</template>


<style scoped>

    .header__total {
        font-weight: bolder;
    }

    .header__remaining {
        font-weight: bolder;
    }

    .people-container div {
        display: flex;
        flex-direction: column;
        gap: var(--separacion);
    }

</style>