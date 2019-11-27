import React from 'react';
import Layout from '../components/layout_cont'
import cS from './contact.module.scss'

const Contact = () => (
    
    <Layout>
    
        <div className ='hero-arch' />   
        <div className={cS.section}>                        
        <div className={cS.form}>
                <h1>Kontakt</h1>
                
                <div >
                    <form method='post' name='contact' action='/thanks' data-netlify='true' netlify-honeypot='bot'>
                    <input type='hidden' name='form-name' value='contact' />
                    <div className={cS.field_hidden}>
                        <label>Don't fill this out, human</label>
                        <input name='bot' />
                    </div>
                    <div className={cS.field}>
                        <label>Imię</label>
                        <input type='text' name='name' />
                    </div>
                    <div className={cS.field}>
                        <label>Email</label>
                        <input type='text' name='email' />
                    </div>
                    <div className={cS.field}>
                        <label>Wiadomość</label>
                        <textarea name='message' rows='6'></textarea>
                    </div>
                    <div className={cS.submit}>
                    <button type='submit' className={cS.btn}>Wyślij</button>
                    </div>
                    </form>
                </div>
                
        </div>
        </div>
        
        
           
       
        
       
    </Layout>
)

export default Contact