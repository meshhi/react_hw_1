import './App.css'
import ShopCardFC from './components/ShopCardFC/ShopCardFC';
import ShopCardCC from './components/ShopCardCC/ShopCardCC';
import IShopItem from './interfaces/IShopItem';

const item: IShopItem = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

function App() {
  return (
    <>
      <div className="container">
        <div className="background-element">
        </div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window" style={{display: "flex", gap: "1rem"}}>
          <ShopCardFC item={item} />
          <ShopCardCC item={item} />
        </div>
      </div>
    </>
  )
}

export default App
