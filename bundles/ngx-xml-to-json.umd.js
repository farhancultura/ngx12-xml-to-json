(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-xml-to-json', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['ngx-xml-to-json'] = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxXmlToJsonService = /** @class */ (function () {
        function NgxXmlToJsonService() {
            this.mimeType = 'text/xml';
            this.parser = new DOMParser();
        }
        /**
         * @param {?} xmlString
         * @param {?} myOptions
         * @return {?}
         */
        NgxXmlToJsonService.prototype.xmlToJson = /**
         * @param {?} xmlString
         * @param {?} myOptions
         * @return {?}
         */
        function (xmlString, myOptions) {
            /** @type {?} */
            var jsonObj = Object.create(null);
            /** @type {?} */
            var obj = {};
            /** @type {?} */
            var options = {
                // set up the default options 
                mergeCDATA: false,
                // extract cdata and merge with text
                cDataKey: 'cData',
                textKey: 'text',
                // tag name for text nodes
                valueKey: 'value',
                // tag name for attribute values
                attrKey: 'attr',
                // tag for attr groups
                cdataKey: 'cdata',
            };
            // update the options
            for (var prop in myOptions) {
                if (options[prop] !== undefined) {
                    options[prop] = myOptions[prop];
                }
            }
            /** @type {?} */
            var xmlDoc = this.parser.parseFromString(xmlString, this.mimeType);
            obj = this.convertToJson(xmlDoc, options);
            return Object.assign(jsonObj, obj);
        };
        /**
         * @private
         * @param {?} doc
         * @param {?} opt
         * @return {?}
         */
        NgxXmlToJsonService.prototype.convertToJson = /**
         * @private
         * @param {?} doc
         * @param {?} opt
         * @return {?}
         */
        function (doc, opt) {
            var _this = this;
            /** @type {?} */
            var obj = {};
            switch (doc.nodeType) {
                case 1: // ELEMENT_NODE
                    // ELEMENT_NODE
                    /** @type {?} */
                    var eleAttr = doc.attributes;
                    if (eleAttr.length > 0) {
                        obj[opt.attrKey] = {};
                        for (var i = 0; i < eleAttr.length; i++) {
                            /** @type {?} */
                            var attribute = eleAttr[i];
                            obj[opt.attrKey][attribute.nodeName] = attribute['nodeValue'];
                        }
                    }
                    break;
                case 3: // TEXT_NODE
                    obj = doc.nodeValue;
                    break;
                case 4: // CDATA_SECTION_NODE
                    obj = doc.nodeValue;
                    break;
                case 7: // PROCESSING_INSTRUCTION_NODE
                    obj = doc.nodeValue;
                    break;
                default:
            }
            if (doc.hasChildNodes()) {
                if (doc.childNodes.length === 1 && doc.childNodes[0]['nodeType'] === 3) {
                    obj[opt.textKey] = doc.childNodes[0]['nodeValue'];
                }
                else {
                    doc.childNodes.forEach((/**
                     * @param {?} node
                     * @return {?}
                     */
                    function (node) {
                        /** @type {?} */
                        var cData;
                        /** @type {?} */
                        var nodeName = node.nodeType === 3 ? opt.textKey : node.nodeName;
                        if (obj[nodeName] === undefined) {
                            if (node.nodeType === 4) {
                                cData = _this.convertToJson(node, opt);
                                if (!opt.mergeCDATA) {
                                    obj[opt.cDataKey] = cData;
                                }
                            }
                            else {
                                obj[nodeName] = cData === undefined ? _this.convertToJson(node, opt) : "" + cData + _this.convertToJson(node, opt);
                            }
                        }
                        else {
                            /** @type {?} */
                            var previousNode = obj[nodeName];
                            obj[nodeName] = [];
                            obj[nodeName].push(previousNode);
                            obj[nodeName].push(_this.convertToJson(node, opt));
                        }
                    }));
                }
            }
            return obj;
        };
        NgxXmlToJsonService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgxXmlToJsonService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgxXmlToJsonService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgxXmlToJsonService_Factory() { return new NgxXmlToJsonService(); }, token: NgxXmlToJsonService, providedIn: "root" });
        return NgxXmlToJsonService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxXmlToJsonComponent = /** @class */ (function () {
        function NgxXmlToJsonComponent() {
        }
        /**
         * @return {?}
         */
        NgxXmlToJsonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        NgxXmlToJsonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-ngx-xml-to-json',
                        template: "\n    <p>\n      ngx-xml-to-json works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        NgxXmlToJsonComponent.ctorParameters = function () { return []; };
        return NgxXmlToJsonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxXmlToJsonModule = /** @class */ (function () {
        function NgxXmlToJsonModule() {
        }
        NgxXmlToJsonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NgxXmlToJsonComponent],
                        imports: [],
                        exports: [NgxXmlToJsonComponent]
                    },] }
        ];
        return NgxXmlToJsonModule;
    }());

    exports.NgxXmlToJsonComponent = NgxXmlToJsonComponent;
    exports.NgxXmlToJsonModule = NgxXmlToJsonModule;
    exports.NgxXmlToJsonService = NgxXmlToJsonService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-xml-to-json.umd.js.map
