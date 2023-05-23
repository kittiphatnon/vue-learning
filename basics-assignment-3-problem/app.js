const app = Vue.createApp({
    data() {
        return {
            result: 0
        }
    },
    methods: {
        add(num) {
            this.result += num;
        }
    },
    watch: {
        result(newValue) {
            const that = this;
            if (newValue > 37) {
                setTimeout(function() {
                    that.result = 0;
                }, 5000);
                alert('Too much!');
            } else if (newValue < 37) {
                alert('Not there yet!');
            }
        }
    }
});

app.mount('#assignment');
