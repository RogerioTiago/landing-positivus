<script setup lang="ts">
  const { processData } = useGetProcessData()
</script>

<template>
  <section>
    <div class="cards">
      <SectionProcessCard
        v-for="(step, index) in processData.steps"
        :key="index"
        :number="step.number"
        :title="step.title"
        :text="step.text"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .cards {
    display: flex;
    flex-flow: column;
    gap: 30px;
  }
</style>
