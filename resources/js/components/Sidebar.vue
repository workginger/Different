<template>
  <aside class="w-64 bg-slate-900 text-white flex flex-col min-h-screen">
    <div class="p-6 text-xl font-bold border-b border-slate-800 flex items-center gap-2 text-orange-500">
      <span>DIFFERNET</span>
    </div>

    <nav class="flex-1 p-4 space-y-2">
      <SidebarLink to="/" icon="📊">控制台首頁</SidebarLink>
      <SidebarLink :to="{ name: ROUTE_NAME.PRODUCT.INDEX }" icon="📦">商品管理</SidebarLink>
    </nav>

    <div class="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">v1.0.0</div>
  </aside>
</template>
<script setup>
import { ROUTE_NAME } from "@/constants/routes";
import SidebarLink from "@/components/SidebarLink.vue";
</script>
