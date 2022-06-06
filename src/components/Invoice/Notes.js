export default function Note({notes})
{
    return (
        <>
         <section className=" mt-20 mb-5">
           <h2 className="font-bold">Note:</h2>
           <p >{notes}</p>
         </section>
        </>
    )
}