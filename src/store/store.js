import {
    reactive
} from 'vue';

export const store = reactive({
    params: {
        total: 0,
        tip: 0,
        people: 0,
        remaining: 0
    },
    people: []
});


/* total + propina */
export function getGrandTotal() {
    return store.params.total * (store.params.tip / 100 + 1);
}

export function calculate() {
    // limpiar objeto con informacion de cada persona
    store.people = [];

    const total = store.params.total;
    const tip = store.params.tip;
    // cuantas personas estan en la mesa
    const people = store.params.people;
    const totalPerPerson = getGrandTotal() / people;

    // cuanto le toca a cada persona
    store.params.remaining = getGrandTotal();

    for (let i = 0; i < people; i++) {

        store.people.push({
            id: crypto.randomUUID(),
            numberOfPerson: i + 1,
            totalPerPerson,
            paid: false,

        })
    }

    calculateRemaining();

}

function calculateRemaining() {
    // devuelve arreglo de objetos missingToPay
    const faltanXpagar = store.people.filter(item => !item.paid);

    // return la suma que falta por pagar
    const remaining = faltanXpagar.reduce((acumulador, item) => (acumulador += item.totalPerPerson), 0);

    store.params.remaining = remaining;

}

// id y si esta pagado o no como parametros
export function pay(id, pay) {
    const person = store.people.find(item => item.id === id);

    if (person) {
        person.paid = pay;
    }

    calculateRemaining();

}