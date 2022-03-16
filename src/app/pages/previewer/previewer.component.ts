import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/core/interfaces/post.interface';

@Component({
  selector: 'app-previewer',
  templateUrl: './previewer.component.html',
  styleUrls: ['./previewer.component.scss']
})
export class PreviewerComponent implements OnInit {
  
  post?: Post;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolve = this.route.snapshot.data;
    this.post = resolve['previewer'];
    console.log(this.post as Post)
  }
}
