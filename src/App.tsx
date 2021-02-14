import React, { ReactElement } from 'react';

import TodoBlock from './components/TodoBlock';

const App: React.FC = (): ReactElement => (
  <div className="container">
    <TodoBlock />
  </div>
);

export default App;
