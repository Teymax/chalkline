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
        {{ endsTime }}
      </span>
          <br>
          <span v-if="prize" class="games-item__prize">
        Prize: {{ prize.description }}
      </span>
        </div>
      </v-layout>
      <v-btn
        :disabled="this.endsTime === 'finished'"
        color="#00B669"
        elevation="0"
        @click="goToGame"
        rounded
      >
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
            id: {
                type: Number,
                default: null
            },
            icon: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: ''
            },
            startDate: {
                type: String,
                default: ''
            },
            prize: {
                type: String,
                default: ''
            }
        },
        data: () => ({
            endsTime: ''
        }),
        created() {
            this.initTimer();
        },
        methods: {
            initTimer() {
                // eslint-disable-next-line vue/no-async-in-computed-properties
                const x = setInterval(() => {
                    const parsedDate = new Date(this.startDate);
                    const nowDate = new Date();
                    const difference = parsedDate.getTime() - nowDate.getTime();
                    if (difference < 0) {
                        clearInterval(x);
                        this.endsTime = 'finished';
                    } else {
                        let hours = Math.floor(difference / (1000 * 60 * 60));
                        hours = hours < 10 ? `0${hours}` : hours;
                        let minutes = Math.floor(difference / (1000 * 60)) - hours * 60;
                        minutes = minutes < 10 ? `0${minutes}` : minutes;
                        let seconds = Math.floor(difference / 1000) - (hours * 60 * 60 + minutes * 60);
                        seconds = seconds < 10 ? `0${seconds}` : seconds;
                        this.endsTime = `Ends: ${hours}:${minutes}:${seconds}`;
                    }
                }, 1000);
            },
            goToGame() {
                this.$router.push(
                    {
                        name: 'game-id',
                        query: {
                            id: this.id
                        }
                    }
                )
            }
        }
    }
</script>
