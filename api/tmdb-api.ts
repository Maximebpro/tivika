import * as request from "request";

import * as $http from "request-promise";

export class TmdbApi {
  private static apiKey: string = '0b653c11940c75630c04fb8ba79d5c2f';
  private static baseUrl: string = 'https://api.themoviedb.org/3';
  private static configuration: undefined;

  private static injectApiKey(url: string) {
    let newUrl = url;

    if (url.indexOf('?') > 0) {
      newUrl += '&';
    } else {
      newUrl += '?';
    }
    return newUrl + 'api_key=' + this.apiKey;
  }

  public static request(uri: string) {
    return $http(this.injectApiKey(this.baseUrl + uri));
  }
}