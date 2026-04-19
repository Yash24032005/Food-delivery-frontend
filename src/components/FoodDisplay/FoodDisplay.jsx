// // eslint-disable-next-line no-unused-vars
// import React, { useContext } from 'react'
// import './FoodDisplay.css'
// import { StoreContext } from '../../context/StoreContext'
// import FoodItem from '../FoodItem/FoodItem'
// const FoodDisplay = ({category}) => {

//     const {food_list}=useContext(StoreContext)
//   return (

//     <div className='food-display' id='food-display'>
//         <h2>Top dishes near you</h2>
//         <div className="food-display-list">
//             {food_list.map((item,index)=>{
//                 if(category==="All" || category===item.category){

//                   return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
//                 }
//             })}
//         </div>
//     </div>
//   )
// }

// export default FoodDisplay;

// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {/* Yahan 'food_list?.map' use kiya hai. 
                   Agar food_list undefined hoga, toh ye crash nahi karega.
                */}
                {food_list && food_list.length > 0 ? (
                    food_list.map((item, index) => {
                        if (category === "All" || category === item.category) {
                            return (
                                <FoodItem 
                                    key={index} 
                                    id={item._id} 
                                    name={item.name} 
                                    description={item.description} 
                                    price={item.price} 
                                    image={item.image} 
                                />
                            )
                        }
                        return null;
                    })
                ) : (
                    <div className="loading-container">
                        <p>Loading the best dishes for you...</p>
                        {/* Aap yahan ek loader spinner bhi laga sakte hain */}
                    </div>
                )}
            </div>
        </div>
    )
}

export default FoodDisplay;