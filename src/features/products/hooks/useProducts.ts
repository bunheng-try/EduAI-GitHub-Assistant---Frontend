// src/features/products/hooks.ts
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, type Product } from "../services/api";
import { useEffect, useState } from "react";

export const useProducts = () => {
    //with react query

  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });



    // Normal fetch

    // const [data, setData] = useState<Product[] | null>(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [isError, setIsError] = useState(false);
    // const [error, setError] = useState<Error | null>(null);


    // useEffect(() => {
    //     const load = async () => {
    //     try {
    //         setIsLoading(true);
    //         const res = await fetchProducts();
    //         setData(res);
    //     } catch (err) {
    //         setIsError(true);
    //         setError(err as Error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    //     };

    //     load();
    // }, []);

    // return { data, isLoading, isError, error };
};
