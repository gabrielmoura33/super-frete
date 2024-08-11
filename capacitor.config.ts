import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'react-capacitor',
  webDir: '.next/server/pages',
  server: {
    url: 'http://192.168.0.75:3000',
    cleartext: true
  }
};

export default config;
