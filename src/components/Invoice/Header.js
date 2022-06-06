const handleprint =()=>{
    window.print();
  }
export default function Header()
{
    return(
        <>
        <header className="flex flex-col  item-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div> 
          <h1 className="font-bold tracking-wide text-4xl ">Invoice</h1>
        </div>
        <div>
          <ul className="flex item-center justify-between flex-wrap">
            <li className="mx-2">
              <button id="printPageButton" className="bg-gray-500 text-white py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300" onClick={handleprint}>Print
              </button>
            </li>
            <li className="mx-2">
              <button id="printPageButton" className="bg-green-500 text-white py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300"> Download</button>  
            </li>
            <li className="mx-2">
             <button id="printPageButton" className="bg-red-500 text-white py-2 px-8 rounded shadow border-2 border-red-500 hover:bg-transparent hover:text-red-500 transition-all duration-300">Send</button> 
            </li>
          </ul>
        </div>
       </header>
       </>        
    )
}