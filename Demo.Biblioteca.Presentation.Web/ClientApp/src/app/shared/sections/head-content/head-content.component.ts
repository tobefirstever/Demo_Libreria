import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-head-content',
  templateUrl: './head-content.component.html',
  styleUrls: ['./head-content.component.scss']
})
export class HeadContentComponent implements OnInit {

  setTitle = '';
  showHead: Boolean = true;
  showUser = '';

  constructor(
    private _router: Router,
    public _title: Title,
    public _meta: Meta
  ) {
    _router.events.subscribe(evt => {
      if (evt instanceof ActivationEnd) {
        if (evt.snapshot.firstChild === null) {
          const data = evt.snapshot.data;

          this.setTitle = data.title;
          this.showHead = data.showHeaderContent;
          this._title.setTitle(this.setTitle);
          const metaTag: MetaDefinition = {
            name: 'description',
            content: this.setTitle
          };
          this._meta.updateTag(metaTag);
        }
      }
    });
  }

  ngOnInit() {
  }

}
