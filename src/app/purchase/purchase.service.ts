import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
//import { Subscription } from 'rxjs/Subscription';

//import { Product } from '../products/product';
import { PurchaseInfo } from './PurchaseInfo';
import { ConfigService } from '../config/config.service';

Stripe.setPublishableKey('pk_test_KB93PVnmMqX5CuBDWEGqp9J7');

@Injectable()
export class PurchaseService {
    private purchaseInfo: PurchaseInfo;
    //private baseUrl = 'http://ec2-34-207-115-234.compute-1.amazonaws.com/';
    private baseUrl = '';
    //private observable: Observable<any>;
    private creditCardTokenSubject: Subject<any>;
    private configured: boolean = false;
    private config: any;

    constructor(
        private http: Http,
        private configService: ConfigService
    ) {
        this.creditCardTokenSubject = new Subject<any>();
        console.log('this.configService = ' + JSON.stringify(this.configService));
        this.configService.getConfig((configuration) => {
            this.config = configuration;
            this.baseUrl = this.config.baseUrl;
            this.configured = true;
        });
    }

    getCreditCardToken(purchaseInfo: PurchaseInfo): Observable<any> {
        this.purchaseInfo = purchaseInfo;
        if (this.creditCardTokenSubject) {
            this.creditCardTokenSubject = new Subject<any>();
        }
        //this.observable = Observable.create(observer => {
        //    alert('observer = ' + observer);
        //    observer.next('called observer.next');
        //});




        let message = '';
        message += 'purchase.service.ts:PurchaseService.purchase()\n\n';
        message += '  Stripe = ' + Stripe + '\n\n';
        message += 'cartItems = ' + JSON.stringify(this.purchaseInfo) + '\n\n';

        //alert(message);



        Stripe.card.createToken({
            number: purchaseInfo.ccnumber,
            cvc: purchaseInfo.ccv2,
            exp_month: purchaseInfo.ccexpmonth,
            exp_year: purchaseInfo.ccexpyear
        }, (status, response) => {
            console.log('tokenCreated:\n\tstatus = ' + status + '\n\tresponse = ' + JSON.stringify(response));

            //const url = this.baseUrl + "purchases/";
            //return this.http.put(
            //    url,
            //    {})
            //    .map(res => res.json());
            if (status == 200) {
                this.creditCardTokenSubject.next(response);
            } else {
                throw (response)
            }
        });

        //return this.observable;
        return this.creditCardTokenSubject.asObservable();
    }


    createCharge(purchaseInfo: PurchaseInfo): Observable<any> {
        this.purchaseInfo = purchaseInfo;
        console.log('createCharge this.purchseInfo = ' + JSON.stringify(this.purchaseInfo));
        let url = this.baseUrl + '/purchases/charges';
        return this.http.post(url, { purchaseInfo: purchaseInfo }).map(res => res.json);
    }

}