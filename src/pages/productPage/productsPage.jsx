import { useContext, useState } from "react"
import { ProductReducerContext } from "../../context/productReducerContext"
import { ProductListingComponent } from "../../components/productListingComponent/productListingComponent"

export const ProductsPage = () => {
    const { products, addNewProduct } = useContext(ProductReducerContext)

    const initialState = {
        department: '',
        name: "",
        description: '',
        price: 0,
        stock: 0,
        sku: '',
        supplier: '',
        delivered: 0,
        imageUrl: 'https://picsum.photos/450/450',
    }

    const [productList, setProductList] = useState(products)
    const [sortBy, setSortBy] = useState('')
    const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false)
    const [productData, setProductData] = useState(initialState)

    const filterChangeHandler = value => {
        if (value === 'all') {
            setProductList(products)
        } else {
            setProductList(products.filter((product) => product.department === value))
        }
    }

    const showLowStockItems = event => {
        if (event.target.checked) {
            setProductList(products.filter(({ stock }) => stock <= 10))
        } else {
            setProductList(products)
        }
    }

    const addProduct = () => {
        if (productData.department !== '') {
            if (productData.name !== '') {
                if (productData.description !== '') {
                    if (productData.sku !== '') {
                        if (productData.supplier !== '') {
                            addNewProduct(productData)
                            setProductData(initialState)
                            setIsAddProductModalOpen(false)
                            setProductList([...products, productData])
                        } else {
                            alert('You need enter the supplier of the product')
                        }
                    } else {
                        alert('You need enter the SKU of the product')
                    }
                } else {
                    alert('You need enter the description of the product')
                }
            } else {
                alert('You need enter the name of the product')
            }
        } else {
            alert('You need to select one category')
        }
    }


    return (
        <div className="page">

            <div className="fixed top-0 w-[80vw] flex justify-around bg-white/80 py-4">
                <p className="">Products</p>
                <select name="dept" id="dept" className="border border-black" defaultValue='all' onChange={(event) => filterChangeHandler(event.target.value)}>
                    <option value="all">All Dept.</option>
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
                <button className="bg-blue-700 text-blue-50 py-2 px-4" onClick={() => setIsAddProductModalOpen(true)}>New</button>
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

            {isAddProductModalOpen &&
                <div className="fixed h-screen w-full top-0 left-0 bg-black/30 flex items-center justify-center" onClick={() => setIsAddProductModalOpen(false)}>
                    <div className="w-80 max-h-[75vh] overflow-auto bg-white p-4 flex flex-col gap-4" onClick={(event) => event.stopPropagation()}>
                        <label htmlFor="dept" className="block" onChange={(event) => setProductData({ ...productData, department: event.target.value })}>
                            <select name="dept" id="dept" defaultValue='select' className="border border-black p-2 text-sm w-full">
                                <option value="select" disabled>Select Department</option>
                                <option value="Kitchen" className="">Kitchen</option>
                                <option value="Clothing" className="">Clothing</option>
                                <option value="Toys" className="">Toys</option>
                            </select>
                        </label>
                        <label htmlFor="name" onChange={(event) => setProductData({ ...productData, name: event.target.value })}>
                            <span className="block">Name:</span>
                            <input type="text" name="name" id="name" className="border border-black p-2 text-sm w-full outline-none" />
                        </label>
                        <label htmlFor="desc" onChange={(event) => setProductData({ ...productData, description: event.target.value })}>
                            <span className="block">Description:</span>
                            <textarea name="desc" id="desc" cols="30" rows="10" className="border border-black p-2 text-sm outline-none w-full"></textarea>
                        </label>
                        <label htmlFor="price" onChange={(event) => setProductData({ ...productData, price: event.target.value })}>
                            <span className="block">Price:</span>
                            <input type="number" name="price" id="price" className="border border-black p-2 text-sm w-full outline-none" defaultValue={0} />
                        </label>
                        <label htmlFor="stock" onChange={(event) => setProductData({ ...productData, stock: event.target.value })}>
                            <span className="block">Stock:</span>
                            <input type="number" name="stock" id="stock" className="border border-black p-2 text-sm w-full outline-none" defaultValue={0} />
                        </label>
                        <label htmlFor="sku" onChange={(event) => setProductData({ ...productData, sku: event.target.value })}>
                            <span className="block">SKU:</span>
                            <input type="text" name="sku" id="sku" className="border border-black p-2 text-sm w-full outline-none" />
                        </label>
                        <label htmlFor="supplier" onChange={(event) => setProductData({ ...productData, supplier: event.target.value })}>
                            <span className="block">Supplier:</span>
                            <input type="text" name="supplier" id="supplier" className="border border-black p-2 text-sm w-full outline-none" />
                        </label>
                        <label htmlFor="delivered" onChange={(event) => setProductData({ ...productData, delivered: event.target.value })}>
                            <span className="block">Delivered:</span>
                            <input type="number" name="delivered" id="delivered" className="border border-black p-2 text-sm w-full outline-none" defaultValue={0} />
                        </label>
                        <label htmlFor="img" onChange={(event) => setProductData({ ...productData, imageUrl: event.target.value })}>
                            <span className="block">Image URL:</span>
                            <input type="text" name="img" id="img" className="border border-black p-2 text-sm w-full outline-none" />
                        </label>
                        <button className="block bg-blue-700 text-blue-50 py-2 px-4" onClick={() => addProduct()}>Add Product</button>
                    </div>
                </div>
            }

        </div>
    )
}
