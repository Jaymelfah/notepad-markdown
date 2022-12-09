import React from 'react';
import Split from 'react-split';
import Notes from './components/Notes';
import Editor from './components/Editor';

function App() {
  return (
    <div className="App">
      <Split
        sizes={[25, 75]}
        direction="horizontal"
        minSize={10}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        className="split"
      >
        <Notes />
        <Editor />
      </Split>
    </div>
  );
}

export default App;
