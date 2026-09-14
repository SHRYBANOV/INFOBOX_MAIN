import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mycompany.myapp',
  appName: 'InfoboxMain',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    cleartext: true, // РАЗРЕШАЕМ HTTP запросы для тестов
    allowNavigation: ['*'] // Разрешаем навигацию на любые домены
  }
};

export default config;