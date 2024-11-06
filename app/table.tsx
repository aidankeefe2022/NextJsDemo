"use client";

import { tree } from "next/dist/build/templates/app-page";
import React, {useState, useEffect, ChangeEvent} from "react";

interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
  }

const Table : React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchterm, setSearchTerm] = useState<string>("");


    useEffect(() => {
        // Fetch 20 products from the API when the component mounts
        fetch('https://fakestoreapi.com/products?limit=20')
          .then((response) => response.json())
          .then((data : Product[]) => setProducts(data));
    }, []);

    const filterProducts = products.filter((products) => {
        if (searchterm == ""){
            return true
        }else{
            return products.title.toLowerCase().includes(searchterm.toLowerCase())
        }
        
    })

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
      };

    return(
        <div>
            <input value={searchterm} type="text" placeholder="Seach Here..." onChange={handleSearchChange} style={{ marginBottom: '20px', padding: '5px', width: '300px' }}/>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filterProducts.map((product : Product) => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td><img src={product.image} alt={product.title} width={50} /></td>
                            <td>{product.price.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
                
                
            </table>


        </div>
    )
    
}

export default Table