<template>
  <div class="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
    <NavBar/>
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
html {
  font-family: Poppins,sans-serif !important;
}
body {
  background-color: black;
}
</style>
