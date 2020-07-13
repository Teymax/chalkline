<template>
  <section>
     <FeaturedGames/>
     <Games
       :games="games"
     />
  </section>
</template>

<script>
import FeaturedGames from '@/components/homepage/FeaturedGames'
import Games from '@/components/homepage/Games'
export default {
    components: {
        FeaturedGames,
        Games
    },
    data: () => ({
        games: []
    }),
    async asyncData({ $axios }) {
        const { data } = await $axios.get('api/v3/games');
        return {
            games: data
        };
    },
}
</script>

