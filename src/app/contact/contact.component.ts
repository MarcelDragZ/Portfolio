import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @ViewChild('myform') myForm!: any;
  @ViewChild('selectField') selectField!: any;
  @ViewChild('nameField') nameField!: any;
  @ViewChild('emailField') emailField!: any;
  @ViewChild('messageField') messageField!: any;
  @ViewChild('buttonField') buttonField!: any;
  sendingMailProgress = false;

  constructor() {}

  ngOnInit(): void {}

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let selectField = this.selectField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let buttonField = this.buttonField.nativeElement;
    nameField.disabled = true;
    selectField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    buttonField.disabled = true;
    this.sendingMailProgress = true;

    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('email', emailField.value);
    formData.append('select', selectField.value);
    formData.append('message', messageField.value);

    await fetch('https://marcel-herzog.developerakademie.net/send_mail.php', {
      method: 'POST',
      body: formData,
    });

    setTimeout(() => {
      this.sendingMailProgress = false;
      nameField.disabled = false;
      selectField.disabled = false;
      emailField.disabled = false;
      messageField.disabled = false;
      buttonField.disabled = false;
    }, 2000);

  }
}
