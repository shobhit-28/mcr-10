import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ProductReducerContext } from "../../context/productReducerContext"

export const DetailsPage = () => {
    const { productID } = useParams()
    const { products } = useContext(ProductReducerContext)

    const product = products.find(({ id }) => String(id) === productID)

    return (
        <div className="page flex flex-col gap-5">
            <p className="text-3xl font-semibold">{product.name}</p>
            <div className="w-72">
                <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="flex flex-col gap-3">
                <p className="font-medium text-lg">{`Price: $${product.price}`}</p>
                <p className="font-medium text-lg">{`Stock: ${product.stock}`}</p>
                <p className="font-medium text-lg">{`Supplier: $${product.supplier}`}</p>
                <p className="font-medium text-lg">{`Department: $${product.department}`}</p>
                <p className="font-medium text-lg">{`SKU: $${product.sku}`}</p>
                <p className="font-medium text-lg">{`Delivered: $${product.delivered}`}</p>
                <p className="font-medium text-lg">{`Description: $${product.description}`}</p>
            </div>
        </div>
    )
}
