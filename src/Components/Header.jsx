import profile from '../assets/images/profile.png'
import search from '../assets/images/Frame.png'

const Header = () => {
    return (
        <div className="mt-5">
            <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
        <li className="font-semibold text-lg"><a>Home</a></li>
        <li className="font-semibold text-lg"><a>Recipes</a></li>
        <li className="font-semibold text-lg"><a>About</a></li>
        <li className="font-semibold text-lg"><a>Search</a></li>
      </ul>
    </div>
    <a class=" text-black font-bold text-3xl">Recipe Calories</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
        <li className="font-semibold text-lg"><a>Home</a></li>
        <li className="font-semibold text-lg"><a>Recipes</a></li>
        <li className="font-semibold text-lg"><a>About</a></li>
        <li className="font-semibold text-lg"><a>Search</a></li>
    </ul>
  </div>
  
  <div class="navbar-end">
    <div className="bg-gray-300 pl-4 py-2 rounded-xl"><img className='inline-block mr-3' src={search} alt="" />
    <input  className="bg-gray-300" placeholder="Search" type="text" />
    </div>
    <div className='bg-green-600 ml-4 rounded-xl'><img className='h-8 w-8' src={profile} alt="" /></div>
  </div>
</div>
        </div>
    );
};

export default Header;