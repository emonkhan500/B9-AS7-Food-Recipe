import ShowBookMark from "../ShowBookMark";
import CurrentCook from "./CurrentCook";


const BookMark = ({bookMark,handleRemoveBookmark,cooking ,caloriess,cookingTime}) => {
    // console.log(bookMark)
    return (
        <div className="lg:mt-3 rounded-xl border px-3">
            <div className="text-center"><h1 className="text-2xl">Want to cook: <span>{bookMark.length}</span></h1></div>
            <hr className="mt-2 mb-3"/>
           <thead>
      <tr className="flex gap-14 ml-14 px-6 mb-3">
        
        <th className="-ml-6" >Name</th>
        <th className="ml-4 lg:ml-7"  >Time</th>
        <th className="-ml-6 lg:-ml-4" >Calories</th>
        
      </tr>
    </thead>
           <div>
           {
            bookMark.map(book=><ShowBookMark handleRemoveBookmark={handleRemoveBookmark} book={book}></ShowBookMark>)
           } 
           </div>
           <div>
        <div>
            <div className="mt-20 mb-3">
            <div className="text-center"><h1 className="text-2xl">Currently cooking: <span>{cooking.length}</span></h1></div>
            <hr className="mt-3 mb-3"/>
            </div>
            <thead>
      <tr className="flex gap-14 px-6 mt ml-14 ">
        
        <th className="-ml-6">Name</th>
        <th className="ml-4 lg:ml-7" >Time</th>
        <th className="-ml-6 lg:-ml-4">Calories</th>
      </tr>
    </thead>
        <div className="mt-3 ">
        {
            cooking.map(cook=><CurrentCook cookingTime={cookingTime} caloriess={caloriess} cooking={cook}></CurrentCook>)
        }
        </div>
        <hr  className="h-2 mb-4 mt-4 font-bold" />

        <div className="flex justify-end gap-2">
    <h1 className="font-bold">Total Time={cookingTime} ;</h1>
    <h1 className="font-bold">Total Calories={caloriess} ;</h1>
  </div>
        </div>
           </div>
        </div>
    );
};

export default BookMark;