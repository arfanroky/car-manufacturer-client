// import axios from "axios";
import { useEffect, useState } from 'react';
// import { useQuery } from "react-query";
// import { toast } from "react-toastify";
// import Spinner from "../Shared/Spinner";

const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const {
  //     // data,
  //     isLoading,
  //     error,
  //   } = useQuery('equipments', () =>
  //     axios.get('https://sleepy-anchorage-47167.herokuapp.com/equipment')
  //     .then(res => {
  //         const {data} = res;
  //         setProducts(data)
  //     })
  //     )

  //   if (isLoading) {
  //     return <Spinner></Spinner>;
  //   }

  //   if (error) {
  //     toast.error(error);
  //   }

  useEffect(() => {
    fetch('https://sleepy-anchorage-47167.herokuapp.com/equipment')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, [products]);

  return [products, isLoading];
};

export default useProduct;
