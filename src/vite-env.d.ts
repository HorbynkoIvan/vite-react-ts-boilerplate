/// <reference types="vite/client" />

export interface ImportMetaEnv {
  readonly VITE_BASE_PATH: string;
  readonly VITE_PROD_PORT: string;
  readonly VITE_DEV_PORT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
