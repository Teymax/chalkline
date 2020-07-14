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
        :color="item.active ? '#183358' : '#F4F4F4'"
        elevation="0"
        @click="filterBy(item.title)"
      >
        <img class="filters-item__icon" :src="item.active ? item.activeIcon : item.icon" alt="icon">
        <span class="filters-item__title" :style="{ color: item.active ? '#FFF' : '#000' }">
          {{ item.title }}
        </span>
      </v-btn>
    </v-layout>
    <v-layout class="container" wrap>
      <GamesItem
        v-for="item in games"
        :key="item.id"
        :id="item.id"
        :icon="mlbDefault"
        :name="item.name"
        :start-date="item.startDate"
        :prize="item.prizeRule"
      />
    </v-layout>
  </div>
</template>

<script>
    import mlbDefault from '@/assets/img/homepage/mlbDefault.png'
    import mlb from '@/assets/img/homepage/mlb.png'
    import mls from '@/assets/img/homepage/mls.png'
    import ufc from '@/assets/img/homepage/ufc.png'
    import mlbWhite from '@/assets/img/homepage/mlbWhite.png'
    import mlsWhite from '@/assets/img/homepage/mlsWhite.png'
    import ufcWhite from '@/assets/img/homepage/ufcWhite.png'
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
                    title: 'MLB',
                    icon: mlb,
                    activeIcon: mlbWhite,
                    active: false
                },
                {
                    title: 'MLS',
                    icon: mls,
                    activeIcon: mlsWhite,
                    active: false
                },
                {
                    title: 'UFC',
                    icon: ufc,
                    activeIcon: ufcWhite,
                    active: false
                }
            ],
            filterText: 'All Games'
        }),
        methods: {
            filterBy(title) {
                const index = this.filters.findIndex(item => item.title === title);
                if (this.filters[index].active) {
                    this.filterText = 'All games';
                    this.filters.forEach(item => item.active = false);
                    return;
                }
                this.filters.forEach(item => item.active = false);
                this.filters[index].active = true;
                this.filterText = title;
            },
        }
    }
</script>
