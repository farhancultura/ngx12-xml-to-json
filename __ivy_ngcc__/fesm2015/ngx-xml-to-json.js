import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
class NgxXmlToJsonService {
    constructor() {
        this.mimeType = 'text/xml';
        this.parser = new DOMParser();
    }
    /**
     * @param {?} xmlString
     * @param {?} myOptions
     * @return {?}
     */
    xmlToJson(xmlString, myOptions) {
        /** @type {?} */
        let jsonObj = Object.create(null);
        /** @type {?} */
        let obj = {};
        /** @type {?} */
        const options = {
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
        for (let prop in myOptions) {
            if (options[prop] !== undefined) {
                options[prop] = myOptions[prop];
            }
        }
        /** @type {?} */
        let xmlDoc = this.parser.parseFromString(xmlString, this.mimeType);
        obj = this.convertToJson(xmlDoc, options);
        return Object.assign(jsonObj, obj);
    }
    /**
     * @private
     * @param {?} doc
     * @param {?} opt
     * @return {?}
     */
    convertToJson(doc, opt) {
        /** @type {?} */
        let obj = {};
        switch (doc.nodeType) {
            case 1: // ELEMENT_NODE
                // ELEMENT_NODE
                /** @type {?} */
                const eleAttr = doc.attributes;
                if (eleAttr.length > 0) {
                    obj[opt.attrKey] = {};
                    for (let i = 0; i < eleAttr.length; i++) {
                        /** @type {?} */
                        const attribute = eleAttr[i];
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
                node => {
                    /** @type {?} */
                    let cData;
                    /** @type {?} */
                    let nodeName = node.nodeType === 3 ? opt.textKey : node.nodeName;
                    if (obj[nodeName] === undefined) {
                        if (node.nodeType === 4) {
                            cData = this.convertToJson(node, opt);
                            if (!opt.mergeCDATA) {
                                obj[opt.cDataKey] = cData;
                            }
                        }
                        else {
                            obj[nodeName] = cData === undefined ? this.convertToJson(node, opt) : `${cData}${this.convertToJson(node, opt)}`;
                        }
                    }
                    else {
                        /** @type {?} */
                        const previousNode = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(previousNode);
                        obj[nodeName].push(this.convertToJson(node, opt));
                    }
                }));
            }
        }
        return obj;
    }
}
NgxXmlToJsonService.ɵfac = function NgxXmlToJsonService_Factory(t) { return new (t || NgxXmlToJsonService)(); };
NgxXmlToJsonService.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NgxXmlToJsonService, factory: NgxXmlToJsonService.ɵfac, providedIn: 'root' });
/** @nocollapse */
NgxXmlToJsonService.ctorParameters = () => [];
/** @nocollapse */ NgxXmlToJsonService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxXmlToJsonService_Factory() { return new NgxXmlToJsonService(); }, token: NgxXmlToJsonService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxXmlToJsonService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxXmlToJsonComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NgxXmlToJsonComponent.ɵfac = function NgxXmlToJsonComponent_Factory(t) { return new (t || NgxXmlToJsonComponent)(); };
NgxXmlToJsonComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgxXmlToJsonComponent, selectors: [["ngx-ngx-xml-to-json"]], decls: 2, vars: 0, template: function NgxXmlToJsonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "p");
        ɵngcc0.ɵɵtext(1, " ngx-xml-to-json works! ");
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
/** @nocollapse */
NgxXmlToJsonComponent.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxXmlToJsonComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-ngx-xml-to-json',
                template: `
    <p>
      ngx-xml-to-json works!
    </p>
  `
            }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxXmlToJsonModule {
}
NgxXmlToJsonModule.ɵfac = function NgxXmlToJsonModule_Factory(t) { return new (t || NgxXmlToJsonModule)(); };
NgxXmlToJsonModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgxXmlToJsonModule });
NgxXmlToJsonModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxXmlToJsonModule, [{
        type: NgModule,
        args: [{
                declarations: [NgxXmlToJsonComponent],
                imports: [],
                exports: [NgxXmlToJsonComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxXmlToJsonModule, { declarations: [NgxXmlToJsonComponent], exports: [NgxXmlToJsonComponent] }); })();

export { NgxXmlToJsonComponent, NgxXmlToJsonModule, NgxXmlToJsonService };

//# sourceMappingURL=ngx-xml-to-json.js.map