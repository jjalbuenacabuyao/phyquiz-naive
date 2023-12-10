import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.physics.phyquiz',
  appName: 'PhyQuiz',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
}

export default config
