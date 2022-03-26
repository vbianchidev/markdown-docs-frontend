import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownService } from 'ngx-markdown';
import { REGEX } from 'src/app/core/helpers/regex.helper';
import { textSlugfy } from 'src/app/core/helpers/string.helpers';
import { Page } from 'src/app/modules/page-module/interfaces/page.interface';

@Component({
  selector: 'app-pages-previewer',
  templateUrl: './pages-previewer.component.html',
  styleUrls: ['./pages-previewer.component.scss']
})
export class DocsPreviewerComponent implements OnInit {
  page?: Page;
  anchors: string[] = [];
  teste: any;

  constructor(
    private route: ActivatedRoute,
    private markdownService: MarkdownService
  ) { }

  ngOnInit(): void {
    const resolve = this.route.snapshot.data;
    this.page = resolve['previewer'];

    this.markdownService.renderer.heading = (text: string, level: number) => {
      const escapedText = text.toLowerCase().replace(REGEX.SLUGFY_WORDS, '-');
      return `
        <h${level}>
          <span class="${escapedText}"></span> 
          ${text}
        </h${level}>
      `;
    };

    const headers = this.page.content.match(REGEX.HEADING);
    headers.map(
      head => this.anchors.push(head.replace(REGEX.HEADING_TEXT, ""))
    );
  }

  public titleToLink(title: string): string {
    return "#" + textSlugfy(title);
  }

  public scrollTo(anchor: string) {
    
  }
}
