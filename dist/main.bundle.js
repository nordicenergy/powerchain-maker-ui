webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-header *ngIf=\"!isShowHeader\"></app-header>\r\n  <!-- <app-dashboard *ngIf=\"!isNode\"></app-dashboard> -->\r\n  <!-- <div *ngIf=\"isNode\" class=\"forms-container\"> -->\r\n  <router-outlet></router-outlet>\r\n  <!-- </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "/*Common outer container for all forms*/\n.forms-container {\n  width: 100%;\n  text-align: center;\n  display: inline-block; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        //title = 'app';
        //isNode: boolean = true 	// if node is created already(node object present) then change isNode = true;
        this.isShowHeader = true;
        // Only for Production
        // console.log = () => {};
        router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"]) {
                if (_this.router.url === '/create-and-join' || _this.router.url === '/') {
                    _this.isShowHeader = true;
                }
                else {
                    _this.isShowHeader = false;
                }
            }
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_components_shared_header_header_module__ = __webpack_require__("./src/app/components/shared/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_components_dashboard_dashboard_module__ = __webpack_require__("./src/app/components/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_components_network_network_module__ = __webpack_require__("./src/app/components/network/network.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_field_error_display_field_error_display_component__ = __webpack_require__("./src/app/components/field-error-display/field-error-display.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { AppService } from '../app/service/app.service';
// import { SubnavComponent } from './components/subnav/subnav.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_field_error_display_field_error_display_component__["a" /* FieldErrorDisplayComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4__app_components_shared_header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_components_dashboard_dashboard_module__["a" /* DashboardModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_components_network_network_module__["a" /* networkModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_components_network_network_component__ = __webpack_require__("./src/app/components/network/network.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");


var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'create-and-join', component: __WEBPACK_IMPORTED_MODULE_0__app_components_network_network_component__["a" /* NetworkComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_1__app_components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
];


/***/ }),

/***/ "./src/app/components/dashboard/contract-abi-deployment/contract-abi-deployment.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"mesgshow\"></p-growl>\r\n<div class=\"abi-wrapper\">\r\n    <p-dialog [(visible)]=\"contractAbiDisplay\" [modal]=\"true\" [responsive]=\"true\" [width]=\"760\" [minWidth]=\"200\" [minY]=\"70\" closeOnEscape=\"true\" dismissableMask=\"true\" (onHide)=\"onClose()\">\r\n        <p-header class=\"header\">\r\n            <h4>{{title}}</h4>\r\n        </p-header>\r\n        <div class=\"p-dialog-inner\">\r\n            <!-- (ngSubmit)=\"submitForm()\" -->\r\n            <form novalidate class=\"form-wrapper-inner\" [formGroup]=\"deployContractABI\" *ngIf=\"!loadingForm\">\r\n                <div class=\"row compileDeploy\">\r\n                    <div class=\"col-md-6 form-group\">\r\n                        <label>Name</label>\r\n                        <input name=\"name\" type=\"text\" [readonly]=\"contractFlag\" id=\"name\" formControlName=\"name\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"col-md-6 form-group\">\r\n                        <label>Address</label>\r\n                        <input name=\"address\" readonly type=\"text\" id=\"address\" formControlName=\"address\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"col-md-6 form-group\" *ngIf=\"contractFlag\">\r\n                        <label>Deployment Date</label>\r\n                        <input name=\"name\" type=\"text\" [readonly]=\"contractFlag\" value=\"{{contractAbi?.timestamp * 1000 | date : 'medium'}}\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"col-md-6 form-group\" *ngIf=\"contractFlag\">\r\n                        <label>Sender</label>\r\n                        <input name=\"address\" [readonly]=\"contractFlag\" type=\"text\" value=\"{{contractAbi?.sender}}\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"col-md-12 form-group\">\r\n                        <label>Description</label>\r\n                        <input name=\"description\" type=\"text\" [readonly]=\"contractFlag\" id=\"description\" formControlName=\"description\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"col-md-12 form-group\" *ngIf=\"!contractFlag\">\r\n                        <label>Choose ABI File</label>\r\n                        <div class=\"custom-upload\">\r\n                            <input name=\"file\" type=\"file\" id=\"selectFile\" formControlName=\"selectFile\" class=\"form-control\" (change)=\"onSelectFile($event)\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-12 form-group\" *ngIf=\"contractFlag\">\r\n                        <label>ABI File</label>\r\n                        <textarea class=\"w100per form-control\" row=\"4\" readonly>{{contractAbi.abi}}</textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row form-footer\" *ngIf=\"!contractFlag\">\r\n                    <div class=\"col-md-12 form-group\">\r\n                        <button type=\"submit\" [disabled]=\"deployContractABI.invalid\" (click)=\"submitForm(deployContractABI.value)\" class=\"btn btn-green pull-right\">SUBMIT</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </p-dialog>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/contract-abi-deployment/contract-abi-deployment.component.scss":
/***/ (function(module, exports) {

module.exports = ".custom-upload {\n  position: relative; }\n  .custom-upload .fake-file {\n    width: 100%; }\n  .custom-upload .fake-file input {\n      width: calc(100% - 105px); }\n"

/***/ }),

/***/ "./src/app/components/dashboard/contract-abi-deployment/contract-abi-deployment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractAbiDeploymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_common_service__ = __webpack_require__("./src/app/service/common-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContractAbiDeploymentComponent = /** @class */ (function () {
    function ContractAbiDeploymentComponent(fb, _CommonService, cd) {
        this.fb = fb;
        this._CommonService = _CommonService;
        this.cd = cd;
        this.closeEventABI = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.display = false;
        this.loadingForm = false;
        this.mesgshow = [];
    }
    ContractAbiDeploymentComponent.prototype.ngOnInit = function () {
        this.createForm();
        //updateContractDetails 
        if (this.contractFlag) {
            this.title = "Contract Details";
        }
        else {
            this.title = "Update/Upload Contract Details";
        }
    };
    ContractAbiDeploymentComponent.prototype.createForm = function () {
        this.deployContractABI = this.fb.group({
            selectFile: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            name: [this.contractAbi.contractName || ''],
            address: [this.contractAbi.contractAddress || ''],
            description: [this.contractAbi.description || '']
        });
    };
    ContractAbiDeploymentComponent.prototype.prepareSave = function (data) {
        var input = new FormData();
        input.append('name', String(data.name));
        input.append('address', String(data.address));
        input.append('description', String(data.description));
        input.append("abi", this.filesToUpload); // naming file name as file1,2,3 ...
        //input.append('private', String(this.isNetworkSelected));
        return input;
    };
    ContractAbiDeploymentComponent.prototype.onSelectFile = function (event) {
        if (event.target.files && event.target.files.length > 0) {
            this.filesToUpload = event.target.files[0];
            this.contractAbi.invalid = false;
            console.log(' this.filesToUpload >>>>>>', this.filesToUpload);
            var fileName = this.filesToUpload.name.substr(0, this.filesToUpload.name.lastIndexOf('.'));
            console.log(fileName);
            this.deployContractABI.controls['name'].setValue(fileName);
        }
    };
    ContractAbiDeploymentComponent.prototype.onClose = function () {
        console.log('on close');
        this.mesgshow = [];
        this.closeEventABI.emit({ modal: false, msg: null });
        this.filesToUpload = {};
        this.contractAbiDisplay = false;
        this.deployContractABI.reset();
    };
    ContractAbiDeploymentComponent.prototype.submitForm = function (data) {
        var _this = this;
        var formModel = this.prepareSave(data);
        console.log("data>>", data);
        this.loadingForm = true;
        this._CommonService.updateContractDetails(formModel).subscribe(function (data) {
            console.log(data.json());
            var response = data.json();
            setTimeout(function () {
                _this.loadingForm = false;
                //this.mesgshow.push({ severity: 'success', summary: response.statusMessage });
                _this.contractAbiDisplay = false;
                _this.closeEventABI.emit({ modal: false, msg: response.statusMessage });
            }, 3000);
        }, function (err) {
            console.log(err);
            setTimeout(function () {
                //this.mesgshow.push({ severity: 'error', summary: 'There is an error in file uploading' });
                _this.loadingForm = false;
                _this.contractAbiDisplay = false;
                _this.closeEventABI.emit({ modal: false, msg: 'There is an error in file uploading...' });
            }, 3000);
        });
    };
    ContractAbiDeploymentComponent.prototype.ngOnDestroy = function () {
        this.closeEventABI.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ContractAbiDeploymentComponent.prototype, "contractAbiDisplay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ContractAbiDeploymentComponent.prototype, "contractAbi", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ContractAbiDeploymentComponent.prototype, "contractFlag", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ContractAbiDeploymentComponent.prototype, "closeEventABI", void 0);
    ContractAbiDeploymentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contract-abi-deployment',
            template: __webpack_require__("./src/app/components/dashboard/contract-abi-deployment/contract-abi-deployment.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/contract-abi-deployment/contract-abi-deployment.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__service_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], ContractAbiDeploymentComponent);
    return ContractAbiDeploymentComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard-search-pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchKeywordPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchKeywordPipe = /** @class */ (function () {
    function SearchKeywordPipe() {
    }
    SearchKeywordPipe.prototype.transform = function (value, keys, term) {
        if (!term)
            return value;
        return (value || []).filter(function (item) { return keys.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]); }); });
    };
    SearchKeywordPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'searchkeyword'
        })
    ], SearchKeywordPipe);
    return SearchKeywordPipe;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\r\n<div class=\"dashboard\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"rect-block block-box-wrapper\" [ngClass]=\"(isSelected == 'blockClass')?'active':''\" (click)=\"isShowCont('getBlocks')\">\r\n                <div class=\"rect-block-inner\">\r\n                    <h5>Current Block Number</h5>\r\n                    <!-- <h3>{{latestBlockData?.latestBlockNumber}}</h3> -->\r\n                    <p class=\"block-number-size\" [ngClass]=\"{'updated-block-number-size': (latestBlockData?.latestBlockNumber > 99999)}\">\r\n                        <ng2-odometer [number]=\"latestBlockData?.latestBlockNumber\" [config]=\"{ auto: true }\" [theme]=\"'default'\" [format]=\"'(,ddd)'\"></ng2-odometer>\r\n                    </p>\r\n                    <p [ngClass]=\"{'updated-margin': (latestBlockData?.latestBlockNumber > 99999)}\">\r\n                        <strong>Last Block :</strong>\r\n                        <span>{{latestTimeElapsedToDisplay}} ago</span>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"rect-block last\" [ngClass]=\"(isSelected == 'nodeClass')?'active':''\" (click)=\"isShowCont('nodeManager')\">\r\n                <div class=\"rect-block-inner\">\r\n                    <h5 class=\"active-node\">Active Nodes</h5>\r\n                    <h3 class=\"active-node\">\r\n                        <ng2-odometer [number]=\"getActiveNode?.nodeCount\" [config]=\"{ auto: true }\" [theme]=\"'default'\" [format]=\"'(,ddd)'\"></ng2-odometer>\r\n                    </h3>\r\n                    <p>\r\n                        <strong>Total Network Nodes :</strong>\r\n                        <span>{{getActiveNode?.totalNodeCount}}</span>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"pending-transaction\">\r\n                <div class=\"inner\">\r\n                    <p-chart type=\"bar\" [data]=\"data\" width=\"378px\" height=\"auto\" [responsive]=\"true\" [options]=\"options\" [reverse]=\"true\"></p-chart>\r\n                </div>\r\n                <!-- <div class=\"inner\">\r\n          <h5>Pending Transactions</h5>\r\n          <h3>{{getNodeInfoList?.pendingTxCount}}</h3>\r\n          <! <span>\r\n            <a href='//{{getLogsList?.statusMessage}}' target=\"_blank\" title=\"Geth &amp; Constellation Log\">Geth &amp; Constellation Log</a>\r\n          </span>\r\n        </div> -->\r\n            </div>\r\n            <div class=\"ip-address\" [ngClass]=\"(isSelected == 'ipClass')?'active':''\" (click)=\"isShowCont('ipBlocks')\">\r\n                <div class=\"inner\">\r\n                    <h3>\r\n                        <span>Total SmsContracts</span>\r\n                        <ng2-odometer [number]=\"contractCount?.totalContracts\" [config]=\"{ auto: true }\" [theme]=\"'default'\" [format]=\"'(,ddd)'\"></ng2-odometer>\r\n                    </h3>\r\n                    <h3>\r\n                        <span>ABI Available</span>\r\n                        <ng2-odometer [number]=\"contractCount?.abis\" [config]=\"{ auto: true }\" [theme]=\"'default'\" [format]=\"'(,ddd)'\"></ng2-odometer>\r\n                    </h3>\r\n                    <p>\r\n                        <strong>RPC Port:</strong>\r\n                        <span>{{getNodeInfoList?.connectionInfo?.port}}</span>\r\n                        <strong>&nbsp;</strong>\r\n                        <strong> IP Address:</strong>\r\n                        <span>{{getNodeInfoList?.connectionInfo?.ip}}</span>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"grid-container animated \" *ngIf=\"isNodeData\" [ngClass]=\"(isSelected == 'nodeClass')?'fadeIn':''\">\r\n    <h2>Node Table</h2>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table table-hover\">\r\n            <thead>\r\n                <tr>\r\n                    <th>\r\n                        &nbsp;\r\n                    </th>\r\n                    <th>Node Name</th>\r\n                    <th>Role</th>\r\n                    <th>Public Key</th>\r\n                    <th>IP Address</th>\r\n                    <th>Node Latency</th>\r\n                    <th>Enode ID</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let getNodeItem of getNodeListData3;\">\r\n                    <td (click)=\"getNodeDetails(getNodeItem)\">\r\n                        <span title=\"Show Details\" [ngClass]=\"{'checkiconCopy': getNodeItem.self=='true', 'checkIcon':getNodeItem.active=='true', 'checkIcon2':getNodeItem.active=='false' }\">&nbsp;</span>\r\n                    </td>\r\n                    <td>{{getNodeItem?.nodeName}}</td>\r\n                    <td>{{getNodeItem?.role}}</td>\r\n                    <td class=\"node pubkey\" title=\"{{getNodeItem?.publicKey}}\">{{getNodeItem?.publicKey}}</td>\r\n                    <td class=\"ip-addr\">{{getNodeItem?.ip}}</td>\r\n                    <td class=\"time\">\r\n                        <span class=\"spinner-bg\" *ngIf=\"!getNodeItem?.time\"></span> {{getMiliSeconds(getNodeItem?.time) }}</td>\r\n                    <td class=\"node enodeid\" title=\"{{getNodeItem?.enode}}\">{{getNodeItem?.enode}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div class=\"block-wrapper animated\" *ngIf=\"isBlocks\" [ngClass]=\"(isSelected == 'blockClass')?'fadeIn':''\">\r\n    <div class=\"row\" (mouseenter)=\"LoopTimerStop()\" (mouseleave)=\"LoopTimerStart()\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"block-inner\">\r\n                <h3>\r\n                    <em>\r\n            <img src=\"/assets/images/blockIcons.png\" />\r\n          </em>\r\n                    <span>Blocks</span>\r\n                    <input (keyup)=\"getSearchedData(number)\" class=\"serach\" [(ngModel)]='number'>\r\n                </h3>\r\n                <div class=\"block-inner-list-wrapper\" infiniteScroll [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"50\" [scrollWindow]=\"false\" (scrolled)=\"onScroll()\">\r\n                    <div class=\"loader-bg\" *ngIf=\"!getBlockList\"></div>\r\n                    <div class=\"block-inner-scroll-space equalHeight\">\r\n                        <p-accordion>\r\n                            <p-accordionTab class=\"block-list\" *ngFor=\"let getBlocks of getBlockList\">\r\n                                <p-header class=\"block-header animated slideInDown\" (click)=\"ExpandBlockDetails(getBlocks?.number);blockFilter(getBlocks?.hash);\">\r\n                                    <h4>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"block-title col-sm-8 col-md-8\">{{getBlocks?.number}}</div>\r\n                                            <div class=\"block-time col-sm-4 col-md-4\">{{changeTimeformat(getBlocks?.TimeElapsed)}} ago</div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"hash-title col-md-2 col-sm-2\">Hash</div>\r\n                                            <div class=\"hash-detail col-md-10 col-sm-10\" title=\"{{getBlocks?.hash}}\">{{getBlocks?.hash}}</div>\r\n                                        </div>\r\n                                    </h4>\r\n                                </p-header>\r\n                                <app-hash-block [BlockDetails]=\"BlockDetails\" [getBlocks]=\"getBlocks\"></app-hash-block>\r\n                            </p-accordionTab>\r\n                        </p-accordion>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"block-inner\">\r\n                <h3>\r\n                    <em>\r\n            <img src=\"/assets/images/transcationIcons.png\" />\r\n          </em>\r\n                    <span>Transactions</span>\r\n                    <input (keyup)=\"getSearchedTxNData(transactionHash)\" class=\"serach\" [(ngModel)]='transactionHash'>\r\n                </h3>\r\n                <div class=\"block-inner-list-wrapper\">\r\n                    <div class=\"loader-bg\" *ngIf=\"!getBlockList\"></div>\r\n                    <div class=\"block-inner-scroll-space\">\r\n                        <p-accordion>\r\n                            <div *ngFor=\"let getBlocks of getBlockList\">\r\n                                <p-accordionTab class=\"block-list\" *ngFor=\"let getTBlocks of getBlocks.transactions\" [ngClass]=\"{'selected': getBlocks?.hash == selectedBlock}\">\r\n                                    <p-header class=\"block-header animated slideInDown\" *ngIf=\"getBlocks.transactions\" (click)=\"ExpandTxNDetails(getTBlocks.hash);\">\r\n                                        <h4>\r\n                                            <div class=\"row margin-bottom-0\">\r\n                                                <div class=\"hash-title col-md-2 col-sm-3\">TxnHash</div>\r\n                                                <div class=\"hash-detail col-md-10 col-sm-9\" title=\"{{getTBlocks.hash}}\">{{getTBlocks.hash}}</div>\r\n                                            </div>\r\n                                            <div class=\"row txn-wrapper\">\r\n                                                <div class=\"col-md-9 col-sm-9\">\r\n                                                    <div class=\"col-md-2\">From</div>\r\n                                                    <div class=\"col-md-4\" title=\"{{getTBlocks.from}}\">{{getTBlocks.from}}</div>\r\n                                                    <div class=\"col-md-2\">To</div>\r\n                                                    <div class=\"col-md-4\" title=\"{{getTBlocks.to}}\">{{getTBlocks.to}}</div>\r\n                                                </div>\r\n                                                <div class=\"col-md-3 col-sm-3 block-time trans\">\r\n                                                    {{changeTimeformat(getBlocks?.TimeElapsed)}} ago\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-12 public\">\r\n                                                    <span [ngClass]=\"checkType(getTBlocks.transactionType)\">{{getTBlocks.transactionType}}</span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </h4>\r\n                                    </p-header>\r\n                                    <app-transcation-block [TxNDetails]=\"TxNDetails\" [getBlocks]=\"getBlocks\"></app-transcation-block>\r\n                                </p-accordionTab>\r\n                            </div>\r\n                        </p-accordion>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"grid-container contract-list-container animated \" *ngIf=\"isIpBlock\" [ngClass]=\"(isSelected == 'ipClass')?'fadeIn':''\">\r\n    <h2>Contract List</h2>\r\n    <input class=\"serach\" [(ngModel)]='searchQuery' placeholder=\"Search contract list by contract address...\" />\r\n    <div class=\"ip-contract-list\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th></th>\r\n                        <th>Contract Address</th>\r\n                        <th>Contract Name</th>\r\n                        <th><a (click)=\"OrderByType = !OrderByType\"> Deployment Date <span class=\"icon-sort\" [ngClass]=\"{'icon-sort-rotate': OrderByType}\">&nbsp;</span></a></th>\r\n                        <th>Sender</th>\r\n                        <th>Contract Type</th>\r\n                        <th>Description</th>\r\n                        <th>ABI</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of contractListData | orderBy : OrderByType | searchkeyword: 'contractAddress' : searchQuery;let i=index\">\r\n                        <td title=\"Show Details\">\r\n                            <span (click)=\"uploadABIModal(item,true)\" [ngClass]=\"{'icon-contract': item?.abi !=''}\">&nbsp;</span>\r\n                        </td>\r\n                        <td>\r\n                            <div class=\"eclipse-text\">{{item?.contractAddress || '--'}}</div>\r\n                        </td>\r\n                        <td>{{item?.contractName || '--'}}</td>\r\n                        <td>{{item?.timestamp * 1000 | date : 'medium'}}</td>\r\n                        <td title=\"{{item?.sender}}\">\r\n                            <div class=\"eclipse-text\">{{item?.sender || '--'}}</div>\r\n                        </td>\r\n                        <td [ngClass]=\"checkType(item.contractType)\">{{item?.contractType || '--'}}</td>\r\n                        <td title=\"{{item?.description}}\">{{item?.description || '--'}}</td>\r\n                        <td title=\"{{item?.abi}}\">\r\n                            <code *ngIf=\"item?.abi != ''\" class=\"eclipse-text\">{{item?.abi || '--'}}</code>\r\n                            <a *ngIf=\"item?.abi == ''\" href=\"javascript:void(0)\" (click)=\"uploadABIModal(item,false)\" class=\"btn btn-success\">Upload ABI</a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-info-overlay [display]=\"display\" [display2]=\"display2\" [listItem]=\"getPeerDetails\" [listItem2]=\"getNodeInfoDetails\" (showEvent)=\"closeFlag($event)\"></app-info-overlay>\r\n<app-contract-abi-deployment [contractAbiDisplay]=\"contractAbiDisplay\" *ngIf=\"contractAbiDisplay\" [contractAbi]=\"contractAbi\" [contractFlag]=\"contractFlag\" (closeEventABI)=\"closeEventABI($event)\">\r\n    </app-contract-abi-deployment"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = "/*Custom Fonts*/\n/*Fonts Colors*/\n/*media queries*/\n/*\r\n$point: Breakpoint integer in px\r\n$constraint: Constraint for media query (min/max)\r\n$feature: Media feature of query (width/height)\r\n*/\n@font-face {\n  font-family: 'Heebo-Bold';\n  src: url(\"/assets/fonts/heebo-bold.eot\");\n  src: url(\"/assets/fonts/heebo-bold.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-bold.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-bold.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-bold.svg#heebo-bold\") format(\"svg\"), url(\"/assets/fonts/heebo-bold.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'Heebo-Light';\n  src: url(\"/assets/fonts/heebo-light.eot\");\n  src: url(\"/assets/fonts/heebo-light.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-light.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-light.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-light.svg#heebo-light\") format(\"svg\"), url(\"/assets/fonts/heebo-light.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'Heebo-Regular';\n  src: url(\"/assets/fonts/heebo-regular.eot\");\n  src: url(\"/assets/fonts/heebo-regular.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-regular.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-regular.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-regular.svg#heebo-regular\") format(\"svg\"), url(\"/assets/fonts/heebo-regular.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'Heebo-Medium';\n  src: url(\"/assets/fonts/heebo-medium.eot\");\n  src: url(\"/assets/fonts/heebo-medium.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-medium.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-medium.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-medium.svg#heebo-medium\") format(\"svg\"), url(\"/assets/fonts/heebo-medium.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n.dashboard {\n  position: relative;\n  margin-top: 15px;\n  margin-bottom: 35px; }\nimg {\n  vertical-align: 0 !important; }\n.nodeTable {\n  height: 184px;\n  border-radius: 6px;\n  display: block;\n  text-align: center;\n  background-image: url(\"/assets/images/active-node.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 0 0; }\n.nodeTable .activeNode {\n    position: absolute;\n    bottom: 30px;\n    left: 20px; }\n.nodeTable .activeNode h3 {\n      font-size: 28px;\n      color: #fff;\n      margin: 0;\n      padding: 0;\n      font-family: \"Heebo-Regular\"; }\n.nodeTable .activeNode p {\n      font-size: 14px;\n      color: #fff;\n      font-family: \"Heebo-Light\";\n      margin: 0;\n      padding: 0; }\n.grid-container .ip-contract-list {\n  max-height: 50vh;\n  overflow-y: auto; }\n.grid-container .ip-contract-list .table {\n    margin-bottom: 0; }\n.grid-container .ip-contract-list::-webkit-scrollbar {\n    width: 4px;\n    height: 5px;\n    border-radius: 6px; }\n.grid-container .ip-contract-list::-webkit-scrollbar-track {\n      background-color: #535353;\n      border-radius: 6px; }\n.grid-container .ip-contract-list::-webkit-scrollbar-thumb {\n      background-color: #535353;\n      border-radius: 6px; }\n.grid-container .ip-contract-list::-webkit-scrollbar-button {\n      display: none; }\n.grid-container h2 {\n  font-family: \"Heebo-Regular\";\n  color: #fff;\n  font-size: 16px;\n  padding: 10px 0 12px 0; }\n.grid-container .table.table-hover tr:hover {\n  background-color: #2b2b2b; }\n.grid-container .table thead th {\n  background-color: #2b2b2b;\n  font-size: 13px;\n  color: #fff;\n  font-family: \"Heebo-Light\";\n  border-bottom: 1px solid #2b2b2b;\n  padding: 8px 10px 13px 10px;\n  letter-spacing: 0.3px;\n  border-top: none; }\n.grid-container .table tr {\n  background-color: #2b2b2b;\n  border-top: 1px solid #2b2b2b; }\n.grid-container .table tr td {\n    border-top: none;\n    padding: 8px 10px 8px 10px;\n    font-size: 12px;\n    color: #747474;\n    font-family: \"Heebo-Light\";\n    vertical-align: middle;\n    position: relative; }\n.grid-container .table tr td.time {\n      text-align: center; }\n.grid-container .table tr td span {\n      height: 20px;\n      width: 20px;\n      font-size: 0;\n      line-height: 0;\n      text-indent: -5000px;\n      display: block; }\n.grid-container .table tr td span.checkIcon {\n        background: url(\"/assets/images/check-white.png\") no-repeat 0 0; }\n.grid-container .table tr td span.checkiconCopy {\n        background: url(\"/assets/images/check-copy.png\") no-repeat 0 0 !important; }\n.grid-container .table tr td span.checkIcon2 {\n        background: url(\"/assets/images/check-red.png\") no-repeat 0 0; }\n.grid-container .table tr td span.icon-contract {\n        background: url(\"/assets/images/icon-contract.png\") no-repeat 0 0;\n        background-size: cover; }\n.grid-container .table tr td span.spinner-bg {\n        background: url(/assets/images/spinner.gif) 0 0 no-repeat;\n        height: 40px;\n        width: 40px;\n        display: block;\n        text-indent: -5000px;\n        font-size: 0;\n        line-height: 0;\n        position: absolute;\n        left: 27px;\n        top: 0; }\n.grid-container .table tr td.node {\n      white-space: nowrap;\n      width: 305px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: inline-block;\n      padding: 11px 10px 11px 10px;\n      border-top: 0; }\n.grid-container .table tr td.node.pubkey {\n        color: #e6ac00; }\n.grid-container .table tr td.node.enodeid {\n        color: #e6ac00; }\n@media screen and (max-width: 1200px) {\n        .grid-container .table tr td.node {\n          width: 183px; } }\n@media screen and (max-width: 768px) {\n        .grid-container .table tr td.node {\n          width: 183px; } }\n.grid-container .table tr td.ip-addr {\n      width: 120px; }\n.rect-block {\n  width: 195px;\n  padding: 0;\n  margin: 0 10px 0 0;\n  float: left; }\n.rect-block.last .rect-block-inner h5.active-node {\n    margin-bottom: 13px; }\n@media screen and (max-width: 576px) {\n    .rect-block {\n      width: 167px;\n      margin-bottom: 10px; }\n      .rect-block.last {\n        margin-right: 0px; } }\n@media screen and (max-width: 992px) {\n    .rect-block {\n      width: 165px;\n      padding: 0;\n      margin-right: 10px; } }\n@media screen and (max-width: 768px) {\n    .rect-block {\n      width: 165px;\n      padding: 0;\n      margin-right: 10px; } }\n@media screen and (max-width: 750px) {\n    .rect-block {\n      width: 120px; } }\n@media screen and (max-width: 576px) {\n    .rect-block {\n      width: 100%;\n      float: none;\n      margin: 0 0 10px 0; } }\n.rect-block .rect-block-inner {\n    height: 134px;\n    border-radius: 6px;\n    background-color: #2b2b2b;\n    padding: 15px 12px; }\n.rect-block .rect-block-inner p {\n      margin-bottom: 13px; }\n.rect-block .rect-block-inner h5 {\n      color: #fff;\n      letter-spacing: 0.3px;\n      font-size: 13px;\n      font-family: \"Heebo-Bold\";\n      text-transform: uppercase;\n      margin: 0;\n      padding: 0; }\n.rect-block .rect-block-inner h5.active-node {\n        font-family: \"Heebo-Bold\";\n        color: #fff; }\n@media screen and (max-width: 768px) {\n        .rect-block .rect-block-inner h5 {\n          font-size: 11px; } }\n@media screen and (max-width: 576px) {\n        .rect-block .rect-block-inner h5 {\n          font-size: 13px; } }\n.rect-block .rect-block-inner h3 {\n      color: #e6ac00 letter-spacing 1px;\n      font-size: 42px;\n      font-family: \"Heebo-Light\";\n      margin: 0;\n      padding: 0 0 13px 0; }\n.rect-block .rect-block-inner h3.active-node {\n        color: #fff; }\n@media screen and (max-width: 750px) {\n        .rect-block .rect-block-inner h3 {\n          font-size: 27px; } }\n@media screen and (max-width: 576px) {\n        .rect-block .rect-block-inner h3 {\n          font-size: 42px; } }\n.rect-block .rect-block-inner:hover, .rect-block .rect-block-inner:active {\n      -webkit-box-shadow: 0 0 5px 0 #e6ac00;\n              box-shadow: 0 0 5px 0 #e6ac00;\n      cursor: pointer; }\n.rect-block .rect-block-inner p {\n      display: block;\n      overflow: hidden; }\n.rect-block .rect-block-inner p strong {\n        float: left;\n        margin-right: 10px;\n        font-family: \"Heebo-Light\";\n        color: #e6ac00;\n        font-size: 13px;\n        font-weight: normal; }\n@media screen and (max-width: 768px) {\n          .rect-block .rect-block-inner p strong {\n            margin-right: 6px;\n            font-size: 12px; } }\n@media screen and (max-width: 576px) {\n          .rect-block .rect-block-inner p strong {\n            margin-right: 10px;\n            font-size: 13px; } }\n.rect-block .rect-block-inner p span {\n        float: left;\n        font-family: \"Heebo-Light\";\n        font-size: 13px;\n        color: #fff; }\n.rect-block .rect-block-inner p span strong {\n          font-family: \"Heebo-Bold\"; }\n.rect-block.active .rect-block-inner {\n    -webkit-box-shadow: 0 0 5px 0 #e6ac00;\n            box-shadow: 0 0 5px 0 #e6ac00; }\n.pending-transaction {\n  float: left;\n  padding: 0;\n  margin-right: 10px; }\n@media screen and (max-width: 992px) {\n    .pending-transaction {\n      padding: 0;\n      margin-right: 10px; } }\n@media screen and (max-width: 768px) {\n    .pending-transaction {\n      padding: 0;\n      margin-right: 10px; } }\n@media screen and (max-width: 576px) {\n    .pending-transaction {\n      padding: 0;\n      margin-right: 0;\n      float: none;\n      margin-bottom: 10px; } }\n.pending-transaction .inner {\n    background: url(/assets/images/active-node.png);\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center 0;\n    width: 378px;\n    height: 134px;\n    padding: 0;\n    border-radius: 6px;\n    position: relative; }\n@media screen and (max-width: 1200px) {\n      .pending-transaction .inner {\n        width: 220px; } }\n@media screen and (max-width: 576px) {\n      .pending-transaction .inner {\n        width: 167px; } }\n@media screen and (max-width: 992px) {\n      .pending-transaction .inner {\n        width: 165px; } }\n@media screen and (max-width: 768px) {\n      .pending-transaction .inner {\n        width: 165px; } }\n@media screen and (max-width: 750px) {\n      .pending-transaction .inner {\n        width: 120px; } }\n@media screen and (max-width: 576px) {\n      .pending-transaction .inner {\n        width: 100%; } }\n.pending-transaction .inner h5 {\n      color: #fff;\n      font-size: 14px;\n      font-family: \"Heebo-Bold\";\n      letter-spacing: 0.3px;\n      margin: 0;\n      padding: 0 0 8px 0;\n      text-transform: uppercase; }\n@media screen and (max-width: 768px) {\n        .pending-transaction .inner h5 {\n          font-size: 11px; } }\n@media screen and (max-width: 576px) {\n        .pending-transaction .inner h5 {\n          font-size: 14px; } }\n.pending-transaction .inner h3 {\n      color: #fff;\n      letter-spacing: 0.7px;\n      font-size: 75px;\n      font-family: \"Heebo-Light\";\n      line-height: 75px;\n      margin: 0;\n      padding: 0; }\n@media screen and (max-width: 768px) {\n        .pending-transaction .inner h3 {\n          font-size: 65px; } }\n@media screen and (max-width: 576px) {\n        .pending-transaction .inner h3 {\n          font-size: 75px; } }\n.pending-transaction span {\n    position: absolute;\n    right: 16px;\n    bottom: 13px; }\n.pending-transaction span a {\n      font-family: \"Heebo-Light\";\n      color: #fff;\n      font-size: 13px; }\n.ip-address {\n  float: left;\n  padding: 0;\n  border-radius: 5px;\n  -webkit-transition: all .5s ease;\n  transition: all .5s ease; }\n.ip-address:hover, .ip-address.active {\n    -webkit-box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.85);\n            box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.85);\n    cursor: pointer; }\n@media screen and (max-width: 576px) {\n    .ip-address {\n      float: none;\n      padding: 0; } }\n.ip-address .inner {\n    background-image: url(/assets/images/ipbackground.png);\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center 0;\n    width: 310px;\n    height: 134px;\n    padding: 15px 12px;\n    border-radius: 6px; }\n@media screen and (max-width: 1200px) {\n      .ip-address .inner {\n        width: 220px; } }\n@media screen and (max-width: 576px) {\n      .ip-address .inner {\n        width: 167px; } }\n@media screen and (max-width: 992px) {\n      .ip-address .inner {\n        width: 165px; } }\n@media screen and (max-width: 768px) {\n      .ip-address .inner {\n        width: 165px; } }\n@media screen and (max-width: 750px) {\n      .ip-address .inner {\n        width: 120px; } }\n@media screen and (max-width: 576px) {\n      .ip-address .inner {\n        width: 100%; } }\n.ip-address .inner h5 {\n      color: #fff;\n      font-size: 14px;\n      font-family: \"Heebo-Bold\";\n      letter-spacing: 0.3px;\n      margin: 0;\n      padding: 0 0 8px 0;\n      text-transform: uppercase; }\n@media screen and (max-width: 768px) {\n        .ip-address .inner h5 {\n          font-size: 11px; } }\n@media screen and (max-width: 576px) {\n        .ip-address .inner h5 {\n          font-size: 14px; } }\n.ip-address .inner h3 {\n      color: #fff;\n      letter-spacing: 0.7px;\n      font-size: 44px;\n      font-family: \"Heebo-Light\";\n      margin: 0 0 15px;\n      padding: 0 0 8px 0;\n      width: calc(50% - 10px);\n      float: left;\n      line-height: 1; }\n.ip-address .inner h3 span {\n        font-size: 12px;\n        font-family: \"Heebo-Light\";\n        display: block;\n        margin-bottom: 10px;\n        text-transform: uppercase;\n        font-family: \"Heebo-Regular\";\n        font-weight: 800; }\n.ip-address .inner h3:first-child {\n        border-right: 1px solid #eac56b;\n        margin-right: 20px; }\n@media screen and (max-width: 1200px) {\n        .ip-address .inner h3 {\n          font-size: 35px; } }\n@media screen and (max-width: 992px) {\n        .ip-address .inner h3 {\n          font-size: 25px; } }\n@media screen and (max-width: 768px) {\n        .ip-address .inner h3 {\n          font-size: 25px; } }\n@media screen and (max-width: 750px) {\n        .ip-address .inner h3 {\n          font-size: 16px; } }\n@media screen and (max-width: 576px) {\n        .ip-address .inner h3 {\n          font-size: 42px; } }\n.ip-address .inner p {\n      display: block;\n      overflow: hidden;\n      color: #fff;\n      clear: both;\n      margin: 0 -5px; }\n.ip-address .inner p strong {\n        float: left;\n        margin-right: 10px;\n        font-family: \"Heebo-Light\";\n        font-size: 13px;\n        font-weight: normal; }\n.ip-address .inner p span {\n        float: left;\n        font-family: \"Heebo-Light\";\n        font-size: 13px; }\n.ip-address .inner p span strong {\n          font-family: \"Heebo-Light\"; }\n.contract-list-container {\n  position: relative; }\n.contract-list-container .serach {\n    right: 0; }\n.contract-list-container .eclipse-text {\n    width: 155px; }\n.contract-list-container .btn-success {\n    color: #fff;\n    background-color: #eac56b;\n    border-color: #eac56b;\n    font-size: 13px;\n    padding: 5px 10px;\n    line-height: 1; }\n.contract-list-container .btn-success:hover {\n      background-color: #1d1d1d;\n      border-color: #222222; }\n.contract-list-container .table tr td {\n    color: #dadada; }\n.contract-list-container .table tr td.hash {\n      color: #e0ac00; }\n.contract-list-container .table tr td.private {\n      color: #eac56b; }\n.contract-list-container .table tr td.public {\n      color: #e9c600; }\n.contract-list-container code {\n    color: #e6ac00; }\n.eclipse-text {\n  white-space: nowrap;\n  width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block; }\n.icon-sort {\n  background: url(\"/assets/images/order.png\") no-repeat 0 0;\n  background-size: cover;\n  height: 17px;\n  margin-left: 10px;\n  width: 14px;\n  line-height: 1;\n  text-indent: 0;\n  display: inline-block;\n  -webkit-transition-duration: 0.8s;\n  transition-duration: 0.8s; }\n.icon-sort-rotate {\n  -webkit-transform: rotate(-180deg);\n          transform: rotate(-180deg);\n  -webkit-transition-duration: 0.8s;\n  transition-duration: 0.8s; }\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__("./src/app/service/common-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_utility_service__ = __webpack_require__("./src/app/service/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_message_service__ = __webpack_require__("./src/app/service/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_TimerObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeWhile.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_CommonService, cd, messageService, _el, utilityService) {
        this._CommonService = _CommonService;
        this.cd = cd;
        this.messageService = messageService;
        this._el = _el;
        this.utilityService = utilityService;
        //getLatestChartData: any;
        this.timeArr = [];
        this.finalTime = [];
        this.transactionCount = [];
        this.timeStamp = [];
        this.blockCount = [];
        this.contractListData = [];
        this.display = false;
        this.display2 = false;
        this.display3 = false;
        this.getPeerDetails = {};
        this.getNodeListData = {};
        this.getBlockList = [];
        this.msgs = [];
        this.isExpanded = false;
        this.isBlocks = false;
        this.isNodeData = false;
        this.isIpBlock = false;
        this.referenceNo = null;
        this.counter = 0;
        this.refSerach = false;
        this.blockUpdated = false;
        this.contractAbiDisplay = false;
        this.number = 0;
        this.OrderByType = false;
        this.contractFlag = false;
        this.alive = true;
        this.serviceCallInterval = this.utilityService.serviceCallInterval; // in seconds
        this.timerIncrementInterval = 1; // in seconds
        // IntervalObservable.create(1000 * 60).subscribe(response => {
        //   this.getChartDataList();
        //   //this._CommonService.getLatestChartData().subscribe(result => {
        //     //this.getLatestChartData = result.json();
        //     ////this.timeStamp.push(this.changeTimeformat(this.getLatestChartData.timeStamp));
        //    // this.transactionCount.push(this.getLatestChartData.transactionCount);
        //    // this.blockCount.push(this.getLatestChartData.blockCount);
        //    // this.timeArr.push(this.showTime(this.getLatestChartData.timeStamp));
        //    // this.cd.detectChanges();
        //    // this.cd.markForCheck();
        //    // //console.log(' this.getLatestChartData.timeStamp>>>>', this.getLatestChartData.timeStamp);
        //    // //console.log(' this.getLatestChartData>>>>>>this.timeStamp>>>>', this.getLatestChartData, this.timeStamp);
        //     //this.chartMapData();
        //   //}, err => {
        //    // //console.log("Error occured", err);
        //  // });
        // });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // //console.log(this.display, "this.display");
        // //console.log(this.display2, "this.display2");
        var _this = this;
        this.getNodeLatency();
        this.getBlocklisting(null);
        this.getNodeInfo();
        this.getNodeList();
        this.getContractCount();
        this.isBlocks = true; // on page load block and transaction would show by default on dashboard
        if ('nodeManager') {
            this.isSelected = 'nodeManager';
        }
        this.getLatestBlock();
        this.incrementTimer();
        this.getActiveNodeInfo();
        this.getChartDataList();
        this.getLatestTime = setInterval(function () { return _this.currentTime(); }, 1000);
    };
    DashboardComponent.prototype.currentTime = function () {
        this.today = new Date();
        this.currentSecond = this.today.getSeconds();
        //console.log("Current Second is : ", this.currentSecond);
        if (this.currentSecond == 1) {
            this.startChartCron();
            this.stopGetLatestTimeFunction();
            this.executeAtStartOfMinute();
        }
    };
    DashboardComponent.prototype.executeAtStartOfMinute = function () {
        var _this = this;
        this.chartCron = setInterval(function () { return _this.startChartCron(); }, 60 * 1000);
        //console.log("Found the Minute Mark");
    };
    ;
    DashboardComponent.prototype.startChartCron = function () {
        this.getChartDataList();
        // //console.log("Cron is executed at :", new Date().getSeconds() , " Seconds");
    };
    DashboardComponent.prototype.stopGetLatestTimeFunction = function () {
        //console.log("Stopped initial cron")
        clearInterval(this.getLatestTime);
    };
    DashboardComponent.prototype.getMiliSeconds = function (time) {
        if (time) {
            var timeArray = time.split("ms");
            return parseInt(timeArray[0].replace(/ /g, '')) / 1000 + " ms";
        }
        else {
            return "";
        }
    };
    DashboardComponent.prototype.onScroll = function () {
        //console.log("scrolled Down");
        //this.noOfItemsToShowInitially += this.itemsToLoad;
        if (this.refSerach == false) {
            if (this.counter == 0) {
                this.referenceNo = this.referenceNo - 6;
            }
            else {
                this.referenceNo = this.referenceNo - 7;
            }
            this.counter++;
            this.itemsToShow = this.getBlocklisting(this.referenceNo);
        }
    };
    DashboardComponent.prototype.checkType = function (type) {
        type = type.toLowerCase();
        return type;
    };
    DashboardComponent.prototype.blockFilter = function (_hash) {
        var _this = this;
        //console.log('hash>>>>', _hash);
        if (_hash == this.selectedBlock) {
            this.selectedBlock = '';
        }
        else {
            this.selectedBlock = _hash;
            var parentElement = this._el.nativeElement.querySelectorAll('.block-inner-list-wrapper')[1];
            //console.log('parentElement>>>', parentElement);
            var selectedElement_1;
            setTimeout(function () {
                selectedElement_1 = _this._el.nativeElement.querySelectorAll('.selected')[0].offsetTop - 54;
                //console.log('selectedElement>......', selectedElement);
                document.getElementsByClassName('block-inner-list-wrapper')[1].scrollTo(0, selectedElement_1);
            }, 100);
        }
    };
    DashboardComponent.prototype.ExpandBlockDetails = function (_BlkNum) {
        this.getBlockDetails(_BlkNum);
        //console.log('this.BlockDetails ExpandBlockDetails>>>>', _BlkNum);
    };
    DashboardComponent.prototype.ExpandTxNDetails = function (_hashKey) {
        this.getTxNDetails(_hashKey);
        //console.log('this.BlockDetails ExpandBlockDetails>>>>', _hashKey);
    };
    DashboardComponent.prototype.getSearchedTxNData = function (_hashKey) {
        var _this = this;
        if (_hashKey) {
            this.refSerach = true;
            this._CommonService.getTxNblocks(_hashKey).subscribe(function (result) {
                //console.log('result>>>>>', result)
                _this.getBlockList = [];
                _this.getBlockList.push(result);
                _this.counter = 0;
                _this.referenceNo = null;
                //console.log('this.getBlockList tanscation >>>>>', this.getBlockList)
            });
        }
        else {
            //this.getBlockList = []
            this.refSerach = false;
            this.getBlockList = [];
            this.getBlocklisting(null);
            document.getElementsByClassName('block-inner-list-wrapper')[1].scrollTo(0, 0);
        }
    };
    DashboardComponent.prototype.getBlocklisting = function (referenceNo) {
        var _this = this;
        this._CommonService.getBlockData(referenceNo).subscribe(function (result) {
            var data = [];
            data = result.json();
            var tempArray = [];
            //console.log('==this.data==----', data);
            if (_this.referenceNo == null) {
                data.forEach(function (element, i) {
                    //console.log('element.transactions.....', element.transactions)
                    if (element.transactions) {
                        tempArray.push(element);
                    }
                    if (i == data.length - 1) {
                        _this.getBlockList = tempArray;
                    }
                });
                document.getElementsByClassName('block-inner-list-wrapper')[0].scrollTo(0, 0);
                document.getElementsByClassName('block-inner-list-wrapper')[1].scrollTo(0, 0);
                _this.referenceNo = _this.getBlockList[0].number;
            }
            else {
                data.forEach(function (element) {
                    //console.log('element.transactions.....', element.transactions)
                    if (element.transactions) {
                        _this.getBlockList.push(element);
                    }
                });
            }
            //console.log(this.getBlockList, '==this.getBlockList==');
            // below logic added to show list with blockNumber greater than 0
            _this.getBlockList = _this.getBlockList.filter(function (block) { return block.number > 0; });
        }, function (err) {
            //console.log("Error occured", err);
        });
    };
    DashboardComponent.prototype.getSearchedData = function (_BlkNum) {
        var _this = this;
        //console.log('Block Number>>>>>>>', _BlkNum);
        if (_BlkNum) {
            this.refSerach = true;
            this._CommonService.getBlockDetails(_BlkNum).subscribe(function (result) {
                _this.getBlockList = [];
                _this.getBlockList.push(result);
                _this.counter = 0;
                _this.referenceNo = null;
            });
        }
        else {
            //this.getBlockList = []
            this.refSerach = false;
            this.getBlockList = [];
            this.getBlocklisting(null);
            document.getElementsByClassName('block-inner-list-wrapper')[1].scrollTo(0, 0);
        }
    };
    DashboardComponent.prototype.getBlockDetails = function (_BlkNum) {
        var _this = this;
        this._CommonService.getBlockDetails(_BlkNum).subscribe(function (data) {
            _this.BlockDetails = data;
            //console.log('---Block Details ---', this.BlockDetails);
        });
    };
    DashboardComponent.prototype.getLatestBlock = function () {
        var _this = this;
        this.latestBlockTimer = __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(0, this.serviceCallInterval * 1000)
            .takeWhile(function () { return _this.alive; })
            .subscribe(function () {
            _this._CommonService.getLatestBlock().subscribe(function (data) {
                _this.latestBlockData = data.json();
                if (_this.currentBlockNumber != _this.latestBlockData.latestBlockNumber) {
                    if (!_this.blockUpdated) {
                        // this.getBlockList = [];
                        _this.counter = 0;
                        _this.referenceNo = null;
                        _this.getBlocklisting(_this.referenceNo);
                    }
                    _this.currentBlockNumber = _this.latestBlockData.latestBlockNumber;
                    _this.getNodeInfo();
                    _this.getNodeList();
                    _this.getNodeLatency();
                    _this.getChartDataList();
                    _this._CommonService.sendCall('latest block called');
                }
                _this.latestTimeElapsed = _this.latestBlockData.TimeElapsed;
                // //console.log("latestTimeElapsed", this.latestBlockData);
                _this.latestTimeElapsedToDisplay = _this.changeTimeformat(_this.latestTimeElapsed);
            }, function (err) {
                //console.log("Error occured", err);
            });
        });
    };
    DashboardComponent.prototype.getUpdateBlockMouseOut = function () {
        var _this = this;
        if (this.currentBlockNumber != this.getBlockList[0].number) {
            this._CommonService.getLatestBlock().subscribe(function (data) {
                _this.latestBlockData = data.json();
                // this.getBlockList = [];
                // if(this.referenceNo){
                _this.counter = 0;
                _this.referenceNo = null;
                _this.getBlocklisting(_this.referenceNo);
            });
        }
    };
    DashboardComponent.prototype.LoopTimerStart = function () {
        //this.myTimer.unsubscribe();
        //console.log("start");
        this.blockUpdated = false;
        this.getUpdateBlockMouseOut();
    };
    DashboardComponent.prototype.LoopTimerStop = function () {
        //console.log("stop");
        //this.getLatestBlock();
        this.blockUpdated = true;
    };
    DashboardComponent.prototype.incrementTimer = function () {
        var _this = this;
        setInterval(function () {
            _this.latestTimeElapsed += _this.timerIncrementInterval;
            _this.latestTimeElapsedToDisplay = _this.changeTimeformat(_this.latestTimeElapsed);
        }, this.timerIncrementInterval * 1000);
    };
    DashboardComponent.prototype.changeTimeformat = function (latestTime) {
        var days = Math.floor(latestTime / (3600 * 24));
        latestTime -= days * 3600 * 24;
        var hours = Math.floor(latestTime / 3600);
        latestTime -= hours * 3600;
        var minutes = Math.floor(latestTime / 60);
        var seconds = latestTime - minutes * 60;
        var finalTime = this.twoDigit(hours) + ':' + this.twoDigit(minutes) + ':' + this.twoDigit(seconds);
        if (days > 0) {
            finalTime = days + ' Day' + (days > 1 ? 's' : '');
            // if days and time both need to be shown below to be used
            // finalTime = days + ' Day' + (days > 1 ? 's' : '') + ' & '
            //   + this.twoDigit(hours) + ':' + this.twoDigit(minutes) + ':' + this.twoDigit(seconds) + ' hrs';
        }
        return finalTime;
    };
    DashboardComponent.prototype.twoDigit = function (num) {
        return ("0" + num).slice(-2);
    };
    DashboardComponent.prototype.getTxNDetails = function (_hashKey) {
        var _this = this;
        this._CommonService.getTxNDetails(_hashKey).subscribe(function (data) {
            _this.TxNDetails = data;
            //console.log('---TxNDetails Details ---', this.TxNDetails);
        });
    };
    DashboardComponent.prototype.getNodeInfo = function () {
        var _this = this;
        this._CommonService.getNodeInfo().subscribe(function (result) {
            _this.getNodeInfoList = result.json();
            //console.log('this.getNodeInfoList ====>>>', this.getNodeInfoList)
            _this.currentBlockNumber = _this.getNodeInfoList.blockNumber;
            //console.log('this.currentBlockNumber>>>>>>>', this.currentBlockNumber)
            _this.messageService.sendMessage(_this.getNodeInfoList);
            //console.log(' this.getNodeInfo>>>>>>', this.getNodeInfoList);
        }, function (err) {
            //console.log("Error occured", err);
        });
    };
    DashboardComponent.prototype.getActiveNodeInfo = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(0, this.serviceCallInterval * 3000)
            .takeWhile(function () { return _this.alive; })
            .subscribe(function () {
            _this._CommonService.activeNodeInfo().subscribe(function (result) {
                _this.getActiveNode = result.json();
                //console.log('this.getActiveNode ====>>>', this.getActiveNode)
                _this.getNodeList();
                _this.getNodeLatency();
                _this._CommonService.sendCall('latest block called');
            }, function (err) {
                //console.log("Error occured", err);
            });
        });
    };
    DashboardComponent.prototype.getNodeList = function () {
        var _this = this;
        this._CommonService.getNodeList().subscribe(function (result) {
            _this.getNodeListData = result.json();
            //console.log(' this.getNodeListData>>>>>>', this.getNodeListData);
            _this.getNodeListData1 = _this.getNodeListData.filter(function (x) { return x.self == 'true'; });
            _this.getNodeListData2 = _this.getNodeListData.filter(function (x) { return x.self == 'false'; });
            // this.getNodeListData4 = [this.getNodeListData1, ...this.getNodeListData2];
            _this.getNodeListData3 = _this.getNodeListData1.concat(_this.getNodeListData2);
            // Sort array elements after the first element in Ascending order
            var firstNodeElement = _this.getNodeListData3[0];
            var nodeArrayForSort = _this.getNodeListData3;
            // Remove first element of the array
            nodeArrayForSort.splice(0, 1);
            //Sort by Name of the node
            nodeArrayForSort.sort(function (a, b) {
                var a = a.nodeName.toLowerCase(), b = b.nodeName.toLowerCase();
                if (a < b)
                    return -1;
                if (a > b)
                    return 1;
                return 0; //default return value (no sorting)
            });
            // Insert the first element again into the sorted array and reassign to actual array.
            nodeArrayForSort.splice(0, 0, firstNodeElement);
            _this.getNodeListData3 = nodeArrayForSort;
            //console.log('this.getNodeListData3>>>>>>', this.getNodeListData3);
            // this.getNodeListData.forEach((element, index) => {
            //   if (index == 0) {
            //     element['isActive'] = true;
            //     element['time'] = "";
            //   }
            // });
        }, function (err) {
            //console.log("Error occured", err);
        });
    };
    DashboardComponent.prototype.getNodeLatency = function () {
        var _this = this;
        this._CommonService.getNodeLatency().subscribe(function (result) {
            _this.nodeLatency = result.json();
            //console.log(' this.nodeLatency>>>>>>', this.nodeLatency);
            // below logic to set time in getNodeListData array to show latency in template
            for (var _i = 0, _a = _this.nodeLatency; _i < _a.length; _i++) {
                var element = _a[_i];
                for (var _b = 0, _c = _this.getNodeListData; _b < _c.length; _b++) {
                    var obj = _c[_b];
                    if (element['enode-id'] == obj['enode']) {
                        obj['time'] = element['latency'] + " ms";
                    }
                }
            }
        }, function (err) {
            //console.log("Error occured", err);
        });
    };
    DashboardComponent.prototype.isShowCont = function (isActive) {
        // if (isActive == 'getBlocks') {
        //   this.isSelected = 'blockClass';
        //   this.isBlocks = true;
        //   this.isNodeData = false;
        // } else {
        //   if (isActive == 'nodeManager') {
        //     this.isSelected = 'nodeClass';
        //     this.isNodeData = true;
        //     this.isBlocks = false;
        //   }
        // }
        switch (isActive) {
            case 'getBlocks':
                this.isSelected = 'blockClass';
                this.isBlocks = true;
                this.isNodeData = false;
                this.isIpBlock = false;
                break;
            case 'nodeManager':
                this.isSelected = 'nodeClass';
                this.isNodeData = true;
                this.isBlocks = false;
                this.isIpBlock = false;
                break;
            case 'ipBlocks':
                this.isSelected = 'ipClass';
                this.isNodeData = false;
                this.isBlocks = false;
                this.isIpBlock = true;
                this.getContractList();
                break;
        }
    };
    DashboardComponent.prototype.getContractList = function () {
        var _this = this;
        this._CommonService.getContractList().subscribe(function (data) {
            _this.contractListData = data.json();
            console.log('---contractListData ---', _this.contractListData);
        });
    };
    DashboardComponent.prototype.getNodeDetailist = function (_NodeKey) {
        var _this = this;
        this._CommonService.nodeDetail(_NodeKey).subscribe(function (data) {
            _this.getNodeInfoDetails = data.json();
            //console.log('---getNodeInfoDetails ---', this.getNodeInfoDetails);
        });
    };
    DashboardComponent.prototype.getNodeDetails = function (item) {
        var _this = this;
        //console.log('item onClick', item);
        if (item.self == 'true' && item.active == 'true') {
            this.display = true;
            this.display2 = false;
            this._CommonService.peerDetails().subscribe(function (result) {
                _this.getPeerDetails = result.json();
                _this.getPeerDetails['role'] = item.role;
                ////console.log(' this.getPeerDetails>>>>>>', this.getPeerDetails);
            }, function (err) {
                //console.log("Error occured", err);
            });
        }
        else {
            if (item.active == 'true') {
                this.display2 = true;
                this.display = false;
                this.getNodeDetailist(item.enode);
                ////console.log(' item.enode>>>>>>', item.enode);
            }
        }
    };
    DashboardComponent.prototype.closeFlag = function ($event) {
        this.display = $event;
        this.display2 = $event;
        this.display3 = $event;
        //console.log('closeFlag >>>>>>>>>>', this.display)
    };
    DashboardComponent.prototype.getChartDataList = function () {
        var _this = this;
        this._CommonService.getChartData().subscribe(function (result) {
            _this.ChartData = result.json();
            for (var _i = 0, _a = _this.ChartData; _i < _a.length; _i++) {
                var key = _a[_i];
                //this.timeStamp.push(this.changeTimeformat(key.timeStamp));
                _this.transactionCount.push(key.transactionCount);
                _this.blockCount.push(key.blockCount);
                _this.timeArr.push(_this.showTime(key.timeStamp));
                //console.log('this.timeStamp>>>>>>>', key.timeStamp);
                //console.log('this.timeArr>>>', this.timeArr);
            }
            _this.chartMapData();
            _this.cd.detectChanges();
            _this.cd.markForCheck();
            //console.log('this.timeStamp>>>>>>>', this.timeStamp)
            //console.log('this.ChartData>>>>>>>', this.ChartData)
        }, function (err) {
            //console.log("Error occured", err);
        });
    };
    DashboardComponent.prototype.showTime = function (timeStamp) {
        timeStamp = new Date(timeStamp);
        var hours = timeStamp.getHours() % 12 || 12;
        var minutes = timeStamp.getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        var finalTime = hours + ':' + minutes;
        return finalTime;
    };
    DashboardComponent.prototype.chartMapData = function () {
        this.data = {
            labels: this.timeArr.slice(-10),
            datasets: [
                {
                    label: 'Blocks',
                    backgroundColor: '#e6b800',
                    //borderColor: '#cc9900',
                    data: this.blockCount.slice(-10)
                },
                {
                    label: 'Transactions',
                    backgroundColor: '#e6b800',
                    //borderColor: '#cc9900',
                    data: this.transactionCount.slice(-10)
                }
            ],
        };
        //console.log('this.blockCount,  this.timeArr==============', this.blockCount, this.timeArr);
        this.options = {
            maintainAspectRatio: false,
            scaleShowLabels: false,
            legend: {
                display: true,
                //position: 'left',
                fullWidth: true,
                labels: {
                    fontColor: '#fff',
                    boxWidth: 15
                }
            },
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 25
                }
            },
            scales: {
                xAxes: [{
                        barPercentage: 0.6,
                        borderColor: 'none',
                        ticks: {
                            autoSkip: false,
                            beginAtZero: true,
                            maxRotation: 0,
                            minRotation: 0,
                            fontColor: '#fff',
                            fontSize: 9
                        }
                    }],
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontColor: '#fff',
                            fontSize: 9,
                            callback: function (value, index, values) {
                                if (Math.floor(value) === value) {
                                    return value;
                                }
                            }
                        }
                        // display: false
                    }]
            },
            animation: {
                duration: 0
            }
        };
    };
    DashboardComponent.prototype.uploadABIModal = function (data, flag) {
        this.contractAbi = data;
        this.contractAbiDisplay = true;
        this.contractFlag = flag;
    };
    DashboardComponent.prototype.closeEventABI = function (event) {
        var _this = this;
        console.log(event);
        this.contractAbiDisplay = false;
        if (event.msg) {
            this.getContractList();
            this.msgs.push({ severity: 'success', summary: event.msg });
            setTimeout(function () {
                _this.msgs = [];
            }, 3000);
        }
    };
    DashboardComponent.prototype.getContractCount = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(0, this.serviceCallInterval * 1000)
            .takeWhile(function () { return _this.alive; })
            .subscribe(function () {
            _this._CommonService.getContractCount().subscribe(function (data) {
                console.log(data.json());
                _this.contractCount = data.json();
                if (_this.totalContracts != _this.contractCount.totalContracts && _this.isIpBlock) {
                    _this.getContractList();
                }
                _this.totalContracts = _this.contractCount.totalContracts;
            });
        });
    };
    DashboardComponent.prototype.showAbiDetails = function () {
        console.log("Inside");
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.messageService.clearMessage();
        //console.log('Destroy in dashboard')
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_3__service_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_2__service_utility_service__["a" /* UtilityService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_dialog__ = __webpack_require__("./node_modules/primeng/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_infinite_scroll__ = __webpack_require__("./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_OrderByPipe_OrderByModule__ = __webpack_require__("./src/app/components/shared/OrderByPipe/OrderByModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__hash_block_hash_block_component__ = __webpack_require__("./src/app/components/dashboard/hash-block/hash-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__transcation_block_transcation_block_component__ = __webpack_require__("./src/app/components/dashboard/transcation-block/transcation-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__info_overlay_info_overlay_component__ = __webpack_require__("./src/app/components/dashboard/info-overlay/info-overlay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contract_abi_deployment_contract_abi_deployment_component__ = __webpack_require__("./src/app/components/dashboard/contract-abi-deployment/contract-abi-deployment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_odometer__ = __webpack_require__("./node_modules/ng2-odometer/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_odometer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_odometer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_search_pipe__ = __webpack_require__("./src/app/components/dashboard/dashboard-search-pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// import { CommonServiceService } from "../../service/common-service.service";
// import { MessageService } from '../../service/message.service';
// import { StatisticsGraphComponent } from './statistics-graph/statistics-graph.component';
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_6__angular_router__["RouterModule"], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["ReactiveFormsModule"], __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["AccordionModule"], __WEBPACK_IMPORTED_MODULE_8_ngx_infinite_scroll__["a" /* InfiniteScrollModule */], __WEBPACK_IMPORTED_MODULE_5_primeng_dialog__["DialogModule"], __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["GrowlModule"], __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ChartModule"], __WEBPACK_IMPORTED_MODULE_15_ng2_odometer__["Ng2OdometerModule"], __WEBPACK_IMPORTED_MODULE_9__shared_OrderByPipe_OrderByModule__["a" /* OrderByModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_16__dashboard_search_pipe__["a" /* SearchKeywordPipe */], __WEBPACK_IMPORTED_MODULE_10__dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_11__hash_block_hash_block_component__["a" /* HashBlockComponent */], __WEBPACK_IMPORTED_MODULE_12__transcation_block_transcation_block_component__["a" /* TranscationBlockComponent */], __WEBPACK_IMPORTED_MODULE_13__info_overlay_info_overlay_component__["a" /* InfoOverlayComponent */], __WEBPACK_IMPORTED_MODULE_14__contract_abi_deployment_contract_abi_deployment_component__["a" /* ContractAbiDeploymentComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_10__dashboard_component__["a" /* DashboardComponent */]],
            //providers: [CommonServiceService, MessageService],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/hash-block/hash-block.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"block-list-inner\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n            <table class=\"table toptable\">\r\n                <tr>\r\n                    <td class=\"parentHash\">\r\n                        <div class=\"item\">\r\n                            <span>ParentHash</span>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"parentDetail\">\r\n                        <div class=\"item\">\r\n                            <span title=\"{{BlockDetails?.parentHash}}\">{{BlockDetails?.parentHash || '--'}}</span>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 col-sm-6\">\r\n                <table class=\"table bottable\">\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Nonce</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{BlockDetails?.nonce}}\">{{BlockDetails?.nonce || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Logs Bloom</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{BlockDetails?.logsBloom}}\">{{BlockDetails?.logsBloom || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>State Root</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{BlockDetails?.stateRoot}}\">{{BlockDetails?.stateRoot || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Difficulty</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{BlockDetails?.difficulty}}\">{{BlockDetails?.difficulty || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Extra Data</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{BlockDetails?.extraData}}\">{{BlockDetails?.extraData || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Gas Limit</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{BlockDetails?.gasLimit}}\">{{BlockDetails?.gasLimit || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Timestamp</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{BlockDetails?.timestamp}}\">{{BlockDetails?.timestamp || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n\r\n                    <!--tr>\r\n            <td colspan=\"2\" class=\"transaction-title col-md-12\">Transactions (Array)</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"col-md-4\">\r\n              <span>Block Hash</span>\r\n            </td>\r\n            <td class=\"col-md-8\">\r\n              <span>{{BlockDetails?.transactions[0]?.blockHash || '--'}}</span>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"col-md-4\">\r\n              <span>From</span>\r\n            </td>\r\n            <td class=\"col-md-8\">\r\n              <span>{{BlockDetails?.transactions[0]?.from || '--'}}</span>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"col-md-4\">\r\n              <span>Gas Price</span>\r\n            </td>\r\n            <td class=\"col-md-8\">\r\n              <span>{{BlockDetails?.transactions[0]?.gasPrice || '0'}}</span>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"col-md-4\">\r\n              <span>Input</span>\r\n            </td>\r\n            <td class=\"col-md-8\">\r\n              <span>{{BlockDetails?.transactions[0]?.input || '--'}}</span>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"col-md-4\">\r\n              <span>To</span>\r\n            </td>\r\n            <td class=\"col-md-8\">\r\n              <span>{{BlockDetails?.transactions[0]?.to || '--'}}</span>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"col-md-4\">\r\n              <span>Value</span>\r\n            </td>\r\n            <td class=\"col-md-8\">\r\n              <span>{{BlockDetails?.transactions[0]?.v || '--'}}</span>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"col-md-4\">\r\n              <span>R</span>\r\n            </td>\r\n            <td class=\"col-md-8\">\r\n              <span>{{BlockDetails?.transactions[0]?.r || '--'}}</span>\r\n            </td>\r\n          </tr-->\r\n                </table>\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6\">\r\n                <table class=\"table\">\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Sha3Uncles</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{BlockDetails?.sha3Uncles}}\">{{BlockDetails?.sha3Uncles || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Transactions Root</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{BlockDetails?.transactionsRoot}}\">{{BlockDetails?.transactionsRoot || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Miner</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{BlockDetails?.miner}}\">{{BlockDetails?.miner || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Total Difficulty</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{BlockDetails?.totalDifficulty}}\">{{BlockDetails?.totalDifficulty || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Size</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{BlockDetails?.size}}\">{{BlockDetails?.size || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Gas Used</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{BlockDetails?.gasUsed}}\">{{BlockDetails?.gasUsed || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Uncles</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{BlockDetails?.sha3Uncles}}\">{{BlockDetails?.sha3Uncles || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"2\" class=\"col-md-12\">&nbsp;</td>\r\n                    </tr>\r\n                    <!--tr>\r\n            <td class=\"col-md-4\">\r\n              <span>Block Number</span>\r\n            </td>\r\n            <td class=\"col-md-8\">\r\n              <span>{{BlockDetails?.transactions[0]?.blockNumber || '--'}}</span>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"col-md-4\">\r\n              <span>Gas</span>\r\n            </td>\r\n            <td class=\"col-md-8\">\r\n              <span>{{BlockDetails?.transactions[0]?.gas || '--'}}</span>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"col-md-4\">\r\n              <span>Hash</span>\r\n            </td>\r\n            <td class=\"col-md-8\">\r\n              <span>{{BlockDetails?.transactions[0]?.hash || '--'}}</span>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"col-md-4\">\r\n              <span>Nonce</span>\r\n            </td>\r\n            <td class=\"col-md-8\">\r\n              <span>{{BlockDetails?.transactions[0]?.nonce || '--'}}</span>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"col-md-4\">\r\n              <span>Transaction Index</span>\r\n            </td>\r\n            <td class=\"col-md-8\">\r\n              <span>{{BlockDetails?.transactions[0]?.transactionIndex || '0'}}</span>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"col-md-4\">\r\n              <span>V</span>\r\n            </td>\r\n            <td class=\"col-md-8\">\r\n              <span>{{BlockDetails?.transactions[0]?.v || '--'}}</span>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"col-md-4\">\r\n              <span>S</span>\r\n            </td>\r\n            <td class=\"col-md-8\">\r\n              <span>{{BlockDetails?.transactions[0]?.s || '--'}}</span>\r\n            </td>\r\n          </tr-->\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/hash-block/hash-block.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/hash-block/hash-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HashBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HashBlockComponent = /** @class */ (function () {
    function HashBlockComponent() {
    }
    HashBlockComponent.prototype.ngOnInit = function () {
    };
    HashBlockComponent.prototype.ngOnChanges = function (changes) {
        // if (this.BlockDetails) {
        //   console.log('this.BlockDetails.number >>>',changes.BlockDetails);
        // }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HashBlockComponent.prototype, "getBlocks", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HashBlockComponent.prototype, "BlockDetails", void 0);
    HashBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hash-block',
            template: __webpack_require__("./src/app/components/dashboard/hash-block/hash-block.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/hash-block/hash-block.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HashBlockComponent);
    return HashBlockComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/info-overlay/info-overlay.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\r\n<div class=\"p-dialog-wrapper\">\r\n    <p-dialog [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" [width]=\"650\" [height]=\"580\" [minWidth]=\"200\" draggable=\"true\" closeOnEscape=\"true\" dismissableMask=\"true\" (onHide)=\"onClose()\">\r\n\r\n        <p-header class=\"header\">\r\n            <h2>Connected Node Info</h2>\r\n        </p-header>\r\n        <div class=\"p-dialog-inner\">\r\n            <div class=\"row mar\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Search Result</h3>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <table class=\"table\">\r\n                        <tr>\r\n                            <td colspan=\"2\" class=\"col-md-12 formRow\">\r\n                                <form #f=\"ngForm\" novalidate (ngSubmit)=\"updateNodeSubmitData(f.value)\" autocomplete=\"off\">\r\n                                    <button type=\"submit\" class=\"btn btn-green\">Save</button>\r\n                                    <table class=\"table\">\r\n                                        <tr>\r\n                                            <td class=\"col-md-6 bdrR\">\r\n                                                <strong>Name</strong>\r\n                                                <br />\r\n                                                <input type=\"text\" name=\"name\" readonly [(ngModel)]=\"listItem.nodeName\" #name=\"ngModel\">\r\n                                            </td>\r\n                                            <td class=\"col-md-6\">\r\n                                                <strong>Role</strong>\r\n                                                <br />\r\n                                                <input type=\"text\" name=\"role\" class=\"input-txt-yellow\" [(ngModel)]=\"listItem.role\" #role=\"ngModel\">\r\n                                            </td>\r\n                                        </tr>\r\n                                    </table>\r\n                                </form>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"col-md-6\">\r\n                                <strong>Raft Role</strong>\r\n                                <br />\r\n                                <span>{{listItem?.raftRole}}</span>\r\n                            </td>\r\n                            <td class=\"col-md-6\">\r\n                                <strong>Raft ID</strong>\r\n                                <br />\r\n                                <span>{{listItem?.raftID}}</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"col-md-6\">\r\n                                <strong>Block Number</strong>\r\n                                <br />\r\n                                <span>{{listItem?.blockNumber}}</span>\r\n                            </td>\r\n                            <td class=\"col-md-6\">\r\n                                <strong>Pending Transaction Count</strong>\r\n                                <br />\r\n                                <span>{{listItem?.pendingTxCount}}</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td colspan=\"2\" class=\"col-md-12\">\r\n                                <strong>Genesis</strong>\r\n                                <br>\r\n                                <textarea row=\"3\" class=\"w100per\" readonly>{{listItem?.genesis}}</textarea>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td colspan=\"2\" class=\"col-md-12\">\r\n                                <h4>Admin Info</h4>\r\n                                <table class=\"table\">\r\n                                    <tr>\r\n                                        <td class=\"col-md-6\">\r\n                                            <strong>ID</strong>\r\n                                            <br>\r\n                                            <span class=\"ellipsis w260\">{{listItem?.adminInfo?.id}}</span>\r\n                                        </td>\r\n                                        <td class=\"col-md-6\">\r\n                                            <strong>Name</strong>\r\n                                            <br>\r\n                                            <span class=\"ellipsis w260\">{{listItem?.adminInfo?.name}}</span>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"col-md-6\">\r\n                                            <strong>Enode</strong>\r\n                                            <br>\r\n                                            <span class=\"ellipsis w260\">{{listItem?.adminInfo?.enode}}</span>\r\n                                        </td>\r\n                                        <td class=\"col-md-6\">\r\n                                            <strong>IP</strong>\r\n                                            <br>\r\n                                            <span>{{listItem?.adminInfo?.ip}}</span>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"col-md-6\">\r\n                                            <strong>Port</strong>\r\n                                            <br>\r\n                                            <span>Discovery: {{listItem?.adminInfo?.ports?.discovery}}</span>\r\n                                        </td>\r\n                                        <td class=\"col-md-6\">\r\n                                            <strong>&nbsp;</strong>\r\n                                            <br>\r\n                                            <span>Listener: {{listItem?.adminInfo?.ports?.listener}}</span>\r\n                                        </td>\r\n                                    </tr>\r\n\r\n                                    <tr>\r\n                                        <td colspan=\"2\" class=\"col-md-12\">\r\n                                            <strong>Listen Address</strong>\r\n                                            <br>\r\n                                            <span>{{listItem?.adminInfo?.listenAddr}}</span>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"col-md-6\">\r\n                                            <strong>Eth</strong>\r\n                                            <br>\r\n                                            <span class=\"ellipsis w260\">Network: {{listItem?.adminInfo?.protocols?.eth?.network}}</span>\r\n                                            <br>\r\n                                            <span class=\"ellipsis w260\">Genesis : {{listItem?.adminInfo?.protocols?.eth?.genesis}}</span>\r\n                                        </td>\r\n                                        <td class=\"col-md-6\">\r\n                                            <strong></strong>\r\n                                            <br>\r\n                                            <span>Difficulty : 262144</span>\r\n                                            <br>\r\n                                            <span class=\"ellipsis w260\">Head : {{listItem?.adminInfo?.protocols?.eth?.head}}</span>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </p-dialog>\r\n\r\n    <p-dialog [(visible)]=\"display2\" modal=\"modal\" [responsive]=\"true\" [width]=\"650\" [height]=\"415\" [minWidth]=\"200\" draggable=\"true\" closeOnEscape=\"true\" dismissableMask=\"true\" (onHide)=\"onClose()\" class=\"peer-information\">\r\n        <p-header class=\"header\">\r\n            <h2>Peer Information</h2>\r\n        </p-header>\r\n        <div class=\"p-dialog-inner\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Search Result</h3>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <table class=\"table\">\r\n                        <tr>\r\n                            <td class=\"col-md-6\">\r\n                                <strong>ID</strong>\r\n                                <br />\r\n                                <span class=\"ellipsis w260\">{{listItem2?.id}}</span>\r\n                            </td>\r\n                            <td class=\"col-md-6\">\r\n                                <strong>Name</strong>\r\n                                <br />\r\n                                <span class=\"ellipsis w260\">{{listItem2?.name}}</span>\r\n                            </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                            <td colspan=\"2\" class=\"col-md-12\">\r\n                                <strong>Caps (String Array)</strong>\r\n                                <br>\r\n                                <span class=\"ellipsis w565\">{{listItem2?.caps[0]}}</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td colspan=\"2\" class=\"col-md-12\">\r\n                                <h4>Network</h4>\r\n                                <table class=\"table\">\r\n                                    <tr>\r\n                                        <td class=\"col-md-6\">\r\n                                            <strong>Local Address</strong>\r\n                                            <br>\r\n                                            <span class=\"ellipsis w260\">{{listItem2?.network?.localAddress}}</span>\r\n                                        </td>\r\n                                        <td class=\"col-md-6\">\r\n                                            <strong>Remote Address</strong>\r\n                                            <br>\r\n                                            <span class=\"ellipsis w260\">{{listItem2?.network?.remoteAddress}}</span>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"col-md-6\">\r\n                                            <strong>Eth</strong>\r\n                                            <br>\r\n                                            <span class=\"ellipsis w260\">Version: {{listItem2?.protocols?.eth?.version}}</span>\r\n                                        </td>\r\n                                        <td class=\"col-md-6\">\r\n                                            <strong>&nbsp;</strong>\r\n                                            <br>\r\n                                            <span class=\"ellipsis w260\">Head: {{listItem2?.protocols?.eth?.head}}</span>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </p-dialog>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/info-overlay/info-overlay.component.scss":
/***/ (function(module, exports) {

module.exports = "/*Custom Fonts*/\n/*Fonts Colors*/\n/*media queries*/\n/*\r\n$point: Breakpoint integer in px\r\n$constraint: Constraint for media query (min/max)\r\n$feature: Media feature of query (width/height)\r\n*/\n@font-face {\n  font-family: 'Heebo-Bold';\n  src: url(\"/assets/fonts/heebo-bold.eot\");\n  src: url(\"/assets/fonts/heebo-bold.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-bold.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-bold.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-bold.svg#heebo-bold\") format(\"svg\"), url(\"/assets/fonts/heebo-bold.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'Heebo-Light';\n  src: url(\"/assets/fonts/heebo-light.eot\");\n  src: url(\"/assets/fonts/heebo-light.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-light.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-light.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-light.svg#heebo-light\") format(\"svg\"), url(\"/assets/fonts/heebo-light.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'Heebo-Regular';\n  src: url(\"/assets/fonts/heebo-regular.eot\");\n  src: url(\"/assets/fonts/heebo-regular.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-regular.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-regular.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-regular.svg#heebo-regular\") format(\"svg\"), url(\"/assets/fonts/heebo-regular.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'Heebo-Medium';\n  src: url(\"/assets/fonts/heebo-medium.eot\");\n  src: url(\"/assets/fonts/heebo-medium.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-medium.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-medium.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-medium.svg#heebo-medium\") format(\"svg\"), url(\"/assets/fonts/heebo-medium.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n.p-dialog-wrapper .p-dialog-inner {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  height: 475px;\n  scroll-behavior: smooth;\n  padding-right: 8px; }\n.p-dialog-wrapper .p-dialog-inner::-webkit-scrollbar {\n    width: 4px;\n    height: 5px;\n    border-radius: 6px; }\n.p-dialog-wrapper .p-dialog-inner::-webkit-scrollbar-track {\n      background-color: #464646;\n      border-radius: 6px; }\n.p-dialog-wrapper .p-dialog-inner::-webkit-scrollbar-thumb {\n      background-color: #797979;\n      border-radius: 6px; }\n.p-dialog-wrapper .p-dialog-inner::-webkit-scrollbar-button {\n      display: none; }\n.p-dialog-wrapper .p-dialog-inner .mar {\n    padding-top: 25px; }\n.p-dialog-wrapper .peer-information .p-dialog-inner {\n  height: 321px; }\n.p-dialog-wrapper .ui-widget-content {\n  padding: 12px !important; }\n.p-dialog-wrapper .ui-widget-content .header {\n    padding: 0 0 5px 0;\n    display: block;\n    overflow: hidden; }\n.p-dialog-wrapper .ui-widget-content .header h2 {\n      font-family: \"Heebo-Medium\";\n      font-size: 14px;\n      letter-spacing: 0.5px;\n      color: #313131;\n      text-transform: uppercase;\n      padding: 17px 0 0 12px; }\n.p-dialog-wrapper .ui-widget-content .ui-widget-header {\n    background: none;\n    padding: 0; }\n.p-dialog-wrapper .ui-widget-content .ui-widget-header .ui-dialog-title {\n      float: left;\n      width: 85%; }\n.p-dialog-wrapper .ui-widget-content .ui-widget-header .ui-dialog-titlebar-close {\n      float: right;\n      margin: 12px 1px 0 0; }\n.p-dialog-wrapper .ui-widget-content h3 {\n    font-family: \"Heebo-Bold\";\n    font-size: 16px;\n    color: #313131; }\n.p-dialog-wrapper .ui-widget-content table {\n    border: 1px solid #dee2e6;\n    margin-bottom: 0; }\n.p-dialog-wrapper .ui-widget-content table td {\n      border: 1px solid #dee2e6;\n      border-collapse: collapse;\n      padding: 5px 10px;\n      width: 50%; }\n.p-dialog-wrapper .ui-widget-content table td.formRow {\n        padding: 0;\n        position: relative; }\n.p-dialog-wrapper .ui-widget-content table td.formRow .btn-green {\n          position: absolute;\n          right: 0;\n          top: -45px;\n          font-size: 12px;\n          font-weight: 600;\n          padding: 8px 25px; }\n.p-dialog-wrapper .ui-widget-content table td.formRow .table {\n          border: 0; }\n.p-dialog-wrapper .ui-widget-content table td.formRow .table td {\n            border: 0; }\n.p-dialog-wrapper .ui-widget-content table td.formRow .table td input[type=\"text\"] {\n              width: 100%;\n              padding: 5px;\n              font-family: \"Heebo-Regular\";\n              color: #9b9b9b;\n              font-size: 13px;\n              border: 1px solid #dee2e6; }\n.p-dialog-wrapper .ui-widget-content table td.formRow .table td.bdrR {\n              border-right: 1px solid #dee2e6; }\n.p-dialog-wrapper .ui-widget-content table td strong {\n        font-family: \"Heebo-Regular\";\n        color: #535353;\n        font-size: 14px; }\n.p-dialog-wrapper .ui-widget-content table td span {\n        font-family: \"Heebo-Regular\";\n        color: #9b9b9b;\n        font-size: 13px; }\n.p-dialog-wrapper .ui-widget-content table td .col-md-6 {\n        width: 50%; }\n.p-dialog-wrapper .ui-widget-content table td h4 {\n        font-family: \"Heebo-Medium\";\n        color: #303649;\n        font-size: 14px;\n        padding: 10px 0 3px 0; }\n.p-dialog-wrapper .ui-widget-content table td .ellipsis {\n        text-overflow: ellipsis;\n        display: inline-block;\n        overflow: hidden;\n        white-space: nowrap; }\n.p-dialog-wrapper .ui-widget-content table td .ellipsis.w565 {\n          width: 565px; }\n.p-dialog-wrapper .ui-widget-content table td .ellipsis.w260 {\n          width: 260px; }\n.p-dialog-wrapper .ui-widget-content table td .w100per {\n        width: 100%;\n        font-family: \"Heebo-Regular\";\n        color: #9b9b9b;\n        font-size: 13px; }\n.input-txt-yellow {\n  background: #faffb9; }\n"

/***/ }),

/***/ "./src/app/components/dashboard/info-overlay/info-overlay.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoOverlayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__("./src/app/service/common-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoOverlayComponent = /** @class */ (function () {
    function InfoOverlayComponent(_CommonService) {
        this._CommonService = _CommonService;
        this.showEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InfoOverlayComponent.prototype.onClose = function () {
        this.showEvent.emit(false);
    };
    InfoOverlayComponent.prototype.ngOnInit = function () { };
    InfoOverlayComponent.prototype.updateNodeSubmitData = function (data) {
        var _this = this;
        console.log('data>>>>', data);
        var params = {
            nodeName: data.name,
            role: data.role
        };
        this._CommonService.updateNode(params).subscribe(function (data) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Node Name and Role has been updated successfully' });
            console.log('this.msgs.....>', _this.msgs);
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '', detail: 'Node Name and Role update Failed!' });
            console.log('error', error);
        });
    };
    // Work against memory leak if component is destroyed
    InfoOverlayComponent.prototype.ngOnDestroy = function () {
        this.showEvent.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InfoOverlayComponent.prototype, "display", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InfoOverlayComponent.prototype, "display2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InfoOverlayComponent.prototype, "listItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InfoOverlayComponent.prototype, "listItem2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], InfoOverlayComponent.prototype, "showEvent", void 0);
    InfoOverlayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-info-overlay',
            template: __webpack_require__("./src/app/components/dashboard/info-overlay/info-overlay.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/info-overlay/info-overlay.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */]])
    ], InfoOverlayComponent);
    return InfoOverlayComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/transcation-block/transcation-block.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"block-list-inner\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n            <table class=\"table toptable\">\r\n                <tr>\r\n                    <td class=\"parentHash\">\r\n                        <div class=\"item\">\r\n                            <span>BlockHash</span>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"parentDetail\">\r\n                        <div class=\"item\">\r\n                            <span title=\"{{TxNDetails?.blockHash}}\">{{TxNDetails?.blockHash || '--'}}</span>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 col-sm-6\">\r\n                <table class=\"table bottable\">\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Block Number</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{TxNDetails?.blockNumber}}\">{{TxNDetails?.blockNumber || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Input</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{TxNDetails?.input}}\">{{TxNDetails?.input || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Contract Address</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{TxNDetails?.contractAddress}}\">{{TxNDetails?.contractAddress || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Cumulative Gas Used</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{TxNDetails?.cumulativeGasUsed}}\">{{TxNDetails?.cumulativeGasUsed || '0'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Nonce</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{TxNDetails?.nonce}}\">{{TxNDetails?.nonce || '0'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>From</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{TxNDetails?.from}}\">{{TxNDetails?.from || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Gas</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{TxNDetails?.gas}}\">{{TxNDetails?.gas || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Transaction Index</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{TxNDetails?.transactionIndex}}\">{{TxNDetails?.transactionIndex || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Value</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{TxNDetails?.value}}\">{{TxNDetails?.value || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>R</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{TxNDetails?.r}}\">{{TxNDetails?.r || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>TransactionHash</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{TxNDetails?.logs[0]?.transactionHash}}\">{{TxNDetails?.logs[0]?.transactionHash || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>TransactionIndex</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{TxNDetails?.logs[0]?.transactionIndex}}\">{{TxNDetails?.logs[0]?.transactionIndex || '0'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6\">\r\n                <table class=\"table\">\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Transaction Hash</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{TxNDetails?.transactionHash}}\">{{TxNDetails?.transactionHash || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Logsbloom</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{TxNDetails?.logsBloom}}\">{{TxNDetails?.logsBloom || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Root</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{TxNDetails?.root}}\">{{TxNDetails?.root || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>To</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{TxNDetails?.to}}\">{{TxNDetails?.to || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Gas Price</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{TxNDetails?.gasPrice}}\">{{TxNDetails?.gasPrice || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Gas Used</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{TxNDetails?.gasUsed}}\">{{TxNDetails?.gasUsed || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n\r\n\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Transaction Type</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{TxNDetails?.transactionType}}\">{{TxNDetails?.transactionType || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>V</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{TxNDetails?.v}}\">{{TxNDetails?.v || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>S</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{TxNDetails?.s}}\">{{TxNDetails?.s || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"2\" class=\"col-md-12\">&nbsp;</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Log Index</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{TxNDetails?.logs[0]?.logIndex}}\">{{TxNDetails?.logs[0]?.logIndex || '0'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Topics</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{TxNDetails?.logs[0]?.topics[0]}}\">{{TxNDetails?.logs[0]?.topics[0] || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n            <table class=\"table bottable table-logs\" *ngIf=\"TxNDetails?.logs?.length > 0\">\r\n                <tr>\r\n                    <td colspan=\"2\" class=\"transaction-title col-md-12\">Logs</td>\r\n                </tr>\r\n                <tbody *ngFor=\"let logItem of TxNDetails?.logs\">\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Address</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{logItem?.address}}\">{{logItem?.address || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Block Hash</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{logItem?.blockHash}}\">{{logItem?.blockHash || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Block Number</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{logItem?.blockNumber}}\">{{logItem?.blockNumber || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Data</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{logItem?.data}}\">{{logItem?.data || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Topics</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{logItem?.topics[0]}}\">{{logItem?.topics[0] || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Transaction Hash</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{logItem?.transactionHash}}\">{{logItem?.transactionHash || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-md-4\">\r\n                            <div class=\"item\">\r\n                                <span>Transaction Index</span>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-md-8\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{logItem?.transactionIndex}}\">{{logItem?.transactionIndex || '--'}}</span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n\r\n            </table>\r\n            <div class=\"col-md-12 col-sm-12 decoded-inputs-column\">\r\n                <div class=\"function-icon-title\" *ngIf=\"TxNDetails?.functionDetails\">\r\n                    <span class=\"icon-function\">&nbsp;</span> {{TxNDetails?.functionDetails}}\r\n                </div>\r\n                <div class=\"function-icon-title\" *ngIf=\"TxNDetails?.decodeFailed\" [ngClass]=\"TxNDetails?.decodeFailed.type\">{{TxNDetails?.decodeFailed.label}}</div>\r\n                <p-accordion *ngIf=\"TxNDetails?.functionDetails\">\r\n                    <p-accordionTab header=\"Decoded Inputs\" [selected]=\"false\">\r\n                        <div class=\"item-col-2\" *ngFor=\"let inputItem of TxNDetails?.decodedInputs\">\r\n                            <div class=\"item\">\r\n                                <span title=\"{{inputItem?.key}}\">{{inputItem?.key}}</span>\r\n                            </div>\r\n                            <div class=\"item\">\r\n                                <span title=\"{{inputItem?.value}}\">{{checkType(inputItem.value)}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"item-col-2\" *ngIf=\"TxNDetails?.decodedInputs?.length == 1\">\r\n                            <div class=\"item\">\r\n                                <span>&nbsp;</span>\r\n                            </div>\r\n                        </div>\r\n                    </p-accordionTab>\r\n\r\n                </p-accordion>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/transcation-block/transcation-block.component.scss":
/***/ (function(module, exports) {

module.exports = ".table-logs tbody + tbody {\n  border: none; }\n\n.table-logs td.col-md-4 {\n  width: 25% !important; }\n\n.table-logs td.col-md-8 {\n  width: 75% !important; }\n\n.table-logs td.col-md-8 .item span {\n    width: 300px !important; }\n\n.function-icon-title {\n  color: #fff;\n  font-size: 16px;\n  margin-bottom: 10px; }\n\n.function-icon-title.red {\n    color: #e6b800; }\n\n.function-icon-title.yellow {\n    color: #e6b800; }\n"

/***/ }),

/***/ "./src/app/components/dashboard/transcation-block/transcation-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranscationBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TranscationBlockComponent = /** @class */ (function () {
    //@Input() redClassBool: boolean;
    function TranscationBlockComponent() {
    }
    TranscationBlockComponent.prototype.ngOnInit = function () {
    };
    TranscationBlockComponent.prototype.checkType = function (value) {
        var result = (typeof value === 'object');
        if (result) {
            return JSON.stringify(value);
        }
        else {
            return value;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TranscationBlockComponent.prototype, "getBlocks", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TranscationBlockComponent.prototype, "TxNDetails", void 0);
    TranscationBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transcation-block',
            template: __webpack_require__("./src/app/components/dashboard/transcation-block/transcation-block.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/transcation-block/transcation-block.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TranscationBlockComponent);
    return TranscationBlockComponent;
}());



/***/ }),

/***/ "./src/app/components/field-error-display/field-error-display.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayError\">\r\n  <span class=\"glyphicon glyphicon-remove form-control-feedback fix-error-icon\"></span>\r\n  <span class=\"sr-only\">(error)</span>\r\n  <div class=\"error-msg\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/field-error-display/field-error-display.component.scss":
/***/ (function(module, exports) {

module.exports = ".error-msg {\n  color: #e6b800; }\n\n.fix-error-icon {\n  top: 27px; }\n"

/***/ }),

/***/ "./src/app/components/field-error-display/field-error-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldErrorDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FieldErrorDisplayComponent = /** @class */ (function () {
    function FieldErrorDisplayComponent() {
    }
    FieldErrorDisplayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FieldErrorDisplayComponent.prototype, "errorMsg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], FieldErrorDisplayComponent.prototype, "displayError", void 0);
    FieldErrorDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-field-error-display',
            template: __webpack_require__("./src/app/components/field-error-display/field-error-display.component.html"),
            styles: [__webpack_require__("./src/app/components/field-error-display/field-error-display.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FieldErrorDisplayComponent);
    return FieldErrorDisplayComponent;
}());



/***/ }),

