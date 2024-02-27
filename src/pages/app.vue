<script setup lang="tsx">
//@ts-nocheck
import type { MenuOption } from 'naive-ui'
import { useThemeStore } from '@/stores/theme'

definePage({
  path: '/',
})

const isShowing = ref(false)
const route = useRoute()
const isNamed = computed(() => route.name[0] !== '/')

function renderLink(to: string, label: string) {
  return () => <router-link onClick={() => isShowing.value = false} to={to}>{label}</router-link>
}
const options: MenuOption[] = [
  {
    label: renderLink('/', 'Home'),
    key: 'PhyQuiz',
    icon: () => <i-smart-home />,
  },
  {
    label: renderLink('/topic', 'Topics'),
    key: 'Topics',
    icon: () => <i-book />,
  },
  {
    label: renderLink('/people', 'People'),
    key: 'People',
    icon: () => <i-users />,
  },
  {
    label: renderLink('/formulas', 'Formulas'),
    key: 'Formulas',
    icon: () => <i-math-symbols />,
  },
  {
    label: renderLink('/simulations', 'Simulations'),
    key: 'Simulations',
    icon: () => <i-bulb />,
  },
  {
    label: renderLink('/history', 'History'),
    key: 'History',
    icon: () => <i-clock />,
  },
  {
    type: 'divider',
  },
  {
    label: renderLink('/about', 'About'),
    key: 'About',
    icon: () => <i-info-circle />,
  },
]

const top = ref()
const router = useRouter()
function handleScroll() {
  top.value.scrollIntoView()
}
router.afterEach(() => {
  handleScroll()
})

const theme = useThemeStore()
</script>

<template>
  <n-layout has-sider position="absolute">
    <n-layout-header bordered class="flex h-14 items-center">
      <div ref="top" />
      <app-header-item v-if="isNamed" @click="isShowing = !isShowing">
        <i-menu-2 class="h-6 w-6" />
      </app-header-item>
      <app-header-item v-else @click="router.go(-1)">
        <i-arrow-narrow-left class="h-6 w-6" />
      </app-header-item>
      <div v-if="isNamed" class="!my-0 px-3 font-medium">
        {{ route.name }}
      </div>
    </n-layout-header>
    <n-layout class="!top-14 @container" embedded position="absolute">
      <router-view />
    </n-layout>
  </n-layout>
  <n-drawer v-model:show="isShowing" display-directive="show" placement="left" :width="300">
    <n-drawer-content body-content-style="padding: 0">
      <div class="p-4 pt-8">
        <h1 class="text-2xl font-semibold">
          PhyQuiz
        </h1>
        <div class="mt-4 flex justify-between">
          Dark mode
          <n-switch v-model:value="theme.darkMode" />
        </div>
      </div>
      <n-menu
        class="mt-2"
        v-bind="{ options }"
        :collapsed-icon-size="24"
        :collapsed-width="64"

        :root-indent="20" :value="$route.name"
      />
      <img src="/qr-code.png" class="p-4" />
    </n-drawer-content>
  </n-drawer>
</template>
