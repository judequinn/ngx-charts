import { EventEmitter, OnChanges, ElementRef, SimpleChanges, AfterViewInit } from '@angular/core';
export declare class XAxisTicksComponent implements OnChanges, AfterViewInit {
    scale: any;
    orient: any;
    tickArguments: number[];
    tickValues: any[];
    tickStroke: string;
    trimTicks: boolean;
    maxTickLength: number;
    tickFormatting: any;
    showGridLines: boolean;
    gridLineHeight: any;
    width: any;
<<<<<<< HEAD
<<<<<<< HEAD
    fontFamily: string;
    fontSize: number;
    maxLabelLength: number;
    labelRotationAngle: number;
=======
    rotateTicks: boolean;
>>>>>>> upstream/master
=======
    rotateTicks: boolean;
>>>>>>> upstream/master
    dimensionsChanged: EventEmitter<{}>;
    verticalSpacing: number;
    rotateLabels: boolean;
    innerTickSize: number;
    outerTickSize: number;
    tickPadding: number;
    textAnchor: string;
    maxTicksLength: number;
    maxAllowedLength: number;
    adjustedScale: any;
    textTransform: any;
    ticks: any;
    tickFormat: (o: any) => any;
    height: number;
    ticksElement: ElementRef;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    updateDims(): void;
    update(): void;
    getRotationAngle(ticks: any): number;
    getTicks(): any;
    getMaxTicks(tickWidth: number): number;
    tickTransform(tick: any): string;
    gridLineTransform(): string;
    tickTrim(label: string): string;
}
