import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {DataService} from '../data.service';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private fb: FormBuilder, public service: DataService) {
  }

  ngOnInit() {

    // add corresponding validators
    this.searchForm = this.fb.group({
      'searchText': ['', [Validators.required]]
    });

    // write a subsciber/valueChanges function that calls changeSearchText upon value change in the form

  }


  search() {
    // console.log(this.searchForm.controls.searchText);
     this.service.changeSearchText(this.searchForm.controls.searchText.value).subscribe(value => {
        console.log(value);
     });

  }
}
