import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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
  loaderFinish = false;
  submitButtonClicked = false;

  nameControl = new FormControl('', Validators.required);
  selectControl = new FormControl('', Validators.required);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  messageControl = new FormControl('', Validators.required);

  constructor() {}

  ngOnInit(): void {}

  async sendMail() {
    this.submitButtonClicked = true;
    let nameField = this.nameField.nativeElement;
    let selectField = this.selectField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let buttonField = this.buttonField.nativeElement;
    await this.sendMailFunctions(
      nameField,
      selectField,
      emailField,
      messageField,
      buttonField
    );
  }

  async sendMailFunctions(
    nameField,
    selectField,
    emailField,
    messageField,
    buttonField
  ) {
    if (this.checkForValidation()) {
      this.setSendProgress(nameField, selectField, messageField, buttonField);
      await this.sendFormData(emailField, messageField);
      this.postSendFunctions(
        nameField,
        selectField,
        emailField,
        messageField,
        buttonField
      );
    } else {
      setTimeout(() => {
        this.submitButtonClicked = false;
      }, 2000);
    }
  }

  async sendFormData(emailField, messageField) {
    let formData = new FormData();
    formData.append('name', emailField.value);
    formData.append('message', messageField.value);

    await fetch('https://marcel-herzog.developerakademie.net/send_mail.php', {
      method: 'POST',
      body: formData,
    });
  }

  setSendProgress(nameField, selectField, messageField, buttonField) {
    nameField.disabled = true;
    selectField.disabled = true;
    messageField.disabled = true;
    buttonField.disabled = true;
    this.sendingMailProgress = true;
    this.loaderFinish = false;
  }

  checkForValidation() {
    if (
      this.nameControl.valid &&
      this.selectControl.valid &&
      this.messageControl.valid &&
      this.emailControl.valid
    ) {
      return true;
    } else {
      return false;
    }
  }

  postSendFunctions(
    nameField,
    selectField,
    emailField,
    messageField,
    buttonField
  ) {
    setTimeout(() => {
      this.loaderFinish = true;
    }, 1500);
    setTimeout(() => {
      this.resetForm(
        nameField,
        selectField,
        emailField,
        messageField,
        buttonField
      );
    }, 2500);
  }

  resetForm(nameField, selectField, emailField, messageField, buttonField) {
    this.sendingMailProgress = false;
    nameField.disabled = false;
    selectField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    nameField.value = '';
    selectField.value = '';
    emailField.value = '';
    messageField.value = '';
    this.nameControl.reset();
    this.selectControl.reset();
    this.emailControl.reset();
    this.messageControl.reset();
    buttonField.disabled = false;
    this.submitButtonClicked = false;
  }
}
