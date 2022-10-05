import './App.css';

function App() {
  let a = 'nav'
  return (
    <div className="App">
      <div className="nav">
      <h4 style={ {color:'white', fontsize:'16px'} }> nav입니다. </h4>
      </div>

      <div>
        <p> 데이터 바인딩 사용하면! {a} </p>
      </div>
    </div>
  );
}

export default App;
