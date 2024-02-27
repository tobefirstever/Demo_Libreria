import { Injectable } from '@angular/core';
import { PaginationRequest } from '../models/pagination-request.model';
import { PageEvent } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class PaginationService {
    private _paginationRequest: PaginationRequest;

    get pageNumber(): number {
        return this._paginationRequest.pageIndex;
    }

    get selectItemsPerPage(): number[] {
        return this._paginationRequest.selectItemsPerPage;
    }

    get pageSize(): number {
        return this._paginationRequest.pageSize;
    }

    constructor() {
        this._paginationRequest = new PaginationRequest();
    }

    change(pageEvent: PageEvent) {
        this._paginationRequest.pageIndex = pageEvent.pageIndex + 1;
        this._paginationRequest.pageSize = pageEvent.pageSize;
        this._paginationRequest.allItemsLength = pageEvent.length;
    }
}