/***/ "./src/app/components/network/network.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\r\n<div class=\"network-container\">\r\n  <div class=\"forms-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <p-tabView>\r\n          <p-tabPanel header=\"CREATE NETWORK\">\r\n            <form novalidate [formGroup]=\"CreateNetworkForm\" class=\"animated\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 form-group\" [ngClass]=\"displayFieldCssCreate('nodename')\">\r\n                  <label>Node Name:</label>\r\n                  <i class=\"fa fa-info-circle fa-1x icon-background1\" pTooltip=\"{{customMgs?.customMessageCreate?.nodename}}\"></i>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"nodename\">\r\n                  <span class=\"errorMsg\">{{customMgs?.customMessage?.nodename}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 form-group\" [ngClass]=\"displayFieldCssCreate('currentIP')\">\r\n                  <label>IP address:</label>\r\n                  <i class=\"fa fa-info-circle fa-1x icon-background1\" pTooltip=\"{{customMgs?.customMessageCreate?.currentIP}}\"></i>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"currentIP\">\r\n                  <span class=\"errorMsg\">{{customMgs?.customMessage?.currentIP}}</span>\r\n                </div>\r\n                <div class=\"col-md-6 form-group\" [ngClass]=\"displayFieldCssCreate('rpcPort')\">\r\n                  <label>RPC Port:</label>\r\n                  <i class=\"fa fa-info-circle fa-1x icon-background1\" pTooltip=\"{{customMgs?.customMessageCreate?.rpcPort}}\"></i>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"rpcPort\">\r\n                  <span class=\"errorMsg\">{{customMgs?.customMessage?.rpcPort}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 form-group\" [ngClass]=\"displayFieldCssCreate('whisperPort')\">\r\n                  <label>Network Listening Port:</label>\r\n                  <i class=\"fa fa-info-circle fa-1x icon-background1\" pTooltip=\"{{customMgs?.customMessageCreate?.whisperPort}}\"></i>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"whisperPort\">\r\n                  <span class=\"errorMsg\">{{customMgs?.customMessage?.whisperPort}}</span>\r\n                </div>\r\n                <div class=\"col-md-6 form-group\" [ngClass]=\"displayFieldCssCreate('constellationPort')\">\r\n                  <label>Constellation Port:</label>\r\n                  <i class=\"fa fa-info-circle fa-1x icon-background1\" pTooltip=\"{{customMgs?.customMessageCreate?.constellationPort}}\"></i>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"constellationPort\">\r\n                  <span class=\"errorMsg\">{{customMgs?.customMessage?.constellationPort}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 form-group\" [ngClass]=\"displayFieldCssCreate('raftPort')\">\r\n                  <label>Raft Port:</label>\r\n                  <i class=\"fa fa-info-circle fa-1x icon-background1\" pTooltip=\"{{customMgs?.customMessageCreate?.raftPort}}\"></i>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"raftPort\">\r\n                  <span class=\"errorMsg\">{{customMgs?.customMessage?.raftPort}}</span>\r\n                </div>\r\n                <div class=\"col-md-6 form-group\" [ngClass]=\"displayFieldCssCreate('nodeManagerPort')\">\r\n                  <label>Node Manager Port:</label>\r\n                  <i class=\"fa fa-info-circle fa-1x icon-background1\" pTooltip=\"{{customMgs?.customMessageCreate?.nodeManagerPort}}\"></i>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"nodeManagerPort\">\r\n                  <span class=\"errorMsg\">{{customMgs?.customMessage?.nodeManagerPort}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-footer\">\r\n                <div class=\"col-md-12 form-group\">\r\n                  <button type=\"submit\" (click)=\"CreateSubmit(CreateNetworkForm.value)\" class=\"btn btn-green pull-right\">SUBMIT</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </p-tabPanel>\r\n          <p-tabPanel header=\"JOIN NETWORK\">\r\n            <form novalidate [formGroup]=\"JoinNetworkForm\" class=\"animated\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 form-group\" [ngClass]=\"displayFieldCssJoin('nodename')\">\r\n                  <label>Node Name:</label>\r\n                  <i class=\"fa fa-info-circle fa-1x icon-background1\" pTooltip=\"{{customMgs?.customMessageJoin?.nodename}}\"></i>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"nodename\">\r\n                  <span class=\"errorMsg\">{{customMgs?.customMessage?.nodename}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 form-group\" [ngClass]=\"displayFieldCssJoin('masterIP')\">\r\n                  <label>Main IP address:</label>\r\n                  <i class=\"fa fa-info-circle fa-1x icon-background1\" pTooltip=\"{{customMgs?.customMessageJoin?.masterIP}}\"></i>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"masterIP\">\r\n                  <span class=\"errorMsg\">{{customMgs?.customMessage?.masterIP}}</span>\r\n                </div>\r\n                <div class=\"col-md-6 form-group\" [ngClass]=\"displayFieldCssJoin('masterNodeManagerPort')\">\r\n                  <label>Main Node Manager Port:</label>\r\n                  <i class=\"fa fa-info-circle fa-1x icon-background1\" pTooltip=\"{{customMgs?.customMessageJoin?.masterNodeManagerPort}}\"></i>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"masterNodeManagerPort\">\r\n                  <span class=\"errorMsg\">{{customMgs?.customMessage?.masterNodeManagerPort}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 form-group\" [ngClass]=\"displayFieldCssJoin('currentIP')\">\r\n                  <label>IP Address:</label>\r\n                  <i class=\"fa fa-info-circle fa-1x icon-background1\" pTooltip=\"{{customMgs?.customMessageJoin?.currentIP}}\"></i>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"currentIP\">\r\n                  <span class=\"errorMsg\">{{customMgs?.customMessage?.currentIP}}</span>\r\n                </div>\r\n                <div class=\"col-md-6 form-group\" [ngClass]=\"displayFieldCssJoin('rpcPort')\">\r\n                  <label>RPC Port:</label>\r\n                  <i class=\"fa fa-info-circle fa-1x icon-background1\" pTooltip=\"{{customMgs?.customMessageJoin?.rpcPort}}\"></i>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"rpcPort\">\r\n                  <span class=\"errorMsg\">{{customMgs?.customMessage?.rpcPort}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 form-group\" [ngClass]=\"displayFieldCssJoin('whisperPort')\">\r\n                  <label>Network Listening Port:</label>\r\n                  <i class=\"fa fa-info-circle fa-1x icon-background1\" pTooltip=\"{{customMgs?.customMessageJoin?.whisperPort}}\"></i>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"whisperPort\">\r\n                  <span class=\"errorMsg\">{{customMgs?.customMessage?.whisperPort}}</span>\r\n                </div>\r\n                <div class=\"col-md-6 form-group\" [ngClass]=\"displayFieldCssJoin('constellationPort')\">\r\n                  <label>Constellation Port:</label>\r\n                  <i class=\"fa fa-info-circle fa-1x icon-background1\" pTooltip=\"{{customMgs?.customMessageJoin?.constellationPort}}\"></i>\r\n                  <input type=\"email\" class=\"form-control\" formControlName=\"constellationPort\">\r\n                  <span class=\"errorMsg\">{{customMgs?.customMessage?.constellationPort}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 form-group\" [ngClass]=\"displayFieldCssJoin('raftPort')\">\r\n                  <label>Raft Port:</label>\r\n                  <i class=\"fa fa-info-circle fa-1x icon-background1\" pTooltip=\"{{customMgs?.customMessageJoin?.raftPort}}\"></i>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"raftPort\">\r\n                  <span class=\"errorMsg\">{{customMgs?.customMessage?.raftPort}}</span>\r\n                </div>\r\n                <div class=\"col-md-6 form-group\" [ngClass]=\"displayFieldCssJoin('nodeManagerPort')\">\r\n                  <label>Node Manager Port:</label>\r\n                  <i class=\"fa fa-info-circle fa-1x icon-background1\" pTooltip=\"{{customMgs?.customMessageJoin?.nodeManagerPort}}\"></i>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"nodeManagerPort\">\r\n                  <span class=\"errorMsg\">{{customMgs?.customMessage?.nodeManagerPort}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-footer\">\r\n                <div class=\"col-md-12 form-group\">\r\n                  <button type=\"submit\" class=\"btn btn-green pull-right\" (click)=\"JoinSubmit(JoinNetworkForm.value);\">SUBMIT</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </p-tabPanel>\r\n        </p-tabView>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/network/network.component.scss":
/***/ (function(module, exports) {

module.exports = "/*Custom Fonts*/\n/*Fonts Colors*/\n/*media queries*/\nlabel.required:after {\n  color: rgba(221, 181, 0, 0.904);\n  content: \"*\";\n  position: absolute;\n  margin-left: 5px;\n  top: 7px; }\n.network-container .has-error .form-control {\n  border-bottom-color: #e6b800; }\n.network-container .ng-invalid {\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn; }\n.errorMsg {\n  color: #e0ad02;\n  font-family: \"Heebo-Light\";\n  font-size: 11px;\n  display: none;\n  position: absolute;\n  left: 15px;\n  bottom: -11px; }\n.has-error .errorMsg {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/components/network/network.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_common_service__ = __webpack_require__("./src/app/service/common-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NetworkComponent = /** @class */ (function () {
    function NetworkComponent(fb, _CommonService, router) {
        this.fb = fb;
        this._CommonService = _CommonService;
        this.router = router;
        this.CreateNetworkForm = this.fb.group({
            nodename: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            currentIP: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            rpcPort: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            whisperPort: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            constellationPort: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            raftPort: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            nodeManagerPort: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
        });
        this.JoinNetworkForm = this.fb.group({
            nodename: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            currentIP: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            rpcPort: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            whisperPort: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            constellationPort: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            raftPort: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            nodeManagerPort: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            masterNodeManagerPort: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            masterIP: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
        });
    }
    NetworkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._CommonService.getMessages().subscribe(function (res) {
            console.log('this.res', res);
            _this.customMgs = res;
            console.log('this.customMgs', _this.customMgs);
            console.log('this.customMgs', _this.customMgs.customMessage.nodename);
        });
    };
    NetworkComponent.prototype.isFieldValidCreate = function (field) {
        return ((!this.CreateNetworkForm.get(field).valid && this.CreateNetworkForm.get(field).touched) ||
            (this.CreateNetworkForm.get(field).untouched && this.formSumitAttempt));
    };
    NetworkComponent.prototype.isFieldValidJoin = function (field) {
        return ((!this.JoinNetworkForm.get(field).valid && this.JoinNetworkForm.get(field).touched) ||
            (this.JoinNetworkForm.get(field).untouched && this.formSumitAttempt2));
    };
    NetworkComponent.prototype.displayFieldCssCreate = function (field) {
        return {
            'has-error': this.isFieldValidCreate(field),
        };
    };
    NetworkComponent.prototype.displayFieldCssJoin = function (field) {
        return {
            'has-error': this.isFieldValidJoin(field),
        };
    };
    NetworkComponent.prototype.CreateSubmit = function (data) {
        var _this = this;
        this.createInfo = data;
        console.log('this.createInfo >> ', this.createInfo);
        this.formSumitAttempt = true;
        if (this.CreateNetworkForm.valid) {
            var params = {
                "nodename": this.createInfo.nodename,
                "currentIP": this.createInfo.currentIP,
                "rpcPort": this.createInfo.rpcPort,
                "whisperPort": this.createInfo.whisperPort,
                "constellationPort": this.createInfo.constellationPort,
                "raftPort": this.createInfo.raftPort,
                "nodeManagerPort": this.createInfo.nodeManagerPort
            };
            this._CommonService.createNetwork(params).subscribe(function (data) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Network has created successfully' });
                console.log('Network has been created...');
                console.log('this.msgs.....>', _this.msgs);
                setTimeout(function (router) {
                    _this.router.navigate(["dashboard"]);
                }, 1500);
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '', detail: 'Network Creation Failed!' });
                console.log('error', error);
            });
        }
    };
    NetworkComponent.prototype.JoinSubmit = function (data) {
        var _this = this;
        this.JoinInfo = data;
        console.log('this.JoinInfo >> ', this.JoinInfo);
        this.formSumitAttempt2 = true;
        if (this.JoinNetworkForm.valid) {
            var params = {
                "nodename": this.JoinInfo.nodename,
                "currentIP": this.JoinInfo.currentIP,
                "rpcPort": this.JoinInfo.rpcPort,
                "whisperPort": this.JoinInfo.whisperPort,
                "constellationPort": this.JoinInfo.constellationPort,
                "raftPort": this.JoinInfo.raftPort,
                "nodeManagerPort": this.JoinInfo.nodeManagerPort,
                "masterNodeManagerPort": this.JoinInfo.masterNodeManagerPort,
                "masterIP": this.JoinInfo.masterIP
            };
            this._CommonService.joinNetwork(params).subscribe(function (data) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Network has joined successfully' });
                console.log('Network has joined...');
                console.log('this.msgs.....>', _this.msgs);
                setTimeout(function (router) {
                    _this.router.navigate(["dashboard"]);
                }, 1500);
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '', detail: 'Network joining Failed!' });
                console.log('error', error);
            });
        }
    };
    NetworkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'create-and-join',
            template: __webpack_require__("./src/app/components/network/network.component.html"),
            styles: [__webpack_require__("./src/app/components/network/network.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__service_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
    ], NetworkComponent);
    return NetworkComponent;
}());



