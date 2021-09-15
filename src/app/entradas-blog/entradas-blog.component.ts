import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from './post.service';
import { Post } from './post';

@Component({
  selector: 'app-entradas-blog',
  templateUrl: './entradas-blog.component.html',
  styleUrls: ['./entradas-blog.component.css'],
  providers: [PostService]
})
export class EntradasBlogComponent implements OnInit {

  posts!: Post[];

  constructor(private service: PostService) { }

  ngOnInit(): void {
      this.service.getAllPost().subscribe(
        (datos) =>  this.posts = datos
      )


      this.service.getPost(1).subscribe(
        p => console.log(p)
      )
  }

}
