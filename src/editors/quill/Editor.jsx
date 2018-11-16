import React, { PureComponent } from 'react';
import Quill from 'quill';

export default class Editor extends PureComponent {
  componentDidMount() {
    const editor = new Quill('.editor', {
      debug: 'info',
      placeholder: 'Compose an epic...',
      theme: 'snow'
    });
  }
  render() {
    return (
      <div className="editor-ck">
        <h2>CKEditor 5</h2>
        <div className="editor"/>
      </div>
    );
  }
}