import axiosInstance from '@/lib/axios'
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const fetchChartsData = defineStore('charts', () => {
  const chartsData = ref([])
  const isError = ref(false)
  const loading = ref(true)
  async function fetchData() {
    try {
      const response = await axiosInstance.get('https://api.npoint.io/c77c268f13f8638bff6f')
      console.log(response)
      chartsData.value = response.chartsData
    } catch (error) {
      isError.value = error.message

      // isError.value = 'Error in fetching charts data'
    } finally {
      loading.value = false
    }
  }

  return { chartsData, isError, loading, fetchData }
})
