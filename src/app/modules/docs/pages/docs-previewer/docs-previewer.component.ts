import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doc } from 'src/app/core/interfaces/docs.interface';

@Component({
  selector: 'app-previewer',
  templateUrl: './docs-previewer.component.html',
  styleUrls: ['./docs-previewer.component.scss']
})
export class DocsPreviewerComponent implements OnInit {
  document?: Doc;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolve = this.route.snapshot.data;
    this.document = resolve['previewer'];
  }
}