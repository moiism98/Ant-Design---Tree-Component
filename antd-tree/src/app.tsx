import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { ConfigProvider } from 'antd';
import React from 'react';
import type { RunTimeLayoutConfig } from 'umi';
import defaultSettings from '../config/defaultSettings';

export const initialStateConfig = {
  loading: false,
};

ConfigProvider.config({ theme: { primaryColor: '#7CB305' } });

export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
}> {
  return {
    settings: {
      ...defaultSettings,
    },
  };
}

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    disableContentMargin: false,
    menuHeaderRender: undefined,
    childrenRender: (children: React.ReactNode) => {
      return <>{children}</>;
    },
    ...initialState?.settings,
  };
};
