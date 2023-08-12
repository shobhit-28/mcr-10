import { useNavigate } from "react-router-dom"

export const DeptPage = () => {
    
  const nav = useNavigate()

  return (
    <div className="page flex justify-evenly items-center h-[75vh]">
      <button className="w-60 h-60 bg-[#f2f2f2] flex flex-col items-center justify-center gap-8 rounded-xl" onClick={() => nav(`/dept/Kitchen`)}>
            <span className="font-semibold text-3xl text-green-600">Kitchen</span>
        </button>
        <button className="w-60 h-60 bg-[#f2f2f2] flex flex-col items-center justify-center gap-8 rounded-xl" onClick={() => nav(`/dept/Clothing`)}>
            <span className="font-semibold text-3xl text-orange-500">Clothing</span>
        </button>
        <button className="w-60 h-60 bg-[#f2f2f2] flex flex-col items-center justify-center gap-8 rounded-xl" onClick={() => nav(`/dept/Toys`)}>
            <span className="font-semibold text-3xl text-red-500">Toys</span>
        </button>
    </div>
  )
}
