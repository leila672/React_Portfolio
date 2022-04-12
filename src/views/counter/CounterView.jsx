import Counter from "../../components/counter/Counter";
import CounterActions from "../../components/counter/CounterActions";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";


function CounterView(){

const [counter, setCounter] = useState(10);

const increaseCounter = () => {
  setCounter(counter + 1);
};
const decreaseCounter = () => {
  if (counter !== 0) setCounter(counter - 1);
};

return (
  <div className="App text-center">
    <Card style={{ width: "18rem",margin:"5% auto"}}>
      <Card.Body>
        <Card.Title>Counter</Card.Title>
        <Card.Text>
        <Counter counter={counter} />
        </Card.Text>
        <CounterActions
      onIncrease={increaseCounter}
      ondecrease={decreaseCounter}
    />
      </Card.Body>
    </Card>

  </div>
);

}

export default CounterView;