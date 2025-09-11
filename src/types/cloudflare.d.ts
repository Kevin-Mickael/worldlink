// Types pour les fonctions Cloudflare Pages
export interface Env {
  BREVO_API_KEY: string;
}

export interface PagesFunction {
  (context: {
    request: Request;
    env: Env;
    params: Record<string, string>;
    waitUntil: (promise: Promise<any>) => void;
    passThroughOnException: () => void;
    next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
    data: Record<string, unknown>;
  }): Response | Promise<Response>;
}
