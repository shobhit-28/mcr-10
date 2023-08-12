import { useContext } from "react"
import { ProductReducerContext } from "../../context/productReducerContext"

export const HomePage = () => {
    const {products} = useContext(ProductReducerContext)
    console.log(products)

  return (
    <div className="page flex justify-evenly items-center h-[75vh]">
        <div className="w-60 h-60 bg-[#f2f2f2] flex flex-col items-center justify-center gap-8 rounded-xl">
            <span className="font-semibold text-3xl text-green-600">{products.reduce((acc, {stock}) => acc + stock ,0)}</span>
            <span className="text-2xl font-medium">Total Stock</span>
        </div>
        <div className="w-60 h-60 bg-[#f2f2f2] flex flex-col items-center justify-center gap-8 rounded-xl">
            <span className="font-semibold text-3xl text-orange-500">{products.reduce((acc, {delivered}) => acc + delivered ,0)}</span>
            <span className="text-2xl font-medium">Total Delivered</span>
        </div>
        <div className="w-60 h-60 bg-[#f2f2f2] flex flex-col items-center justify-center gap-8 rounded-xl">
            <span className="font-semibold text-3xl text-red-500">{products.filter(({stock}) => stock <= 10).length}</span>
            <span className="text-2xl font-medium">Total Delivered</span>
        </div>
    </div>
  )
}
