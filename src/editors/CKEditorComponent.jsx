import React, { PureComponent } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default class CKEditorComponent extends PureComponent {
  render() {
    console.log(ClassicEditor.builtinPlugins.map( plugin => plugin.pluginName ))

    return (
      <div className="editor-ck">
        <h2>CKEditor 5</h2>
        <CKEditor
          editor={ ClassicEditor }
          data="<p>Sample text</p>"
          onInit={ editor => {
            console.log(Array.from(editor.ui.componentFactory.names()));
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({event, editor, data});
          }}
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