import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import SingleProductImage from "../components/SingleProductImage";
import Parameters from "../components/Parameters";

const SingleProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = (id) => {
      console.log(id);
      console.log(...data.filter((elem) => elem.id === Number(id)));
      setProduct(...data.filter((elem) => elem.id === Number(id)));
    };
    fetchProduct(id);
  }, [id]);
  return (
    <div>
      <SingleProductImage product={product} />
      <Parameters product={product} />
    </div>
  );
};

export default SingleProductPage;