/***/ }),

/***/ "./src/app/components/network/network.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return networkModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_tooltip__ = __webpack_require__("./node_modules/primeng/tooltip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__network_component__ = __webpack_require__("./src/app/components/network/network.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_tabview__ = __webpack_require__("./node_modules/primeng/tabview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_tabview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_tabview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_common_service__ = __webpack_require__("./src/app/service/common-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var networkModule = /** @class */ (function () {
    function networkModule() {
    }
    networkModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_tabview__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_tooltip__["TooltipModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["GrowlModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__network_component__["a" /* NetworkComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_6__network_component__["a" /* NetworkComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__service_common_service__["a" /* CommonService */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], networkModule);
    return networkModule;
}());



/***/ }),

/***/ "./src/app/components/shared/OrderByPipe/OrderByModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OrderByPipe_orderby_pipe__ = __webpack_require__("./src/app/components/shared/OrderByPipe/orderby.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// other imports


var OrderByModule = /** @class */ (function () {
    function OrderByModule() {
    }
    OrderByModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__OrderByPipe_orderby_pipe__["a" /* OrderByPipe */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__OrderByPipe_orderby_pipe__["a" /* OrderByPipe */]
            ]
        })
    ], OrderByModule);
    return OrderByModule;
}());



