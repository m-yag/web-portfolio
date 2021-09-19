import { ref, computed } from 'vue'

export const collapsed = ref(false)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_WIDTH = 110
export const SIDEBAR_WIDTH_COLLAPSED = 29

export const SIDEBAR_WIDTH_SM = 90
export const SIDEBAR_WIDTH_COLLAPSED_SM = 24

export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)

export const sidebarWidthSmall = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED_SM : SIDEBAR_WIDTH_SM}px`
)
