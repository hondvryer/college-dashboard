import React from 'react';
import './styles.scss';
import { Canvas } from './../Canvas';

export const Chart = (props) => {
    return (
        <div className="chart">
            <div className="controls">
                <nav>
                    <a href="/">{
                        props.filter?.label ? props.filter?.label : 'Label'
                    }</a>
                </nav>
                <div>
                    <span>{props.filter?.value ? `${props.filter?.value}%` : 'N/A'}</span>
                </div>
            </div>
            <div className="canvas-container">
                <Canvas dataSet={props.dataSet} />
            </div>
        </div>
    );
}
