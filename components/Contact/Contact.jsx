import styles from './ContactStyles.module.css';
import React from 'react';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="" className={styles.contactForm}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            className={styles.input}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            className={styles.input}
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            className={styles.textarea}
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className={`hover btn ${styles.submit}`} type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
