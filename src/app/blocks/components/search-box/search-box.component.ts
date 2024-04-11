import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalHostDataService } from '@core/services';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent implements OnInit {

  @Output() closeDialogEvent: EventEmitter<boolean> = new EventEmitter();

  searchInput = new FormControl<string | null>(null);

  constructor(
    protected _localHostDataService: LocalHostDataService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this._localHostDataService.getRecentSearches()
  }

  onSearch() {
    if (this.searchInput.value == null) {
      return;
    }
    this._router.navigate(['search'], { queryParams: { searchTerm: this.searchInput.value } })
    this._localHostDataService.setRecentSearches(this.searchInput.value)
    this.searchInput.patchValue(null)
    this.closeDialogEvent.emit(false);
  }

  removeFromRecentSearches(i: string) {
    this._localHostDataService.removeFromRecentSearches(i);
  }

  onRecentClick(searchTerm: string) {
    this._localHostDataService.setRecentSearches(searchTerm);
    this.searchInput.patchValue(searchTerm)
    this.onSearch()
  }

}
