<!-- resources/js/pages/home/Home.vue -->
<template>
  <div class="flex min-h-screen bg-gray-50 font-sans text-gray-800">

    <main class="flex-1 flex flex-col overflow-y-auto">
      <div class="p-8 max-w-7xl w-full mx-auto space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="今日總營業額" value="$54,820" :trend="12.5" icon="💰" color="orange" />
          <StatCard title="今日訂單總數" value="312 單" :trend="8.4" icon="📈" color="green" />
          <StatCard title="待出貨包裹" value="45 件" :trend="-3.2" icon="📦" color="blue" />
          <StatCard title="賣場即時訪客" value="1,204 人" :trend="22.1" icon="👥" color="red" />
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 class="font-bold text-gray-800 text-lg mb-6">📈 賣場近七日營收動態</h3>
            <div class="h-64 bg-gradient-to-t from-orange-50/30 to-transparent rounded-lg border border-dashed border-gray-200 flex items-center justify-center text-gray-400 text-sm">
              [ 📊 圖表數據組件預留區 ]
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
            <h3 class="font-bold text-gray-800 text-lg mb-4">🚨 賣場即時待辦</h3>
            <div class="space-y-3 flex-1">
              <div class="p-3 bg-red-50 text-red-700 rounded-lg text-sm font-medium flex justify-between items-center">
                <span>⚠️ 3 筆訂單買家申請退貨</span>
              </div>
              <div class="p-3 bg-yellow-50 text-yellow-700 rounded-lg text-sm font-medium flex justify-between items-center">
                <span>⚠️ 5 件熱銷商品庫存過低</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
import Topbar from '../../components/Topbar.vue';
import StatCard from '../../components/StatCard.vue';
</script>
