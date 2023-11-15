/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_PORT: string | number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
