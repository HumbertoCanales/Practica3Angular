import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/animations/animations';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  animations: [ fade ]
})
export class PostsComponent implements OnInit {

  public arrPosts: any[] = [];

  constructor(private postsService: PostsService ) { }

  ngOnInit(): void {
    this.postsService.getAll()
    .then(posts => this.arrPosts = posts)
    .catch(error => console.log(error));
  }

}
