

const Banner = () => {
    return (
        <div className="mt-7">
            <div className="hero rounded-xl" style={{backgroundImage: 'url(https://i.ibb.co/f0NZpMT/Rectangle-1.png)'}}>
  <div className="hero-overlay bg-opacity-60 rounded-xl "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="px-32">
      <h1 className="mb-5 mt-20 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5">Discover diverse recipes, expert cooking advice, and culinary inspiration on our comprehensive and engaging website dedicated to all things food.</p>
      <div className='mt-10 mb-24'>
      <button className="ml-5 border-none text-black font-bold border px-3 py-2 bg-green-500 rounded-xl">Explore Now</button>
      <button className="ml-5 border px-3 py-2 rounded-xl">Our Feedback</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;