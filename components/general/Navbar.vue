<template>
  <header class="shadow--light navbar">
    <v-layout justify-space-between align-center class="py-3 px-4">
      <nuxt-link to="/">
        <img :src="logo" alt="logo" class="navbar__logo">
      </nuxt-link>
      <div>
        <nuxt-link
          class="navbar__menu-item"
          to="sign-up"
          icon
        >
          <v-icon class="ma-3" color="#0D2950">
            account_circle
          </v-icon>
        </nuxt-link>
        <v-icon
          class="navbar__menu-btn hidden-sm-and-up"
          @click="drawer = !drawer"
          color="#0D2950"
          size="25"
        >
          {{ drawer ? 'close' : 'menu' }}
        </v-icon>
      </div>
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
            loggedIn: false,
            logo,
            drawer: false
        }),
        computed: {
            links() {
                if (this.loggedIn) {
                    return [
                        {
                            icon: 'account_circle',
                            text: 'My Account',
                            to: 'my-account'
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
                } else return [
                    {
                        icon: 'account_circle',
                        text: 'Sign In',
                        to: ''
                    }
                ]
            }
        }
    }
</script>
