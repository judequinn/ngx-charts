import { SimpleChanges, EventEmitter, OnChanges, TemplateRef } from '@angular/core';
export declare class PieSeriesComponent implements OnChanges {
    colors: any;
    series: any;
    dims: any;
    innerRadius: number;
    outerRadius: number;
    explodeSlices: any;
    showLabels: any;
    gradient: boolean;
    activeEntries: any[];
    labelFormatting: any;
    trimLabels: boolean;
    maxLabelLength: number;
    tooltipText: (o: any) => any;
    tooltipDisabled: boolean;
    tooltipTemplate: TemplateRef<any>;
    tooltipFontFamily: string;
    tooltipFontSize: number;
    animations: boolean;
    select: EventEmitter<{}>;
    activate: EventEmitter<{}>;
    deactivate: EventEmitter<{}>;
    max: number;
    data: any;
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    midAngle(d: any): number;
    outerArc(): any;
    calculateLabelPositions(pieData: any): any;
    labelVisible(myArc: any): boolean;
    labelText(myArc: any): string;
    label(myArc: any): string;
    defaultTooltipText(myArc: any): string;
    color(myArc: any): any;
    trackBy(index: any, item: any): string;
    onClick(data: any): void;
    isActive(entry: any): boolean;
}
