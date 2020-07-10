<template>
  <v-app>
    <Navbar/>
    <nuxt/>
  </v-app>
</template>

<script>
    import Navbar from '@/components/general/Navbar'

    export default {
        components: {
            Navbar
        }
    }
</script>
