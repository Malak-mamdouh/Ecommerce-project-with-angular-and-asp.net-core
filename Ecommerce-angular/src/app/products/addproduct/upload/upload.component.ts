import { Component, OnInit, Output , EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public progress: number;
  message: string;
  uploadForm: FormGroup;
  baseUrl = 'https://localhost:44371/Product/Upload';
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onUploadFinished = new EventEmitter();
  @Input() url: string;

  constructor(private fb: FormBuilder, private http: HttpClient) { }


  ngOnInit(): void {
    this.uploadForm = this.fb.group({
      profile: ['']
    });
    console.log(this.url);
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);

    this.http.post<any>(this.baseUrl, formData , {reportProgress: true , observe: 'events'})
    .subscribe( event => {
      if (event.type === HttpEventType.UploadProgress){
        this.progress = Math.round(100 * event.loaded / event.total);
      }
      else if (event.type === HttpEventType.Response){
        this.onUploadFinished.emit(event.body);
      }
    } , err => console.log(err)
       // (res) => console.log(res),
      // (err) => console.log(err)
    );
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }

}
