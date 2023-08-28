import React from 'react';

const Secured = () => {

 return (
   <div>
    <h1 className="text-black text-4xl">Welcome to the Protected Page.</h1>
    <iframe
        title="WMCA Account List"
        aria-describedby="Custom2IFrame"
        src="http://localhost:9091"
        id="Custom2IFrame"
        width="100%"
        height="600"
        className="resizeIframe"
    ></iframe>
   </div>
 );
};

export default Secured;
