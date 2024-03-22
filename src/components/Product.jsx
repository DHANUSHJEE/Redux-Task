import React, { useState } from "react";


export const ProductContext = React.createContext(null);
function Product({ children }) {
    const [data, setData] = useState({
        'products' : [


            {
                "id": 1,
                "title": "iPhone 9",
                "description": "An apple mobile which is nothing like apple",
                "price": 549,
                "discountPercentage": 12.96,
                "rating": 4.69,
                "stock": 94,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": 'https://tse3.mm.bing.net/th?id=OIP.nLi2A0Beu5RPL7TTAaH2mQHaHa&pid=Api&P=0&h=180',
                "images": [
                    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
                    'https://tse1.mm.bing.net/th?id=OIP.PucQGCWPpPkLZXFgrO2ZBgAAAA&pid=Api&P=0&h=180'
                    // 'https://tse3.mm.bing.net/th?id=OIP.8_de3ueQp_L2aJOeAm3paQHaEY&pid=Api&P=0&h=180'
                ]
            },
            {
                "id": 2,
                "title": "iPhone XR",
                "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                "price": 899,
                "discountPercentage": 17.94,
                "rating": 4.44,
                "stock": 34,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": 'https://tse4.mm.bing.net/th?id=OIP.wjCKxkLdSMvgIrEc6eZhMwHaHa&pid=Api&P=0&h=180',
                "images": [
                    ' https://i.dummyjson.com/data/products/2/thumbnail.jpg',
                    'https://tse3.mm.bing.net/th?id=OIP.BKhq131bT_pT7ai1Lcb4vAHaFk&pid=Api&P=0&h=180',
                    'https://tse2.mm.bing.net/th?id=OIP.v2vZoQoJsalJfrdpra2bdQHaHa&pid=Api&P=0&h=180',

                ]
            },
            {
                "id": 3,
                "title": "Samsung Universe 9",
                "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
                "price": 1249,
                "discountPercentage": 15.46,
                "rating": 4.09,
                "stock": 36,
                "brand": "Samsung",
                "category": "smartphones",
                "thumbnail": 'https://tse3.mm.bing.net/th?id=OIP.AndDiJ6byCyHJtg4ZsO2bgHaJN&pid=Api&P=0&h=180',
                "images": [
                    "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
                    'https://tse4.mm.bing.net/th?id=OIP.Kvk1Hpe9P6sBsEH8PbYivwHaE8&pid=Api&P=0&h=180',
                    'https://tse2.mm.bing.net/th?id=OIP.u49RM0ESgt9rca4sA2yDVAHaEL&pid=Api&P=0&h=180'
                ]
            },
            {
                "id": 4,
                "title": "OPPOF19",
                "description": "OPPO F19 is officially announced on April 2021.",
                "price": 280,
                "discountPercentage": 17.91,
                "rating": 4.3,
                "stock": 123,
                "brand": "OPPO",
                "category": "smartphones",
                "thumbnail": 'https://tse3.mm.bing.net/th?id=OIP.NkjB7LvlRDacy9mLs04bnQHaHV&pid=Api&P=0&h=180',
                "images": [
                    "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
                    'https://tse4.mm.bing.net/th?id=OIP.cpo6t9nz4c83mMa2pUk1UAHaHa&pid=Api&P=0&h=180',
                    'https://tse3.mm.bing.net/th?id=OIP.bW8-LSLRNYILAILJ2t4-7AHaJK&pid=Api&P=0&h=180'
                ]
            },
            {
                "id": 5,
                "title": "Huawei P30",
                "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
                "price": 499,
                "discountPercentage": 10.58,
                "rating": 4.09,
                "stock": 32,
                "brand": "Huawei",
                "category": "smartphones",
                "thumbnail": 'https://tse2.mm.bing.net/th?id=OIP.Fafhf7TKxX3KoCoR2yEasQHaHa&pid=Api&P=0&h=180',
                "images": [
                    "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
                    'https://tse2.mm.bing.net/th?id=OIP.rw25dKVMHPZyq8bhtDFpxwHaHa&pid=Api&P=0&h=180',
                    'https://tse4.explicit.bing.net/th?id=OIP.4U2kkSM1T5OBByvz-bldRAHaHa&pid=Api&P=0&h=180'
                ]
            }
        ]

    });


    return (
        // <ProductContext.Provider value={{ data, Setdata }}>

        //     {child}

        // </ProductContext.Provider>
        <ProductContext.Provider value={{data,setData}}>
              {children}
        </ProductContext.Provider>
    );
}


export default Product;