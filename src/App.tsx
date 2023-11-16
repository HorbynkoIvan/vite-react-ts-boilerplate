function App() {
  const test = (one: number) => {
    console.log(one);
    return one;
  };

  return <div>App {test(1)}</div>;
}

export default App;
