import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownService, MarkedRenderer } from 'ngx-markdown';
import { REGEX } from 'src/app/core/helpers/regex.helper';
import { textSlugfy } from 'src/app/core/helpers/string.helpers';
import { Page } from 'src/app/modules/page-module/interfaces/page.interface';
import { marked } from 'marked';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pages-previewer',
  templateUrl: './pages-previewer.component.html',
  styleUrls: ['./pages-previewer.component.scss']
})
export class DocsPreviewerComponent implements OnInit {
  page?: Page;
  anchors: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    const resolve = this.route.snapshot.data;
    this.page = resolve['previewer'];
    this.generateHeaders();
  }

  generateHeaders(): void {
    const headers = this.page.content.match(REGEX.HEADING);
    headers.map(
      head => this.anchors.push(head.replace(REGEX.HEADING_TEXT, ""))
    );
  }

  scrollTo(anchor: string): void {
    console.log(textSlugfy(anchor))
    this.viewportScroller.scrollToAnchor(textSlugfy(anchor));
  }
}
