/// <reference types="astro/client" />

declare global {
  interface ImportMetaEnv {
    readonly PUBLIC_BUCKET_URL: string;
    readonly PUBLIC_GITHUB_URL: string;
    readonly PUBLIC_RECAPTCHA_SITE_KEY: string;
  }
}

export {};
