import { createApp } from '@backstage/frontend-defaults';
import appVisualizerPlugin from '@backstage/plugin-app-visualizer';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import homePlugin from '@backstage/plugin-home/alpha';
import scaffolderPlugin from '@backstage/plugin-scaffolder/alpha';
import searchPlugin from '@backstage/plugin-search/alpha';
import userSettingsPlugin from '@backstage/plugin-user-settings/alpha';
import { dynamicFrontendFeaturesLoader } from '@backstage/frontend-dynamic-feature-loader';

import * as react from 'react';
import * as reactDom from 'react-dom';
import * as reactRouter from 'react-router';
import * as reactRouterDom from 'react-router-dom';
import * as materialUiCoreStyles from '@material-ui/core/styles';
import * as materialUiStyles from '@material-ui/styles';
import * as muiMaterialStyles from '@mui/material/styles';
import * as emotionReact from '@emotion/react';
import * as emotionStyled from '@emotion/styled';

import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';

ClassNameGenerator.configure(componentName => {
  return componentName.startsWith('v5-')
    ? componentName
    : `v5-${componentName}`;
});

const app = createApp({
  features: [
    appVisualizerPlugin,
    catalogPlugin,
    scaffolderPlugin,
    searchPlugin,
    homePlugin,
    userSettingsPlugin,
    dynamicFrontendFeaturesLoader({
      moduleFederation: {
        shared: {
          react: {
            lib: () => react,
            version: '*',
            shareConfig: {
              singleton: true,
              requiredVersion: "*",
              eager: true,
            },
          },
          'react-dom': {
            lib: () => reactDom,
            version: '*',
            shareConfig: {
              singleton: true,
              requiredVersion: '*',
              eager: true,
            },
          },
          'react-router': {
            lib: () => reactRouter,
            version: '*',
            shareConfig: {
              singleton: true,
              requiredVersion: '*',
              eager: true,
            },
          },
          'react-router-dom': {
            lib: () => reactRouterDom,
            version: '*',
            shareConfig: {
              singleton: true,
              requiredVersion: '*',
              eager: true,
            },
          },
          // MUI v4
          '@material-ui/core/styles': {
            lib: () => materialUiCoreStyles,
            version: '*',
            shareConfig: {
              singleton: true,
              requiredVersion: '*',
              eager: true,
            },
          },
          '@material-ui/styles': {
            lib: () => materialUiStyles,
            version: '*',
            shareConfig: {
              singleton: true,
              requiredVersion: '*',
              eager: true,
            },
          },
          // MUI v5
          '@mui/material/styles/': {
            lib: () => muiMaterialStyles,
            version: '*',
            shareConfig: {
              singleton: true,
              requiredVersion: '*',
              eager: true,
            },
          },
          '@emotion/react': {
            lib: () => emotionReact,
            version: '*',
            shareConfig: {
              singleton: true,
              requiredVersion: '*',
              eager: true,
            },
          },
          '@emotion/styled': {
            lib: () => emotionStyled,
            version: '*',
            shareConfig: {
              singleton: true,
              requiredVersion: '*',
              eager: true,
            },
          },
        },
      },
    })
  ],
});

export default app.createRoot();
