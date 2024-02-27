export class PaginationRequest {
    selectItemsPerPage: number[] = [5, 10, 25, 100];
    pageSize: number = this.selectItemsPerPage[0];
    pageIndex: number = 1;
    allItemsLength: number = 0;
}