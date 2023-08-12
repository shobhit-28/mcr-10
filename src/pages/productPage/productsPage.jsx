import { useContext, useState } from "react"
import { ProductReducerContext } from "../../context/productReducerContext"
import { ProductListingComponent } from "../../components/productListingComponent/productListingComponent"

export const ProductsPage = () => {
    const { products } = useContext(ProductReducerContext)

    const [productList, setProductList] = useState(products)
    const [sortBy, setSortBy] = useState('')

    const filterChangeHandler = value => {
        setProductList(products.filter((product) => product.department === value))
    }

    const showLowStockItems = event => {
        if (event.target.checked) {
            setProductList(products.filter(({ stock }) => stock <= 10))
        } else {
            setProductList(products)
        }
    }


    return (
        <div className="page">

            <div className="fixed top-0 w-[80vw] flex justify-around bg-white/80 py-4">
                <p className="">Products</p>
                <select name="dept" id="dept" className="border border-black" defaultValue='disabled_one' onChange={(event) => filterChangeHandler(event.target.value)}>
                    <option value="disabled_one" disabled>All Dept.</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Toys">Toys</option>
                </select>
                <label htmlFor="low_stock" onChange={(event) => showLowStockItems(event)}>
                    <input type="checkbox" name="low_stock" id="low_stock" />
                    <span className="">Low Stock Items</span>
                </label>
                <select name="dept" id="dept" className="border border-black" defaultValue='disabled_one' onChange={(event) => setSortBy(event.target.value)}>
                    <option value="disabled_one" disabled>Sort by</option>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="stock">Stock</option>
                </select>
                <button className="bg-blue-700 text-blue-50 py-2 px-4">New</button>
            </div>

            <div className="mt-14">
                <div className="">

                </div>
                <div className="">
                    {(() => {
                        switch (sortBy) {
                            case 'name':
                                return productList?.sort((a, b) => {
                                    let fa = a.name.toLowerCase(),
                                        fb = b.name.toLowerCase();

                                    if (fa < fb) {
                                        return -1;
                                    }
                                    if (fa > fb) {
                                        return 1;
                                    }
                                    return 0;
                                })?.map((product) => (
                                    <ProductListingComponent key={product.id} product={product} />
                                ))
                            case 'price':
                                return productList?.sort((a, b) => a.price - b.price)?.map((product) => (
                                    <ProductListingComponent key={product.id} product={product} />
                                ))
                            case 'stock':
                                return productList?.sort((a, b) => a.stock - b.stock)?.map((product) => (
                                    <ProductListingComponent key={product.id} product={product} />
                                ))
                            default:
                                return productList?.map((product) => (
                                    <ProductListingComponent key={product.id} product={product} />
                                ))
                        }
                    })()}
                </div>
            </div>

        </div>
    )
}
