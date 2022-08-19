import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form} from 'react-bootstrap';
import { Formik } from 'formik';
import { useNavigate} from "react-router-dom";
import * as yup from 'yup';
import { useState } from 'react';
import uuid from 'react-uuid'
import { Link} from 'react-router-dom';



const Add=()=>{
const [finalToken,setFinalToken]=useState('yolo')
const [tokenError,setTokenError]=useState(false)
const navigate=useNavigate()
const schema = yup.object().shape({
  token: yup.string().required("Esse campo é obrigatorio"),
  balance: yup.string().required("Esse campo é obrigatorio")
});

    return(
        <div  style={{display:'flex',flexDirection:'center'}} className="container col-xl-10 col-xxl-8 px-4 py-5"> 
        <div style={{display:'flex',flex:'2'}} className="row align-items-center g-lg-5 py-5">
        <div  style={{display:'flex',flexDirection:'column',flexGap:'1rem'}} className="col-md-10 mx-auto col-lg-7"> 
        <div className='my-3' style={{display:'flex',justifyContent:'center'}}><h2>Klever</h2> </div>
        <div className='my-3' style={{display:'flex',justifyContent:'space-between'}}><h2>Wish Wallet</h2> </div>
        <div className='my-3' style={{display:'flex',justifyContent:'space-between'}}><h5>Add Token</h5>
      <Link to='/'> <Button className="w-10 btn btn-sm btn-primary">Voltar</Button> </Link>
      
      </div>
   <Formik
         validator={() => ({})}
         validationSchema={schema}
      onSubmit={values=>{
 const jsonToken=JSON.parse(localStorage.getItem('tokens'));
if(jsonToken.filter(token=>token.name===values.token)[0]){
setTokenError('This token name is already being used, please choose another!')
}
else{
let addedToken={
  id:uuid(),
  name:values.token,
  balance:values.balance
}
jsonToken.push(addedToken)
localStorage.setItem('tokens', JSON.stringify(jsonToken));
const uptadedTokens=JSON.parse(localStorage.getItem('tokens'));
console.log(uptadedTokens)
setFinalToken(JSON.stringify(uptadedTokens))
navigate('/')
}
      }}
      initialValues={{
        token: '',
        balance:''
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
        isValidating,
        validate,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>

            <Form.Group   md="10" controlId="validationFormik01">
              <Form.Label>Token</Form.Label>
              <Form.Control
                type="text"
                name="token"
                value={values.token}
                onChange={handleChange}
                isInvalid={errors.token&&!tokenError}
                placeholder="Token..."
                required
              />
              <Form.Control.Feedback type='invalid'>{errors.token}</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>{tokenError}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group   md="10" controlId="validationFormik01">
              <Form.Label>Balance</Form.Label>
              <Form.Control
                type="text"
                name="balance"
                value={values.balance}
                onChange={handleChange}
                isInvalid={errors.balance}
                placeholder="Balance..."
                required
              />
              <Form.Control.Feedback type='invalid'>{errors.balance}</Form.Control.Feedback>
            </Form.Group>

            <div style={{display:'flex',justifyContent:'end'}}>
<Button  type="submit"  className="w-10 btn btn-sm btn-primary px-5 my-3 " >Save</Button>
</div>
        </Form>
      )}
    </Formik>
    </div>
    </div>
    <div  style={{display:'none'}}data-testid='test'>{finalToken}</div>
    </div>
    )
}

export default Add