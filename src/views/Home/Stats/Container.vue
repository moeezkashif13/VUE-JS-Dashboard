<script setup>
import { fetchChartsData } from '@/store/chartsSlice'
import { computed, defineProps } from 'vue'
const props = defineProps({
  width: String
})

const chartsData = fetchChartsData()

document.documentElement.classList.add('dark')
</script>

<template>
  <div
    class="px-5 py-4 rounded-xl w-full bg-white dark:bg-[#26272E]"
    :class="props.width ? props.width : 'w-full'"
    :style="{
      boxShadow: '0 0 2px 0px rgba(0,0,0,0.2)'
    }"
  >
    <Loader v-if="chartsData.loading" />

    <p v-else-if="chartsData.isError" class="text-center text-red-500">
      {{ chartsData.isError }}
    </p>

    <slot v-else></slot>
  </div>
</template>
