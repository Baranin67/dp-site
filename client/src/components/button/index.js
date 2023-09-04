import './style/style.css';

import { useNavigate } from 'react-router-dom';

export const Button = ({
	text = 'Button',
	icon = <></>,
	onClick = e => { },
	url = '',
	isExternalUrl = false,
	urlNewTab = false,
	id = '',
	className = ''
}) => {
	const navigate = useNavigate();

	return (
		<button id={id ? id : null} className={'btn' + (className && ' ' + className)} onClick={e => {
			onClick(e);
			if (url !== '') {
				if (isExternalUrl) {
					if (urlNewTab) window.open(url);
					else window.location.href = url;
				} else navigate(url);
			}
		}}>
			<span>{text}</span>
			{icon}
		</button>
	);
}