
// import { Card } from 'primereact/card';
import {Dialog} from '@fullcalendar/core';
import './App.css';
import { FullCalendar } from "primereact/fullcalendar";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons


import {Calendar} from '@fullcalendar/core';
import dayGridPlugin from "@fullcalendar/daygrid";
import  timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function App() {
  const options = {
    plugins: [dayGridPlugin, timeGridPlugin,
    interactionPlugin],
    defaultView: 'dayGridMonth',
    defaultDate: new Date(),
    header:{
      left:'prev,next',
      center:'title',
      right:'dayGridMonth, timeGridWeek, timeGridDay'
    },
    editable: false,
    dateClick: (e) => {

    }
  };
  const events =[
    {
      type: "TwitterSpace", //Live Stream
      location: {
        type: "virtual", //India 
        address: "India",
      },

      url: "http://eddiehub.org",
      author: "PTVignesh",
      host: "Nick",
      title: "this link share to hello@pamper.com",

      
        start: "2022-03-07T17:00:00",
        end: "2022-03-07T19:00:00",
  

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
         <h1 className='title'>Event Calendar</h1>
      </header>
        <FullCalendar className='fullcalendar' events={events} options={options} />
      {/* {events.map( (event) => ( 
         
        <Card title={event.title} subTitle={event.date.start}>
             {event.description}
        </Card> 
        ) )
        } */}
    </div>
  );
}

export default App;
