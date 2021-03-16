import React, {useState} from 'react'
import style from './privacyPolice.css'
import NlTranslate from "../nl-tanslate/nl-translate";
import FrTranslate from "../fr-tanslate/fr-translate";
import EnTranslate from "../en-tanslate/en-translate";
const PrivacyPolice = () => {
	const [langueage, setLanguage] = useState('en')
	const optionChange = (evt: any) =>{
		setLanguage(evt.target.value)
	}
	return (
			<div className={style.listWrapper}>
				<div className={style.optionContainer}>
				<select className={style.langChooser} onChange={optionChange}>
					<option selected={true} disabled>Choose your language</option>
					<option value={'fr'}>French</option>
					<option value={'en'}>English</option>
					<option value={'nl'}>Dutch</option>
				</select>
				</div>
				{langueage === 'en' ? <EnTranslate/> : langueage === 'fr' ? <FrTranslate/> : <NlTranslate/>}
			</div>
	)
}
export default PrivacyPolice
