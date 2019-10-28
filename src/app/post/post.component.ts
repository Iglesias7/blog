import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() titlePost: string;
  @Input() contentPost: string;
  @Input() loveIts: number;
  @Input() created_at;

  constructor() { 
    this.created_at = new Promise(
    (resolve, reject) => {
    const date = new Date();
    setTimeout( 
        () => {
            resolve(date);
                }, 2000
       );
      }
     )
  }

  ngOnInit() {
  }

  getColor(){
    if(this.loveIts > 0){
      return 'green';
    }else if(this.loveIts < 0){
      return 'red';
    }
  }

  getLove(){
    ++this.loveIts;
  }

  getDontLove(){
    --this.loveIts;
  }

}

