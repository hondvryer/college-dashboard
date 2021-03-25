import React from 'react';
import { NUMBER0, NUMBER1 } from './../../../utils/constants';
import './styles.scss';

export const Canvas = (props) => {
    return (
        <div className="canvas" id="countries">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>{props?.dataSet?.header[NUMBER0]}</th>
                        <th>{props?.dataSet?.header[NUMBER1]}</th>
                    </tr>
                </thead>
                <tbody>
                    {props?.dataSet?.data && props.dataSet.data.map(dataRow => {
                        return <tr key={dataRow.label} style={{ color: dataRow.color }}>
                            <td>{dataRow.label}</td>
                            <td>{dataRow.value}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}
