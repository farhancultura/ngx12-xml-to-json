/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxXmlToJsonService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxXmlToJsonService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgxXmlToJsonService_Factory() { return new NgxXmlToJsonService(); }, token: NgxXmlToJsonService, providedIn: "root" });
    return NgxXmlToJsonService;
}());
export { NgxXmlToJsonService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXhtbC10by1qc29uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gteG1sLXRvLWpzb24vIiwic291cmNlcyI6WyJsaWIvbmd4LXhtbC10by1qc29uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDO0lBTUU7UUFEUSxhQUFRLEdBQU8sVUFBVSxDQUFDO1FBRWhDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7SUFFRCx1Q0FBUzs7Ozs7SUFBVCxVQUFVLFNBQWlCLEVBQUUsU0FBYzs7WUFDckMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDOztZQUM3QixHQUFHLEdBQUcsRUFBRTs7WUFDTixPQUFPLEdBQUc7O1lBQ2QsVUFBVSxFQUFFLEtBQUs7O1lBQ2pCLFFBQVEsRUFBQyxPQUFPO1lBQ2hCLE9BQU8sRUFBRSxNQUFNOztZQUNmLFFBQVEsRUFBRSxPQUFPOztZQUNqQixPQUFPLEVBQUUsTUFBTTs7WUFDZixRQUFRLEVBQUUsT0FBTztTQUNsQjtRQUNELHFCQUFxQjtRQUNyQixLQUFJLElBQUksSUFBSSxJQUFJLFNBQVMsRUFBRztZQUMxQixJQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQzlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakM7U0FDRjs7WUFDRyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbEUsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FB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Q0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDbkQ7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7YUFDSjtTQUNGO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztnQkFwRkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7OEJBSkQ7Q0F3RkMsQUF0RkQsSUFzRkM7U0FuRlksbUJBQW1COzs7Ozs7SUFDOUIscUNBQW9COzs7OztJQUNwQix1Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFhtbFRvSnNvblNlcnZpY2Uge1xuICBwcml2YXRlIHBhcnNlcjogYW55O1xuICBwcml2YXRlIG1pbWVUeXBlOmFueSA9ICd0ZXh0L3htbCc7XG4gIGNvbnN0cnVjdG9yKCkgeyBcbiAgICB0aGlzLnBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgfVxuXG4gIHhtbFRvSnNvbih4bWxTdHJpbmc6IHN0cmluZywgbXlPcHRpb25zOiBhbnkpIHtcbiAgICBsZXQganNvbk9iaiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgbGV0IG9iaiA9IHt9O1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7IC8vIHNldCB1cCB0aGUgZGVmYXVsdCBvcHRpb25zIFxuICAgICAgbWVyZ2VDREFUQTogZmFsc2UsIC8vIGV4dHJhY3QgY2RhdGEgYW5kIG1lcmdlIHdpdGggdGV4dFxuICAgICAgY0RhdGFLZXk6J2NEYXRhJyxcbiAgICAgIHRleHRLZXk6ICd0ZXh0JywgLy8gdGFnIG5hbWUgZm9yIHRleHQgbm9kZXNcbiAgICAgIHZhbHVlS2V5OiAndmFsdWUnLCAvLyB0YWcgbmFtZSBmb3IgYXR0cmlidXRlIHZhbHVlc1xuICAgICAgYXR0cktleTogJ2F0dHInLCAvLyB0YWcgZm9yIGF0dHIgZ3JvdXBzXG4gICAgICBjZGF0YUtleTogJ2NkYXRhJywgLy8gdGFnIGZvciBjZGF0YSBub2RlcyAoaWdub3JlZCBpZiBtZXJnZUNEQVRBIGlzIHRydWUpXG4gICAgfTtcbiAgICAvLyB1cGRhdGUgdGhlIG9wdGlvbnNcbiAgICBmb3IobGV0IHByb3AgaW4gbXlPcHRpb25zICkge1xuICAgICAgaWYob3B0aW9uc1twcm9wXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9wdGlvbnNbcHJvcF0gPSBteU9wdGlvbnNbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICAgIGxldCB4bWxEb2MgPSB0aGlzLnBhcnNlci5wYXJzZUZyb21TdHJpbmcoeG1sU3RyaW5nLCB0aGlzLm1pbWVUeXBlKTtcbiAgICBvYmogPSB0aGlzLmNvbnZlcnRUb0pzb24oeG1sRG9jLCBvcHRpb25zKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihqc29uT2JqLCBvYmopO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VG9Kc29uKGRvYywgb3B0KXtcbiAgICBsZXQgb2JqID0ge307XG4gICAgc3dpdGNoKGRvYy5ub2RlVHlwZSkge1xuICAgICAgY2FzZSAxIDogLy8gRUxFTUVOVF9OT0RFXG4gICAgICAgIGNvbnN0IGVsZUF0dHIgPSBkb2MuYXR0cmlidXRlcztcbiAgICAgICAgaWYgKGVsZUF0dHIubGVuZ3RoID4gMCkge1xuICAgICAgICAgIG9ialtvcHQuYXR0cktleV0gPSB7fTtcbiAgICAgICAgICBmb3IoIGxldCBpPSAwIDsgaTwgZWxlQXR0ci5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGVsZUF0dHJbaV07XG4gICAgICAgICAgICBvYmpbb3B0LmF0dHJLZXldW2F0dHJpYnV0ZS5ub2RlTmFtZV0gPSBhdHRyaWJ1dGVbJ25vZGVWYWx1ZSddO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMyA6IC8vIFRFWFRfTk9ERVxuICAgICAgICBvYmogPSBkb2Mubm9kZVZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNCA6IC8vIENEQVRBX1NFQ1RJT05fTk9ERVxuICAgICAgICBvYmogPSBkb2Mubm9kZVZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNyA6IC8vIFBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERVxuICAgICAgICBvYmogPSBkb2Mubm9kZVZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBpZiggZG9jLmhhc0NoaWxkTm9kZXMoKSl7XG4gICAgICBpZihkb2MuY2hpbGROb2Rlcy5sZW5ndGggPT09IDEgJiYgZG9jLmNoaWxkTm9kZXNbMF1bJ25vZGVUeXBlJ10gPT09IDMpe1xuICAgICAgICBvYmpbb3B0LnRleHRLZXldID0gZG9jLmNoaWxkTm9kZXNbMF1bJ25vZGVWYWx1ZSddO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jLmNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICBsZXQgY0RhdGE6IGFueTtcbiAgICAgICAgICBsZXQgbm9kZU5hbWUgPSBub2RlLm5vZGVUeXBlID09PSAzID8gb3B0LnRleHRLZXkgOiBub2RlLm5vZGVOYW1lO1xuICAgICAgICAgIGlmKG9ialtub2RlTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYoIG5vZGUubm9kZVR5cGUgPT09IDQgKXtcbiAgICAgICAgICAgICAgY0RhdGEgPSB0aGlzLmNvbnZlcnRUb0pzb24obm9kZSxvcHQpO1xuICAgICAgICAgICAgICBpZighb3B0Lm1lcmdlQ0RBVEEpe1xuICAgICAgICAgICAgICAgIG9ialtvcHQuY0RhdGFLZXldID0gY0RhdGE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9ialtub2RlTmFtZV0gPSBjRGF0YSA9PT0gdW5kZWZpbmVkID8gdGhpcy5jb252ZXJ0VG9Kc29uKG5vZGUsb3B0KSA6IGAke2NEYXRhfSR7dGhpcy5jb252ZXJ0VG9Kc29uKG5vZGUsb3B0KX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c05vZGUgPSBvYmpbbm9kZU5hbWVdO1xuICAgICAgICAgICAgb2JqW25vZGVOYW1lXSA9IFtdO1xuICAgICAgICAgICAgb2JqW25vZGVOYW1lXS5wdXNoKHByZXZpb3VzTm9kZSk7XG4gICAgICAgICAgICBvYmpbbm9kZU5hbWVdLnB1c2godGhpcy5jb252ZXJ0VG9Kc29uKG5vZGUsIG9wdCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cblxufVxuIl19