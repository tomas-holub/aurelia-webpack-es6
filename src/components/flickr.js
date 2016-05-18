import {HttpClient} from 'aurelia-http-client';

var url = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json';

export class Flickr {
	static inject() {return [HttpClient]}

	constructor(http) {
		this.images = [];
		this.http = http;
		this.http.jsonp(url).then(response => {
			this.images = response.content.items;
		});
	}

}
