<template>
  <header class="shadow--light navbar">
    <v-layout justify-space-between align-center class="py-3 px-4">
      <img :src="logo" alt="logo" class="navbar__logo">
      <v-icon
        class="navbar__menu-btn hidden-sm-and-up"
        @click="drawer = !drawer"
        color="#0D2950"
        size="25"
      >
        {{ drawer ? 'close' : 'menu' }}
      </v-icon>
      <nav
        class="navbar__menu-items hidden-xs-only"
      >
        <nuxt-link
          class="navbar__menu-item"
          v-for="item in links"
          :key="item.id"
          :to="item.to"
        >
          <v-icon class="ma-3" color="#8B98AB">
            {{ item.icon }}
          </v-icon>
          <span>
          {{ item.text }}
        </span>
        </nuxt-link>
      </nav>
    </v-layout>
    <nav
      class="navbar__menu-items"
      v-if="drawer"
    >
      <nuxt-link
        class="navbar__menu-item px-2"
        v-for="item in links"
        :key="item.id"
        :to="item.to"
      >
        <v-icon class="ma-3" color="#8B98AB">
          {{ item.icon }}
        </v-icon>
        <span>
          {{ item.text }}
        </span>
      </nuxt-link>
    </nav>
  </header>
</template>

<script>
    import logo from '@/assets/img/general/logo.png'

    export default {
        name: "Navbar",
        data: () => ({
            logo,
            drawer: false,
            links: [
                {
                    icon: 'account_circle',
                    text: 'My Account',
                    to: ''
                },
                {
                    icon: 'playlist_add_check',
                    text: 'My Picks',
                    to: ''
                },
                {
                    icon: 'exit_to_app',
                    text: 'Sign out',
                    to: ''
                }
            ]
        }),
    }
</script>
