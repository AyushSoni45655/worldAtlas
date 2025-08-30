export const Contact = ()=>{
  const handleFormSubmit = (e)=>{
    console.log(Object.fromEntries(e.entries()).email);
    
  }
  return(
   <section className="section-about">
    <div className="container">
      <h2 className="contact-title">Contact Us</h2>
      <form action={handleFormSubmit} className="forms" >
        <input type="text" name="userName" placeholder="Enter Your Name" className="contact_input"/>
        <input type="email" name="email" placeholder="Enter Your Email" className="contact_input"/>
        <textarea name="message" className="tarea" rows={10} placeholder="Enter Your Message"></textarea>
        <button type="submit" className="contact_btn" >Send</button>

      </form>
    </div>
   </section>
  );
}