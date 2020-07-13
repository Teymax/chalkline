<template>
  <div>
    <b class="filters__btn container" @click="showFilters = !showFilters">
      {{ filterText }}
    <v-icon color="black" size="14">
      {{ showFilters ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}
    </v-icon>
    </b>
    <v-layout class="filters" justify-center v-if="showFilters">
      <v-btn
        class="filters-item"
        v-for="item in filters"
        :key="item.id"
        height="89"
        width="108"
        color="#F4F4F4"
        elevation="0"
        @click="filterBy(item.title)"
      >
        <img class="filters-item__icon" :src="item.icon" alt="icon">
        <span class="filters-item__title">
          {{ item.title }}
        </span>
      </v-btn>
    </v-layout>
    <v-layout class="container" wrap>
      <GamesItem
        v-for="item in games"
        :key="item.id"
        :icon="mlbDefault"
        :name="item.name"
        :ends="'APR 15, 6:00PM CDT'"
        :prize="'$50'"
      />
    </v-layout>
  </div>
</template>

<script>
    import mlbDefault from '@/assets/img/homepage/mlbDefault.png'
    import mlb from '@/assets/img/homepage/mlb.png'
    import mls from '@/assets/img/homepage/mls.png'
    import ufc from '@/assets/img/homepage/ufc.png'
    import GamesItem from '@/components/homepage/GamesItem'

    export default {
        name: "Games",
        components: {
            GamesItem
        },
        props: {
            games: {
                type: Array,
                default: () => []
            }
        },
        data: () => ({
            showFilters: false,
            filterIcon: '',
            mlbDefault,
            filters: [
                {
                    title: 'mlb',
                    icon: mlb
                },
                {
                    title: 'mls',
                    icon: mls
                },
                {
                    title: 'ufc',
                    icon: ufc
                }
            ],
            filterText: 'All Games'
        }),
        methods: {
            filterBy(key) {
                console.log(key);
            }
        }
    }
</script>
