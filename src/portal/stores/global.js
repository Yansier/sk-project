import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGlobalStore = defineStore('globalStore', () => {
  const scrollBottom = ref(0)
  const updateScrollBottom = (num) => {
    scrollBottom.value = num
  }
  return {
    scrollBottom,
    updateScrollBottom,
  }
})
