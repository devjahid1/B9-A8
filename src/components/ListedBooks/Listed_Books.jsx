import Read from "./Read/Read";
import Wish from "../Wish/Wish";
import { useState } from "react";


const Listed_Books = () => {

  const [activeTab, setActiveTab] = useState('reading') //'reading', 'wishlist'

  return (

    <div>

      <h2 className="bg-gray-200 text-center mt-3 mb-5 py-7 text-3xl font-bold">Books</h2>
    
<div className="navbar bg-base-100">
  <div className="navbar-center lg:flex">
    <ul>

<div style={{borderBottom: '2px solid gray', marginTop: '5px'}}>
<button className="mr-3" onClick={() => setActiveTab('reading')}>Read Books</button>
<button onClick={() => setActiveTab('wishlist')}>Wish List</button>
</div>

    <div>
      {activeTab === 'reading' ? <Read></Read> : <Wish></Wish>  }
    </div>

    </ul>
  </div>
</div>
</div>
  );
};

export default Listed_Books;