/***/ }),

/***/ "./src/app/components/shared/OrderByPipe/orderby.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, orderType) {
        // if (!orderType) {
        //     return array;
        // } else {
        console.log("Pipe is called", array);
        array.sort(function (a, b) {
            return orderType ? (a.timestamp - b.timestamp) : (b.timestamp - a.timestamp);
        });
        console.log(array);
        return array;
        // }
    };
    OrderByPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());



/***/ }),

/***/ "./src/app/components/shared/header/account-list/account-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"p-dialog-wrapper email-server-config\">\r\n  <p-dialog [(visible)]=\"displayaccount\" [modal]=\"true\" [responsive]=\"true\" [width]=\"600\" [height]=\"510\" draggable=\"true\" closeOnEscape=\"true\"\r\n    dismissableMask=\"true\" (onHide)=\"onClose()\">\r\n\r\n    <p-header class=\"header\">\r\n      <h2>Accounts</h2>\r\n    </p-header>\r\n    <div class=\"p-dialog-inner\">\r\n      <div class=\"row\">\r\n        <label class=\"col-md-4 float-left\">Create New Account:</label>\r\n        <input type=\"password\" placeholder=\"Enter Password Here\" class=\"form-control col-md-5 float-left\" [(ngModel)]=\"pwdAccount\">\r\n        <div class=\"col-md-3 float-left\">\r\n          <button type=\"button\" class=\"btn btn-green\" (click)=\"addAccount(pwdAccount)\">Submit</button>\r\n        </div>\r\n      </div>\r\n      <hr/>\r\n      <div class=\"v-scrollbar\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th>\r\n                  &nbsp;\r\n                </th>\r\n                <th>Account Address</th>\r\n                <th>Balance</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr class=\"accounts\" *ngFor=\"let account of accounts;let i = index\">\r\n                <td>\r\n                  <span title=\"{{(account?.coinbase == true) ? 'Coinbase':''}}\" [ngClass]=\"{'icon-coin': (account?.coinbase == false),'icon-coinbase':(account?.coinbase == true)}\"></span>\r\n                </td>\r\n                <td>\r\n                  <div class=\"text-overflow\" title=\"{{account.accountAddress}}\">{{account.accountAddress}}</div>\r\n                </td>\r\n                <td>{{account.balance}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </p-dialog>\r\n"

