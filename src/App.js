import { Card } from 'primereact/card';
import './App.css';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

function App() {
  return (
    <div>
      <header>
        <h1>Hello World</h1>
        <Card title="Title" subTitle="SubTitle">
              Content
        </Card>
      </header>
    </div>
  );
}

export default App;
