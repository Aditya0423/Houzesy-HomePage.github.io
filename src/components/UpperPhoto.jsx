import React from 'react';
import Addproject from './AddProject';
import background from "./img/placeholder.jpg";

export default function UpperPhoto(){
    return (
        <div style={{ backgroundImage: `url(${background})`,
        height:'95%',
        width: '100%',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
    left: '0',
    top: '70px' ,
    height: '642px',
    width: '100%' , }}>
          <div>
<Addproject/>
          
          </div>
        </div>
      );
}