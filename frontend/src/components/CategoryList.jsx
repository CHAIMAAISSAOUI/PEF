import React from 'react'
import image1 from '../Images/solaire.png'
import image2 from '../Images/visage.png'
import image3 from '../Images/baby.png'
import image4 from '../Images/cheveux.png'
import image6 from '../Images/hyg.png'
import image7 from '../Images/comp.jpg'

const CategoryList = () => {
  const categories = [
    { id: 1, name: 'Solaires', image: image1 },
    { id: 2, name: 'Visage', image: image2 },
    { id: 3, name: 'Bébé et maman', image: image3 },
    { id: 4, name: 'cheveux', image: image4 },

    { id: 5, name: 'Hygiène', image: image6 },
    { id: 6, name: 'Compléments Alimentaires', image: image7 }
    // Ajoutez d'autres catégories avec leurs informations
  ]

  return (
    <div className='container'>
    <h1>Vos Catégories Préférées</h1>
    <div className='category-list'>
      {categories.map(category => (
        <div key={category.id} className='category-item'>
          <img
            src={category.image}
            alt={category.name}
            className='category-image'
          />
          <h3 className='category-name'>{category.name}</h3>
        </div>
      ))}
    </div></div>
  )
}

export default CategoryList
