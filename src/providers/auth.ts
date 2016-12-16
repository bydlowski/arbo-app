import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Auth {

  // Asyncronous login check that returns a promise and in this case retunrs true
  login() {
  	return new Promise((resolve) => {
  		// Here we would normally hit the server with a http request
  		setTimeout(() => {
  			// In this case we are just waiting 3 seconds and returnind true
  			resolve(false);
  		}, 1000);
  	});
  }
}
