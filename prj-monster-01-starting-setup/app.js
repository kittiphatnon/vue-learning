function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            mana: 0,
        };
    },
    watch: {
        playerHealth(newValue) {
            if (newValue <= 0 && this.monsterHealth <= 0) {
                // A draw
                this.playerHealth = 0;
                this.monsterHealth = 0;
                alert('You have a draw!');
            }
            else if (newValue <= 0) {
                // Player lost
                this.playerHealth = 0;
                alert('You lost!');
            }
        },
        monsterHealth(newValue) {
            if (newValue <= 0 && this.playerHealth <= 0) {
                // A draw
                this.playerHealth = 0;
                this.monsterHealth = 0;
                alert('You have a draw!');
            }
            else if (newValue <= 0) {
                // Monster lost
                this.monsterHealth = 0;
                alert('You won!');
            }
        }
    },
    methods: {
        attackMonster() {
            const attackValue = getRandomValue(10,15);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.mana += 10;
        },
        attackPlayer() {
            const attackValue = getRandomValue(12,20);
            this.playerHealth -= attackValue;
        },
        showHealth() {
            console.log(this.playerHealth);
            console.log(this.monsterHealth);
        },
        specialAttack() {
            this.mana -= 20;
            const attackValue = getRandomValue(5,30);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        healPlayer() {
            const healValue = getRandomValue(12,25);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.attackPlayer();
            this.mana += 10;
        },
        surrender() {
            this.playerHealth = 0;
        }
    },
});

app.mount('#game');