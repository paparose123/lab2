<script setup lang="ts">
import { useNotifier } from '../composables/useNotifier';

const { showSuccess, showError, showWarning, showInfo } = useNotifier();
</script>

<template>
  <div class="demo-card">
    <h3>Відправка повідомлень</h3>

    <div class="buttons-wrapper">
      <button class="btn-success" @click="showSuccess('Операція успішно завершена!')">
        Success
      </button>
      <button class="btn-error" @click="showError('Помилка: невірний вхід.')">
        Error
      </button>
      <button class="btn-warning" @click="showWarning('Попередження: низький заряд батареї.')">
        Warning
      </button>
      <button class="btn-info" @click="showInfo('Натисніть для деталей.')">
        Info
      </button>
    </div>
  </div>
</template>

<style scoped>
.demo-card {
  padding: 20px;
  background-color: #333;
  border: 1px solid #555;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  margin: 20px;
  color: #f0f0f0;
}
.buttons-wrapper {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-weight: bold;
}

.btn-success { background-color: #4CAF50; }
.btn-error { background-color: #f44336; }
.btn-warning { background-color: #ff9800; }
.btn-info { background-color: #2196F3; }
</style>