import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Chart } from './Chart';
import { Info } from './Info';
import { BASE_URL } from './../../utils/constants';
import { MOCK_RESPONSE } from './../../utils/mock';
import { sortByKey } from './../../utils/sortUtils';
import { useDispatch, useSelector } from 'react-redux';
import { MaxViewWidget } from './../../actions/MaxViewWidget';

export const Widget = (props) => {

    const [widgetData, setWidgetData] = useState({});
    const [sortKey, setSortKey] = useState('label');
    const dispatch = useDispatch();
    const maxViewWidget = useSelector(state => state.dashboard.maxViewWidget);

    useEffect(() => {
        getWidgetData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getWidgetClassNames = () => {
        let classString = 'widget'
        if (maxViewWidget !== null && maxViewWidget !== '') {
            if (maxViewWidget === props?.widgetConfig?.id) {
                classString += ' max';
            } else {
                classString += ' hidden-widget';
            }
        }
        return classString;
    }

    const handleChange = (event) => {
        setSortKey(event.target.value);
    }

    const setMaximize = () => {
        props?.widgetConfig?.id
            && dispatch(new MaxViewWidget(props.widgetConfig.id).plainAction());
    }

    const setMinimize = () => {
        dispatch(new MaxViewWidget(null).plainAction());
    }

    const getWidgetData = () => {
        fetch(`${BASE_URL}${props.widgetConfig.url}`)
            .then(res => res.json())
            .then(
                result => {
                    if(result?.data) {
                        setWidgetData(result.data);
                    }
                    else {
                        setWidgetData(MOCK_RESPONSE[props.widgetConfig.url])
                    }
                },
                error => {
                    console.log(error);
                    setWidgetData(MOCK_RESPONSE[props.widgetConfig.url])
                }
            )
    }

    useEffect(() => {
        if (widgetData?.dataSet?.data) {
            const widgetDataClone = JSON.parse(JSON.stringify(widgetData));
            let sortedData = widgetDataClone?.dataSet?.data
                && sortByKey(widgetDataClone.dataSet.data, sortKey);
            widgetDataClone.dataSet.data = sortedData;
            setWidgetData(widgetDataClone);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortKey]);

    const getMaximizeMinimizeIcon = () => {
        return maxViewWidget === props?.widgetConfig?.id ?
            <div className="btn btn-primary max-min"
                onClick={() => { setMinimize() }}>
                <i className="fa fa-minus" />
            </div> :
            <div className="btn btn-primary max-min"
                onClick={() => { setMaximize() }}>
                <i className="fa fa-arrows-alt rotate-45" />
            </div>;
    }

    return (
        <div className={getWidgetClassNames()}>
            <header>
                <h3>{props.widgetConfig.name}</h3>
                <select name="sort-option"
                    onChange={e => { handleChange(e) }}
                    className="sort-option form-select">
                    <option
                        value="label"
                        defaultValue>
                        Sort by Label</option>
                    <option
                        value="value">
                        Sort by Value</option>
                </select>
                {getMaximizeMinimizeIcon()}
            </header>
            <Info stats={widgetData.stats}
            url={props?.widgetConfig?.url} />
            <Chart
                filter={widgetData.filter}
                dataSet={widgetData.dataSet} />
        </div>
    );
}
