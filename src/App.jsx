import React, { PureComponent } from 'react';
import CKEditor from './editors/ck/Editor';
import TinyMCE from './editors/tiny/Editor';
import Quill from './editors/quill/Editor';
import Grapes from './editors/grapes/Editor'
import './base.scss';

export default class App extends PureComponent {
  state = {
    currentEditor: 'ck',
  }

  componentWillMount() {
    require.context(
      'file-loader?name=[path][name].[ext]&context=node_modules/tinymce!tinymce/skins',
      true,
      /.*/
    );
  }

  setEditor = (event) => {
    event.preventDefault();
    const {name} = event.target;

    this.setState({currentEditor: name});
  }

  getEditor = () => {
    const {currentEditor} = this.state;

    return {
      'ck': <CKEditor />,
      'tiny': <TinyMCE />,
      'quill': <Quill />,
      'grapes': <Grapes />,
    }[currentEditor];
  }

  render() {
    return (
      <section>
        <header>
          <h1>
            Editor Research for use in insightPhishing
          </h1>
        </header>
        <ul>
          <li>
            <a
              name="ck"
              href="#"
              onClick={this.setEditor}
            >
              CKEditor 5
            </a>
          </li>
          <li>
            <a
              name="tiny"
              href="#"
              onClick={this.setEditor}
            >
              TinyMCE
            </a>
          </li>
          <li>
            <a
              name="quill"
              href="#"
              onClick={this.setEditor}
            >
              QuillJS
            </a>
          </li>
          <li>
            <a
              name="grapes"
              href="#"
              onClick={this.setEditor}
            >GrapesJS
            </a>
          </li>
        </ul>
        {this.getEditor()}
      </section>
    );
  }
}