
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/https://github.com/Pirateskings/Restaurant-Management/login",
    "route": "/https://github.com/Pirateskings/Restaurant-Management"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/Pirateskings/Restaurant-Management/login"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/Pirateskings/Restaurant-Management/user"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/Pirateskings/Restaurant-Management/user/home"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/Pirateskings/Restaurant-Management/user/menu"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/Pirateskings/Restaurant-Management/user/service"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/Pirateskings/Restaurant-Management/user/about"
  },
  {
    "renderMode": 2,
    "redirectTo": "/https://github.com/Pirateskings/Restaurant-Management/admin/admin-dashboard",
    "route": "/https://github.com/Pirateskings/Restaurant-Management/admin"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/Pirateskings/Restaurant-Management/admin/admin-dashboard"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/Pirateskings/Restaurant-Management/admin/addemployee"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/Pirateskings/Restaurant-Management/admin/salarycal"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/Pirateskings/Restaurant-Management/admin/userlist"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/Pirateskings/Restaurant-Management/admin/complaint"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/Pirateskings/Restaurant-Management/admin/feedback"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/Pirateskings/Restaurant-Management/admin/newsle"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/Pirateskings/Restaurant-Management/admin/reservation"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/Pirateskings/Restaurant-Management/admin/contact"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/Pirateskings/Restaurant-Management/admin/adminhome"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/Pirateskings/Restaurant-Management/admin/adminmenu"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/Pirateskings/Restaurant-Management/admin/adminservice"
  },
  {
    "renderMode": 2,
    "route": "/https://github.com/Pirateskings/Restaurant-Management/admin/adminabout"
  },
  {
    "renderMode": 2,
    "redirectTo": "/https://github.com/Pirateskings/Restaurant-Management/admin/admin-dashboard",
    "route": "/https://github.com/Pirateskings/Restaurant-Management/admin/**"
  },
  {
    "renderMode": 2,
    "redirectTo": "/https://github.com/Pirateskings/Restaurant-Management/login",
    "route": "/https://github.com/Pirateskings/Restaurant-Management/**"
  }
],
  assets: new Map([
['index.csr.html', {size: 1811, hash: '39fd6dea893541a19c1752517df357663d95f0febcc82ea65e6f09a91389dbb2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 2173, hash: '7d6c60708d9dbd93de0daeb2cacb71f90d42a1ab01021871491149f3c28eb2b9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['user/index.html', {size: 17886, hash: 'ff4e5a5a0ab731dcee762c3db114e1562d863a5a61ca3f5d60a0598c85d38eda', text: () => import('./assets-chunks/user_index_html.mjs').then(m => m.default)}], 
['user/home/index.html', {size: 17886, hash: 'ff4e5a5a0ab731dcee762c3db114e1562d863a5a61ca3f5d60a0598c85d38eda', text: () => import('./assets-chunks/user_home_index_html.mjs').then(m => m.default)}], 
['login/index.html', {size: 17886, hash: 'ff4e5a5a0ab731dcee762c3db114e1562d863a5a61ca3f5d60a0598c85d38eda', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)}], 
['user/about/index.html', {size: 17886, hash: 'ff4e5a5a0ab731dcee762c3db114e1562d863a5a61ca3f5d60a0598c85d38eda', text: () => import('./assets-chunks/user_about_index_html.mjs').then(m => m.default)}], 
['user/service/index.html', {size: 17886, hash: 'ff4e5a5a0ab731dcee762c3db114e1562d863a5a61ca3f5d60a0598c85d38eda', text: () => import('./assets-chunks/user_service_index_html.mjs').then(m => m.default)}], 
['admin/admin-dashboard/index.html', {size: 17886, hash: 'ff4e5a5a0ab731dcee762c3db114e1562d863a5a61ca3f5d60a0598c85d38eda', text: () => import('./assets-chunks/admin_admin-dashboard_index_html.mjs').then(m => m.default)}], 
['admin/salarycal/index.html', {size: 17886, hash: 'ff4e5a5a0ab731dcee762c3db114e1562d863a5a61ca3f5d60a0598c85d38eda', text: () => import('./assets-chunks/admin_salarycal_index_html.mjs').then(m => m.default)}], 
['admin/addemployee/index.html', {size: 17886, hash: 'ff4e5a5a0ab731dcee762c3db114e1562d863a5a61ca3f5d60a0598c85d38eda', text: () => import('./assets-chunks/admin_addemployee_index_html.mjs').then(m => m.default)}], 
['admin/feedback/index.html', {size: 17886, hash: 'ff4e5a5a0ab731dcee762c3db114e1562d863a5a61ca3f5d60a0598c85d38eda', text: () => import('./assets-chunks/admin_feedback_index_html.mjs').then(m => m.default)}], 
['admin/complaint/index.html', {size: 17886, hash: 'ff4e5a5a0ab731dcee762c3db114e1562d863a5a61ca3f5d60a0598c85d38eda', text: () => import('./assets-chunks/admin_complaint_index_html.mjs').then(m => m.default)}], 
['admin/userlist/index.html', {size: 17886, hash: 'ff4e5a5a0ab731dcee762c3db114e1562d863a5a61ca3f5d60a0598c85d38eda', text: () => import('./assets-chunks/admin_userlist_index_html.mjs').then(m => m.default)}], 
['admin/reservation/index.html', {size: 17886, hash: 'ff4e5a5a0ab731dcee762c3db114e1562d863a5a61ca3f5d60a0598c85d38eda', text: () => import('./assets-chunks/admin_reservation_index_html.mjs').then(m => m.default)}], 
['admin/newsle/index.html', {size: 17886, hash: 'ff4e5a5a0ab731dcee762c3db114e1562d863a5a61ca3f5d60a0598c85d38eda', text: () => import('./assets-chunks/admin_newsle_index_html.mjs').then(m => m.default)}], 
['admin/contact/index.html', {size: 17886, hash: 'ff4e5a5a0ab731dcee762c3db114e1562d863a5a61ca3f5d60a0598c85d38eda', text: () => import('./assets-chunks/admin_contact_index_html.mjs').then(m => m.default)}], 
['admin/adminhome/index.html', {size: 17886, hash: 'ff4e5a5a0ab731dcee762c3db114e1562d863a5a61ca3f5d60a0598c85d38eda', text: () => import('./assets-chunks/admin_adminhome_index_html.mjs').then(m => m.default)}], 
['admin/adminmenu/index.html', {size: 17886, hash: 'ff4e5a5a0ab731dcee762c3db114e1562d863a5a61ca3f5d60a0598c85d38eda', text: () => import('./assets-chunks/admin_adminmenu_index_html.mjs').then(m => m.default)}], 
['admin/adminservice/index.html', {size: 17886, hash: 'ff4e5a5a0ab731dcee762c3db114e1562d863a5a61ca3f5d60a0598c85d38eda', text: () => import('./assets-chunks/admin_adminservice_index_html.mjs').then(m => m.default)}], 
['admin/adminabout/index.html', {size: 17886, hash: 'ff4e5a5a0ab731dcee762c3db114e1562d863a5a61ca3f5d60a0598c85d38eda', text: () => import('./assets-chunks/admin_adminabout_index_html.mjs').then(m => m.default)}], 
['user/menu/index.html', {size: 17886, hash: 'ff4e5a5a0ab731dcee762c3db114e1562d863a5a61ca3f5d60a0598c85d38eda', text: () => import('./assets-chunks/user_menu_index_html.mjs').then(m => m.default)}], 
['styles-TNSUFTMV.css', {size: 1864, hash: 'PIcl6+k1YJE', text: () => import('./assets-chunks/styles-TNSUFTMV_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
