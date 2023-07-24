/* eslint-disable react/prop-types */
import Typography from '@mui/material/Typography';
const ContractTemplate = ({firstName,lastName})=>{
    
        return (
            <div style={{margin: '10px'}}>
                <div style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
                <h2>Contract of {firstName} {lastName}</h2>
             
                </div>
            
              <h3>Terms and Conditions:</h3>
              <ul>
              <Typography>
                Clause 1: This is the first clause of the contract. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod malesuada lectus in hendrerit.
              </Typography>
              <Typography>
                Clause 2: This is the second clause of the contract. Vestibulum at cursus urna, vel rhoncus ligula. Quisque auctor ac purus vel pulvinar. Sed bibendum libero in diam pharetra, id posuere mauris finibus.
              </Typography>
              <Typography>
                Clause 3: This is the third clause of the contract. Fusce sed facilisis tellus. Pellentesque iaculis lorem odio, in pharetra dolor eleifend ac.
              </Typography>
              </ul>
              <p>By signing below, both parties agree to the terms and conditions outlined in this contract.</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <div>
                  <strong>Client Signature:&nbsp;{firstName}{lastName}</strong> ______________________
                </div>
                <div>
                  <strong>Contractor Signature:</strong> ______________________
                </div>
              </div>
            </div>
        
    )
}
export default ContractTemplate