import { Component } from "react";

class Card extends Component {
  state = {
    products: [
      { id: 1, name: "product1", description: "s1", price: 123 },
      { id: 2, name: "product2", description: "s2", price: 67 },
      { id: 3, name: "product3", description: "s3", price: 345 },
      { id: 4, name: "product4", description: "s4", price: 345 },
      { id: 5, name: "product5", description: "s5", price: 345 },
      { id: 6, name: "product6", description: "s6", price: 345 },
    ],
  };

  render() {
    return (
      <>
        {this.state.products.map(({ id, name, description, price }) => (
          <article className="Card" key={id}>
            <div className="title">
              <h3>{name}</h3>
              <p>{description}</p>
              <p>{price}</p>
            </div>
          </article>
        ))}
      </>
    );
  }
}

export default Card;
