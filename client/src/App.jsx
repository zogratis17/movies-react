import { useEffect, useState } from "react";

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);  // Removed "initialState:"

  useEffect(() => {
    console.log(`${title} has been liked : ${count} times`);
  });

  // When Strict Mode is on, in development , React runs setup and cleanup one extra time before the actual setup. Therefore , the effect runs twice when the component mounts


  return (
    <div className='card' onClick = {() => setCount(count+1)}>
      <h2>{title} <br /> {count} </h2>
      <button onClick={() => setHasLiked(!hasLiked)}>  {/* Toggle like state */}
        {hasLiked ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

function App() {
  return (
    <div className='card-container'>
      <Card title="Game of Thrones" />
      <Card title="Harry Potter" />
      <Card title="Solo Leveling" />
    </div>
  );
}

export default App;