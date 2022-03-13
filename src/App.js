import './App.css';
import Expences from './componants/Expences';
import NewExpence from './ExpenceForm/NewExpence';
import {useState} from "react";

function App() {
  const dummyData=[
    { id:"exp1",
      date: new Date(2022, 2, 23),
      item: "New TV",
      price: 799.5
    },
    { id:"exp2",
      date: new Date(2022, 1, 11),
      item: "New Laptop",
      price: 459.5
    },
    { id:"exp3",
      date: new Date(2022, 8, 15),
      item: "New Desk",
      price: 129.5
    },
    
    ]

    const [expenceData,setexpenceData]=useState(dummyData);

    const getExpencesRecod=(data)=>{
      //alert("hii from app");
      console.log(data);

      setexpenceData([data, ...expenceData]);
  }
  return (
    <div>
      <div className="App">
        <NewExpence getExpencesRecod={getExpencesRecod}/>
      <Expences expenceData={expenceData}  />
    </div>
    </div>
  );
}

export default App;
