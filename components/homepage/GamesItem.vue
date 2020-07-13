<template>
<v-flex xs12>
  <v-layout class="games-item" justify-space-between align-center>
    <v-layout align-center>
      <div class="games-item__icon mr-3">
        <img :src="icon" alt="icon">
      </div>
      <div>
        <h4 class="games-item__name">
          {{ name }}
        </h4>
        <span class="games-item__ends">
        Ends: {{ ends }}
      </span>
        <br>
        <span class="games-item__prize">
        Prize: {{ prize }}
      </span>
      </div>
    </v-layout>
    <v-btn color="#00B669" elevation="0" rounded>
      <b class="games-item__btn-text white--text">
        play
      </b>
    </v-btn>
  </v-layout>
</v-flex>
</template>

<script>
    export default {
        name: "GamesItem",
        props: {
            icon: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: ''
            },
            ends: {
                type: String,
                default: ''
            },
            prize: {
                type: String,
                default: ''
            }
        }
    }
</script>
