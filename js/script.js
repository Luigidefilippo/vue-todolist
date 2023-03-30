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
    methods: {
      done(index) {
           if (this.tasks[index].done === false) {
               this.tasks[index].done = true;
           } else if (this.tasks[index].done === true) {
               this.tasks[index].done = false;
           }
      },

      deleteTask(index) {
           this.tasks.splice(index, 1)
      },

      addNewTask: function() {
       this.tasks.push({title: this.newTask, done:false});
       this.newTask = "";
      }
   }
    
}).mount('#app');