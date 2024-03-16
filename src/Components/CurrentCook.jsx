
const CurrentCook = ({cooking,caloriess,cookingTime}) => {
    console.log(cooking)
    const{recipe_id,recipe_name,recipe_image,short_description,ingredients,preparing_time,calories }=cooking;
    return (
        <div>
            
            <div className="overflow-x-auto">
  <table className="table mt-3">
    
   
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200 ">
        <th>1</th>
        <td>{recipe_name}</td>
        <td>{preparing_time} Min</td>
        <td>{calories} calories</td>
      </tr>
     
    </tbody>
  </table>
  
  
</div>

        </div>
    );
};

export default CurrentCook;