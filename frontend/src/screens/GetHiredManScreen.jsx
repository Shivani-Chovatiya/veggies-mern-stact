import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import { submitForm } from '../actions/hiringmanAction';
import Loader from '../components/shared/Loader';
import Message from '../components/shared/Message';

const GetHiredManScreen = ({ location, history }) => {

 
  const [firstname, setfirstName] = useState("");
  const [middlename, setmiddleName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  // const mansubmit = useSelector(state=>state.mansubmit)
  // const {manAddress} = mansubmit
  const [address1,setaddress] =useState("")
  const [address2,setaddress2] =useState("")
  const [mobileNo,setmobileno] =useState("")
  const [city,setcity] =useState("")
  const [state,setstate] =useState("")
  const [pincode,setpincode]=useState("")
  const [idproof,setidproof] =useState("")
  const [age,setage] =useState("")
 

  const checkout = () => {
    history.push(`/details`);
  };
  // const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();
  const manSubmitFormReducer = useSelector(state=>state.manSubmitFormReducer)
  const {loading, error,success,men, workerInfo} =manSubmitFormReducer

 
  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
   
      dispatch(submitForm(  firstname,
        middlename,
        lastname,
        email,address1 ,address2,city,pincode,state,mobileNo));
    
  };
    
  return (
    <div>
        {/* <h1>GetHiredManScreen</h1> */}
        {
            loading && (<Loader/>)
        }
         { error && <Message variant="danger">Your Request doesn't send...Please Fill Correct Information </Message>}
         { success && <Message variant="success">Request send Successfully</Message>}
       
        <Form onSubmit={submitHandler} >
        <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter First name" value={firstname}
              onChange={(e) => setfirstName(e.target.value)} />
      
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Middle Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Middle name" value={middlename}
              onChange={(e) => setmiddleName(e.target.value)}/>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Last name" value={lastname}
              onChange={(e) => setlastName(e.target.value)} />
    </Form.Group>

  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" value={email}
              onChange={(e) => setEmail(e.target.value)}/>
    </Form.Group>

   
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" value={address1}
              onChange={(e) => setaddress(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" value={address2}
              onChange={(e) => setaddress2(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Mobile No.</Form.Label>
    <Form.Control type="text" placeholder="Enter Mobile No." pattern="[1-9]{1}[0-9]{9}" value={mobileNo}
              onChange={(e) => setmobileno(e.target.value)}/>
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity" value={city}
              onChange={(e) => setcity(e.target.value)}>
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState" value={state}
              onChange={(e) => setstate(e.target.value)}>
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option value="Andhra Pradesh">Andhra Pradesh</option>
 <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
 <option value="Arunachal Pradesh">Arunachal Pradesh</option>
 <option value="Assam">Assam</option>
 <option value="Bihar">Bihar</option>
 <option value="Chandigarh">Chandigarh</option>
 <option value="Chhattisgarh">Chhattisgarh</option>
 <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
 <option value="Daman and Diu">Daman and Diu</option>
 <option value="Delhi">Delhi</option>
 <option value="Lakshadweep">Lakshadweep</option>
 <option value="Puducherry">Puducherry</option>
 <option value="Goa">Goa</option>
 <option value="Gujarat">Gujarat</option>
 <option value="Haryana">Haryana</option>
 <option value="Himachal Pradesh">Himachal Pradesh</option>
 <option value="Jammu and Kashmir">Jammu and Kashmir</option>
 <option value="Jharkhand">Jharkhand</option>
 <option value="Karnataka">Karnataka</option>
 <option value="Kerala">Kerala</option>
 <option value="Madhya Pradesh">Madhya Pradesh</option>
 <option value="Maharashtra">Maharashtra</option>
 <option value="Manipur">Manipur</option>
 <option value="Meghalaya">Meghalaya</option>
 <option value="Mizoram">Mizoram</option>
 <option value="Nagaland">Nagaland</option>
 <option value="Odisha">Odisha</option>
 <option value="Punjab">Punjab</option>
 <option value="Rajasthan">Rajasthan</option>
 <option value="Sikkim">Sikkim</option>
 <option value="Tamil Nadu">Tamil Nadu</option>
 <option value="Telangana">Telangana</option>
 <option value="Tripura">Tripura</option>
 <option value="Uttar Pradesh">Uttar Pradesh</option>
 <option value="Uttarakhand">Uttarakhand</option>
 <option value="West Bengal">West Bengal</option>
    
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip" value={pincode}
              onChange={(e) => setpincode(e.target.value)}>
      <Form.Label>Pincode</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <div className="mb-3">
     <label for="formFileMultiple" className="form-label" value={idproof}
              onChange={(e) => setidproof(e.target.value)}>Id proof </label>
     <input className="form-control" type="file" id="formFileMultiple" multiple required/>
   </div>

   
       <div >
       
       <Form.Group className="mb-3" id="formGridRadio" value={age}
              onChange={(e) => setage(e.target.value)}> 
       <Form.Label >Age</Form.Label>
    <Form.Check  type="radio" label="18 to 34" name="gridRadios10" value="option1" checked/>
    
    <Form.Check type="radio" label="35 to 50" name="gridRadios10" value="option2" />
  </Form.Group></div>
  
 <div className="col-12">
     <div className="form-check">
       <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
       <label className="form-check-label" for="invalidCheck">
         Agree to terms and conditions
       </label>
       <div className="invalid-feedback">
         You must agree before submitting.
       </div>
     </div>
   </div>
  <Button variant="primary" type="submit" >
    Submit
  </Button>
  {/* <Button variant="primary" type="submit" onClick={checkout} >
    All Request Details
  </Button> */}
</Form>
        </div>
  )
}

export default GetHiredManScreen




