import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubMarkdown } from '../../markdown/github.markdown';
import { PreviewerService } from './previewer.service';

@Component({
  selector: 'app-previewer',
  templateUrl: './previewer.component.html',
  styleUrls: ['./previewer.component.scss']
})
export class PreviewerComponent {
  
  file?: any;

  constructor(public _service: PreviewerService) { 
    _service.getOneMarkdown(1).subscribe(
      (value) => {
        this.file = value.text;
      }
    )
  }
}
