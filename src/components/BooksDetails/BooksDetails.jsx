import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../Utility/LocalStorage';
import { saveWishListApplication } from '../../Utility/WishList';


const BooksDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const book = books.find(book => book.id === idInt);

    const handleRead = () =>{
        saveJobApplication(idInt)
        toast('You Have read this book')
    }
    const handleWishList = () =>{
        saveWishListApplication(idInt)
        toast('You Have Add this book')
    }
    
    
    
    return (
        <div className=''>
            <div className='lg:w-[1170px] lg:h-[711] mt-10 lg:flex justify-around sm:p-5'>
            <img className='lg:w-[425px] lg:h-[564px] sm:m-auto' src={book.img_url} alt="" />
            <div className='lg:w-[549px] lg:h-[182px] '>
                <h2 className='font-bold text-[40px] text-center md:text-left'>{book.book_title}</h2>
                <p className='font-bold text-[18px] mt-2 mb-2 sm:text-center'>By: {book.author_name}</p>
                <p className='mb-4 text-xl sm:text-center'>{book.tag}</p>
                <p className='text-justify mb-3'><span className='font-bold '>Review: </span>{book.comment}</p>

                <div className="text-green-400 font-semibold mb-5 flex items-center gap-2">
                    <h2 className='text-black text-xl font-bold'>Tag</h2>
            <button className="bg-gray-200 mr-2 p-2 rounded">Young Adult</button>
            <button className="bg-gray-200 ml-2 p-2 mb-1 rounded">Identity</button>
            </div>
                <p className='text-[17px] mb-2'>Number of Page: <span className='font-bold text-[17px]'>{book.number_of_pages}</span></p>
                <p className='text-[17px] mb-2'>Publisher: <span className='font-bold text-[17px]'>{book.publisher}</span></p>
                <p className='text-[17px] mb-2'>Year of Publishing: <span className='font-bold text-[17px]'>{book.year_of_publishing}</span></p>
                <p className='text-[17px] mb-2'>Rating: <span className='font-bold text-[17px]'>{book.rating}</span></p>


                <div className=''>
                    <button onClick={handleRead} className='mr-2 border-[1px] border-solid border-[#9eff49] py-[8px] px-3 rounded font-bold hover:bg-[#77ff77] hover:border-none'>Read</button>


                    <button onClick={handleWishList} className='bg-[#50B1C9] py-2 px-4 rounded font-bold text-white hover:border-[2px] hover:border-solid hover:border-[#77ff77] hover:text-black hover:bg-white'>Wishlist</button>
                </div>
            </div>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BooksDetails;