var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { XAxisTicksComponent } from './x-axis-ticks.component';
var XAxisComponent = /** @class */ (function () {
    function XAxisComponent() {
        this.rotateTicks = true;
        this.showGridLines = false;
        this.xOrient = 'bottom';
<<<<<<< HEAD
<<<<<<< HEAD
        this.fontFamily = 'initial';
        this.fontSize = 12;
=======
        this.xAxisOffset = 0;
>>>>>>> upstream/master
=======
        this.xAxisOffset = 0;
>>>>>>> upstream/master
        this.dimensionsChanged = new EventEmitter();
        this.xAxisClassName = 'x axis';
        this.labelOffset = 0;
        this.fill = 'none';
        this.stroke = 'stroke';
        this.tickStroke = '#ccc';
        this.strokeWidth = 'none';
        this.padding = 5;
    }
    XAxisComponent.prototype.ngOnChanges = function (changes) {
        this.update();
    };
    XAxisComponent.prototype.update = function () {
        this.transform = "translate(0," + (this.xAxisOffset + this.padding + this.dims.height) + ")";
        if (typeof this.xAxisTickCount !== 'undefined') {
            this.tickArguments = [this.xAxisTickCount];
        }
    };
    XAxisComponent.prototype.emitTicksHeight = function (_a) {
        var _this = this;
        var height = _a.height;
        var newLabelOffset = height + 25 + 5;
        if (newLabelOffset !== this.labelOffset) {
            this.labelOffset = newLabelOffset;
            setTimeout(function () {
                _this.dimensionsChanged.emit({ height: height });
            }, 0);
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], XAxisComponent.prototype, "xScale", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], XAxisComponent.prototype, "dims", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], XAxisComponent.prototype, "trimTicks", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], XAxisComponent.prototype, "rotateTicks", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], XAxisComponent.prototype, "maxTickLength", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], XAxisComponent.prototype, "tickFormatting", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], XAxisComponent.prototype, "showGridLines", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], XAxisComponent.prototype, "showLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], XAxisComponent.prototype, "labelText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], XAxisComponent.prototype, "ticks", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], XAxisComponent.prototype, "xAxisTickInterval", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], XAxisComponent.prototype, "xAxisTickCount", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], XAxisComponent.prototype, "xOrient", void 0);
    __decorate([
        Input(),
<<<<<<< HEAD
<<<<<<< HEAD
        __metadata("design:type", String)
    ], XAxisComponent.prototype, "fontFamily", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], XAxisComponent.prototype, "fontSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], XAxisComponent.prototype, "maxLabelLength", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], XAxisComponent.prototype, "labelRotationAngle", void 0);
=======
        __metadata("design:type", Number)
    ], XAxisComponent.prototype, "xAxisOffset", void 0);
>>>>>>> upstream/master
=======
        __metadata("design:type", Number)
    ], XAxisComponent.prototype, "xAxisOffset", void 0);
>>>>>>> upstream/master
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], XAxisComponent.prototype, "dimensionsChanged", void 0);
    __decorate([
        ViewChild(XAxisTicksComponent),
        __metadata("design:type", XAxisTicksComponent)
    ], XAxisComponent.prototype, "ticksComponent", void 0);
    XAxisComponent = __decorate([
        Component({
            selector: 'g[ngx-charts-x-axis]',
<<<<<<< HEAD
<<<<<<< HEAD
            template: "\n    <svg:g\n      [attr.class]=\"xAxisClassName\"\n      [attr.transform]=\"transform\">\n      <svg:g ngx-charts-x-axis-ticks\n        *ngIf=\"xScale\"\n        [tickFormatting]=\"tickFormatting\"\n        [tickArguments]=\"tickArguments\"\n        [tickStroke]=\"tickStroke\"\n        [scale]=\"xScale\"\n        [orient]=\"xOrient\"\n        [showGridLines]=\"showGridLines\"\n        [gridLineHeight]=\"dims.height\"\n        [width]=\"dims.width\"\n        [tickValues]=\"ticks\"\n        [fontFamily]=\"fontFamily\"\n        [fontSize]=\"fontSize || 12\"\n        [labelRotationAngle]=\"labelRotationAngle\"\n        [maxLabelLength]=\"maxLabelLength\"\n        (dimensionsChanged)=\"emitTicksHeight($event)\"\n      />\n      <svg:g ngx-charts-axis-label\n        *ngIf=\"showLabel\"\n        [label]=\"labelText\"\n        [offset]=\"labelOffset\"\n        [orient]=\"'bottom'\"\n        [height]=\"dims.height\"\n        [width]=\"dims.width\">\n      </svg:g>\n    </svg:g>\n  ",
=======
            template: "\n    <svg:g\n      [attr.class]=\"xAxisClassName\"\n      [attr.transform]=\"transform\">\n      <svg:g ngx-charts-x-axis-ticks\n        *ngIf=\"xScale\"\n        [trimTicks]=\"trimTicks\"\n        [rotateTicks]=\"rotateTicks\"\n        [maxTickLength]=\"maxTickLength\"\n        [tickFormatting]=\"tickFormatting\"\n        [tickArguments]=\"tickArguments\"\n        [tickStroke]=\"tickStroke\"\n        [scale]=\"xScale\"\n        [orient]=\"xOrient\"\n        [showGridLines]=\"showGridLines\"\n        [gridLineHeight]=\"dims.height\"\n        [width]=\"dims.width\"\n        [tickValues]=\"ticks\"\n        (dimensionsChanged)=\"emitTicksHeight($event)\"\n      />\n      <svg:g ngx-charts-axis-label\n        *ngIf=\"showLabel\"\n        [label]=\"labelText\"\n        [offset]=\"labelOffset\"\n        [orient]=\"'bottom'\"\n        [height]=\"dims.height\"\n        [width]=\"dims.width\">\n      </svg:g>\n    </svg:g>\n  ",
>>>>>>> upstream/master
=======
            template: "\n    <svg:g\n      [attr.class]=\"xAxisClassName\"\n      [attr.transform]=\"transform\">\n      <svg:g ngx-charts-x-axis-ticks\n        *ngIf=\"xScale\"\n        [trimTicks]=\"trimTicks\"\n        [rotateTicks]=\"rotateTicks\"\n        [maxTickLength]=\"maxTickLength\"\n        [tickFormatting]=\"tickFormatting\"\n        [tickArguments]=\"tickArguments\"\n        [tickStroke]=\"tickStroke\"\n        [scale]=\"xScale\"\n        [orient]=\"xOrient\"\n        [showGridLines]=\"showGridLines\"\n        [gridLineHeight]=\"dims.height\"\n        [width]=\"dims.width\"\n        [tickValues]=\"ticks\"\n        (dimensionsChanged)=\"emitTicksHeight($event)\"\n      />\n      <svg:g ngx-charts-axis-label\n        *ngIf=\"showLabel\"\n        [label]=\"labelText\"\n        [offset]=\"labelOffset\"\n        [orient]=\"'bottom'\"\n        [height]=\"dims.height\"\n        [width]=\"dims.width\">\n      </svg:g>\n    </svg:g>\n  ",
>>>>>>> upstream/master
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], XAxisComponent);
    return XAxisComponent;
}());
export { XAxisComponent };
//# sourceMappingURL=x-axis.component.js.map