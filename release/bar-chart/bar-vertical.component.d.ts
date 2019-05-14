import { EventEmitter, TemplateRef } from '@angular/core';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';
export declare class BarVerticalComponent extends BaseChartComponent {
    legend: boolean;
    legendTitle: string;
    legendPosition: string;
    xAxis: any;
    yAxis: any;
    showXAxisLabel: any;
    showYAxisLabel: any;
    xAxisLabel: any;
    yAxisLabel: any;
    tooltipDisabled: boolean;
    gradient: boolean;
    showGridLines: boolean;
    activeEntries: any[];
    schemeType: string;
    trimXAxisTicks: boolean;
    trimYAxisTicks: boolean;
    rotateXAxisTicks: boolean;
    maxXAxisTickLength: number;
    maxYAxisTickLength: number;
    xAxisTickFormatting: any;
    yAxisTickFormatting: any;
    xAxisTicks: any[];
    yAxisTicks: any[];
    barPadding: number;
    roundDomains: boolean;
    roundEdges: boolean;
    yScaleMax: number;
    yScaleMin: number;
<<<<<<< HEAD
<<<<<<< HEAD
    fontSize: number;
    fontFamily: string;
    xAxisFontFamily: string;
    xAxisFontSize: number;
    xAxisMaxLabelLength: number;
    xAxisLabelRotationAngle: number;
    yAxisFontFamily: string;
    yAxisFontSize: number;
=======
    showDataLabel: boolean;
    dataLabelFormatting: any;
>>>>>>> upstream/master
=======
    showDataLabel: boolean;
    dataLabelFormatting: any;
>>>>>>> upstream/master
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    tooltipTemplate: TemplateRef<any>;
    dims: ViewDimensions;
    xScale: any;
    yScale: any;
    xDomain: any;
    yDomain: any;
    transform: string;
    colors: ColorHelper;
    margin: any[];
    xAxisHeight: number;
    yAxisWidth: number;
    legendOptions: any;
    dataLabelMaxHeight: any;
    update(): void;
    getXScale(): any;
    getYScale(): any;
    getXDomain(): any[];
    getYDomain(): number[];
    onClick(data: any): void;
    setColors(): void;
    getLegendOptions(): {
        scaleType: string;
        colors: any;
        domain: any[];
        title: any;
<<<<<<< HEAD
<<<<<<< HEAD
        fontSize: number;
        fontFamily: string;
=======
        position: string;
>>>>>>> upstream/master
=======
        position: string;
>>>>>>> upstream/master
    };
    updateYAxisWidth({ width }: {
        width: any;
    }): void;
    updateXAxisHeight({ height }: {
        height: any;
    }): void;
    onDataLabelMaxHeightChanged(event: any): void;
    onActivate(item: any): void;
    onDeactivate(item: any): void;
}
