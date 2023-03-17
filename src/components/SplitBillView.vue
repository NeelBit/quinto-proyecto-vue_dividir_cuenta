<script setup>

    import InputForm from './InputForm.vue';
    import PeopleView from './PeopleView.vue';



</script>


<template>

<div class="contenedor principal">

    <InputForm />
    <PeopleView />

</div>

</template>


<style scoped>

    .principal {
        display: flex;
        gap: 3rem;
    }


</style>