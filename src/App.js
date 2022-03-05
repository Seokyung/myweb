import React from 'react';
import {Image} from 'semantic-ui-react'
import Comments from './comments.js'
import sunbaGuitar from "./sunbaGuitar.jpeg"

function App() {
  return (
    <div>
      <Image
        src = {sunbaGuitar}
        style={{width:'500px'}}
        centered
      />
      <Comments/>
    </div>
  );
}

export default App;
