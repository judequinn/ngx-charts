import { EventEmitter, TemplateRef } from '@angular/core';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';
export declare class AreaChartStackedComponent extends BaseChartComponent {
    legend: boolean;
    legendTitle: string;
    legendPosition: string;
    xAxis: any;
    yAxis: any;
    showXAxisLabel: any;
    showYAxisLabel: any;
    xAxisLabel: any;
    yAxisLabel: any;
    timeline: any;
    gradient: any;
    showGridLines: boolean;
    curve: any;
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
    roundDomains: boolean;
    tooltipDisabled: boolean;
    xScaleMin: any;
    xScaleMax: any;
    yScaleMin: number;
    yScaleMax: number;
    fontSize: number;
    fontFamily: string;
    xAxisFontFamily: string;
    xAxisFontSize: number;
    xAxisLabelRotationAngle: number;
    yAxisFontFamily: string;
    yAxisFontSize: number;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    tooltipTemplate: TemplateRef<any>;
    seriesTooltipTemplate: TemplateRef<any>;
    dims: ViewDimensions;
    scaleType: string;
    xDomain: any[];
    xSet: any[];
    yDomain: any[];
    seriesDomain: any;
    xScale: any;
    yScale: any;
    transform: string;
    clipPathId: string;
    clipPath: string;
    colors: ColorHelper;
    margin: number[];
    hoveredVertical: any;
    xAxisHeight: number;
    yAxisWidth: number;
    filteredDomain: any;
    legendOptions: any;
    timelineWidth: any;
    timelineHeight: number;
    timelineXScale: any;
    timelineYScale: any;
    timelineXDomain: any;
    timelineTransform: any;
    timelinePadding: number;
    update(): void;
    updateTimeline(): void;
    getXDomain(): any[];
    getYDomain(): any[];
    getSeriesDomain(): any[];
    getXScale(domain: any, width: any): any;
    getYScale(domain: any, height: any): any;
    updateDomain(domain: any): void;
    updateHoveredVertical(item: any): void;
    hideCircles(): void;
    onClick(data: any, series?: any): void;
    trackBy(index: any, item: any): string;
    setColors(): void;
    getLegendOptions(): {
        scaleType: string;
        colors: any;
        domain: any[];
        title: any;
        position: string;
    };
    updateYAxisWidth({ width }: {
        width: any;
    }): void;
    updateXAxisHeight({ height }: {
        height: any;
    }): void;
    onActivate(item: any): void;
    onDeactivate(item: any): void;
    deactivateAll(): void;
}
