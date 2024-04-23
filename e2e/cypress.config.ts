import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run tic-tac-toe:serve:development',
        production: 'nx run tic-tac-toe:serve:production',
      },
      ciWebServerCommand: 'nx run tic-tac-toe:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
