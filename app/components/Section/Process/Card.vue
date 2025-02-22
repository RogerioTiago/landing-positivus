<script setup lang="ts">
  const props = defineProps<{
    number: string
    title: string
    text: string
  }>()
  const isOpen = ref(false)
</script>

<template>
  <div class="card">
    <div class="card__head">
      <div class="card__head-left">
        <div>{{ props.number }}</div>
        <div>{{ props.title }}</div>
      </div>
      <button @click="isOpen = !isOpen">+</button>
    </div>
    <div v-if="isOpen">
      {{ props.text }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    padding: 1rem;
    border: 1px solid black;

    &__head {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__head-left {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      gap: 1rem;
    }
  }
</style>
