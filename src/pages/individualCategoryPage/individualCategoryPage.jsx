import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ProductReducerContext } from "../../context/productReducerContext"

export const IndividualCategoryPage = () => {
    const {deptname} = useParams()
    const {products} = useContext(ProductReducerContext)

    const filteredData = products.filter(({department}) => department === deptname )
    console.log(filteredData)

  return (
    <div className="page">{deptname}</div>
  )
}
