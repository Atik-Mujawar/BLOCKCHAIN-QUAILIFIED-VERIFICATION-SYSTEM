
import { useNavigate} from 'react-router-dom'; 

import emailjs from 'emailjs-com'



const Mailer = () => {
    const email = localStorage.getItem("email");
    const account = localStorage.getItem("account");
    <div className="c">
            <div>
                <h3>Your account: {account} </h3>
                <h3>Your email: {email} </h3>
                <button
                    onClick={() => {
                    localStorage.removeItem("email");
                    localStorage.removeItem("account");
                    window.location.reload();
                    }}
                    >
                    {" "}Log out

                </button>
                
                
            </div>
        </div>
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_le4lrd5",
            "template_ugb9k9u",
            e.target,
            "aVd8spLfEWWnzVmBu"    
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }
    return(
        <div className="screen" >
            <div>
            <h3>Your account: {account} </h3>
                <h3>Your email: {email} </h3>
                <button
                    onClick={() => {
                    localStorage.removeItem("email");
                    localStorage.removeItem("account");
                    window.location.reload();
                    }}
                    >
                    {" "}Log out

                </button>
                <form className="uploadfile" onSubmit={sendEmail}>
                <h1>File Upload</h1>
                <div className="ui divider"></div>
                <div className="ui form">
                <div className="field"></div>

                <div className="field">
                <input
                    type="text"
                    name="iname"
                    placeholder="Enter the certificate issuer's Name"
                />
                </div>

                <div className="field">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter the certificate holder's Name"
                />
                </div>

                <div className="field">
                <input
                    type="email"
                    name="user_email"
                    placeholder="Enter the certificate holder's email id"
                />
                </div>

                <div className="field">
                <input type='file'  />
                
                </div>

                <button className="uploadfile-button" value="Send" >UPLOAD</button>

            </div>
            </form>
            </div> 
        </div>
    );
}

export default Mailer;