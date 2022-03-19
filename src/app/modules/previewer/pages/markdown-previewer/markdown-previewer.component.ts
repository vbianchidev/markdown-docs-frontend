import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'src/app/core/interfaces/page.interface';

@Component({
  selector: 'app-previewer',
  templateUrl: './markdown-previewer.component.html',
  styleUrls: ['./markdown-previewer.component.scss']
})
export class PreviewerComponent implements OnInit {
  
  post?: Page;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolve = this.route.snapshot.data;
    this.post = resolve['previewer'];
  }
}