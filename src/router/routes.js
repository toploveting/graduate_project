
const routes = [
  {
    path: '/',
<<<<<<< HEAD
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'list', component: () => import('pages/List.vue') },
      { path: 'form', component: () => import('pages/Form.vue') },
      { path: 'build', component: () => import('pages/Build.vue') },
      { path: 'activity', component: () => import('pages/Activity.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'signin', component: () => import('pages/Signin.vue') },
      { path: 'email', component: () => import('pages/Email.vue') },
      { path: 'success', component: () => import('pages/Success.vue') },
      { path: 'class', component: () => import('pages/Class.vue') }
    ]
  }
]

=======
    component: () => import('layouts/loginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/Index.vue') },
      { path: 'signin', component: () => import('pages/Signin.vue') },
      { path: 'email', component: () => import('pages/Email.vue') },
      { path: 'success', component: () => import('pages/Success.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/secondLayout.vue'),
    children: [
      { path: '/list', component: () => import('pages/List.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/blueLayout.vue'),
    children: [
      { path: 'class', component: () => import('pages/Class.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('pages/Form.vue'),
    children: [
      { path: 'form', component: () => import('pages/Form.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/buildLayout.vue'),
    children: [
      { path: 'build', component: () => import('pages/build.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/actLayout.vue'),
    children: [
      { path: 'activity', component: () => import('pages/Activity.vue') }
    ]
  }
]
>>>>>>> origin/ting
// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}
export default routes
