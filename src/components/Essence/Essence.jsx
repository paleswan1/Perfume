import './Essence.css';
import per1 from '../../assets/per1.jpg';
import per3 from '../../assets/per3.jpg';

function Essence() {
  return (
    <div className="essence">
      <div className="essence-container">
        <div className="item">
          <img src={per1} alt="Perfume 1" className="image"/>
        </div>
        <div className="item caption">
          <h2>Eau de toilette</h2>
          <h1>We Like To Consider An Eau De Toilette The Summer Cousin</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <button className='btn1'>Shop Now - 33% OFF</button>
        </div>
      </div>
      
      <div className="essence-container">
        <div className="item caption">
          <h2>Eau de parfum</h2>
          <h1>Perfume With A Slightly Higher Concentration Of Essential Oils</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <button className='btn1'>Shop Now - 33% OFF</button>
        </div>
        <div className="item">
          <img src={per3} alt="Perfume 2" className="image"/>
        </div>
      </div>
    </div>
  );
}

export default Essence;
