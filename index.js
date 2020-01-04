import React, { Component } from 'react';
import { render } from 'react-dom';
import CodeMirror from 'react-codemirror';
import MCM from './MCM';
import './style.css';
import 'codemirror/lib/codemirror.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // name: 'CodeMirror',
      code: MCM
    };
  }

  updateCode(newCode) {
		this.setState({
			code: newCode,
		});
	}

  render() {
    let options = {
			lineNumbers: true,
      editing: false,
		};
    return (
      <div>
        <p>
          Start editing to see some magic happen :)
        </p>
        <div className="CodeMiror">
          <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options} />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
