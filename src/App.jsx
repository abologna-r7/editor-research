import React, { PureComponent } from 'react';
import CKEditorComponent from './editors/CKEditorComponent';
import './style/base.scss';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <CKEditorComponent />
      </div>
    );
  }
}