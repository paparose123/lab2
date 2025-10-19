<script setup lang="ts">
import NotificationsCenter from './components/NotificationsCenter.vue';
import DemoButtons from './components/DemoButtons.vue';
</script>

<template>
  <div class="app-container">
    <NotificationsCenter />

    <h1>Лабораторна 2: Система повідомлень</h1>

    <DemoButtons />

    <p class="info-text">Мацайте кнопки.</p>
  </div>
</template>

<style>
body {
  background: #1e1e1e;
  color: #f0f0f0;
  margin: 0;
}
.app-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: sans-serif;
}
.app-container h1 {
  text-align: center;
  margin-bottom: 30px;
}
.info-text {
  text-align: center;
  font-size: 1.2em;
  font-weight: 500;
  margin-top: 30px;
  padding-top: 15px;
  border-top: 1px dashed #555;
}
</style>