import React from 'react';
import './styles.scss';
import { dashboardConfig } from './../../utils/constants';
import { Widget } from './../Widget';

export const Body = () => {
  return (
    <div className='db-body'>
      {
        dashboardConfig &&
        dashboardConfig.map(
          widgetConfig => <Widget
            key={widgetConfig.id}
            widgetConfig={widgetConfig} />)
      }
    </div>
  );
}
