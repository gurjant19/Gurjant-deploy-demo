import { NotFoundError } from './../common/NotFound-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts;
  constructor(private service: PostService) { }
  creatPost(input: HTMLInputElement) {
    const post: any = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';
    this.service.creat(post)
      .subscribe(newPost => {
          post.id = newPost;
        },
        (error: AppError) => {
          this.posts.splice(0, 1);

          if (error instanceof NotFoundError) {
            // this.form.setErrors(error.originalError);
          } else { throw error; }
        });
  }
  updatePost(post: HTMLInputElement) {
    this.service.update(post)
      .subscribe(updatedPost => console.log(updatedPost));
  }
  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.delete(post)
      .subscribe(
       null,
        (error: AppError) => {
          this.posts.splice(index, 0, post);
          if (error instanceof NotFoundError) {
            alert('the post have been deleted already');
          } else {throw error; }
        });
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe( post => this.posts = post );
  }

}
