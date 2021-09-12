import { ref, computed } from 'vue'

export const collapsed = ref(computed(()=> {
  if(window.matchMedia("(min-width: 1215px)").matches) {
    return false
  } else {
    return true
  }
}))

export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_WIDTH = 180
export const SIDEBAR_WIDTH_COLLAPSED = 38
export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)
