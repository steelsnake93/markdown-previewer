import React, { useState } from 'react';
import { marked } from 'marked';
import Badge from "react-bootstrap/Badge";
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  marked.setOptions({
    breaks: true
  })

  return <div className="App">
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-6">
        <h3>
              <Badge className='text-align-center' variant='light'>
                Editor
              </Badge>
            </h3>
            <textarea id='editor'
              value={markdown}
              onChange={(event) => {setMarkdown(event.target.value)}}
            />
        </div>
        <div className="col-md-6">
          <h3>
            <Badge className='text-align-center' variant='light'>
              Preview
            </Badge>
          </h3>
          <div id='preview'
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          >
          </div>
        </div>
      </div>
    </div>
  </div>
  }

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!
Editor
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
2. Use just 1s if you want!
3. And last but not least, let's not forget embedded images:

![](image.jpg)
`;

export default App;