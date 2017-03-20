import { HttpService } from './http.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HttpService]
})
export class AppComponent {
  dataArray = [];
  asyncStr = this.httpService.getData();

  constructor(private httpService: HttpService) {}


  onSubmit(username: string, email: string) {
    const user = { username, email };
    console.log(user);
    this.httpService.sendData(user)
      .subscribe((data: any) => console.log(data),
        error => console.log(error));
  }

  onGetData() {
    this.httpService.getOwnData().subscribe((data) => {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this.dataArray.push(data[key]);
        }
      }
    });
  }
}
