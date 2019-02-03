import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { from } from 'rxjs';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  info: any;

  public payuform: any = {};
  disablePaymentButton: boolean = true;
  constructor(private http: HttpClient, private token: TokenStorageService) { }

  confirmPayment() {
    const paymentPayload = {
      email: this.payuform.email,
      name: this.payuform.username,
      phone: this.payuform.phone,
      productInfo: this.payuform.productinfo,
      amount: this.payuform.amount
    }
    return this.http.post<any>('http://localhost:8080/payment/payment-details', paymentPayload).subscribe(
      data => {
      console.log(data);
      this.payuform.txnid = data.txnId;
      this.payuform.surl = data.sUrl;
      this.payuform.furl = data.fUrl;
      this.payuform.key = data.key;
      this.payuform.hash = data.hash;
      this.payuform.txnid = data.txnId;
        this.disablePaymentButton = false;
    }, error1 => {
        console.log(error1);
      })
  }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }


}