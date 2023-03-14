import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux';
//import { Link } from 'react-router-dom';

const FAQ = ({history}) => {

  const manSubmitFormReducer=useSelector(state => state.manSubmitFormReducer)
  const {loading,error,men} = manSubmitFormReducer
    const checkout = () => {
        history.push(`/login?redirect=fillform`);
      };
  return (
    <>
        
        
        <div>
    <h4>
    1. How much salary can I expect?
    </h4>
    <p>
    Ans. You can expect a minimum salary of 25,000 INR and can go up to 45,000 INR.
 The salary offered will depend on your skills, experience and performance in the interview.
    </p>
    
    <h4>2. What is the eligibility criteria to apply for this job?</h4>
    <p>
Ans. The candidate should have completed 10th or Below 10th degree and people
 who are freshers are eligible to apply for this job. 
    </p>
    <h4>
      3.How can i apply?
    </h4>
    <p>
      Ans. You can apply through our website you just have to fill the form in the get hired section.
    </p>
    <h4>
      4.What are the eligibility criteria?
    </h4>
        <p>
          Ans. You must have 18+ and have your own bike.
          </p>
        
        

        <Button onClick={checkout}> Fill Form</Button>
        </div>
    </>
  )
}

export default FAQ






const FAQS = () => {
  return (
    <div>
    <h4>
    1. How much salary can I expect?
    </h4>
    <p>
    Ans. You can expect a minimum salary of 25,000 INR and can go up to 45,000 INR.
 The salary offered will depend on your skills, experience and performance in the interview.
    </p>
    
    <h4>2. What is the eligibility criteria to apply for this job?</h4>
    <p>
Ans. The candidate should have completed 10th or Below 10th degree and people
 who are freshers are eligible to apply for this job. 
    </p>
    <h4>
      3.How can i apply?
    </h4>
    <p>
      Ans. You can apply through our website you just have to fill the form in the get hired section.
    </p>
    <h4>
      4.What are the eligibility criteria?
    </h4>
        <p>
          Ans. You must have 18+ and have your own bike.
          </p>
        
        </div>
  )
}

