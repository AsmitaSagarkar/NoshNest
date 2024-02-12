import Menu from "./menu";
export default function Main(){
    return(
        <>
        <div className="grid grid-cols-2">

            <div className="flex flex-col justify-center items-left ml-8 gap-4 mt-14">
                <h1 className="text-emerald-700 text-7xl font-bold">Nourishing Nest: Where Taste Takes Flight!</h1>
                <p className="text-gray-600 font-bold text-2xl">Welcome to Nosh-Nest!Your flavorful escape awaits, where every dish tells a story of culinary excellence.</p>
                <button className="text-emerald-700 rounded-full border-2 border-emerald-700 px-7 py-2 w-max font-bold text-xl">Order now</button>

            </div>

            <div className= "flex justify-center items-center mt-10">
                <img src={"../deliveryboy.jpg"} alt= "Loading..." className="w-96 h-96 rounded-full"/>

            </div>
        
        </div>

        <Menu />
        </>

    )
}