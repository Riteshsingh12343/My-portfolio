// import React, { useState } from 'react';
// import "./contact.css";

// const Contact = () => {

//   const [user, setUser] = useState({
//     name: "" ,
//     email: "",
//     text: "",
//     message: ""
//   });
//   let name, value;
//   const getUserData = (event) => {
//     name = event.target.name;
//     value = event.target.value;

//     setUser({ ...user, [name]: value });
//   };

//   const postData = async(e)=> {
//     e.preventDefault();
// const   {name,email,text,message } =user;
  


//      const res = await fetch("https://portfolio-message-6969-default-rtdb.firebaseio.com/portfolio.json", {
//       method:"POST",
//       headers: {
//         "Content-Type" :"application/json",
//               },
//               body:JSON.stringify({
//                 name ,
//                 email ,
//                 text ,  
//                 message 
//               })
//      });

//      if(res) {
//       setUser({
//         name:"",
//         email: "",
//         text: "",
//         message:"" ,
//       })

//       alert ("Data Stored Successfully") ;
//      } else{
//       alert("Please Fill All Data Carefully ")
//      }
//   };

//   return (
//     <section className="contact container section" id='contact'>
//       <h2 className="section__title">Get In Touch</h2>


//       <div className="contact__container grid">
//         <div className="contact__info">
//           <h3 className="contact__title"> Let's talk about everything!</h3>
//           <p className="contact__details"> Don't like forms? Send me an email. 👋</p>
//         </div>

//         <form action="" className="contact__form" method= "POST">
//           <div className="contact__form-group">
//             <div className="contact__form-div">
//               <input type="text" name="name" className="contact__form-input"
//                 placeholder='Insert your name '

//                 value={user.name}
//                 onChange={getUserData} 
//                 required />

//             </div>

//             <div className="contact__form-div">
//               <input type="email" name="email" className="contact__form-input"
//                 placeholder='Insert your email '
//                 value={user.email}
//                 onChange={getUserData}
//                 required />

//             </div>
//           </div>
//           <div className="contact__form-div">
//             <input type="Text" name="text" className="contact__form-input"
//               placeholder='Insert your text '
//               value={user.text}
//               onChange={getUserData}
//                />

//           </div>


//           <div className="contact__form-div contact-form-area">
//             <textarea id="" cols="30" rows="10"
//               className='contact__form-input' name="message" placeholder='Write your message '
//               value={user.message}
//               onChange={getUserData}
//               required >

//             </textarea>
//           </div>

//           <button className="btn" onClick={postData}> Send Message</button>
//         </form>
//       </div>

//     </section>

//   )
// }

// export default Contact;

import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    text: '',
    message: '',
  });

  const getUserData = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const validateForm = () => {
    const { name, email, message } = user;
    if (!name || !email || !message) {
      return false;
    }
    return true;
  };

  const postData = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert('Please Fill All Data Carefully');
      return;
    }

    const { name, email, text, message } = user;

    const res = await fetch('https://portfolio-message-6969-default-rtdb.firebaseio.com/portfolio.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        text,
        message,
      }),
    });

    if (res.ok) {
      setUser({
        name: '',
        email: '',
        text: '',
        message: '',
      });

      alert('Data Stored Successfully');
    } else {
      alert('Error storing data. Please try again.');
    }
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email. 👋</p>
        </div>

        <form action="" className="contact__form" onSubmit={postData} method="POST">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
                value={user.name}
                onChange={getUserData}
                required
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
                value={user.email}
                onChange={getUserData}
                required
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="Text"
              name="text"
              className="contact__form-input"
              placeholder="Insert your text"
              value={user.text}
              onChange={getUserData}
            />
          </div>

          <div className="contact__form-div contact-form-area">
            <textarea
              cols="30"
              rows="10"
              className="contact__form-input"
              name="message"
              placeholder="Write your message"
              value={user.message}
              onChange={getUserData}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
