export default function Dates({invoiceNumber,invoiceDate,dueDate})
{
    return(
        <>
        <article className="my-5 flex items-end justify-end">
        <ul>
          <li className="p-1"><span className="font-bold">Invoice number:</span>{invoiceNumber}</li>
          <div className="bg-gray-100">
          <li className="p-1"><span className="font-bold">Invoice date:</span>{invoiceDate}</li>
          <li className="p-1"><span className="font-bold">Due Date:</span>{dueDate}</li>
          </div>
        </ul>
       
      </article>
      </>
    )
}