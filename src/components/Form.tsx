"use client";

import { useState, useEffect } from "react";

export default function Form() {
  // const [mounted, setMounted] = useState(false);
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [age, setAge] = useState("");
  // const [message, setMessage] = useState("");
  // const [sending, setSending] = useState(false);
  // const [sent, setSent] = useState(false);

  // useEffect(() => {
  //     setMounted(true)
  // }, [])

  // const handleSubmit = async (e: { preventDefault: () => void; }) => {
  //     e.preventDefault();
  //     setSending(true);

  //     const res = await fetch("/api/email", {
  //         body: JSON.stringify({
  //             name: name,
  //             email: email,
  //             phone: phone,
  //             age: age,
  //             message: message,
  //         }),
  //         headers: {
  //             "Content-Type": "application/json",
  //         },
  //         method: "POST",
  //     });

  //     const { error, status } = await res.json();

  //     if (status === "success") {
  //         setSending(false);
  //         setSent(true);
  //     }

  //     if (error) {
  //         console.log(error);
  //         return;
  //     }
  // };

  return (
    <div className="w-full md:mx-20 p-20 bg-base-200">
      <div className="form-control space-y-5">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p>Fill out the form below to get started!</p>
        <div className="h-[1100px]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSftwrjbscU5X-tZjgY3ILZwvQCpWQtXeexJEVv8ge2CeF3leA/viewform?embedded=true"
            className="bg-base-20 mx-auto sm:min-w-[666px] min-w-full"
            style={{
              width: "auto",
              height: "100%",
            }}
          >
            Loading…
          </iframe>
        </div>
      </div>
      {/* {mounted && (
                <form className="max-w-xl w-full mb-12 p-5" id="get-started" onSubmit={handleSubmit}>
                    {!sent && (
                        <div className="form-control space-y-5">
                            <h2 className="text-3xl font-bold">Contact Us</h2>
                            <p>Fill out the form below to get started!</p>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" onChange={(e) => { setName(e.target.value); }} />
                            <input type="text" name="email" placeholder="Email" className="input input-bordered w-full" onChange={(e) => { setEmail(e.target.value); }} />
                            <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full" onChange={(e) => { setPhone(e.target.value); }} />
                            <input type="text" name="age" placeholder="Child's Age" className="input input-bordered w-full" onChange={(e) => { setAge(e.target.value); }} />
                            <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Additional Questions or Comments" onChange={(e) => { setMessage(e.target.value); }}></textarea>
                            <button className="btn btn-primary">{sending ? 'Sending...' : 'Submit'}</button>
                        </div>
                    )}
                    {sent && <h2 className="text-xl text-center">Thank you for getting in Touch! We will get back to you soon.</h2>}
                </form>
            )} */}
    </div>
  );
}
