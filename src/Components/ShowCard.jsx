import time from '../assets/images/Frame (1).png'
import calorie from '../assets/images/Frame3.png'

const ShowCard = ({recipe,handleBookMark}) => {
    const{recipe_id,recipe_name,recipe_image,short_description,ingredients,preparing_time,calories }=recipe
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl mt-3 border">
  <figure className="px-10 pt-10">
    <img src={recipe_image} alt="Shoes" className="rounded-xl w-[331px] h-[200px]" />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title">{recipe_name}</h2>
    <p>{short_description}</p>
    <hr className="mt-3 mb-3" />
    <div>
        <h1 className="font-bold mb-4">Ingredients:{ingredients.length}</h1>
        <ul className="ml-3">
{ingredients.map((index)=><li>{`\u2022`} {index}</li>)}
        </ul>
    </div>
    <hr className='mt-3 mb-3'/>
    <div className="flex gap-3">
        <div className='flex'>
            <div><img  src={time} alt="" /></div>
            <h3><span>{preparing_time}</span> minutes</h3>
        </div>
        <div className='flex'>
<div><img src={calorie} alt="" /></div>
<h3><span>{calories}</span> calories</h3>
        </div>
    </div>
    <div className="mt-2">
      <button onClick={()=>handleBookMark(recipe)} className=" border-none text-black font-bold border px-3 py-2 bg-green-500 rounded-xl">Want to Cook</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default ShowCard;