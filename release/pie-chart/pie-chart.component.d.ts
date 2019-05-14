import { EventEmitter, TemplateRef } from '@angular/core';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';
export declare class PieChartComponent extends BaseChartComponent {
    labels: boolean;
    legend: boolean;
    legendTitle: string;
    legendPosition: string;
    explodeSlices: boolean;
    doughnut: boolean;
    arcWidth: number;
    gradient: boolean;
    activeEntries: any[];
    tooltipDisabled: boolean;
    labelFormatting: any;
    trimLabels: boolean;
    maxLabelLength: number;
    tooltipText: any;
<<<<<<< HEAD
    fontSize: number;
    fontFamily: string;
=======
    dblclick: EventEmitter<{}>;
>>>>>>> upstream/master
    select: EventEmitter<{}>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    tooltipTemplate: TemplateRef<any>;
    translation: string;
    outerRadius: number;
    innerRadius: number;
    data: any;
    colors: ColorHelper;
    domain: any;
    dims: any;
    margin: number[];
    legendOptions: any;
    update(): void;
    getDomain(): any[];
    onClick(data: any): void;
    setColors(): void;
    getLegendOptions(): {
        scaleType: string;
        domain: any;
        colors: ColorHelper;
        title: string;
<<<<<<< HEAD
        fontSize: number;
        fontFamily: string;
=======
        position: string;
>>>>>>> upstream/master
    };
    onActivate(item: any): void;
    onDeactivate(item: any): void;
}
