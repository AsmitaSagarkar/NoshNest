import Card from "./card"

export default function Menu() {
    return (

        <div>
        
        <div className="flex justify-center items-center flex-col ">
        <h3 className="text-gray-600 font-semibold text-2xl italic">Check Out</h3>
        <h1 className="text-emerald-700 font-bold text-4xl">Menu</h1>
        </div>

        <div className="grid grid-cols-4 gap-2 my-5">

            <div className="flex justify-center items-center "><Card  /></div>
            <div className="flex justify-center items-center"><Card /></div>
            <div className="flex justify-center items-center"><Card /></div>
            <div className="flex justify-center items-center"><Card /></div>
            <div className="flex justify-center items-center"><Card /></div>
            <div className="flex justify-center items-center"><Card /></div>
            <div className="flex justify-center items-center "><Card  /></div>
            <div className="flex justify-center items-center "><Card  /></div>


        </div>
        
        </div>
    )
}