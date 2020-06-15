import { Component } from '@angular/core';
import XRegExp from 'xregexp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'regexp-test';

  constructor() {
    const unicode = '\\p{L}\\p{M}\\p{N}';

    const tagKeyValuePattern = `^[${unicode}0-9_=@\\(\\)\\[\\]\\{\\}\\-\\.:]([${unicode}0-9_\\s=@\\(\\)\\[\\]\\{\\}\\-\\.:]*[${unicode}0-9_=@\\(\\)\\[\\]\\{\\}\\-\\.:]){0,1}$`;

    const regexp = new XRegExp(tagKeyValuePattern);

    console.log(regexp.test('a'));
  }
}
