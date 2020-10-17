import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup} from '@angular/forms';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  FormData: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService) { }
  ngOnInit() {
    this.FormData = this.builder.group({
    Fullname: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
    Comment: new FormControl('', [Validators.required])
    });
  }
  onSubmit(FormData) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
    .subscribe(response => {
    location.href = 'https://vipbuildinggroup.com';
    console.log(response)
    }, error => {
    console.warn(error.responseText)
    console.log({ error })
    })
    }
  }
