<template>
<div>
  asd
</div>
</template>

<script>
    export default {
        name: "game",
        data: () => ({
        }),
        async created() {
            const { data } = await this.$axios.get(`games/${this.$route.query.id}`);
            console.log(data);
        }
    }
</script>
