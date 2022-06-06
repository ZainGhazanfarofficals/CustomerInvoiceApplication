export default function MainDetails({name , address})
{
    return(
        <>
        <section className="flex flex-col item-center justify-end">
       {/* Your details */}
         <h2 className="text-xl uppercase">{name}</h2>
         <h2>{address}</h2>
        
       </section>
       </>
    )

}