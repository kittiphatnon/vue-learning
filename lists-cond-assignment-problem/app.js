const app = Vue.createApp({
    data() {
        return {
            goals: [],
            showList: true,
        }
    },
    methods: {
        addGoal(goal) {
            this.goals.push(goal);
        },
        toggleDisplay() {
            this.showList = !this.showList;
        }
    },

});

app.mount('#assignment');