/***/ }),

/***/ "./src/app/components/shared/header/account-list/account-list.component.scss":
/***/ (function(module, exports) {

module.exports = "/*Custom Fonts*/\n/*Fonts Colors*/\n/*media queries*/\n/*\r\n$point: Breakpoint integer in px\r\n$constraint: Constraint for media query (min/max)\r\n$feature: Media feature of query (width/height)\r\n*/\n@font-face {\n  font-family: 'Heebo-Bold';\n  src: url(\"/assets/fonts/heebo-bold.eot\");\n  src: url(\"/assets/fonts/heebo-bold.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-bold.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-bold.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-bold.svg#heebo-bold\") format(\"svg\"), url(\"/assets/fonts/heebo-bold.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'Heebo-Light';\n  src: url(\"/assets/fonts/heebo-light.eot\");\n  src: url(\"/assets/fonts/heebo-light.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-light.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-light.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-light.svg#heebo-light\") format(\"svg\"), url(\"/assets/fonts/heebo-light.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'Heebo-Regular';\n  src: url(\"/assets/fonts/heebo-regular.eot\");\n  src: url(\"/assets/fonts/heebo-regular.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-regular.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-regular.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-regular.svg#heebo-regular\") format(\"svg\"), url(\"/assets/fonts/heebo-regular.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'Heebo-Medium';\n  src: url(\"/assets/fonts/heebo-medium.eot\");\n  src: url(\"/assets/fonts/heebo-medium.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-medium.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-medium.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-medium.svg#heebo-medium\") format(\"svg\"), url(\"/assets/fonts/heebo-medium.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n.p-dialog-wrapper .p-dialog-inner {\n  height: auto;\n  overflow: hidden;\n  padding: 0; }\n.p-dialog-wrapper .p-dialog-inner .v-scrollbar {\n    height: 354px;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    padding: 0 15px 0 0;\n    scroll-behavior: smooth;\n    position: relative; }\n.p-dialog-wrapper .p-dialog-inner .v-scrollbar::-webkit-scrollbar {\n      width: 4px;\n      height: 5px;\n      border-radius: 6px; }\n.p-dialog-wrapper .p-dialog-inner .v-scrollbar::-webkit-scrollbar-track {\n        background-color: #424242;\n        border-radius: 6px; }\n.p-dialog-wrapper .p-dialog-inner .v-scrollbar::-webkit-scrollbar-thumb {\n        background-color: #353535 border-radius 6px; }\n.p-dialog-wrapper .p-dialog-inner .v-scrollbar::-webkit-scrollbar-button {\n        display: none; }\n.p-dialog-wrapper .p-dialog-inner .v-scrollbar .form-footer {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      width: 137px; }\n.p-dialog-wrapper .p-dialog-inner .v-scrollbar .form-footer > .form-group {\n        position: fixed;\n        max-width: 128px;\n        bottom: 98px;\n        padding: 0; }\n.p-dialog-wrapper .p-dialog-inner label {\n    letter-spacing: 0.5px;\n    text-align: left;\n    color: #aaaaaa;\n    font-family: \"Heebo-Bold\";\n    text-transform: uppercase;\n    font-size: 12px;\n    line-height: 30px; }\n.p-dialog-wrapper .p-dialog-inner input.form-control {\n    border-radius: 3px;\n    border: solid 1px #dde3e8;\n    -webkit-transition: none;\n    transition: none;\n    font-family: \"Heebo-Light\";\n    font-size: 13px;\n    color: #7c7c7c;\n    padding: 5px 10px; }\n.p-dialog-wrapper .p-dialog-inner input.form-control:focus {\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.p-dialog-wrapper .p-dialog-inner .info_img {\n    height: 13px;\n    width: 13px;\n    opacity: 0.6; }\n.p-dialog-wrapper .p-dialog-inner .icon-background1 {\n    color: #8f8f8f; }\n.p-dialog-wrapper .p-dialog-inner .fa-info-circle:before {\n    content: \"\\f05a\"; }\n.p-dialog-wrapper .p-dialog-inner .btn-green {\n    border-radius: 4px;\n    background-color: #e6b800;\n    font-family: \"Heebo-Medium\";\n    border: 0;\n    color: #fff;\n    text-transform: uppercase;\n    padding: 8px 31px;\n    font-weight: 600;\n    font-size: 14px;\n    margin: 2px 3px 0 0;\n    display: block; }\n.p-dialog-wrapper .p-dialog-inner .ui-tooltip-text {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content; }\n.p-dialog-wrapper .p-dialog-inner .ui-tooltip-text.ui-shadow.ui-corner-all {\n      font-family: \"Heebo-Regular\";\n      font-size: 12px;\n      color: #fff;\n      white-space: nowrap; }\n.p-dialog-wrapper .p-dialog-inner .form-group {\n    position: relative;\n    padding-bottom: 10px; }\n.p-dialog-wrapper .p-dialog-inner .form-footer .form-group {\n    padding-bottom: 0;\n    margin-bottom: 3px; }\n.p-dialog-wrapper .p-dialog-inner .has-error .form-control {\n    border-bottom-color: #cc9900; }\n.p-dialog-wrapper .p-dialog-inner .ng-invalid {\n    -webkit-animation-name: fadeIn;\n            animation-name: fadeIn; }\n.p-dialog-wrapper .p-dialog-inner .errorMsg {\n    color: #d00;\n    font-family: \"Heebo-Light\";\n    font-size: 11px;\n    display: none;\n    position: absolute;\n    left: 15px;\n    bottom: -11px; }\n.p-dialog-wrapper .p-dialog-inner .has-error .errorMsg {\n    display: block; }\n.p-dialog-wrapper .p-dialog-inner .float-left {\n    float: left; }\n.p-dialog-wrapper .p-dialog-inner .account-list {\n    letter-spacing: 0.5px;\n    text-align: left;\n    color: #313030;\n    font-family: \"Heebo-Bold\";\n    font-size: 13px;\n    text-decoration: none;\n    list-style: none; }\n.p-dialog-wrapper .p-dialog-inner .accounts .text-overflow {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: inline-block;\n    width: 200px; }\n.p-dialog-wrapper .p-dialog-inner .icon-coin {\n    background: url(\"/assets/images/ether.png\") no-repeat 0 0/cover;\n    display: block;\n    width: 24px;\n    height: 24px; }\n.p-dialog-wrapper .p-dialog-inner .icon-coinbase {\n    background: url(\"/assets/images/ether-miner.png\") no-repeat 0 0/cover;\n    display: block;\n    width: 24px;\n    height: 24px; }\n"

/***/ }),

/***/ "./src/app/components/shared/header/account-list/account-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__("./src/app/service/common-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountListComponent = /** @class */ (function () {
    function AccountListComponent(_CommonService) {
        this._CommonService = _CommonService;
        this.showEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.messageEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pwdAccount = "";
        this.response = {};
    }
    AccountListComponent.prototype.ngOnInit = function () {
        this.getAccountList();
    };
    AccountListComponent.prototype.getAccountList = function () {
        var _this = this;
        this._CommonService.getAccountList().subscribe(function (res) {
            _this.accounts = res.json();
            console.log("this.accounts>>>>>>>>>>>>", _this.accounts);
        });
    };
    AccountListComponent.prototype.addAccount = function (pwdAccount) {
        var _this = this;
        // if (pwdAccount != "") { // pwd can be empty string hence commenting
        var params = {
            "password": pwdAccount || ""
        };
        this._CommonService.addAccount(params).subscribe(function (res) {
            _this.response = res;
            console.log(_this.response, "=====this.response=====");
            _this.msgs = [];
            _this.msgs.push({
                severity: 'success', summary: 'Success Message',
                detail: _this.response.statusMessage
            });
            _this.messageEvent.emit(_this.msgs);
            //this.showEvent.emit(false);
            _this.pwdAccount = "";
            _this.getAccountList();
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '',
                detail: 'Error while adding account.' });
            console.log('error', error);
        });
        // }
    };
    AccountListComponent.prototype.onClose = function () {
        this.showEvent.emit(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AccountListComponent.prototype, "displayaccount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AccountListComponent.prototype, "showEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AccountListComponent.prototype, "messageEvent", void 0);
    AccountListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account-list',
            template: __webpack_require__("./src/app/components/shared/header/account-list/account-list.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/header/account-list/account-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */]])
    ], AccountListComponent);
    return AccountListComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/header/email-server-configuration/email-server-configuration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"p-dialog-wrapper email-server-config\">\r\n  <p-dialog [(visible)]=\"display2\" [modal]=\"true\" [responsive]=\"true\" [width]=\"450\" [height]=\"510\" draggable=\"true\" closeOnEscape=\"true\"\r\n    dismissableMask=\"true\" (onHide)=\"onClose()\">\r\n\r\n    <p-header class=\"header\">\r\n      <h2>Email Server Configuration</h2>\r\n    </p-header>\r\n    <div class=\"p-dialog-inner\">\r\n      <form novalidate [formGroup]=\"emailServerConfig\">\r\n        <div class=\"v-scrollbar\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 form-group\" [ngClass]=\"displayFieldCssCreate('smtpServerHost')\">\r\n              <label>SMTP Server Address:</label>\r\n              <i class=\"fa fa-info-circle fa-1x icon-background1\" pTooltip=\"{{customMgs?.emailServerConfig?.smtpServerHost}}\"></i>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"smtpServerHost\">\r\n              <span class=\"errorMsg\">{{customMgs?.emailServerConfig?.smtpServerHost}}</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 form-group\" [ngClass]=\"displayFieldCssCreate('port')\">\r\n              <label>Port Number:</label>\r\n              <i class=\"fa fa-info-circle fa-1x icon-background1\" pTooltip=\"{{customMgs?.emailServerConfig?.port}}\"></i>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"port\">\r\n              <span class=\"errorMsg\">{{customMgs?.emailServerConfig?.port}}</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 form-group\" [ngClass]=\"displayFieldCssCreate('recipientList')\">\r\n              <label>Recipient List:</label>\r\n              <i class=\"fa fa-info-circle fa-1x icon-background1\" pTooltip=\"{{customMgs?.emailServerConfig?.recipientList}}\"></i>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"recipientList\">\r\n              <span class=\"errorMsg\">{{customMgs?.emailServerConfig?.recipientList}}</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 form-group\" [ngClass]=\"displayFieldCssCreate('username')\">\r\n              <label>Username:</label>\r\n              <i class=\"fa fa-info-circle fa-1x icon-background1\" pTooltip=\"{{customMgs?.emailServerConfig?.username}}\"></i>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"username\">\r\n              <span class=\"errorMsg\">{{customMgs?.emailServerConfig?.username}}</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 form-group\" [ngClass]=\"displayFieldCssCreate('password')\">\r\n              <label>Password:</label>\r\n              <i class=\"fa fa-info-circle fa-1x icon-background1\" pTooltip=\"{{customMgs?.emailServerConfig?.password}}\"></i>\r\n              <input type=\"password\" class=\"form-control\" formControlName=\"password\">\r\n              <span class=\"errorMsg\">{{customMgs?.emailServerConfig?.password}}</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"row form-footer\">\r\n            <div class=\"col-md-12 form-group\">\r\n              <button type=\"submit\" (click)=\"emailServerConfigSubmit(emailServerConfig.value)\" class=\"btn btn-green pull-right\">SUBMIT</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </p-dialog>\r\n"

/***/ }),

/***/ "./src/app/components/shared/header/email-server-configuration/email-server-configuration.component.scss":
/***/ (function(module, exports) {

module.exports = "/*Custom Fonts*/\n/*Fonts Colors*/\n/*media queries*/\n/*\r\n$point: Breakpoint integer in px\r\n$constraint: Constraint for media query (min/max)\r\n$feature: Media feature of query (width/height)\r\n*/\n@font-face {\n  font-family: 'Heebo-Bold';\n  src: url(\"/assets/fonts/heebo-bold.eot\");\n  src: url(\"/assets/fonts/heebo-bold.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-bold.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-bold.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-bold.svg#heebo-bold\") format(\"svg\"), url(\"/assets/fonts/heebo-bold.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'Heebo-Light';\n  src: url(\"/assets/fonts/heebo-light.eot\");\n  src: url(\"/assets/fonts/heebo-light.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-light.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-light.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-light.svg#heebo-light\") format(\"svg\"), url(\"/assets/fonts/heebo-light.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'Heebo-Regular';\n  src: url(\"/assets/fonts/heebo-regular.eot\");\n  src: url(\"/assets/fonts/heebo-regular.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-regular.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-regular.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-regular.svg#heebo-regular\") format(\"svg\"), url(\"/assets/fonts/heebo-regular.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'Heebo-Medium';\n  src: url(\"/assets/fonts/heebo-medium.eot\");\n  src: url(\"/assets/fonts/heebo-medium.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-medium.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-medium.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-medium.svg#heebo-medium\") format(\"svg\"), url(\"/assets/fonts/heebo-medium.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n.p-dialog-wrapper .p-dialog-inner {\n  height: auto;\n  overflow: hidden;\n  padding: 0; }\n.p-dialog-wrapper .p-dialog-inner .v-scrollbar {\n    height: 354px;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    padding: 0 15px 0 0;\n    scroll-behavior: smooth;\n    position: relative; }\n.p-dialog-wrapper .p-dialog-inner .v-scrollbar::-webkit-scrollbar {\n      width: 4px;\n      height: 5px;\n      border-radius: 6px; }\n.p-dialog-wrapper .p-dialog-inner .v-scrollbar::-webkit-scrollbar-track {\n        background-color: #3b3b3b;\n        border-radius: 6px; }\n.p-dialog-wrapper .p-dialog-inner .v-scrollbar::-webkit-scrollbar-thumb {\n        background-color: #575757;\n        border-radius: 6px; }\n.p-dialog-wrapper .p-dialog-inner .v-scrollbar::-webkit-scrollbar-button {\n        display: none; }\n.p-dialog-wrapper .p-dialog-inner .v-scrollbar .form-footer {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      width: 137px; }\n.p-dialog-wrapper .p-dialog-inner .v-scrollbar .form-footer > .form-group {\n        position: fixed;\n        max-width: 128px;\n        bottom: 98px;\n        padding: 0; }\n.p-dialog-wrapper .p-dialog-inner label {\n    letter-spacing: 0.5px;\n    text-align: left;\n    color: #ccc;\n    font-family: \"Heebo-Bold\";\n    text-transform: uppercase;\n    font-size: 12px; }\n.p-dialog-wrapper .p-dialog-inner input.form-control {\n    border-radius: 3px;\n    border: solid 1px #dde3e8;\n    -webkit-transition: none;\n    transition: none;\n    font-family: \"Heebo-Light\";\n    font-size: 13px;\n    color: #7c7c7c;\n    padding: 9px 15px; }\n.p-dialog-wrapper .p-dialog-inner input.form-control:focus {\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.p-dialog-wrapper .p-dialog-inner .info_img {\n    height: 13px;\n    width: 13px;\n    opacity: 0.6; }\n.p-dialog-wrapper .p-dialog-inner .icon-background1 {\n    color: #b3b3b3; }\n.p-dialog-wrapper .p-dialog-inner .fa-info-circle:before {\n    content: \"\\f05a\"; }\n.p-dialog-wrapper .p-dialog-inner .btn-green {\n    border-radius: 4px;\n    background-color: #e6b800;\n    font-family: \"Heebo-Medium\";\n    border: 0;\n    color: #fff;\n    text-transform: uppercase;\n    padding: 8px 35px;\n    font-weight: 600;\n    font-size: 14px;\n    margin: 2px 3px 0 0;\n    display: block; }\n.p-dialog-wrapper .p-dialog-inner .ui-tooltip-text {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content; }\n.p-dialog-wrapper .p-dialog-inner .ui-tooltip-text.ui-shadow.ui-corner-all {\n      font-family: \"Heebo-Regular\";\n      font-size: 12px;\n      color: #fff;\n      white-space: nowrap; }\n.p-dialog-wrapper .p-dialog-inner .form-group {\n    position: relative;\n    padding-bottom: 10px; }\n.p-dialog-wrapper .p-dialog-inner .form-footer .form-group {\n    padding-bottom: 0;\n    margin-bottom: 3px; }\n.p-dialog-wrapper .p-dialog-inner .has-error .form-control {\n    border-bottom-color: #e6b800; }\n.p-dialog-wrapper .p-dialog-inner .ng-invalid {\n    -webkit-animation-name: fadeIn;\n            animation-name: fadeIn; }\n.p-dialog-wrapper .p-dialog-inner .errorMsg {\n    color: #e6b800;\n    font-family: \"Heebo-Light\";\n    font-size: 11px;\n    display: none;\n    position: absolute;\n    left: 15px;\n    bottom: -11px; }\n.p-dialog-wrapper .p-dialog-inner .has-error .errorMsg {\n    display: block; }\n"

/***/ }),

