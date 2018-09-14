import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
@Component({
  styleUrls: ['./post-create.component.css'],
  templateUrl : './post-create.component.html',
  selector : 'app-post-create'
})
export class PostCreateComponent {
  inputTitle = '';
  inputContent = '';
  @Output() postCreated = new EventEmitter<Post>();
  /*onAddPost(valeurTextArea : HTMLTextAreaElement) {
    this.textt = valeurTextArea.value;
  }*/

  onAddPost() {
    const post: Post = {
      title : this.inputTitle,
      content : this.inputContent
    };
    this.postCreated.emit(post);
  }

}
