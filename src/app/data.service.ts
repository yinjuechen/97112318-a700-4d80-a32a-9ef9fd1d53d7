import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {map} from 'rxjs/operators';

@Injectable()
export class DataService {

  private searchTextSource = new BehaviorSubject<string>("");
  currentSearchText = this.searchTextSource.asObservable();

  constructor() { }

  changeSearchText(searchText: string) {
    // add data to an observable
     this.searchTextSource.next(searchText);
     // this.currentSearchText = this.searchTextSource.asObservable();
     // console.log(this.currentSearchText);
    return this.currentSearchText;
  }


}
