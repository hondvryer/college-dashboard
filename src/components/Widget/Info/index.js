/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './styles.scss';
import { BASE_URL } from './../../../utils/constants';

export const Info = (props) => {
    const { stats } = props;
    return (
        <div className="info">
            <h4>Stats:</h4>
            {
                stats && Object.keys(stats).map(stat => {
                    return (
                        <div className="info-module" key={stats[stat].value}>
                            <div className="heading">
                                <span>{stats[stat].label}</span>
                                <span>{`${stats[stat].value}%`}</span>
                            </div>
                            <div className='info-bg'>
                                <div className='info-active' style={{ width: `${stats[stat].value}%` }}></div>
                            </div>
                        </div>
                    );
                })
            }

            <nav>
                <a href={BASE_URL + props.url} target="_blank">
                    <span>View API</span>
                    <span className="fa fa-arrow-right fa-lg" />
                </a>
            </nav>
        </div>
    );
}
