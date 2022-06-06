export default function Footer({name,email,phoneNo,bankAccount,bankAccountHolder,website}){
    return(
        <>
         <footer className="footer li border-t-2 border-gray">
           <ul className="flex flex-wrap item-center justify-center">
             <li><span className="font-bold "> Your Name : </span> {name} </li>
             <li><span className="font-bold"> Your Email: </span> {email} </li>
             <li><span className="font-bold"> Phone No: </span> {phoneNo} </li>
             <li><span className="font-bold"> Account Holder : </span>{bankAccountHolder} </li>
             <li><span className="font-bold"> Bank Account No: </span> {bankAccount} </li>
             <li><span className="font-bold"> Website: </span><a href={website}>{website}</a> </li>
           </ul>
         </footer>
        </>
    )
}