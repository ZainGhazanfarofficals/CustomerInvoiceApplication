export default function ClientDetails ({clientName,clientAddress})
{
    return(
        <>
    <section className="mt-5">
  
    <h2 className="text-xl uppercase">Client Name: {clientName}</h2>
    
    <h2>Client Address: {clientAddress}</h2>
    
    </section>
    </>
    )
}