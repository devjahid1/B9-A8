import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { useEffect, useState } from "react";

// Function to generate custom triangle shape
const getPath = (x, y, width, height) => (
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
     C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
     Z`
);

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PageToBooks = () => {
    const chart = useLoaderData();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('Book.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, []);

    return (
        <div>
            {books.length > 0 ? (
                <div>
                    <h2>{books[0].title}</h2> 
                    
                    <BarChart width={1170} height={500} data={chart}>
                        <XAxis dataKey="number_of_pages" />
                        <YAxis />
                        <Bar dataKey="number_of_pages" fill="#8884d8" shape={<TriangleBar />} />
                    </BarChart>
                </div>
            ) : (
                <p className="text-5xl text-center lg:w-[1250px] mt-[70px]">No Books Read yet</p>
            )}
        </div>
    );
};

export default PageToBooks;
