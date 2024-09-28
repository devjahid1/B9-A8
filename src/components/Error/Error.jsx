import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h2 className="text-7xl text-center">Page Is Not Found</h2>
            <Link to='/'>
                <button className="btn center ml-[700px] mt-5">Go Back</button>
            </Link>
        </div>
    );
};

export default Error;