import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Col,Form} from 'react-bootstrap';
import { Formik } from 'formik';


const Home=()=>{

    return(
        <div  style={{display:'flex',flexDirection:'center'}} className="container col-xl-10 col-xxl-8 px-4 py-5"> 
        <div style={{display:'flex',flex:'2'}} className="row align-items-center g-lg-5 py-5">
        <div  style={{display:'flex',flexDirection:'column',flexGap:'1rem'}} className="col-md-10 mx-auto col-lg-7"> 
        <div className='my-3' style={{display:'flex',justifyContent:'center'}}><h2>Klever</h2> </div>
        <div className='my-3' style={{display:'flex',justifyContent:'space-between'}}><h2>Wish Wallet</h2> </div>
        <div className='my-3' style={{display:'flex',justifyContent:'space-between'}}><h5>Add Token</h5>
        <Button className="w-10 btn btn-sm btn-primary">Voltar</Button></div>
        
    <Formik
      onSubmit={values=>{
      }} >
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
        <Form className="p-0 p-md-8 rounded-3 bg-dark" noValidate >
            <Form.Group as={Col} md="10" controlId="validationFormik01">
              <Form.Label>Token</Form.Label>
              <Form.Control
                type="text"
                name="token"/>
                 </Form.Group>
                 <Form.Group as={Col} md="10" controlId="validationFormik01">
              <Form.Label>Balance</Form.Label>
              <Form.Control
                type="text"
                name="balance"
              />
                 </Form.Group>
                 <div style={{display:'flex',justifyContent:'space-between'}}>
                 <Button className="w-10 btn btn-sm btn-primary px-5 my-3 "  type="submit">Remove</Button>
                 <Button className="w-10 btn btn-sm btn-primary px-5 my-3 "  type="submit">Save</Button>
                 </div>
        </Form>
      )}
    </Formik>
    </div>
    </div>
    </div>
    )
}

export default Home