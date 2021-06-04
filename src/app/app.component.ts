import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContextService } from './services/context/context.service';
import { AppDetails } from './model/init/app-details.model';
//import { environment } from "@environment"; // nice!

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mycv';

  //environment = environment;

  appDetails: AppDetails;

  constructor(private context: ContextService) {}

  ngOnInit(): void {
    /*console.log(
      "AppComponent: environment : " + JSON.stringify(this.environment)
    );*/

    this.context.init().subscribe((response) => {
      this.appDetails = response;
      console.log(
        'AppComponent: retreive response : ' + JSON.stringify(response)
      );
      if (this.appDetails != null) {
        console.log(
          'AppComponent: retreive appDetails : ' +
            JSON.stringify(this.appDetails)
        );
        // Save session data - appDetails

        // Retrieve session data - Skills appDetails
      }
    });
  }

  ngOnDestroy(): void {
    //
  }
}
