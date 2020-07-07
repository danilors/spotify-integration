import { Injectable } from '@angular/core';
import { TokenContent } from '../models';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }
 
  public buildQueryString(parametersObject): string {
    let result = '';
    let counter = 1;
    if (!parametersObject) {
      return result;
    }
    const len = Object.values(parametersObject).length;
    for (const propertyName in parametersObject) {
      if (parametersObject.hasOwnProperty(propertyName)) {
        result = result.concat(`${propertyName}=${parametersObject[propertyName]}${counter < len ? '&' : ''}`);
        counter++;
      }
    }
    return result;
  }
  
}
