<script setup>
import { onMounted } from 'vue'
import SideNav from './SideNav.vue'
import Sidebar from './Sidebar.vue'
import Stats from './Stats.vue'
import axiosInstance from '@/lib/axios'
import { fetchChartsData } from '@/store/chartsSlice'
const chartsData = fetchChartsData()

onMounted(() => {
  chartsData.fetchData()
})
</script>

<template>
  <main class="flex flex-col lg:flex-row bg-[#111315] justify-center">
    <SideNav />
    <Stats />
    <Sidebar />
  </main>
</template>
