import './style/style.css';

import { Button } from '../../components/button';

export const Card = ({ title = '', subtitle = '', image = <></>, children }) => {
	return <div className='card'>
		<header>
			<h2>{title}</h2>
			{subtitle !== '' && <h5 className='subtitle'>{subtitle}</h5>}
		</header>
		{image}
		<div className='extra-content'>{children}</div>
	</div>;
}