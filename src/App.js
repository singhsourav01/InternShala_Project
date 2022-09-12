const myArray = [
  'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'
];

const renderItems = myArray.map(character=>{
  return <li>{character}</li>
})

function App() {
  return (
    <>
    <h1>List of items from an array.</h1>
      <ul>
        {renderItems}
      </ul>
    </>
  );
}

export default App;
