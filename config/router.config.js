export default [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      { path: '/', component: '../pages/index' },
      {
        path: '/thelifecycle',
        routes: [
          { path: '/thelifecycle/thelifecycle', component: '../pages/TheLifeCycle/TheLifeCycle' },
        ],
      },
    ],
  },
];
