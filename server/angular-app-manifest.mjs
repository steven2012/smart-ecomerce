
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/./login",
    "route": "/."
  },
  {
    "renderMode": 2,
    "route": "/./ecomerce"
  },
  {
    "renderMode": 2,
    "route": "/./login"
  },
  {
    "renderMode": 2,
    "route": "/./product"
  },
  {
    "renderMode": 2,
    "route": "/./stock"
  },
  {
    "renderMode": 2,
    "route": "/./profile"
  },
  {
    "renderMode": 2,
    "redirectTo": "/./login",
    "route": "/./**"
  }
],
  assets: new Map([
['index.csr.html', {size: 18851, hash: '6fbdc372c11ba452818239a2743a381fc3b8405ca5d62f8896e5b9ab2b4c1ff4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 8138, hash: '378a0b12f1e9eb0d2e1e361c71525c92dfca4ecd10c2b2055bb5c2b0dbd997e9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-63PMUIWA.css', {size: 238592, hash: 'bWTlSPeaBYE', text: () => import('./assets-chunks/styles-63PMUIWA_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
