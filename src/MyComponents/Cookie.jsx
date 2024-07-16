import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const Cookie = () => {
  const [cookies, setCookie] = useCookies(['cookieConsent']);
  const [consentGiven, setConsentGiven] = useState(false);
  console.log(cookies)
  const handleConsent = () => {
    setConsentGiven(true);
    setCookie('cookieConsent', 'true');
  };

  return (
    <>
      {!cookies.cookieConsent && (
        <div className='Cookie'>
          <p>Bu veb sayt təcrübənizi artırmaq üçün kukilərdən istifadə edir. Bu vebsaytdan istifadə etməyə davam etməklə siz kukilərdən istifadəmizlə razılaşırsınız.</p>
          <button onClick={handleConsent} className='btn'>Raziyam</button>
        </div>
      )}
    </>
  );
};

export default Cookie;