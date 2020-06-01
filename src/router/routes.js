
const routes = [
  {
    path: '/',
    component: () => import('layouts/loginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'signin', component: () => import('pages/Signin.vue') },
      { path: 'email', component: () => import('pages/Email.vue') },
      { path: 'success', component: () => import('pages/Success.vue') },
      { path: 'setting', component: () => import('pages/Setting.vue') }
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
      { path: 'month', component: () => import('pages/Month.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/blueLayout.vue'),
    children: [
      { path: 'test', component: () => import('pages/FStest.vue') }
    ]
  },
  { path: '/week', component: () => import('pages/Week.vue') },
  { path: '/chooseWeek', component: () => import('pages/ChooseWeek.vue') },
  { path: '/class', component: () => import('pages/Class.vue') },
  { path: '/chooseClass', component: () => import('pages/ChooseClass.vue') },
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
  },
  {
    path: '/',
    component: () => import('layouts/voteLayout.vue'),
    children: [
      { path: 'vote', component: () => import('pages/Vote.vue') },
      { path: 'vote_r', component: () => import('pages/VoteR.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/settingLayout.vue'),
    children: [
      { path: 'setclass', component: () => import('pages/Setclass.vue') },
      { path: 'setmonth', component: () => import('pages/Setmonth.vue') },
      { path: 'setid', component: () => import('pages/Setid.vue') },
      { path: 'setaccount', component: () => import('pages/Setaccount.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/teachLayout.vue'),
    children: [
      { path: 'teach', component: () => import('pages/Teach.vue') }
    ]
  }
]
// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}
export default routes
