const {createApp} = Vue;

createApp({

    data() {

        return {
            newTask: "",
            tasks: [
                {
                    title: "Fare la spesa ",
                    done: false,
                },
                {
                    title: "Andare in palestra ",
                    done: false,
                },
                {
                    title: "Dar da mangiare al gatto ",
                    done: false,
                }
            ]
        }

    },
    
}).mount('#app');