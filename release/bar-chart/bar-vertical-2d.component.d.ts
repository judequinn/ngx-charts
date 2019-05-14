import { EventEmitter, TemplateRef } from '@angular/core';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';
export declare class BarVertical2DComponent extends BaseChartComponent {
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
    scaleType: string;
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
    groupPadding: number;
    barPadding: number;
    roundDomains: boolean;
    roundEdges: boolean;
    yScaleMax: number;
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
    groupDomain: any[];
    innerDomain: any[];
    valuesDomain: any[];
    groupScale: any;
    innerScale: any;
    valueScale: any;
    transform: string;
    colors: ColorHelper;
    margin: number[];
    xAxisHeight: number;
    yAxisWidth: number;
    legendOptions: any;
    dataLabelMaxHeight: any;
    update(): void;
    onDataLabelMaxHeightChanged(event: any, groupIndex: any): void;
    getGroupScale(): any;
    getInnerScale(): any;
    getValueScale(): any;
    getGroupDomain(): any[];
    getInnerDomain(): any[];
    getValueDomain(): number[];
    groupTransform(group: any): string;
    onClick(data: any, group?: any): void;
    trackBy(index: any, item: any): any;
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
    onActivate(event: any, group?: any): void;
    onDeactivate(event: any, group?: any): void;
}
