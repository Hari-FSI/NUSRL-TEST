import Document, { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react';

export default class CustomDocument extends Document {
  
  render(){
    return (
      <Html lang="en">
        <Head>
        <link rel="icon" href="/images/favicon.png" />
        <meta name="description" content="NUSRL, Ranchi, National University of Study and Research in Law" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        </Head>
        <body>
        <Main />  
        <NextScript />
        </body>
      </Html>
    );
    
  }



}
