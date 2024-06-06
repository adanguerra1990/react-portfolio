import { useState } from 'react';
import emailjs from 'emailjs-com'

const ContactForm = () => {
     const [contacMessage, setContacMessage] = useState('')

     const sentEmail = (event) => {
          event.preventDefault()
          // serviceID - templateID - #form - publicKey
          emailjs.sendForm('service_g7ud22l', 'template_vqsbkwi', '#contact-form', 'q0BdfsZgwHWVMSnPF')
               .then((result) => {
                    setContacMessage('Message sent✅')

                    setTimeout(() => {
                         setContacMessage('')
                    }, 5000)

                    event.target.reset()
               }, (error) => {
                    setContacMessage('Message not Sent (server ERROR)❌')
               })
     }

     return (
          <section className='contact section' id='contact'>
               <h3 className='section__subtitle'>
                    Get In <span>Touch</span>
               </h3>

               <h2 className='section__title'>
                    Contact Me
               </h2>

               <div className='contact__container container grid'>
                    <form onSubmit={sentEmail} className='contact__form' id='contact-form'>
                         <div className='contact__group'>
                              <input
                                   type='text'
                                   name='user_name'
                                   required
                                   placeholder='Enter Your Name'
                                   className='contact__input'
                              />
                              <input
                                   type='email'
                                   name='user_email'
                                   required
                                   placeholder='Enter Your Email'
                                   className='contact__input'
                              />
                         </div>

                         <textarea
                              name='user_projects'
                              required
                              placeholder='Enter Your Message'
                              className='contact__input'
                         />
                         <p className='contact__message' id='contac-message'>
                              {contacMessage}
                         </p>

                         <button type='submit' className='button contact__button'>
                              Send Message
                         </button>

                    </form>
               </div>
          </section>
     );
}

export default ContactForm;