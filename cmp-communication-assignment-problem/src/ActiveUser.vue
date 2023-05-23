<template>
    <div>
        <h2>{{ userName }}</h2>
        <h3>{{ age }}</h3>
    </div>
</template>

<script>
    export default {
        date() {
            return {
                userName: 'John Doe',
                age: 30
            }
        }
    }
</script>
