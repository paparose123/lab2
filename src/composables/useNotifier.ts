import { useNotificationStore } from '../stores/useNotificationStore';

export function useNotifier() {
    const store = useNotificationStore();

    const showSuccess = (message: string) => {
        store.addNotification(message, 'success');
    };

    const showError = (message: string) => {
        store.addNotification(message, 'error');
    };

    const showWarning = (message: string) => {
        store.addNotification(message, 'warning');
    };

    const showInfo = (message: string) => {
        store.addNotification(message, 'info');
    };

    return { showSuccess, showError, showWarning, showInfo };
}