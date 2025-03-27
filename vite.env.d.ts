/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_RIOT_API_KEY: string;
    // Add other environment variables here, for example:
    // readonly VITE_OTHER_API_KEY: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  