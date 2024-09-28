import {useState ,useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoManOutline } from "react-icons/io5";
import { LuStickyNote } from "react-icons/lu";
import { getStoredWishListApplication } from "../../Utility/WishList";
const Wish = () => {

    const books = useLoaderData();
    const [bookApplied, setBookApplied] = useState([]);

    useEffect(() =>{

            const storedBookIds = getStoredWishListApplication();
            if(books.length > 0){
                const appliedBooks = books.filter(job =>storedBookIds.includes(job.id));
                setBookApplied(appliedBooks);
            }
            
        // }
    }, [])


    return (
        <div>
        {bookApplied.length > 0 ? (
bookApplied.map((book) => (
    <div key={book.id}>

    <div className="card lg:card-side rounded-lg shadow-x mt-4 p-1 border-[2px] lg:w-[1250px]">
<figure className="w-[230px] h-[229px] bg-[#e6e6e6] rounded">
<img className="w-[129px] h-[172px]"
src={book.img_url}
alt="Movie" />
</figure>
<div className="card-body">
    <h2 className="text-2xl font-bold">{book.book_title}</h2>
    <p className="text-[16px] m-0 p-0 flex-grow-0">BY: {book.author_name}</p>

    <div className="flex mb-2">
        <p className="inline flex-grow-0 mr-[130px]">Tag: <span className="text-green-600 bg-green-200 px-2 rounded-full ">{book.tag}</span></p>
        <p className="flex items-center gap-2 "><CiLocationOn /> Year of Publishing: <span>{book.year_of_publishing}</span>
        </p>
    </div>

    <div className="flex items-center">
    <p className="flex items-center flex-grow-0 mr-7 gap-2"><IoManOutline/> <span>Publisher: {book.publisher}</span></p>
    <p className="flex items-center gap-2"><LuStickyNote /> <span>Page: {book.number_of_pages}</span>
    </p>
    </div>
    <div className="border-[1px]"></div>

    <div className="flex items-center ">
        <p className="flex-grow-0 mr-12 bg-green-300 p-2 rounded-full">Category: {book.cat}</p>
        <p className="flex-grow-0 mr-12 bg-orange-200 p-2 rounded-full">Rating: {book.rating}</p>
        <Link to={`/book_details/`}>
        <button className="btn bg-[#009e03] rounded-full hover:bg-[#009e03] text-white">View Details</button>
        </Link>
    </div>
</div>

</div>
    </div>
))
) : (
<p className="text-5xl text-center lg:w-[1250px] mt-[70px]">No Books add yet</p>
)}
</div>
    );
};

export default Wish;