import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
NgxXmlToJsonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxXmlToJsonService.ctorParameters = () => [];
/** @nocollapse */ NgxXmlToJsonService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxXmlToJsonService_Factory() { return new NgxXmlToJsonService(); }, token: NgxXmlToJsonService, providedIn: "root" });

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
NgxXmlToJsonComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-ngx-xml-to-json',
                template: `
    <p>
      ngx-xml-to-json works!
    </p>
  `
            }] }
];
/** @nocollapse */
NgxXmlToJsonComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxXmlToJsonModule {
}
NgxXmlToJsonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxXmlToJsonComponent],
                imports: [],
                exports: [NgxXmlToJsonComponent]
            },] }
];

export { NgxXmlToJsonComponent, NgxXmlToJsonModule, NgxXmlToJsonService };
//# sourceMappingURL=ngx-xml-to-json.js.map