/***/ "./src/app/components/shared/header/email-server-configuration/email-server-configuration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailServerConfigurationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_common_service__ = __webpack_require__("./src/app/service/common-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailServerConfigurationComponent = /** @class */ (function () {
    function EmailServerConfigurationComponent(fb, _CommonService, router) {
        this.fb = fb;
        this._CommonService = _CommonService;
        this.router = router;
        this.showEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.messageEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emailServerConfig = this.fb.group({
            smtpServerHost: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            port: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            recipientList: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
        });
    }
    EmailServerConfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._CommonService.getMessages().subscribe(function (res) {
            console.log('this.res', res);
            _this.customMgs = res;
            console.log('this.customMgs', _this.customMgs);
            console.log('this.customMgs', _this.customMgs.customMessage.nodename);
        });
    };
    EmailServerConfigurationComponent.prototype.isFieldValidCreate = function (field) {
        return ((!this.emailServerConfig.get(field).valid && this.emailServerConfig.get(field).touched) ||
            (this.emailServerConfig.get(field).untouched && this.formSumitAttempt));
    };
    EmailServerConfigurationComponent.prototype.displayFieldCssCreate = function (field) {
        return {
            'has-error': this.isFieldValidCreate(field),
        };
    };
    EmailServerConfigurationComponent.prototype.emailServerConfigSubmit = function (data) {
        var _this = this;
        this.emailServerInfo = data;
        console.log('this.emailServerInfo >> ', this.emailServerInfo);
        this.formSumitAttempt = true;
        if (this.emailServerConfig.valid) {
            var params = {
                "smtpServerHost": this.emailServerInfo.smtpServerHost,
                "port": this.emailServerInfo.port,
                "recipientList": this.emailServerInfo.recipientList,
                "username": this.emailServerInfo.username,
                "password": this.emailServerInfo.password
            };
            this._CommonService.emailServerConfig(params).subscribe(function (data) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Email Server Configuration has created Successfully' });
                console.log('Email Server Configuration has been created...');
                console.log('this.msgs.....>', _this.msgs);
                setTimeout(function (router) {
                    _this.router.navigate(["dashboard"]);
                }, 1500);
                _this.messageEvent.emit(_this.msgs);
                _this.showEvent.emit(false);
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '', detail: 'Email Server Configuration Failed!' });
                console.log('error', error);
            });
        }
    };
    EmailServerConfigurationComponent.prototype.onClose = function () {
        this.showEvent.emit(false);
    };
    // Work against memory leak if component is destroyed
    EmailServerConfigurationComponent.prototype.ngOnDestroy = function () {
        this.showEvent.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EmailServerConfigurationComponent.prototype, "display2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], EmailServerConfigurationComponent.prototype, "showEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], EmailServerConfigurationComponent.prototype, "messageEvent", void 0);
    EmailServerConfigurationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-email-server-configuration',
            template: __webpack_require__("./src/app/components/shared/header/email-server-configuration/email-server-configuration.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/header/email-server-configuration/email-server-configuration.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__service_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
    ], EmailServerConfigurationComponent);
    return EmailServerConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\r\n\r\n<div class=\"container-fluid header\">\r\n    <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand logo\">\r\n            <img src=\"/assets/images/powerchain-maker.svg\">\r\n        </a>\r\n        <span>{{getNodeInfoList?.nodeName}}</span>\r\n        <em *ngIf=\"getNodeInfoList\">{{getNodeInfoList?.active}}</em>\r\n    </div>\r\n    <div class=\"iconeRight pull-right\">\r\n        <ul class=\"nav navbar-nav \">\r\n            <li class=\"logs\">\r\n                <div>\r\n                    <em>Logs:&nbsp;</em>\r\n                    <a href='/geth/' target=\"_blank\" title=\"Geth\">Geth</a> |\r\n                    <a href='/constellation/' target=\"_blank\" title=\"Consetellation\">Constellation</a>\r\n                </div>\r\n            </li>\r\n            <li class=\"compile-deploy\">\r\n                <a href=\"javascript:void(0)\" (click)=\"emailServerConfig()\">Email Server Configuration</a>\r\n            </li>\r\n            <li class=\"compile-deploy\">\r\n                <a href=\"javascript:void(0)\" (click)=\"compileAndDeployContracts()\">Compile & Deploy Contracts</a>\r\n            </li>\r\n            <li class=\"compile-deploy\">\r\n                <a href=\"javascript:void(0)\" (click)=\"displayAccounts()\">Accounts</a>\r\n            </li>\r\n            <li class=\"compile-deploy\">\r\n                <a href=\"javascript:void(0)\" (click)=\"displayWhitelists()\">Whitelist</a>\r\n            </li>\r\n            <li class=\"dropdown dropdown-click\" *ngIf=\"pendingRequest?.length > 0\">\r\n                <img src=\"/assets/images/crossroad.png\" (click)=\"toggle()\">\r\n                <span class=\"count\">{{pendingRequest?.length}}</span>\r\n                <div class=\"dropdown-menu-list animated\" *ngIf=\"show\" (window:click)=\"autoClose($event)\">\r\n                    <h2>Pending Request for join Nordic Energy Network</h2>\r\n                    <div class=\"dropdown-inner\" [ngClass]=\"pendingRequest?.length >= 5 ? 'vscroll' : '' \">\r\n                        <ul>\r\n                            <li *ngFor=\"let item of pendingRequest\" [popover]=\"myPopover\" [popoverOnHover]=\"true\">\r\n                                <span>{{item?.nodeName}}</span>\r\n                                <a class=\"reject\" (click)=\"submitStatus(item, 'NO')\">reject</a>\r\n                                <a class=\"accept\" (click)=\"submitStatus(item, 'YES')\">Accept</a>\r\n                                <popover-content #myPopover placement=\"left\" [animation]=\"true\" class=\"popover-list\">\r\n                                    <span>\r\n                    <strong>Message:</strong>\r\n                    <br>{{item.message}}\r\n                  </span>\r\n                                    <span>\r\n                    <strong>Enode : </strong>\r\n                    <br>{{item.enode}}\r\n                  </span>\r\n                                    <span>\r\n                    <strong>IP : </strong>\r\n                    <br> {{item.ip}}\r\n                  </span>\r\n                                </popover-content>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"dropdown dropdown-click\" *ngIf=\"!uploadLogPathStatus\">\r\n                <img src=\"/assets/images/icon-upload.png\" (click)=\"uploadLogPath()\">\r\n                <span class=\"count\">1</span>\r\n            </li>\r\n            <li class=\"dropdown dropdown-click\" *ngIf=\"notificationStatus\">\r\n                <img src=\"/assets/images/bell-2-24.png\" (click)=\"toggleNotification()\">\r\n                <span class=\"count\">1</span>\r\n                <div *ngIf=\"showNotification\" class=\"notification-list\">\r\n                    <div *ngIf=\"notifications.length > 0\">\r\n                        <span> Notifications. </span>\r\n                        <hr/>\r\n                        <ul>\r\n                            <li *ngFor=\"let notification of notifications\">\r\n                                {{ notification }}\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div *ngIf=\"notifications.length==0\">\r\n                        <span>No notifications. </span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<app-model-overlay-powerchain [display]=\"display\" (showOverlay)=\"closeFlag($event)\"></app-model-overlay-powerchain>\r\n<app-email-server-configuration [display2]=\"display2\" (messageEvent)=\"receiveMessage($event)\" (showEvent)=\"closeFlag($event)\"></app-email-server-configuration>\r\n<app-upload-log-path *ngIf=\"displayUploadLogs\" [displayUploadLogs]=\"displayUploadLogs\" (closeUploadLogsMsg)=\"closeUploadLogsMsg($event)\"></app-upload-log-path>\r\n<app-account-list *ngIf=\"displayaccount\" [displayaccount]=\"displayaccount\" (messageEvent)=\"receiveMessage($event)\" (showEvent)=\"closeFlag($event)\"></app-account-list>\r\n<app-whitelists *ngIf=\"displayWhitelist\" [displayWhitelist]=\"displayWhitelist\" (msgEvent)=\"receiveMessage($event)\" (showEvent)=\"onCloseWhitelist($event)\"></app-whitelists>"

/***/ }),

/***/ "./src/app/components/shared/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = "/*Custom Fonts*/\n/*Fonts Colors*/\n/*media queries*/\n/*\r\n$point: Breakpoint integer in px\r\n$constraint: Constraint for media query (min/max)\r\n$feature: Media feature of query (width/height)\r\n*/\n@font-face {\n  font-family: 'Heebo-Bold';\n  src: url(\"/assets/fonts/heebo-bold.eot\");\n  src: url(\"/assets/fonts/heebo-bold.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-bold.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-bold.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-bold.svg#heebo-bold\") format(\"svg\"), url(\"/assets/fonts/heebo-bold.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'Heebo-Light';\n  src: url(\"/assets/fonts/heebo-light.eot\");\n  src: url(\"/assets/fonts/heebo-light.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-light.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-light.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-light.svg#heebo-light\") format(\"svg\"), url(\"/assets/fonts/heebo-light.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'Heebo-Regular';\n  src: url(\"/assets/fonts/heebo-regular.eot\");\n  src: url(\"/assets/fonts/heebo-regular.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-regular.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-regular.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-regular.svg#heebo-regular\") format(\"svg\"), url(\"/assets/fonts/heebo-regular.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'Heebo-Medium';\n  src: url(\"/assets/fonts/heebo-medium.eot\");\n  src: url(\"/assets/fonts/heebo-medium.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-medium.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-medium.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-medium.svg#heebo-medium\") format(\"svg\"), url(\"/assets/fonts/heebo-medium.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n.header {\n  display: block;\n  padding: 15px 0;\n  height: 70px; }\n@media screen and (max-width: 768px) {\n    .header {\n      height: auto; } }\n@media screen and (max-width: 576px) {\n    .header {\n      height: auto; } }\n@media screen and (max-width: 992px) {\n    .header {\n      height: auto; } }\n.header .navbar-header {\n    float: left; }\n.header .navbar-header a.navbar-brand {\n      text-decoration: none;\n      outline: none;\n      font-size: 0;\n      float: left; }\n.header .navbar-header a.navbar-brand.logo {\n        width: 162px;\n        background-color: #6675a8;\n        display: block;\n        text-align: center;\n        padding: 8px 0 10px 0;\n        margin-top: 5px; }\n.header .navbar-header span {\n      font-size: 16px;\n      color: #c4c7d2;\n      margin: 0;\n      padding: 0;\n      font-family: \"Heebo-Light\";\n      float: left;\n      margin: 11px 9px 0 0; }\n.header .navbar-header em {\n      float: left;\n      width: 45px;\n      border-radius: 7px;\n      background-color: #e6b800;\n      text-align: center;\n      font-family: \"Heebo-Medium\";\n      font-size: 8px;\n      font-weight: 500;\n      color: #202020;\n      padding: 1px 0;\n      font-style: normal;\n      margin: 18px 0 0 0;\n      line-height: 9px; }\n.header .iconeRight {\n    position: relative;\n    padding-top: 7px; }\n@media screen and (max-width: 768px) {\n      .header .iconeRight.pull-right {\n        float: none;\n        display: inline-block; } }\n@media screen and (max-width: 992px) {\n      .header .iconeRight.pull-right {\n        float: none;\n        display: inline-block; } }\n.header .iconeRight ul {\n      -webkit-box-orient: inherit;\n      -webkit-box-direction: inherit;\n          -ms-flex-direction: inherit;\n              flex-direction: inherit; }\n.header .iconeRight ul li {\n        float: left;\n        padding-right: 20px; }\n.header .iconeRight ul li.logs {\n          margin-top: -1px; }\n@media screen and (max-width: 1200px) {\n          .header .iconeRight ul li {\n            padding-right: 5px; } }\n@media screen and (max-width: 576px) {\n          .header .iconeRight ul li {\n            float: none;\n            padding-right: 0;\n            display: block;\n            width: 100%;\n            margin-bottom: 5px; } }\n.header .iconeRight ul li:last-child {\n          padding-right: 0; }\n.header .iconeRight ul li.dropdown {\n          position: relative; }\n.header .iconeRight ul li.dropdown img {\n            cursor: pointer; }\n.header .iconeRight ul li.dropdown .dropdown-menu-list {\n            display: block !important;\n            position: absolute;\n            right: 7px;\n            top: 35px;\n            width: 258px;\n            left: auto;\n            z-index: 1;\n            -webkit-animation-name: bounceInDown;\n                    animation-name: bounceInDown; }\n.header .iconeRight ul li.dropdown .dropdown-menu-list h2 {\n              border-top-left-radius: 4px;\n              border-top-right-radius: 4px;\n              background-color: #3977e6;\n              font-family: \"Heebo-Light\";\n              font-size: 13px;\n              color: #fff;\n              padding: 10px 10px;\n              margin: 0; }\n.header .iconeRight ul li.dropdown .dropdown-menu-list .dropdown-inner {\n              background: #fff; }\n.header .iconeRight ul li.dropdown .dropdown-menu-list .dropdown-inner .vscroll {\n                height: 127px;\n                overflow-x: hidden;\n                overflow-y: scroll; }\n.header .iconeRight ul li.dropdown .dropdown-menu-list .dropdown-inner .vscroll::-webkit-scrollbar {\n                  width: 4px;\n                  height: 5px;\n                  border-radius: 6px; }\n.header .iconeRight ul li.dropdown .dropdown-menu-list .dropdown-inner .vscroll::-webkit-scrollbar-track {\n                    background-color: #e6b800;\n                    border-radius: 6px; }\n.header .iconeRight ul li.dropdown .dropdown-menu-list .dropdown-inner .vscroll::-webkit-scrollbar-thumb {\n                    background-color: #e6b800;\n                    border-radius: 6px; }\n.header .iconeRight ul li.dropdown .dropdown-menu-list .dropdown-inner .vscroll::-webkit-scrollbar-button {\n                    display: none; }\n.header .iconeRight ul li.dropdown .dropdown-menu-list .dropdown-inner ul {\n                margin: 0;\n                padding: 0; }\n.header .iconeRight ul li.dropdown .dropdown-menu-list .dropdown-inner ul li {\n                  display: block;\n                  overflow: hidden;\n                  clear: both;\n                  float: none;\n                  padding: 10px 10px;\n                  border-bottom: 1px solid #e6b800; }\n.header .iconeRight ul li.dropdown .dropdown-menu-list .dropdown-inner ul li span {\n                    font-family: \"Heebo-Regular\";\n                    font-size: 12px;\n                    color: #202020;\n                    float: left;\n                    overflow: hidden;\n                    text-overflow: ellipsis;\n                    width: 170px;\n                    display: block; }\n.header .iconeRight ul li.dropdown .dropdown-menu-list .dropdown-inner ul li a {\n                    height: 14px;\n                    width: 18px;\n                    display: block;\n                    border: none;\n                    text-indent: -5000px;\n                    font-size: 0;\n                    line-height: 0;\n                    text-decoration: none;\n                    float: right;\n                    margin: 1px 0 0 0;\n                    cursor: pointer; }\n.header .iconeRight ul li.dropdown .dropdown-menu-list .dropdown-inner ul li a.accept {\n                      background: url(/assets/images/accept.png) no-repeat 0 0;\n                      margin: 0 15px 0 0; }\n.header .iconeRight ul li.dropdown .dropdown-menu-list .dropdown-inner ul li a.reject {\n                      background: url(/assets/images/reject.png) no-repeat 0 0; }\n.header .iconeRight ul li.dropdown .dropdown-menu-list .dropdown-inner ul li .popover-list {\n                    margin: 0;\n                    padding: 0;\n                    border-radius: 4px; }\n.header .iconeRight ul li.dropdown .dropdown-menu-list .dropdown-inner ul li .popover-list span {\n                      padding: 5px 12px;\n                      margin: 0;\n                      overflow: hidden;\n                      text-overflow: ellipsis;\n                      display: block;\n                      font-family: \"Heebo-Regular\";\n                      font-size: 11px;\n                      color: #202020;\n                      display: block;\n                      border-bottom: 1px solid #ccc;\n                      width: 273px; }\n.header .iconeRight ul li.dropdown .dropdown-menu-list .dropdown-inner ul li .popover-list span:last-child {\n                        border-bottom: none !important; }\n.header .iconeRight ul li.dropdown .count {\n            color: #fff;\n            border-radius: 50%;\n            width: 17px;\n            height: 17px;\n            background: red;\n            display: block;\n            font-size: 11px;\n            font-weight: bold;\n            text-align: center;\n            position: absolute;\n            top: -4px;\n            left: 9px; }\n.header .iconeRight ul li.compile-deploy a {\n          padding: 5px 10px 5px 10px;\n          color: #fff;\n          font-size: 13px;\n          background: #e6b800;\n          border-radius: 4px;\n          font-family: \"Heebo-Regular\"; }\n.header .iconeRight ul li.compile-deploy a:hover {\n            text-decoration: none; }\n@media screen and (max-width: 1200px) {\n            .header .iconeRight ul li.compile-deploy a {\n              font-size: 12px; } }\n@media screen and (max-width: 750px) {\n            .header .iconeRight ul li.compile-deploy a {\n              font-size: 9px; } }\n@media screen and (max-width: 576px) {\n            .header .iconeRight ul li.compile-deploy a {\n              font-size: 13px;\n              display: block; } }\n@media screen and (max-width: 750px) {\n          .header .iconeRight ul li.logs {\n            margin-top: 4px; } }\n@media screen and (max-width: 576px) {\n          .header .iconeRight ul li.logs {\n            margin-top: 0; } }\n.header .iconeRight ul li.logs > div {\n          padding: 5px 10px 5px 10px;\n          color: #fff;\n          font-size: 13px;\n          background: #e6b800;\n          border-radius: 4px;\n          font-family: \"Heebo-Regular\"; }\n@media screen and (max-width: 750px) {\n            .header .iconeRight ul li.logs > div {\n              padding: 0px 10px 4px 10px; } }\n@media screen and (max-width: 576px) {\n            .header .iconeRight ul li.logs > div {\n              padding: 5px 10px 5px 10px; } }\n.header .iconeRight ul li.logs > div em {\n            font-style: normal;\n            font-family: \"Heebo-Bold\"; }\n@media screen and (max-width: 750px) {\n              .header .iconeRight ul li.logs > div em {\n                font-size: 10px; } }\n@media screen and (max-width: 576px) {\n              .header .iconeRight ul li.logs > div em {\n                font-size: 13px; } }\n.header .iconeRight ul li.logs > div a {\n            color: #fff;\n            font-size: 13px;\n            font-family: \"Heebo-Regular\";\n            display: inline-block; }\n@media screen and (max-width: 750px) {\n              .header .iconeRight ul li.logs > div a {\n                font-size: 9px; } }\n@media screen and (max-width: 576px) {\n              .header .iconeRight ul li.logs > div a {\n                font-size: 13px; } }\n.notification-list {\n  border-radius: 2px;\n  width: 400px;\n  height: auto;\n  z-index: 111;\n  top: 25px;\n  right: 0;\n  position: absolute;\n  background: #1a1400;\n  max-height: 200px;\n  color: white;\n  font-family: \"Heebo-Light\"; }\n.notification-list ul {\n  padding: 8px; }\n.notification-list ul li {\n  list-style: none;\n  font-size: 12px;\n  padding: 0px;\n  color: #1a1400;\n  margin-bottom: 5px;\n  border-bottom: 1px solid white; }\n.notification-list span {\n  float: left;\n  color: #fff;\n  font-size: 14px;\n  font-family: \"Heebo-Light\";\n  display: block;\n  margin-top: 1px;\n  padding: 5px;\n  border-bottom: 1px solid white;\n  width: 97%;\n  margin-left: 7px; }\n"

/***/ }),

