export default function TableForm({description,setDescription,item,setItem,price,setPrice})
{
    return(
        <div className="flex flex-col justify-center">
          
          <label htmlFor="description">Item Desciption:</label>
          <input type="text" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} ></input>  
          <label htmlFor="item">Item Name :</label>
          <input type="text" name="item" value={item} onChange={(e)=>setItem(e.target.value)} ></input>  
          <label htmlFor="price">Price :</label>
          <input type="number" name="price" value={price} onChange={(e)=>setPrice(e.target.value)} ></input>  
         
        </div>
    )

}
