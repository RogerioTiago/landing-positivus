<template>
  <ComponentsLayoutHeader />
  <Slot />
  <ComponentsLayoutFooter />
</template>

<script lang="ts" setup>
  import ComponentsLayoutHeader from '~/components/Layouts/Header/index.vue'
  import ComponentsLayoutFooter from '~/components/Layouts/Footer/index.vue'
</script>
