import { useNavigate } from "react-router-dom"

/* eslint-disable react/prop-types */
export const ProductListingComponent = ({ product }) => {
    const nav = useNavigate()

    return (
        <div className="flex items-center gap-6 mb-4 cursor-pointer" onClick={() => nav(`/product/${product.id}`)}>
            <div className="w-32">
                <img src={product.imageUrl} alt="product.name" />
            </div>
            <p className="w-[20%]">{product.name}</p>
            <p className="w-1/2">{product.description}</p>
            <p className="w-[5%]">{product.price}</p>
            <p className="w-[5%]">{product.stock}</p>
            <p className="w-[20%]">{product.supplier}</p>
        </div>
    )
}
