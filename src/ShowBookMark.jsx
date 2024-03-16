

const ShowBookMark = ({book,handleRemoveBookmark,indx}) => {
  const{recipe_id,recipe_name,recipe_image,short_description,ingredients,preparing_time,calories }=book;
    return (
        <div>
            <div className="overflow-x-auto w-[450px] lg:w-auto">
  <table className="table mt-3">
    {/* head */}
    
    <tbody className=""> 
      {/* row 1 */}
      <tr className="bg-base-200">
        <th>{indx+1}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time} Min</td>
        <td>{calories} calories</td>
       <td><button onClick={()=>handleRemoveBookmark(book)} className=" border-none text-black font-bold border px-3 py-2 bg-green-500 rounded-xl">Preparing</button></td>
      </tr>
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ShowBookMark;