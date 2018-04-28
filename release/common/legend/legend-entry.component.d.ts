import { EventEmitter } from '@angular/core';
export declare class LegendEntryComponent {
    color: string;
    label: any;
    formattedLabel: string;
    isActive: boolean;
    fontFamily: string;
    fontSize: number;
    select: EventEmitter<any>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    toggle: EventEmitter<any>;
    readonly trimmedLabel: string;
    onMouseEnter(): void;
    onMouseLeave(): void;
}
