# Chart Interface with CandleStick
This is the interface for the candlestick chart

## Chart Interface

**Build Result**

frappe-charts.esm.js <br>
frappe-charts.min.cjs.js <br>
frappe-charts.min.esm.js <br>
frappe-charts.min.umd.js

**Methods**

    update(data: DataType)
        Update Chart Data
        data: Basedata for chart

    updateDataset(datasetValues: DataSetType, index: number = 0)
        Update dataSet value for the selected index
        datasetValues: dataset value for updating
        index: index for updating dataset

    updateDatasets(datasets: array<DataSetType>)
        Update whole dataset values
        datasets: dataset values for updating

    addDataPoint(label: string, datasetValues: DataSetType, index: number)
        Add new datapoint to the chart
        label: new datapoint name
        datasetValues: dataset value for adding
        index: index for adding dataset

    removeDataPoint(index: number)
        Remove datapoint from the chart
        index: index for removing dataset

    export()
        Download chart as image

    destroy()
        Unbind window-resize events


**Events**

No event

**Props**

| Name | Type | Description |
| --- | --- | --- |
| `parent` | string | Html element ID for chart  |
| `options` | Options | Options for chart |

<br/>

*Options*

| Name             | Type            | Description                                                                   |
|------------------|-----------------|-------------------------------------------------------------------------------|
| `title`          | string          | Title of chart                                                                |
| `data`           | DataType        | Basedata for chart                                                            |
| `type`           | string          | Chart type \(line, bar, candle, axis-mixed, heatmap, pie, percentage, donut\) |
| `height`         | number          | Chart height                                                                  |
| `colors`         | array\<string\> | Initial Color list for chart                                                  |
| `isNavigable`    | number          | Flag for Navigable                                                            |
| `lineOptions`    | LineOption      | Line chart options                                                            |
| `barOptions`     | object          | Bar chart options                                                             |
| `candleOptions`  | object       | Candle chart options                                                          |
| `axisOptions`    | AxisOption      | Options for Axis                                                              |
| `tooltipOptions` | object          | Options for ToolTip                                                           |
| `xUnit`          | number          | Candle count per x unit                                                       |

<br/>

*DataType*

| Name          | Type                 | Description                  |
|---------------|----------------------|------------------------------|
| `labels`      | string               | Xaxis labels                 |
| `datasets`    | array\<DataSetType\> | Array of DataSet             |
| `yMarkers`    | array\<YMarkerType\> | YMarker list                 |
| `yRegions`    | array\<YRegionType\> | YRegion list                 |

<br/>

*DataSetType*

| Name           | Type                                      | Description      |
|----------------|-------------------------------------------|------------------|
| `name`         | string                                    | Xaxis labels     |
| `values`       | array\<number\>, array\<array\<number\>\> | Array of DataSet |
| `chartType`    | string                                    | Chart Type       |
| `axisPosition` | string                                    | Axis position    |

<br/>

*YMarkerType*

| Name      | Type   | Description       |
|-----------|--------|-------------------|
| `label`   | string | YMarker label     |
| `value`   | number | YMarker value     |
| `type`    | string | YMarker line type |
| `options` | object | YMarker options   |

<br/>

*YRegionType*

| Name      | Type   | Description         |
|-----------|--------|---------------------|
| `label`   | string | YRegion label       |
| `start`   | number | YRegion start value |
| `end`     | number | YRegion end value   |
| `options` | object | YRegion options     |

<br/>

*AxisOption*

| Name      | Type   | Description             |
|-----------|--------|-------------------------|
| `xAxisMode`   | string | xAxis Mode              |
| `yAxisMode`   | string | yAxis Mode              |
| `xIsSeries`   | number | xAxis label series flag |

<br/>

*LineOption*

| Name         | Type   | Description      |
|--------------|--------|------------------|
| `hideDots`   | number | Dots hide flag   |
| `heatline`   | number | Head flag        |
| `hideline`   | number | Hide line flag   |
| `regionFill` | number | Region fill flag |