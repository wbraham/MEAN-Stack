import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../posts.service';
import { Title } from '@angular/platform-browser';
@Component({
  styleUrls: ['./post-create.component.css'],
  templateUrl : './post-create.component.html',
  selector : 'app-post-create'
})
export class PostCreateComponent {
  inputTitle = '';
  inputContent = '';
  // @Output() postCreated = new EventEmitter<Post>();
  /*onAddPost(valeurTextArea : HTMLTextAreaElement) {
    this.textt = valeurTextArea.value;
  }*/

  constructor(public postService: PostService) {}

  onAddPost() {
    const post: Post = {
      title : this.inputTitle,
      content : this.inputContent
    };
    // this.postCreated.emit(post);
    this.postService.setPosts(post.title, post.content);
  }

}
