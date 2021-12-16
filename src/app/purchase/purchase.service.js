"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Subject_1 = require("rxjs/Subject");
var config_service_1 = require("../config/config.service");
Stripe.setPublishableKey('pk_test_KB93PVnmMqX5CuBDWEGqp9J7');
var PurchaseService = (function () {
    function PurchaseService(http, configService) {
        var _this = this;
        this.http = http;
        this.configService = configService;
        //private baseUrl = 'http://ec2-34-207-115-234.compute-1.amazonaws.com/';
        this.baseUrl = '';
        this.configured = false;
        this.creditCardTokenSubject = new Subject_1.Subject();
        console.log('this.configService = ' + JSON.stringify(this.configService));
        this.configService.getConfig(function (configuration) {
            _this.config = configuration;
            _this.baseUrl = _this.config.baseUrl;
            _this.configured = true;
        });
    }
    PurchaseService.prototype.getCreditCardToken = function (purchaseInfo) {
        var _this = this;
        this.purchaseInfo = purchaseInfo;
        if (this.creditCardTokenSubject) {
            this.creditCardTokenSubject = new Subject_1.Subject();
        }
        //this.observable = Observable.create(observer => {
        //    alert('observer = ' + observer);
        //    observer.next('called observer.next');
        //});
        var message = '';
        message += 'purchase.service.ts:PurchaseService.purchase()\n\n';
        message += '  Stripe = ' + Stripe + '\n\n';
        message += 'cartItems = ' + JSON.stringify(this.purchaseInfo) + '\n\n';
        //alert(message);
        Stripe.card.createToken({
            number: purchaseInfo.ccnumber,
            cvc: purchaseInfo.ccv2,
            exp_month: purchaseInfo.ccexpmonth,
            exp_year: purchaseInfo.ccexpyear
        }, function (status, response) {
            console.log('tokenCreated:\n\tstatus = ' + status + '\n\tresponse = ' + JSON.stringify(response));
            //const url = this.baseUrl + "purchases/";
            //return this.http.put(
            //    url,
            //    {})
            //    .map(res => res.json());
            if (status == 200) {
                _this.creditCardTokenSubject.next(response);
            }
            else {
                throw (response);
            }
        });
        //return this.observable;
        return this.creditCardTokenSubject.asObservable();
    };
    PurchaseService.prototype.createCharge = function (purchaseInfo) {
        this.purchaseInfo = purchaseInfo;
        console.log('createCharge this.purchseInfo = ' + JSON.stringify(this.purchaseInfo));
        var url = this.baseUrl + '/purchases/charges';
        return this.http.post(url, { purchaseInfo: purchaseInfo }).map(function (res) { return res.json; });
    };
    return PurchaseService;
}());
PurchaseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        config_service_1.ConfigService])
], PurchaseService);
exports.PurchaseService = PurchaseService;
//# sourceMappingURL=purchase.service.js.map