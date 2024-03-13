import React from 'react'
import Script from 'next/script';
const socialfeeds = () => {
  return (
    <>
    
    <section className="socialfeeds-sec">
<div className="container container-md container-lg container-xl container-xxl">
<div className="row">

<div className="head wow animate__slideInUp" data-wow-duration="2s"><h3>Social Feeds</h3>
<div className="line"><hr/></div>
</div>

<div className="col-md-4">
<div className="in-block facebook">
<div id="fb-root"></div>
<Script src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v19.0" nonce="cwBsexiP"></Script>
  </div>
</div>

<div className="col-md-4">
<div className="in-block instagram">
<blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/nluo_official/" data-instgrm-version="13"></blockquote>
</div>	
</div>

<div className="col-md-4">
<div className="in-block linkedin">
<div className='sk-ww-linkedin-page-post' data-embed-id='25375662'></div>
<Script src='https://widgets.sociablekit.com/linkedin-page-posts/widget.js' async defer></Script>
</div>
</div>

</div>
</div>
</section>
    </>
  )
}

export default socialfeeds