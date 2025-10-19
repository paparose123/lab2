import { ref } from 'vue';
import { defineStore } from 'pinia';

export interface Notification {
    id: number;
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
}

export const useNotificationStore = defineStore('notification', () => {
    const notifications = ref<Notification[]>([]);

    const addNotification = (message: string, type: Notification['type']) => {
        const id = Date.now() + Math.random();
        const newNotification: Notification = { id, message, type };

        notifications.value.unshift(newNotification);

        // 3 sec
        setTimeout(() => {
            removeNotification(id);
        }, 3000);
    };

    const removeNotification = (id: number) => {
        const index = notifications.value.findIndex(n => n.id === id);
        if (index !== -1) {
            notifications.value.splice(index, 1);
        }
    };

    return { notifications, addNotification, removeNotification };
});