export default function Table({desciption,item,price})
{
    return (
      <>
      <table width="100%">
          <thead >
              <tr className="bg-gray-100 p-1">
              <td>Description</td>
              <td>Item</td>
              <td>Price</td>
              </tr>
          </thead>
          <tbody>
              <tr>
              <td>{desciption}</td>
              <td>{item}</td>
              <td>{price}</td>
              </tr>
          </tbody>
      </table>
      </>
    )
}
