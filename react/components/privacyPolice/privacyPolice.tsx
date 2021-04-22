import React, {useState} from 'react'
import style from './privacyPolice.css'
import NlTranslate from "../nl-tanslate/nl-translate";
import FrTranslate from "../fr-tanslate/fr-translate";

const PrivacyPolice = () => {
	const [langueage, setLanguage] = useState('nl')
	const optionChange = (evt: any) =>{
		setLanguage(evt.target.value)
	}
	return (
			<div className={style.listWrapper}>
				<div className={style.optionContainer}>
				<select className={style.langChooser} onChange={optionChange}>
					<option value={'fr'}>French</option>
					<option selected={true} value={'nl'}>Dutch</option>
				</select>
				</div>
				{langueage === 'fr' ? <FrTranslate/> : <NlTranslate/>}
			</div>
	)
}
export default PrivacyPolice
