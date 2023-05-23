const app = Vue.createApp({
    data() {
        return {
            input: '',
            input2: ''
        };
    },
    compute: {

    }
    methods: {
        addInput(event) {
            this.input = event.target.value;
        },
        addInput2(event) {
            this.input2 = event.target.value;
        },
    }
      
});
app.mount('#assignment');