import React from 'react'


const ProductCard = ({ product }) => {
    const handleAddToCart = () => {
        // Mettez ici la logique pour ajouter le produit au panier
        console.log(`Produit "${product.name}" ajouté au panier.`);
      };
     
    return (
        <div className="card">
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <p>Prix: {product.price} TND</p>
          <button onClick={handleAddToCart}>Ajouter au panier</button>
        </div>
      );
    };

export default ProductCard
