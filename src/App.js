import React from 'react';
import { marked } from 'marked';
import './App.css';
import rawMarkdown from './markdown.js'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: rawMarkdown
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  getRawMarkup() {
    return { __html: marked(this.state.input) }
  }


  render() {
    marked.setOptions({
      breaks: true
    })

    return (
      <div className="container">
        <div className="titleContainer">
          <h1 className="title">markdown previewer</h1>
        </div>
        <div className="bodyContainer">
          <div className="inputContainer">
            <h3 className="inputTitle">input</h3>
            <textarea id="editor" className="editor" onChange={this.handleChange} value={this.state.input}></textarea>
          </div>
          <div className="outputContainer">
            <h3 className="outputTitle">output</h3>
            <div id="preview" className="preview" dangerouslySetInnerHTML={this.getRawMarkup()}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
