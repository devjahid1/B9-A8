import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Book = ({book}) => {
    const {id, book_title, author_name, tag, rating, img_url} = book;
    return (
        <Link to={`/book_details/${id}`}>
        <div className="w-[350px] h-[460px] bg-[#fdfdfd] p-3 border-[2px] rounded flex justify-center mb-10 m-auto">
            <div className="w-[300px]">
            <div className="bg-[#f5f5f5] p-2 mb-3 rounded">
            <img className="w-[124px] h-[166px] mb-5 p-2 ml-20" src={img_url} alt="" />
            </div>
            <div className="text-green-400 font-semibold mb-5">
            <button className="bg-gray-200 mr-2 p-2 rounded">Young Adult</button>
            <button className="bg-gray-200 ml-2 p-2 mb-1 rounded">Identity</button>
            </div>
            <h2 className="text-2xl font-bold">{book_title}</h2>
            <h2 className="mt-3 ">By : {author_name}</h2>
            <div className="border-[1px] border-dashed mt-2 mb-3"></div>
            <div className="flex justify-between">
                <h2>{tag}</h2>
                <div className="flex items-center gap-2">
                <h2>{rating}</h2>
                <CiStar/>
                </div>
            </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;