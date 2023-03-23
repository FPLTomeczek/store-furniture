import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import SingleProductHero from "../components/SingleProductHero";
import Parameters from "../components/Parameters";
import Slider from "../components/Slider";
import Loading from "../components/Loading";

const SingleProductPage = () => {
  const { id } = useParams();

  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState({});

  useEffect(() => {
    setLoading(true);
    const fetchProduct = (id) => {
      setProduct(...data.filter((elem) => elem.id === Number(id)));
    };
    fetchProduct(id);
    setLoading(false);
  }, [id]);

  if (isLoading) {
    return (
      <section>
        <Loading />
      </section>
    );
  }

  return (
    <div>
      <SingleProductHero product={product} />
      <Parameters product={product} />
      <Slider
        products={[
          ...data.filter(
            (elem) => elem.type === product.type && elem.name !== product.name
          ),
        ]}
        page="single-product"
      />
    </div>
  );
};

export default SingleProductPage;
