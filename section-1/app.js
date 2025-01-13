// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// buttonEl.addEventListener('click', (event) => {

//     const newItem = document.createElement('li');

//     newItem.innerHTML = inputEl.value;

//     listEl.appendChild(newItem);

//     inputEl.value = ''
    
// });

Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        }
    },
    methods: {
        addGoal( ) {
            console.log("Addgoal")
            this.goals.push(this.enteredValue)
            this.enteredValue = '';
        }
    }
}).mount('#app');