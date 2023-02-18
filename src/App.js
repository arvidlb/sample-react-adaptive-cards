import { useEffect, useState } from "react";
import { examples } from "./example-cards";
import Card from "./components/Card";
import Loader from "./components/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);

  // Pretend to call API fetching cards
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const response = examples.cards;
      setCards(response);
      setIsLoading(false);
    }, 700);
  }, []);

  return (
    <div className="App">
      {cards.length === 0 || isLoading ? (
        <Loader />
      ) : (
        <div>
          {cards.map(({ card, data }, index) => {
            return <Card card={card} data={data} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default App;
