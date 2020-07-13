<template>
  <section>
     <FeaturedGames/>
     <Games
       :games="games"
     />
    <v-layout justify-center align-center>
      <v-progress-circular
        v-if="gamesLoader"
        indeterminate
        color="primary"
      />
    </v-layout>
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
        games: [],
        gamesLoader: false
    }),
    created() {
        this.getGames();
    },
    methods: {
        async getGames() {
            try {
                this.gamesLoader = true;
                const { data } = await this.$axios.get('api/v3/games');
                this.games = data;
            } catch (e) {
                console.log(e);
            } finally {
                this.gamesLoader = false;
            }
        }
    }
}
</script>

