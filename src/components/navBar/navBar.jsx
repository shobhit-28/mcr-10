import { useNavigate } from "react-router-dom"

export const NavBar = () => {
    const nav = useNavigate()

  return (
    <div className="bg-[#272829] h-screen w-72 flex flex-col pt-44 items-center gap-20 fixed">
        <button className="text-white text-3xl font-medium" onClick={() => nav('/')}>Dashboard</button>
        <button className="text-white text-3xl font-medium" onClick={() => nav('/description')}>Description</button>
        <button className="text-white text-3xl font-medium" onClick={() => nav('/product')}>Products</button>
    </div>
  )
}
