import water from "../../assets/water.webp";
import "./Shop.css";

function Shop() {
  return (
    <div className="about-section">
      <div className="about-content">
        <img src={water} alt="Decorative Leaf" className="decorative-icon" />
        <div className="about-header">
          <h4>About Our Store</h4>
        </div>
        <h1>Welcome To SwanSha</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Duis
          mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet
          rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet.
        </p>
      </div>
    </div>
  );
}

export default Shop;
