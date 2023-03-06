import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/MapProxy_Workshop_Praxiseinsatz/__docusaurus/debug',
    component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/__docusaurus/debug', '5f9'),
    exact: true
  },
  {
    path: '/MapProxy_Workshop_Praxiseinsatz/__docusaurus/debug/config',
    component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/__docusaurus/debug/config', '168'),
    exact: true
  },
  {
    path: '/MapProxy_Workshop_Praxiseinsatz/__docusaurus/debug/content',
    component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/__docusaurus/debug/content', '2d2'),
    exact: true
  },
  {
    path: '/MapProxy_Workshop_Praxiseinsatz/__docusaurus/debug/globalData',
    component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/__docusaurus/debug/globalData', 'b0a'),
    exact: true
  },
  {
    path: '/MapProxy_Workshop_Praxiseinsatz/__docusaurus/debug/metadata',
    component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/__docusaurus/debug/metadata', '13a'),
    exact: true
  },
  {
    path: '/MapProxy_Workshop_Praxiseinsatz/__docusaurus/debug/registry',
    component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/__docusaurus/debug/registry', 'f2a'),
    exact: true
  },
  {
    path: '/MapProxy_Workshop_Praxiseinsatz/__docusaurus/debug/routes',
    component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/__docusaurus/debug/routes', '613'),
    exact: true
  },
  {
    path: '/MapProxy_Workshop_Praxiseinsatz/markdown-page',
    component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/markdown-page', '975'),
    exact: true
  },
  {
    path: '/MapProxy_Workshop_Praxiseinsatz/docs',
    component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/docs', 'c57'),
    routes: [
      {
        path: '/MapProxy_Workshop_Praxiseinsatz/docs/config/',
        component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/docs/config/', '09b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/MapProxy_Workshop_Praxiseinsatz/docs/config/bausteine',
        component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/docs/config/bausteine', '9fc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/MapProxy_Workshop_Praxiseinsatz/docs/config/mapproxy.yaml',
        component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/docs/config/mapproxy.yaml', '643'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/MapProxy_Workshop_Praxiseinsatz/docs/config/seed.yaml',
        component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/docs/config/seed.yaml', 'f15'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/MapProxy_Workshop_Praxiseinsatz/docs/exercises/',
        component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/docs/exercises/', '477'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/MapProxy_Workshop_Praxiseinsatz/docs/exercises/caches',
        component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/docs/exercises/caches', '34b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/MapProxy_Workshop_Praxiseinsatz/docs/exercises/seeding',
        component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/docs/exercises/seeding', '064'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/MapProxy_Workshop_Praxiseinsatz/docs/exercises/setup',
        component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/docs/exercises/setup', '1e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/MapProxy_Workshop_Praxiseinsatz/docs/exercises/sources',
        component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/docs/exercises/sources', 'ea3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/MapProxy_Workshop_Praxiseinsatz/docs/introduction/',
        component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/docs/introduction/', '657'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/MapProxy_Workshop_Praxiseinsatz/docs/introduction/caches',
        component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/docs/introduction/caches', '7b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/MapProxy_Workshop_Praxiseinsatz/docs/introduction/grids',
        component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/docs/introduction/grids', '128'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/MapProxy_Workshop_Praxiseinsatz/docs/introduction/installation',
        component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/docs/introduction/installation', '4f2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/MapProxy_Workshop_Praxiseinsatz/docs/introduction/sources',
        component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/docs/introduction/sources', '78f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/MapProxy_Workshop_Praxiseinsatz/docs/practical_tips/',
        component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/docs/practical_tips/', '085'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/MapProxy_Workshop_Praxiseinsatz/',
    component: ComponentCreator('/MapProxy_Workshop_Praxiseinsatz/', 'a85'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
