import { getApiProducts } from "@/services/products.service";
import { useEffect, useState, useTransition } from "react";


const useProducts = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [isLoading, startTransition] = useTransition();
    const [pag, setPag] = useState<{ limit: number, page: number, search: string }>({ limit: 10, page: 1, search: "" });

    const getProducts = async () => {
        startTransition(async () => {
            const response = await getApiProducts({ ...pag, errorfun: () => { } });
            console.log(response)
            if (response && response.status) {
                setProducts(response.data.products);
            }
        });
    };

    const handlePagination = (pag: { limit: number, page: number, search: string }) => {
        setPag(pag);
        getProducts();
    };

    useEffect(() => {
        getProducts();
    }, [pag]);

    return {
        products,
        isLoading,
        getProducts,
        handlePagination,
        pag
    };
}

export default useProducts