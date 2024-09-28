import { Link } from 'react-router-dom';
import '../font/font.css'

const Banner = () => {
    return (
        <div className="hero bg-base-200 h-[600px] rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.postimg.cc/DzTDwjdG/pngwing-1-removebg-preview.png"
            className="w-[318px] h-[394px] rounded-lg  lg:ml-[220px]" />
          <div>
            <h1 className="text-5xl font-bold leading-[50px] gowun-batang-bold">Books to freshen up <br /> your bookshelf</h1>
            <Link to={`/listed_books`}>
            <button className="btn bg-[#23BE0A] text-white mt-[20px] hover:bg-[#23BE0A]">View The List</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;