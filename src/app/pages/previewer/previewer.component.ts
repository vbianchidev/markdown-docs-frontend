import { Component } from '@angular/core';
import { GithubMarkdown } from './markdown/github.markdown';

@Component({
  selector: 'app-previewer',
  templateUrl: './previewer.component.html',
  styleUrls: ['./previewer.component.scss']
})
export class PreviewerComponent {

  file: string = ''

  constructor() { 
    this.file = GithubMarkdown
  }
}
