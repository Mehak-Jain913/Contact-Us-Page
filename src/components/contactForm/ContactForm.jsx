import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../button/Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from "react-icons/io";
import { useState } from 'react'

//useState is a hook
const ContactForm = () => {

  let [name, setName] = useState("Mehak");
  let [email, setEmail] = useState("mehak@gmail.com");
  let [text, setText] = useState("I am a Student");


  const onViaCall = () => {
    console.log("I am a Mehak Jain");
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

  }

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button onClick={onViaCall} text=" VIA SUPPORT CHAT "
            icon={<MdMessage fontSize="24px" />} />
          <Button text=" VIA CALL "
            icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text=" VIA EMAIL FORM "
          icon={<IoMdMail fontSize="28px" />} />
        <form action="" onSubmit={onSubmit}>

          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name='email' />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={4} />
          </div>

          <div style={{
            display
              : 'flex', justifyContent: 'flex-end'
          }}><Button
              text="Submit Button" />
          </div>
          {
           name
          }
          <br />
          {
           email
          }
          <br />
          {
           text
          }
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4D3HV76rGThEFXnJ9eTnUMlbazoKm53MwUTAuWP3pKuAZPdflyCoBWfbASKEY_ZzmAQ&usqp=CAU" alt="Contact_image" />
      </div>
    </section>
  )
}

export default ContactForm

//{}->for actual js code
