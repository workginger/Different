<template>
  <router-link :to="to" custom v-slot="{ navigate, isActive }">
    <div
      @click="navigate"
      class="flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition duration-200 cursor-pointer"
      :class="isActive ? 'bg-orange-500 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'">
      <span class="text-lg">{{ icon }}</span>
      <slot></slot>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  to: {
    type: [String, Object],
    // required: true
  },
  icon: { type: String, default: "" },
});
</script>
