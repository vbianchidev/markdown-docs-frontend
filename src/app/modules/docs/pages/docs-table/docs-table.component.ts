import { Component, OnInit } from '@angular/core';
import { delay, Observable, startWith } from 'rxjs';
import { Doc } from 'src/app/core/interfaces/docs.interface';

import { DocsService } from '../../services/docs.service';

@Component({
  selector: 'app-docs-table',
  templateUrl: './docs-table.component.html',
  styleUrls: ['./docs-table.component.scss']
})
export class DocsTableComponent implements OnInit {
  dataSource: Observable<Doc[]>;
  displayedColumns: string[] = [
    "_id", "title", "slug", "createdAt", "updatedAt", "__v"
  ];

  constructor(public docsService: DocsService) {}

  ngOnInit(): void {
    this.dataSource = this.docsService.getAll();
  }
}
