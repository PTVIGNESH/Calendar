import { Card } from 'primereact/card';
import './App.css';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

function App() {
  const event =[
    {
      type: "TwitterSpace", //Live Stream
      location: {
        type: "virtual", //India 
        address: "India",
      },

      url: "http://eddiehub.org",
      author: "PTVignesh",
      host: "Nick",
      title: "All Day Event very long title",

      date:{
        start: "2019-01-01",
        end: "2019-01-02",
     },

    time: {
       start: "0800",
       end: "1000",
       timezone: "UTC",
     },

     description: "Event description",

    }
  ]
  return (
    <div>
      <header> 
         <h1>Event Calendar</h1>
      </header>

      {event.map( (event) => ( 
         
        <Card title={event.title} subTitle={event.date.start}>
             {event.description}
        </Card> 
        ) )
        }
    </div>
  );
}

export default App;
