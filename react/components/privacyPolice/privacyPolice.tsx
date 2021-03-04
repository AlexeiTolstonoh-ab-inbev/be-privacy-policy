import React from 'react'


const PrivacyPolice = () => {
	return (
		<div>
			<div id="marlin-pp"></div>
			<script> var ppm = document.getElementById("marlin-pp"); if (ppm !=null){ (document.head || document.getElementsByTagName("head")[0]).appendChild((function () { var s = document.createElement('script'); s.src = "https://legal.ab-inbev.com/js/legalApp-sdk.min.js";
				s.setAttribute('data-domain', 'https://danny.delivery/privacy-policy'); s.setAttribute('id', 'legalAppSdk'); return s; })()) } </script>
		</div>
	)
}
export default PrivacyPolice
