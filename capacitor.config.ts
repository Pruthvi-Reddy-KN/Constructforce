
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.acaa68ceb4b346e0a89b45d202cee4d1',
  appName: 'constructforce-project-nexus',
  webDir: 'dist',
  server: {
    url: 'https://acaa68ce-b4b3-46e0-a89b-45d202cee4d1.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#1e293b',
      showSpinner: true,
      spinnerColor: '#f97316'
    }
  }
};

export default config;
