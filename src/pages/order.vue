<template>
  <div>
    <nav-header />
    <router-view />
    <nav-footer />
  </div>
</template>

<script>
  import NavHeader from "@/components/NavHeader";
  import NavFooter from "@/components/NavFooter";
  export default {
    name: "order",
    components: {NavFooter, NavHeader}
  }
</script>

<style scoped>

</style>
