// import React, { useContext, useState, useEffect } from "react";
// import style from "../../Styles/shop.module.css";
// import ProductCard from "./ProductCard";
// import ProductContext from "../../ContextAPIs/ProductsContext";

// function Shop() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category
//   const { products, getProducts, deleteProduct } = useContext(ProductContext);

//   // Get unique categories from products
//   const uniqueCategories = [...new Set(products.map(product => product.category))];

//   // Filter products based on search term and selected category
//   const filteredProducts = products.filter((product) => {
//     const matchesSearchTerm =
//       searchTerm === "" || product.title.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === "" || product.category === selectedCategory;
//     return matchesSearchTerm && matchesCategory;
//   });

//   return (
//     <div className={` ${style.templateContainer} py-5`}>
//       <div className="container m-auto mt-5 p-5">
//         <div className="mb-3">
//           <input
//             className={`form-control ${style.sform}`}
//             id="searchInput"
//             type="search"
//             placeholder="Search here..."
//             value={searchTerm}
//             onChange={(event) => setSearchTerm(event.target.value)}
//           />

//           <select
//             className={`form-select ms-3 ${style.sform2}`}
//             value={selectedCategory}
//             onChange={(event) => setSelectedCategory(event.target.value)}
//           >
//             <option value="">All</option>
//             {uniqueCategories.map((category, index) => (
//               <option key={index} value={category}>
//                 {category}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className={`${style.cardContainer} py-5`}>
//           {filteredProducts.map((productItem) => (
//             <ProductCard
//               getProducts={getProducts}
//               deleteProduct={deleteProduct}
//               key={productItem.id}
//               product={productItem}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Shop;

import React, { useContext, useState } from "react";
import style from "../../Styles/shop.module.css";
import ProductCard from "./ProductCard";
import ProductContext from "../../ContextAPIs/ProductsContext";

function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category
  const { products, getProducts, deleteProduct } = useContext(ProductContext);

  // Check if the products array is being received correctly
  console.log("Products array:", products);

  // Get unique categories from products
  const uniqueCategories = [...new Set(products.map(product => product.category))];

  // Check the unique categories derived from products
  console.log("Unique categories:", uniqueCategories);

  // Filter products based on search term and selected category
  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm =
      searchTerm === "" || product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "" || product.category === selectedCategory;
    return matchesSearchTerm && matchesCategory;
  });

  // Check the filtered products
  console.log("Filtered products:", filteredProducts);

  return (
    <div className={` ${style.templateContainer} py-5`}>
      <div className="container m-auto mt-5 p-5">
        <div className={` mb-3 ${style.fform}`}>
          {/* Search Input */}
          <input
            className={`form-control me-17 ${style.sform}`}
            id="searchInput"
            type="search"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          {/* Category Dropdown */}
          <select
            className={`form-select ${style.sform2}`}
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            <option value="">All</option>
            {uniqueCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Product Cards */}
        <div className={`${style.cardContainer} py-5`}>
          {filteredProducts.map((productItem) => (
            <ProductCard
              getProducts={getProducts}
              deleteProduct={deleteProduct}
              key={productItem.id}
              product={productItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
