
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import BookMark from './Components/BookMark'
import Header from './Components/Header'
import Recipes from './Components/Recipes'
import { ToastContainer, toast } from 'react-toastify'
import ShowBookMark from './ShowBookMark'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const[bookMark,setBookMark]=useState([]);
  const[cooking,setCooking]=useState([])
  const[cookingTime,setCookingTime]=useState(0)
  const[caloriess,setCalories]=useState(0)
  // console.log(cookingTime,caloriess)
  // console.log(cooking)

  const handleBookMark=(cook)=>{
    const isExist=bookMark.find(recipe=>recipe.recipe_id==cook.recipe_id)
    if(!isExist){
      const newBookMark=[...bookMark,cook]
      setBookMark(newBookMark)
    }
    else{
toast('you have added')
    }
  }
  // remove & set function
  const handleRemoveBookmark=(id)=>{
   const removeRecipe=bookMark.filter(oldRecipe=>oldRecipe.recipe_id !== id.recipe_id)
   setBookMark(removeRecipe)
   const cook=[...cooking,id]
   setCooking(cook)
   const totalTime=cookingTime+id.preparing_time
   setCookingTime(totalTime)
   const totalCalories=caloriess+id.calories
   setCalories(totalCalories)
   
  }

  return (
    <div className='container mx-auto'>
     <Header></Header>
      <Banner></Banner>
      <div className="mt-24  text-center">
                <h1 className="text-3xl font-bold mb-2">Our Recipes</h1>
                <p className='mb-20'>Explore an array of delectable recipes ranging from savory mains to indulgent desserts, each promising to tantalize your taste buds.</p>
            </div>
     <div className='flex gap-4 flex-col lg:flex-row  '>
     <Recipes className='w-3/4  ' handleBookMark={handleBookMark}></Recipes>
     
     <BookMark caloriess={caloriess} cookingTime={cookingTime} cooking={cooking} bookMark={bookMark} handleRemoveBookmark={handleRemoveBookmark} className='flex-1'></BookMark>
    
     </div>
     
     <ToastContainer />
      
    </div>
  )
}

export default App
