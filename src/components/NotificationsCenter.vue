<script setup lang="ts">
import { useNotificationStore } from '../stores/useNotificationStore';

const store = useNotificationStore();

const dismiss = (id: number) => {
  store.removeNotification(id);
};
</script>

<template>
  <div class="notifications-center">
    <TransitionGroup name="notification">
      <div
          v-for="notification in store.notifications"
          :key="notification.id"
          class="notification-item"
          :class="`type-${notification.type}`"
          @click="dismiss(notification.id)"
      >
        <div class="message">{{ notification.message }}</div>
        <div class="close-btn">×</div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>

.notifications-center {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.notification-item {
  min-width: 300px;
  padding: 15px 20px;
  border-radius: 8px;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.5s ease;
}

.type-success {
  background-color: #4CAF50;
}

.type-error {
  background-color: #f44336;
}

.type-warning {
  background-color: #ff9800;
}

.type-info {
  background-color: #2196F3;
}

.notification-enter-from,
.notification-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.notification-leave-active {
  position: absolute;
}
</style>