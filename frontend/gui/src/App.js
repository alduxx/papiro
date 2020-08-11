import React from 'react';
import 'antd/dist/antd.css';

import PapiroLayout from './containers/Layout';
import Service from './components/Service';

function App() {
  return (
    <div className="App">
      <PapiroLayout>
        <Service />
      </PapiroLayout>
    </div>
  );
}

export default App;
