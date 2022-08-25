# pour cacher le header: 

```css
tr.mat-header-row  {
display:none;
}
```

# paginator: customiser les textes
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  ngAfterViewInit(): void {

    this.paginator._intl.itemsPerPageLabel = 'Pro Seite';
    this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number): string => {
      const start = page * pageSize + 1;
      const end = (page + 1) * pageSize;
      return `${start} - ${end} von ${length}`
      
      }
