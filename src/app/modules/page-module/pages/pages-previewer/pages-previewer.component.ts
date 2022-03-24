import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doc } from 'src/app/core/interfaces/docs.interface';

@Component({
  selector: 'app-pages-previewer',
  templateUrl: './pages-previewer.component.html',
  styleUrls: ['./pages-previewer.component.scss']
})
export class DocsPreviewerComponent implements OnInit {
  
  document?: Doc;
  anchors: string[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolve = this.route.snapshot.data;
    this.document = resolve['previewer'];
  }
}