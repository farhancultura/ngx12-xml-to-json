/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxXmlToJsonService {
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
/** @nocollapse */ NgxXmlToJsonService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgxXmlToJsonService_Factory() { return new NgxXmlToJsonService(); }, token: NgxXmlToJsonService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxXmlToJsonService.prototype.parser;
    /**
     * @type {?}
     * @private
     */
    NgxXmlToJsonService.prototype.mimeType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXhtbC10by1qc29uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gteG1sLXRvLWpzb24vIiwic291cmNlcyI6WyJsaWIvbmd4LXhtbC10by1qc29uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxtQkFBbUI7SUFHOUI7UUFEUSxhQUFRLEdBQU8sVUFBVSxDQUFDO1FBRWhDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsU0FBaUIsRUFBRSxTQUFjOztZQUNyQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7O1lBQzdCLEdBQUcsR0FBRyxFQUFFOztjQUNOLE9BQU8sR0FBRzs7WUFDZCxVQUFVLEVBQUUsS0FBSzs7WUFDakIsUUFBUSxFQUFDLE9BQU87WUFDaEIsT0FBTyxFQUFFLE1BQU07O1lBQ2YsUUFBUSxFQUFFLE9BQU87O1lBQ2pCLE9BQU8sRUFBRSxNQUFNOztZQUNmLFFBQVEsRUFBRSxPQUFPO1NBQ2xCO1FBQ0QscUJBQXFCO1FBQ3JCLEtBQUksSUFBSSxJQUFJLElBQUksU0FBUyxFQUFHO1lBQzFCLElBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDOUIsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQztTQUNGOztZQUNHLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsRSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDMUMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8s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SSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQ25EO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7U0FDRjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7O1lBcEZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztJQUVDLHFDQUFvQjs7Ozs7SUFDcEIsdUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hYbWxUb0pzb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBwYXJzZXI6IGFueTtcbiAgcHJpdmF0ZSBtaW1lVHlwZTphbnkgPSAndGV4dC94bWwnO1xuICBjb25zdHJ1Y3RvcigpIHsgXG4gICAgdGhpcy5wYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gIH1cblxuICB4bWxUb0pzb24oeG1sU3RyaW5nOiBzdHJpbmcsIG15T3B0aW9uczogYW55KSB7XG4gICAgbGV0IGpzb25PYmogPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIGxldCBvYmogPSB7fTtcbiAgICBjb25zdCBvcHRpb25zID0geyAvLyBzZXQgdXAgdGhlIGRlZmF1bHQgb3B0aW9ucyBcbiAgICAgIG1lcmdlQ0RBVEE6IGZhbHNlLCAvLyBleHRyYWN0IGNkYXRhIGFuZCBtZXJnZSB3aXRoIHRleHRcbiAgICAgIGNEYXRhS2V5OidjRGF0YScsXG4gICAgICB0ZXh0S2V5OiAndGV4dCcsIC8vIHRhZyBuYW1lIGZvciB0ZXh0IG5vZGVzXG4gICAgICB2YWx1ZUtleTogJ3ZhbHVlJywgLy8gdGFnIG5hbWUgZm9yIGF0dHJpYnV0ZSB2YWx1ZXNcbiAgICAgIGF0dHJLZXk6ICdhdHRyJywgLy8gdGFnIGZvciBhdHRyIGdyb3Vwc1xuICAgICAgY2RhdGFLZXk6ICdjZGF0YScsIC8vIHRhZyBmb3IgY2RhdGEgbm9kZXMgKGlnbm9yZWQgaWYgbWVyZ2VDREFUQSBpcyB0cnVlKVxuICAgIH07XG4gICAgLy8gdXBkYXRlIHRoZSBvcHRpb25zXG4gICAgZm9yKGxldCBwcm9wIGluIG15T3B0aW9ucyApIHtcbiAgICAgIGlmKG9wdGlvbnNbcHJvcF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvcHRpb25zW3Byb3BdID0gbXlPcHRpb25zW3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgeG1sRG9jID0gdGhpcy5wYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbFN0cmluZywgdGhpcy5taW1lVHlwZSk7XG4gICAgb2JqID0gdGhpcy5jb252ZXJ0VG9Kc29uKHhtbERvYywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oanNvbk9iaiwgb2JqKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFRvSnNvbihkb2MsIG9wdCl7XG4gICAgbGV0IG9iaiA9IHt9O1xuICAgIHN3aXRjaChkb2Mubm9kZVR5cGUpIHtcbiAgICAgIGNhc2UgMSA6IC8vIEVMRU1FTlRfTk9ERVxuICAgICAgICBjb25zdCBlbGVBdHRyID0gZG9jLmF0dHJpYnV0ZXM7XG4gICAgICAgIGlmIChlbGVBdHRyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBvYmpbb3B0LmF0dHJLZXldID0ge307XG4gICAgICAgICAgZm9yKCBsZXQgaT0gMCA7IGk8IGVsZUF0dHIubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBlbGVBdHRyW2ldO1xuICAgICAgICAgICAgb2JqW29wdC5hdHRyS2V5XVthdHRyaWJ1dGUubm9kZU5hbWVdID0gYXR0cmlidXRlWydub2RlVmFsdWUnXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDMgOiAvLyBURVhUX05PREVcbiAgICAgICAgb2JqID0gZG9jLm5vZGVWYWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQgOiAvLyBDREFUQV9TRUNUSU9OX05PREVcbiAgICAgICAgb2JqID0gZG9jLm5vZGVWYWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDcgOiAvLyBQUk9DRVNTSU5HX0lOU1RSVUNUSU9OX05PREVcbiAgICAgICAgb2JqID0gZG9jLm5vZGVWYWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgaWYoIGRvYy5oYXNDaGlsZE5vZGVzKCkpe1xuICAgICAgaWYoZG9jLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxICYmIGRvYy5jaGlsZE5vZGVzWzBdWydub2RlVHlwZSddID09PSAzKXtcbiAgICAgICAgb2JqW29wdC50ZXh0S2V5XSA9IGRvYy5jaGlsZE5vZGVzWzBdWydub2RlVmFsdWUnXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvYy5jaGlsZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgbGV0IGNEYXRhOiBhbnk7XG4gICAgICAgICAgbGV0IG5vZGVOYW1lID0gbm9kZS5ub2RlVHlwZSA9PT0gMyA/IG9wdC50ZXh0S2V5IDogbm9kZS5ub2RlTmFtZTtcbiAgICAgICAgICBpZihvYmpbbm9kZU5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmKCBub2RlLm5vZGVUeXBlID09PSA0ICl7XG4gICAgICAgICAgICAgIGNEYXRhID0gdGhpcy5jb252ZXJ0VG9Kc29uKG5vZGUsb3B0KTtcbiAgICAgICAgICAgICAgaWYoIW9wdC5tZXJnZUNEQVRBKXtcbiAgICAgICAgICAgICAgICBvYmpbb3B0LmNEYXRhS2V5XSA9IGNEYXRhO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvYmpbbm9kZU5hbWVdID0gY0RhdGEgPT09IHVuZGVmaW5lZCA/IHRoaXMuY29udmVydFRvSnNvbihub2RlLG9wdCkgOiBgJHtjRGF0YX0ke3RoaXMuY29udmVydFRvSnNvbihub2RlLG9wdCl9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNOb2RlID0gb2JqW25vZGVOYW1lXTtcbiAgICAgICAgICAgIG9ialtub2RlTmFtZV0gPSBbXTtcbiAgICAgICAgICAgIG9ialtub2RlTmFtZV0ucHVzaChwcmV2aW91c05vZGUpO1xuICAgICAgICAgICAgb2JqW25vZGVOYW1lXS5wdXNoKHRoaXMuY29udmVydFRvSnNvbihub2RlLCBvcHQpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbn1cbiJdfQ==