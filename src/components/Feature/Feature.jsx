import i1 from '../../assets/i1.png';
import i2 from '../../assets/i2.png';
import i3 from '../../assets/i3.png';
import i4 from '../../assets/i4.png';
import './Feature.css';

function Feature() {
  return (
    <div className="feature-section">
      <div className="feature-item">
        <div className="feature-icon">
          <img src={i1} alt="Get Money Back Guarantee" />
        </div>
        <p>Money Back Guarantee</p>
      </div>
      <div className="feature-item">
        <div className="feature-icon">
          <img src={i2} alt="Delivery In 1-2 Hours" />
        </div>
        <p>Delivery In 1-2 Hours</p>
      </div>
      <div className="feature-item">
        <div className="feature-icon">
          <img src={i3} alt="Wrapped Packaging" />
        </div>
        <p>Wrapped Packaging</p>
      </div>
      <div className="feature-item">
        <div className="feature-icon">
          <img src={i4} alt="Free Shipping" />
        </div>
        <p>Free Shipping</p>
      </div>
    </div>
  );
}

export default Feature;
