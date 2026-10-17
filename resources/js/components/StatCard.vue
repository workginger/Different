<template>
  <div
    class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow duration-300">
    <div>
      <p class="text-sm font-medium text-gray-500 mb-1">{{ title }}</p>
      <h3 class="text-2xl font-bold text-gray-900">{{ value }}</h3>
      <span :class="trendClass" class="text-xs font-semibold inline-flex items-center mt-2">
        {{ trend > 0 ? "↑" : "↓" }} {{ Math.abs(trend) }}%
        <span class="text-gray-400 font-normal ml-1">對比昨日</span>
      </span>
    </div>
    <div :class="iconBgClass" class="p-4 rounded-xl text-2xl">
      {{ icon }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: String,
  value: String,
  trend: Number,
  icon: String,
  color: { type: String, default: "orange" },
});

const trendClass = computed(() => (props.trend > 0 ? "text-green-600" : "text-red-600"));
const iconBgClass = computed(() => {
  if (props.color === "green") return "bg-green-50 text-green-500";
  if (props.color === "blue") return "bg-blue-50 text-blue-500";
  if (props.color === "red") return "bg-red-50 text-red-500";
  return "bg-orange-50 text-orange-500";
});
</script>
