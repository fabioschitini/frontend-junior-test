import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Col,Form,Alert} from 'react-bootstrap';
import { Formik } from 'formik';
import { useNavigate,useLocation } from "react-router-dom";
import * as yup from 'yup';
import { useState,useEffect } from 'react';

const Add=()=>{
  const [tokenError,setTokenError]=useState(false)
  const [show, setShow] = useState(false);
  const [tokenInitialValue,setTokenInitialValue]=useState('')
  const [balanceInitialValue,setBalanceInitialValue]=useState('')
  const [finalToken,setFinalToken]=useState('yolo')
  const [update,setUpdate]=useState(false)
  const location = useLocation();
  const filteredId=location.pathname.replace('/edit/','');
  const navigate=useNavigate()


  useEffect(()=>{
      const tokenInfo=JSON.parse(localStorage.getItem('tokens'));
    const tokenUpdateInfo=tokenInfo.filter(token=>token.id===filteredId)[0]
        if(tokenUpdateInfo){
          setTokenInitialValue(tokenUpdateInfo.name)
          setBalanceInitialValue(tokenUpdateInfo.balance)
          setUpdate(true)
        } 
  },[])


const schema = yup.object().shape({
  token: yup.string().required("Esse campo é obrigatorio"),
  balance: yup.string().required("Esse campo é obrigatorio")
});

const Delete=()=>{
  const jsonToken=JSON.parse(localStorage.getItem('tokens'));
  const finalTokens=jsonToken.filter(token=>token.id!==filteredId)
  localStorage.setItem('tokens', JSON.stringify(finalTokens));
  const uptadedTokens=JSON.parse(localStorage.getItem('tokens'));
  setFinalToken(JSON.stringify(uptadedTokens))
  navigate('/home')
}

  return(
        <div  style={{display:'flex',flexDirection:'center'}} className="container col-xl-10 col-xxl-8 px-4 py-5"> 
        <div style={{display:'flex',flex:'2'}} className="row align-items-center g-lg-5 py-5">
        <div  style={{display:'flex',flexDirection:'column',flexGap:'1rem'}} className="col-md-10 mx-auto col-lg-7"> 
        <div className='my-3' style={{display:'flex',justifyContent:'center'}}><h2>Klever</h2> </div>
        <div className='my-3' style={{display:'flex',justifyContent:'space-between'}}><h2>Wish Wallet</h2> </div>
        <div className='my-3' style={{display:'flex',justifyContent:'space-between'}}><h5>Add Token</h5>
        <Button className="w-10 btn btn-sm btn-primary">Voltar</Button></div>
        
       {update&&<Formik
         validator={() => ({})}
         validationSchema={schema}
      onSubmit={values=>{
 const jsonToken=JSON.parse(localStorage.getItem('tokens'));
if(jsonToken.filter(token=>token.name===values.token)[0]){
setTokenError('This token name is already being used, please choose another!')
}
else{
let updatedToken={
  id:filteredId,
  name:values.token,
  balance:values.balance
}
const finalTokens=jsonToken.map(token=>{
  if(token.id===filteredId)
  return updatedToken
  else
  return token
})
localStorage.setItem('tokens', JSON.stringify(finalTokens));
const uptadedTokens=JSON.parse(localStorage.getItem('tokens'));
  setFinalToken(JSON.stringify(uptadedTokens))
  navigate('/home')
}
      }}
      initialValues={{
        token: tokenInitialValue,
        balance:balanceInitialValue
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

            <div style={{display:'flex',justifyContent:'space-between'}}>
            <Button onClick={()=>setShow(true)}    className="w-10 btn btn-sm btn-primary px-5 my-3 " >Delete</Button>
            <Button  type="submit"  className="w-10 btn btn-sm btn-primary px-5 my-3 " >Save</Button>
</div>
        </Form>
      )}
    </Formik> } 

    <Alert show={show} variant="danger">
        <Alert.Heading>Are you sure that you want to Delete this token?</Alert.Heading>
        <div className="d-flex justify-content-space-between">
        <Button onClick={Delete} variant="outline-success">Yes</Button>
          <Button onClick={() => setShow(false)} variant="outline-danger">No</Button>
        </div>
      </Alert>
    </div>
    </div>
    <div  style={{display:'none'}}data-testid='test'>{finalToken}</div>
    </div>
    )
}

export default Add