/***/ "./src/app/components/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__("./src/app/service/common-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_message_service__ = __webpack_require__("./src/app/service/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_utility_service__ = __webpack_require__("./src/app/service/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_IntervalObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/IntervalObservable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(messageService, cd, _CommonService, utilityService) {
        var _this = this;
        this.messageService = messageService;
        this.cd = cd;
        this._CommonService = _CommonService;
        this.utilityService = utilityService;
        this.show = false;
        this.msgs = [];
        this.displayUploadLogs = false;
        this.display = false;
        this.display2 = false;
        this.displayaccount = false;
        this.uploadLogPathStatus = false;
        this.notificationStatus = false;
        this.showNotification = false;
        this.notifications = [];
        this.displayWhitelist = false;
        this.serviceCallInterval = this.utilityService.serviceCallInterval;
        this.subscription = this.messageService.getMessage().subscribe(function (message) {
            _this.getNodeInfoList = message;
            //console.log('this.message subscribe >>>>>>>>>>>', this.message);
        });
        __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_IntervalObservable__["a" /* IntervalObservable */].create(15000).subscribe(function (response) {
            if (!_this.uploadLogPathStatus) {
                _this.getUploadLogPathStatus();
            }
            _this._CommonService.getPendingRequest().subscribe(function (result) {
                _this.pendingRequest = result.json();
                //console.log(' this.pendingRequest>>>>>>', this.pendingRequest);
            }, function (err) {
                //console.log("Error occured", err);
            });
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.getLogsInfo();
        this.getPendingRequest();
        this.getUploadLogPathStatus();
        // this.notifications.push("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
        // this.notifications.push("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
        if (this.notifications.length == 0) {
            this.notificationStatus = false;
        }
        else {
            this.notificationStatus = true;
        }
    };
    HeaderComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    HeaderComponent.prototype.autoClose = function (event) {
        //console.log('autoClose Event fired');
        var target = event.target;
        //console.log('autoClose target>>>', target);
        if (!target.closest(".dropdown-click")) {
            this.show = false;
        }
    };
    HeaderComponent.prototype.compileAndDeployContracts = function () {
        this.display = true;
        // this.cd.detectChanges(); 
        //console.log('open >>>>>>>>>>', this.display)
    };
    HeaderComponent.prototype.emailServerConfig = function () {
        this.display2 = true;
        // this.cd.detectChanges(); 
        //console.log('open >>>>>>>>>>', this.display2)
    };
    HeaderComponent.prototype.closeFlag = function (event) {
        this.display = event;
        this.display2 = event;
        this.displayaccount = event;
        //console.log('closeFlag >>>>>>>>>>', this.display)
        // this.cd.detectChanges();
    };
    HeaderComponent.prototype.onCloseWhitelist = function (event) {
        this.displayWhitelist = event;
        console.log('displayWhitelist >>>>>>>>>>', this.displayWhitelist);
    };
    HeaderComponent.prototype.receiveMessage = function ($event) {
        this.msgs = $event;
    };
    HeaderComponent.prototype.getPendingRequest = function () {
        var _this = this;
        this._CommonService.getPendingRequest().subscribe(function (result) {
            _this.pendingRequest = result.json();
            //console.log(' this.pendingRequest>>>>>>', this.pendingRequest);
        }, function (err) {
            //console.log("Error occured", err);
        });
    };
    HeaderComponent.prototype.getLogsInfo = function () {
        var _this = this;
        this._CommonService.getLogs().subscribe(function (result) {
            _this.getLogsList = result;
            //console.log('this.getLogsList >>>>>>', this.getLogsList.statusMessage);
        }, function (err) {
            //console.log("Error occured", err);
        });
    };
    HeaderComponent.prototype.submitStatus = function (item, statusMgs) {
        var _this = this;
        this.nodInfo = item;
        //console.log('this.nodInfo-------', this.nodInfo);
        var params = {
            "enode-id": this.nodInfo.enode,
            "status": statusMgs
        };
        // if (this.storeData != null) {
        this._CommonService.postjoinNetwork(params).subscribe(function (data) {
            _this.storeData = data.json();
            //console.log('this.storeData>>>>>>>>>>>>', this.storeData)
            _this.msgs = [];
            // let msgShow = this.storeData ? this.storeData.statusMessage : 'There is an error occured';
            _this.msgs.push({ severity: 'success', summary: _this.storeData.statusMessage });
            // //console.log('this.submitStatus.....>', this.msgs);
            _this.getPendingRequest();
        }, function (error) {
            //let msgShow = this.storeData ? this.storeData.statusMessage : 'There is an error occured';
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: 'There is an error occured' });
            //console.log('error', error);
        });
    };
    HeaderComponent.prototype.uploadLogPath = function () {
        this.displayUploadLogs = true;
        this.cd.detectChanges();
        this.cd.markForCheck();
    };
    HeaderComponent.prototype.closeUploadLogsMsg = function (event) {
        var _this = this;
        var formMsg = event.msg;
        console.log("closeUploadLogsMsg>>>> ", event);
        this.displayUploadLogs = false;
        if (formMsg) {
            this.msgs.push({ severity: 'success', summary: formMsg });
            this.notificationStatus = true;
            this.notifications.push(formMsg);
            setTimeout(function () {
                _this.msgs = [];
                _this.cd.detectChanges();
                _this.cd.markForCheck();
                _this.getUploadLogPathStatus();
            }, 3000);
        }
    };
    HeaderComponent.prototype.getUploadLogPathStatus = function () {
        var _this = this;
        this._CommonService.getuploadLogsPath().subscribe(function (result) {
            var data = result.json();
            _this.uploadLogPathStatus = data.statusMessage;
        }, function (err) {
            console.log("Error occured", err);
        });
    };
    HeaderComponent.prototype.displayAccounts = function () {
        this.displayaccount = true;
    };
    HeaderComponent.prototype.displayWhitelists = function () {
        this.displayWhitelist = true;
    };
    HeaderComponent.prototype.toggleNotification = function () {
        this.showNotification = !this.showNotification;
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/shared/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_3__service_utility_service__["a" /* UtilityService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

// }


/***/ }),

/***/ "./src/app/components/shared/header/header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_tooltip__ = __webpack_require__("./node_modules/primeng/tooltip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_dialog__ = __webpack_require__("./node_modules/primeng/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_button__ = __webpack_require__("./node_modules/primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_multiselect__ = __webpack_require__("./node_modules/primeng/multiselect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_multiselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_multiselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_inputmask__ = __webpack_require__("./node_modules/primeng/inputmask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_inputmask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_inputmask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_component__ = __webpack_require__("./src/app/components/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__model_overlay_powerchain_model_overlay_powerchain_component__ = __webpack_require__("./src/app/components/shared/header/model-overlay-powerchain/model-overlay-powerchain.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_popover__ = __webpack_require__("./node_modules/ngx-popover/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ngx_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_message_service__ = __webpack_require__("./src/app/service/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_utility_service__ = __webpack_require__("./src/app/service/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__email_server_configuration_email_server_configuration_component__ = __webpack_require__("./src/app/components/shared/header/email-server-configuration/email-server-configuration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__upload_log_path_upload_log_path_component__ = __webpack_require__("./src/app/components/shared/header/upload-log-path/upload-log-path.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__account_list_account_list_component__ = __webpack_require__("./src/app/components/shared/header/account-list/account-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__whitelists_whitelists_component__ = __webpack_require__("./src/app/components/shared/header/whitelists/whitelists.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_tooltip__["TooltipModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_multiselect__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_popover__["PopoverModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_inputmask__["InputMaskModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_11__header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_12__model_overlay_powerchain_model_overlay_powerchain_component__["a" /* ModelOverlayPowerChainComponent */], __WEBPACK_IMPORTED_MODULE_16__email_server_configuration_email_server_configuration_component__["a" /* EmailServerConfigurationComponent */], __WEBPACK_IMPORTED_MODULE_17__upload_log_path_upload_log_path_component__["a" /* UploadLogPathComponent */], __WEBPACK_IMPORTED_MODULE_18__account_list_account_list_component__["a" /* AccountListComponent */], __WEBPACK_IMPORTED_MODULE_19__whitelists_whitelists_component__["a" /* WhitelistsComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_11__header_component__["a" /* HeaderComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_14__service_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_15__service_utility_service__["a" /* UtilityService */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/components/shared/header/model-overlay-powerchain/model-overlay-powerchain.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\r\n<div class=\"p-dialog-wrapper compile-wrapper\">\r\n    <p-dialog [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" [width]=\"760\" [minWidth]=\"200\" [minY]=\"70\" closeOnEscape=\"true\" dismissableMask=\"true\" (onHide)=\"onClose()\">\r\n        <p-header class=\"header\">\r\n            <h2>Compile & Deploy Contracts</h2>\r\n        </p-header>\r\n        <!-- <div class=\"p-dialog-inner\" [ngClass]=\"showResponse == true ? 'height277' :''\"> -->\r\n        <div class=\"p-dialog-inner\">\r\n            <form novalidate [formGroup]=\"CompileDeployContractForm\" (ngSubmit)=\"contractSubmit()\" *ngIf=\"showResponse\">\r\n                <div class=\"row compileDeploy\">\r\n                    <div class=\"col-md-12 form-group\">\r\n                        <h4>CHOOSE CONTRACT FILE</h4>\r\n                        <div class=\"custom-upload\">\r\n                            <input name=\"file\" type=\"file\" multiple id=\"chooseFile\" formControlName=\"contractfile\" class=\"form-control\" (change)=\"onFileChange($event)\">\r\n                            <div class=\"fake-file\">\r\n                                <input disabled=\"disabled\">\r\n                                <button>Choose File</button>\r\n                            </div>\r\n                            <ul class=\"fileList\">\r\n                                <li class=\"listSpace\" *ngFor=\"let file of filesToUpload\">\r\n                                    <span>{{file.name}}</span>\r\n                                    <a class=\"cancel-icon\" (click)=\"clearFile(file.name)\">x</a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                        <!-- <span class=\"errorMsg\">{{customMgs?.customMessageContract?.chooseFile}}</span> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"row compileDeploy\">\r\n                    <!-- <div class=\"col-md-12 form-group\" [ngClass]=\"displayFieldCssContract('networkRole')\"> -->\r\n                    <div class=\"col-md-12 form-group\">\r\n                        <h4 for=\"networkRole\">NORDIC ENERGY NETWORK PARTICIPANTS</h4>\r\n                        <p-multiSelect [options]=\"networkRoleNodeListNew\" formControlName=\"networkRole\" [style]=\"{'width':'100%'}\" placeholder=\"Select a Network Role\" optionLabel=\"nodeName\"></p-multiSelect>\r\n                        <!-- <span class=\"errorMsg\">{{customMgs?.customMessageContract?.networkRole}}</span> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"row form-footer\">\r\n                    <div class=\"col-md-12 form-group\">\r\n                        <button type=\"submit\" [disabled]=\"CompileDeployContractForm.invalid || CompileDeployContractForm.pristine || disabled \" (click)=\"contractSubmit(CompileDeployContractForm.value)\" class=\"btn btn-green pull-right\">SUBMIT</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <div class=\"row\" *ngIf=\"showResponse2\">\r\n                <div class=\"loader-bg\" *ngIf=\"ShowLoader\"></div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-bordered\" *ngFor=\"let responseItem of fileUploadResponse\">\r\n                            <tr>\r\n                                <td>\r\n                                    <em class=\"w100\">Filename</em>\r\n                                    <span>{{responseItem?.filename}}</span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <em class=\"w100\">Address</em>\r\n                                    <span>{{responseItem?.address}}</span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <em class=\"w100\">bytecode</em>\r\n                                    <span>{{responseItem?.bytecode}}</span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <em class=\"w100\">Interface</em>\r\n                                    <span>{{responseItem?.interface}}</span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <em class=\"w100\">JSON</em>\r\n                                    <span>{{responseItem?.json}}</span>\r\n                                </td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"col-md-12\" *ngIf=\"!ShowLoader\">\r\n                        <div class=\"form-group\">\r\n                            <button type=\"submit\" class=\"btn btn-green pull-right\" (click)=\"gotResponse()\" [disabled]=\"!isResponseReceived\">Close</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </p-dialog>\r\n</div>"

/***/ }),

/***/ "./src/app/components/shared/header/model-overlay-powerchain/model-overlay-powerchain.component.scss":
/***/ (function(module, exports) {

module.exports = "/*Custom Fonts*/\n/*Fonts Colors*/\n/*media queries*/\n/*\r\n$point: Breakpoint integer in px\r\n$constraint: Constraint for media query (min/max)\r\n$feature: Media feature of query (width/height)\r\n*/\n@font-face {\n  font-family: 'Heebo-Bold';\n  src: url(\"/assets/fonts/heebo-bold.eot\");\n  src: url(\"/assets/fonts/heebo-bold.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-bold.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-bold.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-bold.svg#heebo-bold\") format(\"svg\"), url(\"/assets/fonts/heebo-bold.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'Heebo-Light';\n  src: url(\"/assets/fonts/heebo-light.eot\");\n  src: url(\"/assets/fonts/heebo-light.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-light.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-light.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-light.svg#heebo-light\") format(\"svg\"), url(\"/assets/fonts/heebo-light.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'Heebo-Regular';\n  src: url(\"/assets/fonts/heebo-regular.eot\");\n  src: url(\"/assets/fonts/heebo-regular.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-regular.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-regular.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-regular.svg#heebo-regular\") format(\"svg\"), url(\"/assets/fonts/heebo-regular.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'Heebo-Medium';\n  src: url(\"/assets/fonts/heebo-medium.eot\");\n  src: url(\"/assets/fonts/heebo-medium.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-medium.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-medium.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-medium.svg#heebo-medium\") format(\"svg\"), url(\"/assets/fonts/heebo-medium.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n.p-dialog-wrapper.compile-wrapper .p-dialog-inner {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  height: 376px;\n  scroll-behavior: smooth;\n  padding-right: 8px; }\n.p-dialog-wrapper.compile-wrapper .p-dialog-inner::-webkit-scrollbar {\n    width: 4px;\n    height: 5px;\n    border-radius: 6px; }\n.p-dialog-wrapper.compile-wrapper .p-dialog-inner::-webkit-scrollbar-track {\n      background-color: #353535;\n      border-radius: 6px; }\n.p-dialog-wrapper.compile-wrapper .p-dialog-inner::-webkit-scrollbar-thumb {\n      background-color: #7e7e7e;\n      border-radius: 6px; }\n.p-dialog-wrapper.compile-wrapper .p-dialog-inner::-webkit-scrollbar-button {\n      display: none; }\n.p-dialog-wrapper.compile-wrapper .p-dialog-inner h3 {\n    font-family: \"Heebo-Medium\";\n    font-size: 16px;\n    color: #1b2125;\n    padding: 0; }\n.p-dialog-wrapper.compile-wrapper .p-dialog-inner p {\n    font-family: \"Heebo-Light\";\n    font-size: 16px;\n    color: #8f8f8f;\n    padding: 0; }\n.p-dialog-wrapper.compile-wrapper .p-dialog-inner .loader-bg {\n    background: url(/assets/images/loader-white.gif) no-repeat center center;\n    width: 100%;\n    min-height: 320px;\n    background-size: 60px 60px; }\n.p-dialog-wrapper .ui-widget-content {\n  padding: 12px !important; }\n.p-dialog-wrapper .ui-widget-content .ui-dialog-titlebar-close {\n    float: right;\n    margin: 12px 1px 0 0; }\n.p-dialog-wrapper .compileDeploy h4 {\n  font-family: \"Heebo-Bold\";\n  font-size: 12px;\n  color: #d4d9dd;\n  letter-spacing: 0.5px;\n  margin-top: 15px; }\n.p-dialog-wrapper .compileDeploy .custom-upload {\n  position: relative; }\n.p-dialog-wrapper .compileDeploy .custom-upload input[type=file] {\n    outline: none;\n    position: relative;\n    text-align: right;\n    opacity: 0;\n    z-index: 2;\n    width: 100%;\n    height: 100%; }\n.p-dialog-wrapper .compileDeploy .custom-upload .fake-file {\n    background: #fff;\n    height: 25px;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    z-index: 1;\n    line-height: 100%;\n    display: block; }\n.p-dialog-wrapper .compileDeploy .custom-upload .fake-file input {\n    font-size: 16px;\n    height: 45px;\n    width: 100%;\n    background: #fff;\n    border: 1px solid #ccc; }\n.p-dialog-wrapper .compileDeploy .custom-upload .fake-file button {\n    position: absolute;\n    right: 7px;\n    top: 7px;\n    display: block;\n    width: 113px;\n    height: 31px;\n    border-radius: 2px;\n    background-color: #eaedf1;\n    border: solid 1px #c2c6c9;\n    text-align: center;\n    font-family: \"Heebo-Regular\";\n    font-size: 14px;\n    color: #788995;\n    outline: none; }\n.p-dialog-wrapper .compileDeploy .custom-upload .fileList {\n    margin: 10px 0 0 0;\n    padding: 0; }\n.p-dialog-wrapper .compileDeploy .custom-upload .fileList li {\n      float: left;\n      padding: 2px 10px;\n      border-radius: 15px;\n      border: solid 1px #c7c7c7;\n      background-color: #aaaaaa;\n      list-style: none;\n      margin-right: 7px; }\n.p-dialog-wrapper .compileDeploy .custom-upload .fileList li span {\n        font-size: 14px;\n        color: #fff;\n        float: left; }\n.p-dialog-wrapper .compileDeploy .custom-upload .fileList li .cancel-icon {\n        float: right;\n        margin-left: 10px;\n        display: block;\n        font-size: 14px;\n        cursor: pointer;\n        overflow: hidden;\n        color: #fff; }\n.errorMsg {\n  color: #c0a300;\n  font-family: \"Heebo-Light\";\n  font-size: 11px;\n  display: none;\n  position: absolute;\n  left: 15px;\n  bottom: -11px; }\n.table.table-bordered {\n  margin-bottom: 20px;\n  background-color: #eaedf1; }\n.table.table-bordered tr td {\n    font-size: 12px;\n    padding: 5px !important;\n    width: auto; }\n.table.table-bordered tr td .w100 {\n      width: 77px;\n      font-family: \"Heebo-Bold\";\n      color: #202020;\n      font-style: normal;\n      text-transform: uppercase;\n      display: block;\n      float: left; }\n.table.table-bordered tr td span {\n      display: block;\n      width: 583px;\n      float: left;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n"

/***/ }),

/***/ "./src/app/components/shared/header/model-overlay-powerchain/model-overlay-powerchain.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelOverlayPowerChainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__("./src/app/service/common-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_utility_service__ = __webpack_require__("./src/app/service/utility.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModelOverlayPowerChainComponent = /** @class */ (function () {
    function ModelOverlayPowerChainComponent(fb, _CommonService, router, cd, utilityService) {
        this.fb = fb;
        this._CommonService = _CommonService;
        this.router = router;
        this.cd = cd;
        this.utilityService = utilityService;
        this.showResponse2 = false;
        this.showResponse = true;
        this.disabled = true;
        this.networkRoleNodeListNew = [];
        this.isNetworkSelected = false;
        this.filesToUpload = [];
        this.isResponseReceived = false;
        this.showOverlay = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.CompileDeployContractForm = this.fb.group({
            contractfile: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            networkRole: ['']
        });
    }
    ModelOverlayPowerChainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._CommonService.getMessages().subscribe(function (res) {
            _this.customMgs = res;
        });
        this.getNodeNameList();
        this.subscription = this._CommonService.getCall().subscribe(function (message) {
            ////console.log('get node name list function called')
            _this.getNodeNameList();
        });
    };
    ModelOverlayPowerChainComponent.prototype.onFileChange = function (event) {
        var _this = this;
        this.filesToUpload = [];
        if (event.target.files && event.target.files.length > 0) {
            this.disabled = false;
            this.filesToUpload = event.target.files;
            this.cd.markForCheck();
            //console.log(' this.filesToUpload >>>>>>', this.filesToUpload);
            this.filesToUpload = Object.keys(this.filesToUpload).map(function (i) { return _this.filesToUpload[i]; }); // change file list into array of objects
            // this.CompileDeployContractForm.get('chooseFile').setValue(this.filesToUpload );
            //console.log(' this.filesToUpload 123 >>>>>>', this.filesToUpload);
        }
    };
    ModelOverlayPowerChainComponent.prototype.prepareSave = function () {
        var _this = this;
        var input = new FormData();
        input.append('privateFor', this.networkRoleValues);
        this.filesToUpload.forEach(function (element, index) {
            input.append("file" + (index + 1), _this.filesToUpload[index]); // naming file name as file1,2,3 ...
        });
        input.append('count', String(this.filesToUpload.length));
        input.append('private', String(this.isNetworkSelected));
        return input;
    };
    ModelOverlayPowerChainComponent.prototype.isFieldValidContract = function (field) {
        return ((!this.CompileDeployContractForm.get(field).valid && this.CompileDeployContractForm.get(field).touched) ||
            (this.CompileDeployContractForm.get(field).untouched));
    };
    ModelOverlayPowerChainComponent.prototype.displayFieldCssContract = function (field) {
        return {
            'has-error': this.isFieldValidContract(field),
        };
    };
    ModelOverlayPowerChainComponent.prototype.clearFile = function (fileName) {
        // this.CompileDeployContractForm.get('chooseFile').setValue(null);
        // this.fileInput.nativeElement.files = '';
        var _this = this;
        this.filesToUpload.forEach(function (element, index) {
            if (element.name == fileName) {
                _this.filesToUpload.splice(index, 1); // change the original array of selected files
                //console.log("element", element, index);
            }
        });
        if (this.filesToUpload.length == 0) {
            this.disabled = true;
        }
        // //console.log("upload end", this.filesToUpload);
        // //console.log("in clear end", this.fileInput)
    };
    ModelOverlayPowerChainComponent.prototype.contractSubmit = function (data) {
        var _this = this;
        //console.log('submit form data >> ', data)
        this.ShowLoader = true;
        this.contractInfo = data;
        this.networkRoleValues = [];
        this.formSubmitAttempt = true;
        this.isResponseReceived = false;
        if (this.contractInfo && this.contractInfo.networkRole.length > 0) {
            this.isNetworkSelected = true;
            // when all the options selected no need to send values to backend with above key set to true
            if (this.contractInfo.networkRole.length == this.networkRoleNodeList.length) {
                this.networkRoleValues = [];
            }
            else {
                for (var _i = 0, _a = this.contractInfo.networkRole; _i < _a.length; _i++) {
                    var obj = _a[_i];
                    //console.log(obj)
                    this.networkRoleValues.push(obj.publicKey);
                }
                //console.log("this.networkRoleValues", this.networkRoleValues)
            }
        }
        else {
            this.isNetworkSelected = false;
        }
        this.networkRoleValues = this.networkRoleValues.toString();
        var formModel = this.prepareSave(); //  function call to create form data
        console.log(formModel);
        if (this.CompileDeployContractForm.valid) {
            this._CommonService.deployContract(formModel).subscribe(function (data) {
                _this.fileUploadResponse = data.json();
                _this.isResponseReceived = true;
                _this.ShowLoader = false;
                //console.log('this.fileUploadResponse >>>>>>', this.fileUploadResponse);
                // this.showResponse(this.fileUploadResponse);
                _this.msgs = [];
                if (_this.fileUploadResponse[0].address == "0x") {
                    _this.msgs.push({ severity: 'error', summary: 'The contract could not be deployed successfully...' });
                }
                else {
                    _this.msgs.push({ severity: 'success', summary: 'Contract has been deployed sucessfully...' });
                }
                // this.display = false;
                // this.showOverlay.emit(false);
                //console.log('Contract has been deployed sucessfully...', this.fileUploadResponse);
                // setTimeout((router: Router) => {
                //   this.router.navigate(["dashboard"]);
                // }, 1500);
            }, function (error) {
                //console.log('error', error);
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'error...' });
            });
        }
        this.showResponse = false;
        this.showResponse2 = true;
    };
    ModelOverlayPowerChainComponent.prototype.gotResponse = function () {
        if (this.fileUploadResponse) {
            this.onClose();
        }
    };
    ModelOverlayPowerChainComponent.prototype.onClose = function () {
        //console.log("close function called")
        this.filesToUpload = [];
        this.fileUploadResponse = [];
        this.display = false;
        this.showOverlay.emit(false);
        this.showResponse2 = false;
        this.showResponse = true;
        this.CompileDeployContractForm.reset();
    };
    ModelOverlayPowerChainComponent.prototype.getNodeNameList = function () {
        var _this = this;
        this._CommonService.getNodeNameList().subscribe(function (result) {
            _this.networkRoleNodeList = result.json();
            //console.log('this.networkRoleNodeList >>>>>>', this.networkRoleNodeList);
            _this.networkRoleNodeListNew = _this.networkRoleNodeList.filter(function (x) { return x.self == 'false' && x.active == 'true'; });
            //console.log('this.networkRoleNodeListNew >>>>>>', this.networkRoleNodeListNew);
            // this.networkRoleNodeListNew =[];
            // this.networkRoleNodeList.forEach(element => {
            //   if (element.self == 'false') {
            //     this.networkRoleNodeListNew.push(element);
            //   }
            // });
        }, function (err) {
            //console.log("Error occured", err);
        });
    };
    // Work against memory leak if component is destroyed
    ModelOverlayPowerChainComponent.prototype.ngOnDestroy = function () {
        this.showOverlay.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModelOverlayPowerChainComponent.prototype, "display", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ModelOverlayPowerChainComponent.prototype, "showOverlay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ModelOverlayPowerChainComponent.prototype, "fileInput", void 0);
    ModelOverlayPowerChainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-model-overlay-powerchain',
            template: __webpack_require__("./src/app/components/shared/header/model-overlay-powerchain/model-overlay-powerchain.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/header/model-overlay-powerchain/model-overlay-powerchain.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_4__service_utility_service__["a" /* UtilityService */]])
    ], ModelOverlayPowerChainComponent);
    return ModelOverlayPowerChainComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/header/upload-log-path/upload-log-path.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"mesgshow\"></p-growl>\r\n<div class=\"abi-wrapper\">\r\n    <p-dialog [(visible)]=\"displayUploadLogs\" [modal]=\"true\" [responsive]=\"true\" [width]=\"760\" [minWidth]=\"200\" [minY]=\"70\" closeOnEscape=\"true\" dismissableMask=\"true\" (onHide)=\"onClose()\">\r\n        <p-header class=\"header\">\r\n            <h4>Upload Log Path</h4>\r\n        </p-header>\r\n        <div class=\"p-dialog-inner\">\r\n            <!-- (ngSubmit)=\"submitForm()\" -->\r\n            <form novalidate class=\"form-wrapper-inner\" [formGroup]=\"uploadLogsPathForm\" *ngIf=\"!loadingForm\">\r\n                <div class=\"row compileDeploy\">\r\n                    <div class=\"col-md-6 form-group\">\r\n                        <label>Geth Logs Path</label>\r\n                        <input name=\"gethPath\" type=\"text\" id=\"gethPath\" formControlName=\"gethPath\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"col-md-6 form-group\">\r\n                        <label>Constellation Logs Path</label>\r\n                        <input name=\"constellationPath\" type=\"text\" id=\"constellationPath\" formControlName=\"constellationPath\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"col-md-12 form-group\">\r\n                        <label>Upload Genesis File</label>\r\n                        <div class=\"custom-upload\">\r\n                            <input name=\"file\" type=\"file\" id=\"selectFile\" formControlName=\"selectFile\" class=\"form-control\" (change)=\"onSelectFile($event)\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row form-footer\">\r\n                    <div class=\"col-md-12 form-group\">\r\n                        <button type=\"submit\" [disabled]=\"uploadLogsPathForm.invalid\" (click)=\"submitForm(uploadLogsPathForm.value)\" class=\"btn btn-green pull-right\">SUBMIT</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </p-dialog>\r\n</div>"

/***/ }),

/***/ "./src/app/components/shared/header/upload-log-path/upload-log-path.component.scss":
/***/ (function(module, exports) {

module.exports = ".ng-invalid {\n  border-color: #e2a600; }\n"

/***/ }),

/***/ "./src/app/components/shared/header/upload-log-path/upload-log-path.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadLogPathComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_common_service__ = __webpack_require__("./src/app/service/common-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadLogPathComponent = /** @class */ (function () {
    function UploadLogPathComponent(fb, _CommonService, cd) {
        this.fb = fb;
        this._CommonService = _CommonService;
        this.cd = cd;
        this.closeUploadLogsMsg = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loadingForm = false;
        this.isFormSubmitted = false;
        this.mesgshow = [];
    }
    UploadLogPathComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    UploadLogPathComponent.prototype.createForm = function () {
        this.uploadLogsPathForm = this.fb.group({
            selectFile: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            gethPath: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            constellationPath: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    UploadLogPathComponent.prototype.prepareSave = function (data) {
        var input = new FormData();
        input.append('gethPath', String(data.gethPath));
        input.append('constellationPath', String(data.constellationPath));
        input.append("genesis", this.filesToUpload); // naming file gethLogs as file1,2,3 ...
        //input.append('private', String(this.isNetworkSelected));
        return input;
    };
    UploadLogPathComponent.prototype.onSelectFile = function (event) {
        if (event.target.files && event.target.files.length > 0) {
            this.filesToUpload = event.target.files[0];
            // this.contractAbi.invalid = false;
            console.log(' this.filesToUpload >>>>>>', this.filesToUpload);
        }
    };
    UploadLogPathComponent.prototype.onClose = function () {
        console.log('on close');
        this.mesgshow = [];
        this.filesToUpload = {};
        this.uploadLogsPathForm.reset();
        this.displayUploadLogs = false;
        if (!this.isFormSubmitted) {
            console.log('on close no action');
            this.closeUploadLogsMsg.emit({ modal: false, msg: null });
        }
    };
    UploadLogPathComponent.prototype.submitForm = function (data) {
        var _this = this;
        var formModel = this.prepareSave(data);
        this.isFormSubmitted = true;
        console.log("data>>", data);
        this.loadingForm = true;
        this._CommonService.uploadLogsPath(formModel).subscribe(function (data) {
            console.log(data.json());
            var response = data.json();
            setTimeout(function () {
                _this.loadingForm = false;
                _this.closeUploadLogsMsg.emit({ modal: false, msg: response.statusMessage });
                //this.mesgshow.push({ severity: 'success', summary: response.statusMessage });
                _this.displayUploadLogs = false;
            }, 3000);
        }, function (err) {
            console.log(err);
            setTimeout(function () {
                //this.mesgshow.push({ severity: 'error', summary: 'There is an error in file uploading' });
                _this.loadingForm = false;
                _this.displayUploadLogs = false;
                _this.closeUploadLogsMsg.emit({ modal: false, msg: 'There is an error in file uploading...' });
            }, 3000);
        });
    };
    UploadLogPathComponent.prototype.ngOnDestroy = function () {
        this.closeUploadLogsMsg.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], UploadLogPathComponent.prototype, "displayUploadLogs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UploadLogPathComponent.prototype, "closeUploadLogsMsg", void 0);
    UploadLogPathComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upload-log-path',
            template: __webpack_require__("./src/app/components/shared/header/upload-log-path/upload-log-path.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/header/upload-log-path/upload-log-path.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__service_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], UploadLogPathComponent);
    return UploadLogPathComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/header/whitelists/whitelists.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"p-dialog-wrapper p-dialog-wrapper-ip email-server-config\">\r\n    <p-dialog [(visible)]=\"displayWhitelist\" [modal]=\"true\" [responsive]=\"true\" [width]=\"600\" [height]=\"510\" draggable=\"true\" closeOnEscape=\"true\" dismissableMask=\"true\" (onHide)=\"onClose()\">\r\n        <p-header class=\"header\">\r\n            <h2>Whitelist</h2>\r\n        </p-header>\r\n        <div class=\"p-dialog-inner\">\r\n            <div class=\"ip-boxer\">\r\n                <div class=\"ip-top\">\r\n                    <div class=\"form-group row\" *ngIf=\"whitelists?.length > 0 || hideAddNewBtn == true\">\r\n                        <label class=\"col-md-3\">Add New Ip</label>\r\n                        <!-- <p-inputMask [(ngModel)]=\"listItems\" required=true class=\"form-control col-md-5\" mask=\"99.99.99.999\"></p-inputMask> -->\r\n                        <input type=\"text\" [required]=\"true\" class=\"form-control col-md-5\" [(ngModel)]=\"listItems\">\r\n                        <button type=\"button\" class=\"btn btn-green col-md-3\" (click)=\"addWhiteListIp(listItems)\">Add</button>\r\n                    </div>\r\n                    <div class=\"v-scrollbar\">\r\n                        <div *ngIf=\"whitelists\">\r\n                            <h3 *ngIf=\"whitelists?.length > 0\">Whitelisted IPs</h3>\r\n                            <div class=\"ip-row\">\r\n                                <ul class=\"list-unstyled list-ips\">\r\n                                    <li *ngFor=\"let item of whitelists;let i = index\">\r\n                                        {{item}}\r\n                                        <span class=\"icon-delete pull-right\" (click)=\"deleteIp(i)\">\r\n                      <i class=\"fa fa-trash\"></i>\r\n                    </span>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                            <div class=\"clearfix\"></div>\r\n                        </div>\r\n                        <div class=\"ip-bottom text-center\">\r\n                            <div class=\"btn-group\">\r\n                                <button type=\"button\" class=\"btn btn-green\" *ngIf=\"hideAddNewBtn != true\" (click)=\"addNewWhiteListIp()\">Add New Ip</button>\r\n                                <button type=\"button\" *ngIf=\"whitelists?.length > 0 || enableBtnForDeleted || hideAddNewBtn == true\" [disabled]=\"disableSave()\" class=\"btn btn-green btn-footer\" (click)=\"updateWhiteListIp()\">Save</button>\r\n                            </div>\r\n                        </div>\r\n                        <hr>\r\n                        <div *ngIf=\"connectedList\">\r\n                            <h3>Connected Node IPs</h3>\r\n                            <div class=\"table-responsive\">\r\n                                <table class=\"table\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th></th>\r\n                                            <th>IP Address</th>\r\n                                            <th>Connected Node Count</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let item of connectedList\">\r\n                                            <td>\r\n                                                <span title=\"{{(item.whitelisted == true) ? 'Whitelisted':''}}\" [ngClass]=\"{'icon-whitelist':(item.whitelisted == true),'icon-normal':(item.whitelisted != true)}\"></span>\r\n                                            </td>\r\n                                            <td>{{item.ip}}</td>\r\n                                            <td>{{item.count}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </p-dialog>"

/***/ }),

/***/ "./src/app/components/shared/header/whitelists/whitelists.component.scss":
/***/ (function(module, exports) {

module.exports = "/*Custom Fonts*/\n/*Fonts Colors*/\n/*media queries*/\n/*\r\n$point: Breakpoint integer in px\r\n$constraint: Constraint for media query (min/max)\r\n$feature: Media feature of query (width/height)\r\n*/\n@font-face {\n  font-family: 'Heebo-Bold';\n  src: url(\"/assets/fonts/heebo-bold.eot\");\n  src: url(\"/assets/fonts/heebo-bold.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-bold.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-bold.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-bold.svg#heebo-bold\") format(\"svg\"), url(\"/assets/fonts/heebo-bold.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'Heebo-Light';\n  src: url(\"/assets/fonts/heebo-light.eot\");\n  src: url(\"/assets/fonts/heebo-light.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-light.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-light.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-light.svg#heebo-light\") format(\"svg\"), url(\"/assets/fonts/heebo-light.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'Heebo-Regular';\n  src: url(\"/assets/fonts/heebo-regular.eot\");\n  src: url(\"/assets/fonts/heebo-regular.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-regular.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-regular.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-regular.svg#heebo-regular\") format(\"svg\"), url(\"/assets/fonts/heebo-regular.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'Heebo-Medium';\n  src: url(\"/assets/fonts/heebo-medium.eot\");\n  src: url(\"/assets/fonts/heebo-medium.woff2\") format(\"woff2\"), url(\"/assets/fonts/heebo-medium.woff\") format(\"woff\"), url(\"/assets/fonts/heebo-medium.ttf\") format(\"truetype\"), url(\"/assets/fonts/heebo-medium.svg#heebo-medium\") format(\"svg\"), url(\"/assets/fonts/heebo-medium.eot?#iefix\") format(\"embedded-opentype\");\n  font-weight: normal;\n  font-style: normal; }\n.p-dialog-wrapper .p-dialog-inner {\n  height: auto;\n  overflow: hidden;\n  padding: 0; }\n.p-dialog-wrapper .p-dialog-inner .v-scrollbar {\n    height: 354px;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    padding: 0 15px 0 0;\n    scroll-behavior: smooth;\n    position: relative; }\n.p-dialog-wrapper .p-dialog-inner .v-scrollbar::-webkit-scrollbar {\n      width: 4px;\n      height: 5px;\n      border-radius: 6px; }\n.p-dialog-wrapper .p-dialog-inner .v-scrollbar::-webkit-scrollbar-track {\n        background-color: #e6b800;\n        border-radius: 6px; }\n.p-dialog-wrapper .p-dialog-inner .v-scrollbar::-webkit-scrollbar-thumb {\n        background-color: #e6b800;\n        border-radius: 6px; }\n.p-dialog-wrapper .p-dialog-inner .v-scrollbar::-webkit-scrollbar-button {\n        display: none; }\n.p-dialog-wrapper .p-dialog-inner .v-scrollbar .form-footer {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      width: 137px; }\n.p-dialog-wrapper .p-dialog-inner .v-scrollbar .form-footer > .form-group {\n        position: fixed;\n        max-width: 128px;\n        bottom: 98px;\n        padding: 0; }\n.p-dialog-wrapper .p-dialog-inner label {\n    letter-spacing: 0.5px;\n    text-align: left;\n    color: #737171;\n    font-family: \"Heebo-Bold\";\n    text-transform: uppercase;\n    font-size: 12px; }\n.p-dialog-wrapper .p-dialog-inner input.form-control {\n    border-radius: 3px;\n    border: solid 1px #dde3e8;\n    -webkit-transition: none;\n    transition: none;\n    font-family: \"Heebo-Light\";\n    font-size: 13px;\n    color: #7c7c7c;\n    padding: 5px 10px; }\n.p-dialog-wrapper .p-dialog-inner input.form-control:focus {\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.p-dialog-wrapper .p-dialog-inner .btn-green {\n    border-radius: 4px;\n    background-color: #e6b800;\n    font-family: \"Heebo-Medium\";\n    border: 0;\n    color: #fff;\n    text-transform: uppercase;\n    padding: 8px 35px;\n    font-weight: 600;\n    font-size: 14px;\n    margin: 2px 3px 0 0;\n    display: block; }\n.p-dialog-wrapper .p-dialog-inner .ui-tooltip-text {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content; }\n.p-dialog-wrapper .p-dialog-inner .ui-tooltip-text.ui-shadow.ui-corner-all {\n      font-family: \"Heebo-Regular\";\n      font-size: 12px;\n      color: #fff;\n      white-space: nowrap; }\n.p-dialog-wrapper .p-dialog-inner .form-group {\n    position: relative;\n    padding-bottom: 10px; }\n.p-dialog-wrapper .p-dialog-inner .form-footer .form-group {\n    padding-bottom: 0;\n    margin-bottom: 3px; }\n.p-dialog-wrapper .p-dialog-inner .has-error .form-control {\n    border-bottom-color: #a94442; }\n.p-dialog-wrapper .p-dialog-inner .icon-whitelist {\n    background: url(\"/assets/images/whitelist1.png\") no-repeat 0 0/cover;\n    display: block;\n    width: 24px;\n    height: 24px; }\n.p-dialog-wrapper .p-dialog-inner .icon-normal {\n    background: url(\"/assets/images/normal.png\") no-repeat 0 0/cover;\n    display: block;\n    width: 24px;\n    height: 24px; }\n.p-dialog-wrapper-ip .ip-bottom {\n  background: #f5f5f5;\n  padding: 10px;\n  border-top: 2px solid #ccc; }\n.p-dialog-wrapper-ip table tr td:first-child {\n  width: 50px; }\n.p-dialog-wrapper-ip table tr td:last-child {\n  width: 195px; }\n.p-dialog-wrapper-ip table tr td {\n  width: auto; }\n.p-dialog-wrapper-ip .ip-top ul.list-ips li {\n  font-size: 20px;\n  width: calc(50% - 2px);\n  margin: 0 1px 1px 0;\n  padding: 10px 15px;\n  float: left; }\n.p-dialog-wrapper-ip .ip-top ul.list-ips li span {\n    display: inline-block;\n    cursor: pointer; }\n.p-dialog-wrapper-ip .ip-top label {\n  font-size: 17px;\n  margin: 0;\n  line-height: 50px; }\n.p-dialog-wrapper-ip .ip-top input.form-control {\n  font-size: 18px;\n  border-radius: 0; }\n.p-dialog-wrapper-ip .ip-top button.btn-green {\n  border-radius: 0;\n  margin: 0; }\n.p-dialog-wrapper-ip .ip-top button.btn-footer {\n  margin-left: 10px; }\n"

/***/ }),

/***/ "./src/app/components/shared/header/whitelists/whitelists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhitelistsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__("./src/app/service/common-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WhitelistsComponent = /** @class */ (function () {
    function WhitelistsComponent(_CommonService) {
        this._CommonService = _CommonService;
        this.showEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.msgEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.whitelists = [];
        this.addedwhitelistIp = [];
        this.response = {};
        this.enableBtnForDeleted = false;
    }
    WhitelistsComponent.prototype.ngOnInit = function () {
        this.getWhiteListIp();
    };
    WhitelistsComponent.prototype.getWhiteListIp = function () {
        var _this = this;
        this._CommonService.getWhiteListIp().subscribe(function (res) {
            var data = res.json();
            _this.whitelists = data.whiteList;
            _this.connectedList = data.connectedList;
            if (_this.whitelists && _this.whitelists.length) {
                _this.hideAddNewBtn = true;
            }
            console.log("this.whitelists>>>>>>>>>>>>", _this.whitelists);
        });
    };
    WhitelistsComponent.prototype.deleteIp = function (index) {
        this.whitelists.splice(index, 1);
        this.enableBtnForDeleted = true;
        // if (this.whitelists.length == 0) {
        //   this.enableBtnForDeleted = true;
        // }
    };
    WhitelistsComponent.prototype.addWhiteListIp = function (listItems) {
        // this.hideAddNewBtn = false;
        this.whitelists = this.whitelists || [];
        if (listItems) {
            this.addedwhitelistIp.push(listItems);
            this.whitelists.push(listItems);
        }
    };
    WhitelistsComponent.prototype.addNewWhiteListIp = function () {
        this.hideAddNewBtn = true;
    };
    WhitelistsComponent.prototype.disableSave = function () {
        if (this.addedwhitelistIp.length != 0 || this.enableBtnForDeleted == true) {
            return false;
        }
        else {
            return true;
        }
    };
    WhitelistsComponent.prototype.updateWhiteListIp = function () {
        var _this = this;
        this._CommonService.addWhiteListIp(this.whitelists).subscribe(function (res) {
            if (res) {
                _this.enableBtnForDeleted = false;
            }
            _this.response = res;
            console.log(_this.response, "=====this.response=====");
            _this.msgs = [];
            _this.msgs.push({
                severity: 'success', summary: 'Success Message',
                detail: _this.response.statusMessage
            });
            _this.msgEvent.emit(_this.msgs);
            //this.showEvent.emit(false);
            _this.getWhiteListIp();
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({
                severity: 'error', summary: '',
                detail: 'Error while adding account.'
            });
            console.log('error', error);
        });
    };
    WhitelistsComponent.prototype.onClose = function () {
        this.displayWhitelist = false;
        this.showEvent.emit(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WhitelistsComponent.prototype, "displayWhitelist", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], WhitelistsComponent.prototype, "showEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], WhitelistsComponent.prototype, "msgEvent", void 0);
    WhitelistsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-whitelists',
            template: __webpack_require__("./src/app/components/shared/header/whitelists/whitelists.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/header/whitelists/whitelists.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */]])
    ], WhitelistsComponent);
    return WhitelistsComponent;
}());



/***/ }),

/***/ "./src/app/service/common-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommonService = /** @class */ (function () {
    function CommonService(http) {
        this.http = http;
        this.nodeURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].nodeURL;
        this.messagesUrl = 'assets/data/custom_messages.json';
        this.showEl = 7;
        this.actionCalled = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    CommonService.prototype.sendCall = function (message) {
        return this.actionCalled.next({ text: message });
    };
    CommonService.prototype.getCall = function () {
        return this.actionCalled.asObservable();
    };
    CommonService.prototype.getMessages = function () {
        //console.log('this.messagesUrl >>>>', this.messagesUrl);
        return this.http.get(this.messagesUrl)
            .map(function (data) { return data.json(); });
    };
    //Retrive the data...
    CommonService.prototype.getBlockData = function (referenceNo) {
        //console.log('getBlockData----', this.nodeURL + 'block?' + 'number' + "=" + this.showEl + "&" + 'reference' + "=");
        var urlStr = this.nodeURL + 'block?' + 'number' + "=" + this.showEl;
        if (referenceNo != null)
            urlStr = urlStr + "&" + 'reference' + "=" + referenceNo;
        //return this.http.get(this.nodeURL + 'block?' + 'number' + "=" + this.showEl + "&" + 'reference' + "=" + noOfItemsToShowInitially)
        return this.http.get(urlStr);
    };
    //Post the createNetwork data...
    CommonService.prototype.createNetwork = function (params) {
        //  return this.http.post(this.nodeURL + 'broker/trade', params);
        ////console.log('this.nodeURL createNetwork >>>>', this.nodeURL + 'createNetwork')
        ////console.log('params>>>>---', params);
        ////console.log('typeofparams>>>>---', typeof (params));
        return this.http.post(this.nodeURL + 'createNetwork', params);
    };
    //Post the joinNetwork data...
    CommonService.prototype.joinNetwork = function (params) {
        return this.http.post(this.nodeURL + 'joinNetwork', params);
    };
    // Retrive the Transaction Details...
    CommonService.prototype.getTransactionDetails = function (hashId) {
        return this.http.get(this.nodeURL + 'txnrcpt/' + { hashId: hashId })
            .map(function (data) { return data.json(); });
    };
    // Retrive the Block Details...
    CommonService.prototype.getBlockDetails = function (BlkNum) {
        //console.log('this.nodeURL >>>>>..', this.nodeURL + 'block/' + BlkNum + '')
        return this.http.get(this.nodeURL + 'block/' + BlkNum + '')
            .map(function (data) { return data.json(); });
    };
    // Retrive the transcation Details...
    CommonService.prototype.getTxNDetails = function (hashKey) {
        //console.log('this.nodeURL >>>>>..', this.nodeURL + 'txnrcpt/' + hashKey + '')
        return this.http.get(this.nodeURL + 'txnrcpt/' + hashKey + '')
            .map(function (data) { return data.json(); });
    };
    // Retrive the transcation Details...
    CommonService.prototype.getNodeInfo = function () {
        //console.log('this.nodeURL >>>>>..', this.nodeURL + 'peer')
        return this.http.get(this.nodeURL + 'peer');
    };
    CommonService.prototype.activeNodeInfo = function () {
        //console.log('this.nodeURL >>>>>..', this.nodeURL + 'activeNodes')
        return this.http.get(this.nodeURL + 'activeNodes');
    };
    // Retrive the transcation Details...
    CommonService.prototype.getPendingRequest = function () {
        //console.log('this.nodeURL >>>>>..', this.nodeURL + 'pendingJoinRequests')
        return this.http.get(this.nodeURL + 'pendingJoinRequests');
    };
    CommonService.prototype.postjoinNetwork = function (params) {
        //console.log('params', params);
        //const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        //const options = new RequestOptions({ headers: headers });
        return this.http.post(this.nodeURL + 'joinRequestResponse', params);
    };
    // Retrive the transcation Details...
    CommonService.prototype.getNodeList = function () {
        //console.log('this.nodeURL + nodeList >>>>>..', this.nodeURL + 'getNodeList')
        return this.http.get(this.nodeURL + 'getNodeList');
    };
    CommonService.prototype.getNodeLatency = function () {
        //console.log('this.nodeURL + nodeList >>>>>..', this.nodeURL + 'latency')
        return this.http.get(this.nodeURL + 'latency');
    };
    CommonService.prototype.peerDetails = function () {
        //console.log('peerDetails----', this.nodeURL + 'peer');
        return this.http.get(this.nodeURL + 'peer');
    };
    CommonService.prototype.nodeDetail = function (NodeKey) {
        //console.log('NodeDetails----', this.nodeURL + 'peer/' + NodeKey + '');
        return this.http.get(this.nodeURL + 'peer/' + NodeKey + '');
    };
    CommonService.prototype.getLatestBlock = function () {
        //console.log('NodeDetails----', this.nodeURL + 'latestBlock');
        return this.http.get(this.nodeURL + 'latestBlock');
    };
    CommonService.prototype.deployContract = function (params) {
        //console.log('this.nodeURL contract deploy >>>>', this.nodeURL + 'deployContract')
        return this.http.post(this.nodeURL + 'deployContract', params);
    };
    CommonService.prototype.updateNode = function (params) {
        //console.log('updateNode>>>>', params);
        //console.log('this.nodeURL updateNode >>>>', this.nodeURL + 'updateNode')
        return this.http.post(this.nodeURL + 'updateNode', params);
    };
    CommonService.prototype.getLogs = function () {
        //console.log('GetLogs----', this.nodeURL + 'logs');
        return this.http.get(this.nodeURL + 'logs');
    };
    CommonService.prototype.getTxNblocks = function (hashKey) {
        //console.log('txnsearch---', this.nodeURL + 'txnsearch/' + hashKey + '');
        return this.http.get(this.nodeURL + 'txnsearch/' + hashKey + '')
            .map(function (data) { return data.json(); });
    };
    //Post the createNetwork data...
    CommonService.prototype.emailServerConfig = function (params) {
        //console.log('this.nodeURL email server Config >>>>', this.nodeURL + 'mailserver')
        // const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        // const options = new RequestOptions({ headers: headers });
        return this.http.post(this.nodeURL + 'mailserver', params);
    };
    CommonService.prototype.getNodeNameList = function () {
        //console.log('GetLogs----', this.nodeURL + 'getNodeList');
        return this.http.get(this.nodeURL + 'getNodeList');
    };
    CommonService.prototype.getChartData = function () {
        //console.log('chartData----', this.nodeURL + 'chartData');
        return this.http.get(this.nodeURL + 'chartData');
    };
    CommonService.prototype.getLatestChartData = function () {
        //console.log('latestChartData----', this.nodeURL + 'latestChartData');
        return this.http.get(this.nodeURL + 'latestChartData');
    };
    CommonService.prototype.getContractList = function () {
        console.log('getContractList----');
        return this.http.get(this.nodeURL + 'contractList');
    };
    CommonService.prototype.getContractCount = function () {
        console.log('getContractCount----');
        return this.http.get(this.nodeURL + 'contractCount');
    };
    CommonService.prototype.updateContractDetails = function (params) {
        console.log('params >>>>', params);
        return this.http.post(this.nodeURL + 'updateContractDetails', params);
    };
    CommonService.prototype.uploadLogsPath = function (params) {
        console.log('params >>>>', params);
        return this.http.post(this.nodeURL + 'attachedNodeDetails', params);
    };
    CommonService.prototype.getuploadLogsPath = function () {
        //console.log('GetLogs----', this.nodeURL + 'logs');
        return this.http.get(this.nodeURL + 'initialized');
    };
    CommonService.prototype.getAccountList = function () {
        //console.log('GetLogs----', this.nodeURL + 'logs');
        // return this.http.get(environment.testnodeURL + 'getAccounts')
        // .map(data => data.json());
        return this.http.get(this.nodeURL + 'getAccounts');
    };
    CommonService.prototype.addAccount = function (params) {
        console.log('params >>>>', params);
        // return this.http.post(environment.testnodeURL + 'createAccount', params)
        // .map(data => data.json());
        return this.http.post(this.nodeURL + 'createAccount', params)
            .map(function (data) { return data.json(); });
    };
    CommonService.prototype.getWhiteListIp = function () {
        return this.http.get(this.nodeURL + 'getWhitelist');
    };
    CommonService.prototype.addWhiteListIp = function (params) {
        console.log('params >>>>', params);
        return this.http.post(this.nodeURL + 'updateWhitelist', params).map(function (data) { return data.json(); });
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/service/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    MessageService.prototype.sendMessage = function (message) {
        this.subject.next(message);
    };
    MessageService.prototype.clearMessage = function () {
        this.subject.next();
    };
    MessageService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/service/utility.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilityService = /** @class */ (function () {
    function UtilityService() {
        this.networkRoleNodeList = [];
        this.networkRoleNodeList = [
            { label: 'PowerChain', value: 'R1fOFUfzBbSVaXEYecrlo9rENW0dam0kmaA2pasGM14=' },
            { label: 'NET', value: 'Er5J8G+jXQA9O2eu7YdhkraYM+j+O5ArnMSZ24PpLQY=' },
            { label: 'NGY', value: 'XB6tdKvVBT5e5R+M62mtoIUEPVf2lrPFVgQJLIAtsTM=' },
        ];
        this.serviceCallInterval = 10; // in seconds
    }
    UtilityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UtilityService);
    return UtilityService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    nodeURL: '/'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map