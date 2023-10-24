import Navbar from "./Navbar";
import Card from "./Card";
import travelData from './data';

function App() {
  const cards= travelData.map( item => {
    return (
      <Card key={`card_${item.id}`} item={item}></Card>
    );
  })

  return (
    <>
      <Navbar></Navbar>
      <div className="card-container">
        {cards}
      </div>
    </>
  );
}

export default App
