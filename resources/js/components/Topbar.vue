<template>
  <header class="bg-white h-16 shadow-sm border-b border-gray-100 flex items-center justify-between px-8">
    <!-- 左側狀態 -->
    <div class="flex items-center gap-4">
      <span
        class="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        {{ statusText }}
      </span>
      <h2 class="font-semibold text-gray-700"></h2>
    </div>

    <!-- 右側通知與使用者帳戶 -->
    <div class="flex items-center gap-4">
      <!-- 通知鈴鐺 -->
      <button class="relative p-2 text-gray-400 hover:text-gray-600 transition duration-200 focus:outline-none">
        <span class="text-xl">🔔</span>
        <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      <!-- 使用者頭像 -->
      <div class="flex items-center gap-2 cursor-pointer group">
        <div
          class="w-8 h-8 bg-orange-500 rounded-full text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-orange-600 transition duration-200">
          Admin
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  adminName: {
    type: String,
    default: "官方旗艦店管理員",
  },
  statusText: {
    type: String,
    default: "已連線",
  },
});
</script>
