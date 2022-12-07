import { useState } from "react";

export default function Contact() {
  const [error, setError] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const fname = event.target.Fname.value;
    const lname = event.target.Lname.value;
    const email = event.target.email.value;
    const number = event.target.tel.value;
    const text = event.target.par.value;
    const data = { fname, lname, email, number, text };

    // console.log(data);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    fetch("https://testapi.io/api/53427228d1/resource/contact", requestOptions)
      .then((response) => response.json())
      .then((data) => setError(data.errors));
  };

  return (
    <>
      <section className="contact" id="contact">
        <h1 className="title">Contact</h1>

        <form action="Submit" onSubmit={(e) => handleSubmit(e)}>
          <div
            style={{
              position: "absolute",
              top: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
              flexWrap: "wrap",
              color: "red"
            }}
          >
            {!error && "Submit"}
          </div>
          <input
            className={error?.fname && "error"}
            type="text"
            name="Fname"
            id="Fname"
            placeholder="First Name"
          />
          <input
            className={error?.lname && "error"}
            type="text"
            name="Lname"
            id="Lname"
            placeholder="Last Name"
          />
          <input
            className={error?.email && "error"}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            className={error?.number && "error"}
            type="tel"
            name="tel"
            id="tel"
            placeholder="Phone Number"
          />

          <textarea
            className={error?.text && "error"}
            name="par"
            id="par"
            placeholder="Talk to me.."
          />
          <button type="submit">submit</button>
          <button type="reset">reset</button>
        </form>
      </section>
    </>
  );
}
