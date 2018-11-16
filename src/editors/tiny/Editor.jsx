import React, { PureComponent } from 'react';
import 'tinymce/tinymce';

import 'tinymce/themes/modern/theme';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/code';
import 'tinymce/plugins/image';
import 'tinymce/plugins/link';
import { Editor as TinyEditor } from '@tinymce/tinymce-react';

export default class Editor extends PureComponent {
  render() {
    return (
      <div className="editor-tiny">
        <h2>Tiny MCE</h2>
        <TinyEditor
          initialValue="<p>This is the initial content of the editor</p>"
          init={{
            skin: 'lightgray',
            plugins: 'paste link image code',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
          }}
        />
      </div>
    );
  }
}