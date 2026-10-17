<template>
  <div class="flex min-h-screen bg-gray-50 font-sans text-gray-800">
    <Sidebar />

    <main class="flex-1 flex flex-col overflow-y-auto">
      <Topbar adminName="DIFFERENT" statusText="" />
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
import Topbar from "@/components/Topbar.vue";
</script>
