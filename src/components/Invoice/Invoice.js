import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Notes"
import MainDetails from "./MainDetails";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import Table from "./Table";
import TableForm from "./TableForm";

function Invoice() {
  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [bankAccount, setBankAccount] = useState("")
  const [website, setWebsite] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [Notes, setNotes] = useState("")

  const [desciption, setDescription] = useState("")
  const [item, setItem] = useState("")
  const [price, setPrice] = useState("")

  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto  bg-white rounded shadow">
        {showInvoice ? <div>
          <Header />
          <MainDetails name={name} address={address} />
          <ClientDetails clientName={clientName} clientAddress={clientAddress} />
          <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
          <Table  desciption={desciption} item={item} price={price}  />
          <Note notes={Notes} />
          <Footer name={name} email={email} phoneNo={phone} bankAccount={bankAccount} bankAccountHolder={name} website={website} />
          <button id="printPageButton" onClick={() => setShowInvoice(false)} className="bg-blue-500 py-2 px-8 text-white rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit Information</button>
        </div> : (
          <>
            <div>
              <h1 className="font-bold tracking-wide text-4xl justify-center align-middle">Invoice Form</h1>
            </div>

            <div className="flex flex-col justify-center">

              <label htmlFor="name">Enter your name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                autoCapitalize="off"
                value={name}
                onChange={(e) => setName(e.target.value)} />


              <label htmlFor="address">Enter your Address:</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter your Address"
                autoCapitalize="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)} />

              <label htmlFor="email">Enter your Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                autoCapitalize="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

              <label htmlFor="website">Enter your Website:</label>
              <input
                type="url"
                name="website"
                id="text"
                placeholder="Enter your website"
                autoCapitalize="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)} />

              <label htmlFor="phoneno">Enter your Phone No:</label>
              <input
                type="tel"
                name="phoneno"
                id="phoneno"
                placeholder="Enter your Phone No"
                autoCapitalize="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)} />

              <label htmlFor="bankAccount">Enter Bank Account:</label>
              <input
                type="text"
                name="bankAccount"
                id="bankAccount"
                placeholder="Enter your Account No"
                autoCapitalize="off"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)} />

              <label htmlFor="clientName">Enter Client Name:</label>
              <input
                type="text"
                name="clientName"
                id="clientName"
                placeholder="Enter Client Name"
                autoCapitalize="off"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)} />

              <label htmlFor="clientAddress">Enter Client Address:</label>
              <input
                type="text"
                name="clientAddress"
                id="clientAddress"
                placeholder="Enter Client Address"
                autoCapitalize="off"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)} />

              <label htmlFor="invoiceNumber">Enter Invoice Number:</label>
              <input
                type="text"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="Enter Invoice Number"
                autoCapitalize="off"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)} />

              <label htmlFor="invoiceDate">Enter invoice Date:</label>
              <input
                type="Date"
                name="invoiceDate"
                id="invoiceDate"
                placeholder="Enter Invoice Date"
                autoCapitalize="off"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)} />

              <label htmlFor="dueDate">Enter Due Date:</label>
              <input
                type="Date"
                name="dueDate"
                id="dueDate"
                placeholder="Enter Due Date"
                autoCapitalize="off"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)} />
              <article>
                <TableForm
                  desciption={desciption}
                  setDescription={setDescription}
                  item={item}
                  setItem={setItem}
                  price={price}
                  setPrice={setPrice}
                />

              </article>

              <label htmlFor="Notes">Enter Notes:</label>
              <textarea
                className="lg:w-1/2 "
                name="Notes"
                id="Notes"
                placeholder="Enter Notes"
                autoCapitalize="off"
                value={Notes}
                onChange={(e) => setNotes(e.target.value)}

              ></textarea>
              <button onClick={() => setShowInvoice(true)} className="bg-blue-500 text-white py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Preview Invoice</button>

            </div>
          </>
        )}

      </main>
    </>
  );
}

export default Invoice;
