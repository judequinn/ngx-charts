var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { arc } from 'd3-shape';
import { trimLabel } from '../common/trim-label.helper';
var PieLabelComponent = /** @class */ (function () {
    function PieLabelComponent() {
        this.animations = true;
        this.labelTrim = true;
        this.labelTrimSize = 16;
        this.isIE = /(edge|msie|trident)/i.test(navigator.userAgent);
        this.trimLabel = trimLabel;
    }
    PieLabelComponent.prototype.ngOnChanges = function (changes) {
        this.update();
    };
    PieLabelComponent.prototype.update = function () {
        var startRadius = this.radius;
        if (this.explodeSlices) {
            startRadius = (this.radius * this.value) / this.max;
        }
        var innerArc = arc()
            .innerRadius(startRadius)
            .outerRadius(startRadius);
        // Calculate innerPos then scale outer position to match label position
        var innerPos = innerArc.centroid(this.data);
        // forced scale
        var scale = 1.05;
        var outerPos = [scale * innerPos[0], scale * innerPos[1]];
        // adds small padding to text
        this.labelPos = [outerPos[0] > 0 ? outerPos[0] + 5 : outerPos[0] - 5, outerPos[1]];
        this.line = "M" + innerPos + "L" + outerPos + "L" + this.labelPos;
    };
    Object.defineProperty(PieLabelComponent.prototype, "textX", {
        get: function () {
            return this.labelPos[0] > 0 ? this.labelPos[0] + 5 : this.labelPos[0] - 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieLabelComponent.prototype, "textY", {
        get: function () {
            return this.labelPos[1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieLabelComponent.prototype, "styleTransform", {
        get: function () {
            return this.isIE ? null : "translate3d(" + this.textX + "px," + this.textY + "px, 0)";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieLabelComponent.prototype, "attrTransform", {
        get: function () {
            return !this.isIE ? null : "translate(" + this.textX + "," + this.textY + ")";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieLabelComponent.prototype, "textTransition", {
        get: function () {
            return this.isIE || !this.animations ? null : 'transform 0.75s';
        },
        enumerable: true,
        configurable: true
    });
    PieLabelComponent.prototype.textAnchor = function () {
        return this.midAngle(this.data) < Math.PI ? 'start' : 'end';
    };
    PieLabelComponent.prototype.midAngle = function (d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PieLabelComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PieLabelComponent.prototype, "radius", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PieLabelComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PieLabelComponent.prototype, "color", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PieLabelComponent.prototype, "max", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PieLabelComponent.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PieLabelComponent.prototype, "explodeSlices", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PieLabelComponent.prototype, "animations", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PieLabelComponent.prototype, "labelTrim", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], PieLabelComponent.prototype, "labelTrimSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], PieLabelComponent.prototype, "fontSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PieLabelComponent.prototype, "fontFamily", void 0);
    PieLabelComponent = __decorate([
        Component({
            selector: 'g[ngx-charts-pie-label]',
            template: "\n    <title>{{ label }}</title>\n    <svg:g [attr.transform]=\"attrTransform\" [style.transform]=\"styleTransform\" [style.transition]=\"textTransition\">\n      <svg:text\n        class=\"pie-label\"\n        [class.animation]=\"animations\"\n        dy=\".35em\"\n        [style.textAnchor]=\"textAnchor()\"\n        [style.shapeRendering]=\"'crispEdges'\"\n        [style.font-size]=\"fontSize + 'px'\"\n        [style.font-family]=\"fontFamily\"\n      >\n        {{ labelTrim ? trimLabel(label, labelTrimSize) : label }}\n      </svg:text>\n    </svg:g>\n    <svg:path\n      [attr.d]=\"line\"\n      [attr.stroke]=\"color\"\n      fill=\"none\"\n      class=\"pie-label-line line\"\n      [class.animation]=\"animations\"\n    ></svg:path>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [])
    ], PieLabelComponent);
    return PieLabelComponent;
}());
export { PieLabelComponent };
//# sourceMappingURL=pie-label.component.js.map