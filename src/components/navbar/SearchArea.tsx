import { Search, SlidersHorizontal } from "lucide-react"
import { Input } from "../ui/input"

export const SearchArea = () => {
    return (
        <div className='flex border-2 items-center px-3 rounded-xl gap-3 border-[#C3D4E9] order-last sm:order-none w-full sm:w-auto mt-3 sm:mt-0'>
            <Search width={24} height={24} />

            <Input
                type='text'
                placeholder='Search something here'
                className="w-[24rem] p-1 focus:outline-none focus:border-none"
            />

            <SlidersHorizontal width={24} height={24} onClick={()=>alert('eeeee')}/>
        </div>
    )
}
