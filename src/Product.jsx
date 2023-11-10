import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
// import Carousel from "./Carousel";

export default function Product() {
  const params = useParams();

  const fetchProduct = async () => {
    const res = await fetch(
      `https://dummyjson.com/products/${params.productId}`
    );
    const data = await res.json();
    return data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", params.productId],
    queryFn: fetchProduct
  });

  const [currentImage, setCurrentImage] = useState(0);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    return <h1>error occured: {error.message}</h1>;
  }

  return (
    <>
      <div className="flex items-center gap-1 font-semibold pt-10 pl-10 underline decoration-rose-500 text-rose-500">
        <BiArrowBack />
        <Link to="/products">All Products</Link>
      </div>
      <div className="flex justify-center mt-10 ">
        <div className="p-10 max-w-[80%] border rounded-xl border-gray-500 ">
          <div className="flex justify-center">
            <img className="rounded-xl" src={data.images[currentImage]} />
          </div>
          <div className="grid  grid-cols-3  sm:grid-cols-4  mt-5 ">
            {data.images.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  onClick={() => setCurrentImage(index)}
                  className="max-w-[70px] rounded-md cursor-pointer hover:opacity-50"
                />
              );
            })}
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="ml-2 mt-4 font-bold text-xl">{data.title}</h1>
              <h1 className="ml-2 mt-2 font-light text-sm">{data.category}</h1>
            </div>
            <div>
              <h1 className="ml-2 mt-4 font-bold text-xl">{data.price} $</h1>
            </div>
          </div>
          <h1 className="ml-2 mt-2 font-semibold text-sm">
            {data.description}
          </h1>
          <button className="text-white rounded w-full text-center mt-4 p-2 font-semibold bg-purple-500 hover:bg-purple-700">
            BUY NOW
          </button>
        </div>
      </div>
    </>
  );
}
