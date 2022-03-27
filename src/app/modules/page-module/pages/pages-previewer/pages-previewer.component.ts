import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const resolve = this.route.snapshot.data;
    this.page = resolve['previewer'];
    this.generateHeaders();
  }

  generateHeaders(): void {
    const headers = this.page.content.match(REGEX.HEADING);
    headers.map((head) =>
      this.anchors.push(head.replace(REGEX.HEADING_TEXT, ''))
    );
  }

  scrollTo(id: string): void {
    const element = document.getElementById(textSlugfy(id));
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
