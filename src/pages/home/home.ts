import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignaturePad } from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  public signature: string;
  public isDrawing = false;
  private signaturePadOptions: Object = {
    'minWidth': 2,
    'canvasWidth': 400,
    'canvasHeight': 200,
    // 'backgroundColor': '#f6fbff',
    // 'penColor': '#666a73'
  };

  constructor(public navCtrl: NavController) {
  }

  ionViewDidEnter() {
    this.signaturePad.clear();
  }

  drawComplete() {
    this.isDrawing = false;
  }

  drawStart() {
    this.isDrawing = true;
  }

  clearPad() {
    this.signaturePad.clear();
  }

  savePad() {
    this.signature = this.signaturePad.toDataURL();
    this.signaturePad.clear();
  }

}
