import "./Buy.css";
import water from "../../assets/water.webp";
import Data from "../../../data/db.json";

function Buy() {
  return (
    <div className="buy-container">
      <img src={water} alt="Decorative Leaf" className="decorative-icon1" />
      <p className="section-text">Trending Perfume This Week</p>
      <h2 className="section-title">Our Handpicked Fragnances</h2>
      <div className="buy-text">
        <div className="buy-perfume">
          {Data &&
            Data.map((data) => {
              return (
                <div className="box" key={data.id}>
                  <img src={data.image} />
                  <br />
                  <p className="text-left text-gray-800 pb-2">
                    {data.category}
                  </p>
                  <p className="text-left ">{data.title}</p>
                  <p className="text-left text-gray-800 text-sm pb-4">
                    {" "}
                    {data.price}
                  </p>

                  <p className="btn1">Add to Cart</p>
                </div>
              );
            })}
        </div>
        <div className="product-info"></div>
      </div>
    </div>
  );
}

export default Buy;
