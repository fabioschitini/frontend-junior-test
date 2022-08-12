import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Col,Form,Row,COntainer} from 'react-bootstrap';
import { Formik } from 'formik';


const Home2=()=>{

    return(
        <div  style={{display:'flex',flexDirection:'center'}} className="container col-xl-10 col-xxl-8 px-4 py-5"> 
        <div style={{display:'flex',flex:'2'}} className="row align-items-center g-lg-5 py-5">
        <div  style={{display:'flex',flexDirection:'column',flexGap:'1rem'}} className="col-md-10 mx-auto col-lg-7"> 
        <div className='my-3' style={{display:'flex',justifyContent:'center'}}><h2>Klever</h2> </div>
        <div className='my-3' style={{display:'flex',justifyContent:'space-between'}}><h2>Wish Wallet</h2> 
        <Button style={{backgroundColor:'violet'}}>Add Token</Button>
        </div>
      <div className='my-0' style={{display:'flex',justifyContent:'space-between'}}><p>Tokens</p><p>Balance</p></div>
<div className='my-0'  style={{display:'flex',flexDirection:'row',justifyContent: 'space-between'}} >
    <div className='my-0' style={{display:'flex',flexDirection:'row',justifyContent: 'space-between'}}>
    <div className='mr-3' style={{display:'flex',alignItems: 'center',marginRight:'20px'}}>
    <svg color='white' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
<path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
</svg>
</div>
    <h1>KLV</h1>
    </div>
        <h1>10,250.50</h1>
</div>
    </div>
    </div>
    </div>
    )
}

export default Home2