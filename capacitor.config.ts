import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mycompany.myapp',
  appName: 'InfoboxMain',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    cleartext: true,
    allowNavigation: [
      'uad.sapsystems.pl',
      '*.sapsystems.pl',
      'sdk.openui5.org'
    ]
  }
};

export default config;
