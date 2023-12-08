<script setup lang="tsx">
import type { MenuOption } from 'naive-ui'

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
</script>

<template>
  <n-layout has-sider position="absolute">
    <n-layout-header bordered class="flex h-14 items-center">
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
      <div class="h-32 w-full bg-gray-200" />
      <n-menu
        class="mt-2"
        v-bind="{ options }"
        :collapsed-icon-size="24"
        :collapsed-width="64"

        :root-indent="20" :value="$route.name"
      />
    </n-drawer-content>
  </n-drawer>
</template>
