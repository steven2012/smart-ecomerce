
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/ecomerce"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/product"
  },
  {
    "renderMode": 2,
    "route": "/stock"
  },
  {
    "renderMode": 2,
    "route": "/profile"
  },
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/**"
  }
],
  assets: new Map([
['index.csr.html', {size: 18850, hash: '034d5550a79cece6770d4b1784d38fca8cfbce010a3b98dde6bcd1fbb3d2b2f5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 8137, hash: 'd3c8102414543e13cd16d3d3d90c0e09ee1ee950d258ddb359a10dea714656c3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['ecomerce/index.html', {size: 26749, hash: 'bbe4ef5f06c81248e29f1abee4fae4c07603723349035b77ef759456f6ea6781', text: () => import('./assets-chunks/ecomerce_index_html.mjs').then(m => m.default)}], 
['login/index.html', {size: 36856, hash: '9df8bb3460e17c0695731a4653805553b0ee384e031b96c9c0e4c15eb122d081', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)}], 
['stock/index.html', {size: 33612, hash: '316c81027f3afdfa17ffb8f6ef5234569084e0acde9aee00c81c94cd387ff640', text: () => import('./assets-chunks/stock_index_html.mjs').then(m => m.default)}], 
['product/index.html', {size: 83888, hash: 'fb4f672f9b8267c539c48461a9cefcded19aeb881d913e950f922fd7cb1df76d', text: () => import('./assets-chunks/product_index_html.mjs').then(m => m.default)}], 
['profile/index.html', {size: 26861, hash: 'c389dbe8dea8228a06d37fc3415fcf50edc5026e609f8be69aad34bf63bcadb5', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)}], 
['styles-63PMUIWA.css', {size: 238592, hash: 'bWTlSPeaBYE', text: () => import('./assets-chunks/styles-63PMUIWA_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
