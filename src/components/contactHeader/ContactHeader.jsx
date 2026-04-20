import React from 'react'
import styles from './ContactHeader.module.css'
export default function ContactHeader() {
  return (
     <div className={styles.contact_section}>
      <h1>Contact US</h1>
      <p>"Feel free to reach out to us with any questions, feedback, or suggestions. Our team is always here to help and will respond as soon as possible. We value your input and look forward to connecting with you!"</p>
    </div>
  )
}
