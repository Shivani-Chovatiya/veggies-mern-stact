import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/shared/Loader';
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { useAlert } from "react-alert";
import { forgotPassword } from '../actions/userAction';
import Message from '../components/shared/Message';


const ForgotPassword = () => {

    const dispatch = useDispatch();
    //const alert = useAlert();
  
    const { error, message, loading } = useSelector(
      (state) => state.forgotPasswordReducer
    );
  
    const [email, setEmail] = useState("");
  
    const forgotPasswordSubmit = (e) => {
      e.preventDefault();
  
      const myForm = new FormData();
  
      myForm.set("email", email);
      dispatch(forgotPassword(myForm));
    };
  
    // useEffect(() => {
    // //   if (error) {
    // //     alert.error(error);
    // //     dispatch(clearErrors());
    // //   }
  
    //   if (message) {
    //     alert.success(message);
    //   }
    // }, [dispatch, error, alert, message]);
  return (
    <div>
    
      {loading && <Loader />}
      {message && <Message varient="success">{message}</Message>}
     {error && <Message varient="danger">{error}</Message> }
        <>
          {/* <MetaData title="Forgot Password" /> */}
          <div className="forgotPasswordContainer">
            <div className="forgotPasswordBox">
              <h2 className="forgotPasswordHeading">Forgot Password</h2>

              <form
                className="forgotPasswordForm"
                onSubmit={forgotPasswordSubmit}
              >
                <div className="forgotPasswordEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <input
                  type="submit"
                  value="Send"
                  className="forgotPasswordBtn"
                />
              </form>
            </div>
          </div>
        </>
        </div>
      )

   
  
}

export default ForgotPassword