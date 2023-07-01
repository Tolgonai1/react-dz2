import './App.css';
import Products from "./components/Products";

const array = [
    {name: 'Крем для кожи вокруг глаз LUMINOUS 630 15 мл',price: '6000 P', amount: 0},
    {name: 'Солнцезащитный крем Sunscreen SPF 50 200 мл', price: '4500 P', amount: 0},
    {name: 'Сыворотка для нормальной кожи MEDIPEEL 30 мл',price: '7500 P', amount: 0}
]
function App() {
  return (
    <div className="App">
        {
      array.map((product,idx) => {
        return <Products productName={product.name} productPrice={product.price} productAmount={product.amount} key={idx}></Products>
    })
        }
    </div>
  );
}

export default App;
