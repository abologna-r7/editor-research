import React, { PureComponent } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default class Editor extends PureComponent {
  render() {
    return (
      <div className="editor-ck">
        <h2>CKEditor 5</h2>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Sample text</p>"
          onInit={editor => {}}
          onChange={(event, editor) => {}}
          config={{
            toolbar: [
              "undo",
              "redo",
              "bold",
              "italic",
              "blockQuote", 
              "imageTextAlternative",
              "imageUpload",
              "heading",
              "imageStyle:full",
              "imageStyle:side",
              "link",
              "numberedList",
              "bulletedList",
              "mediaEmbed",
              "insertTable",
              "tableColumn",
              "tableRow",
              "mergeTableCells",
            ]
          }}
        />
      </div>
    );
  }
}