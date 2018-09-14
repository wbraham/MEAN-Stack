import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  styleUrls : ['./post-list.component.css'],
  selector : 'app-post-list',
  templateUrl : './post-list.component.html'
})
export class PostListComponent implements OnInit, OnDestroy {
  /*posts = [
    { title: 'First Post', content: 'This is the First Post\'s content'},
    { title: 'Second Post', content: 'This is the Second Post\'s content'},
    { title: 'Third Post', content: 'This is the Third Post\'s content'}
  ];*/
  // @Input() posts: Post[] = [];
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postService: PostService) {
  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListener().subscribe((posts: Post[]) => {
        this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}


