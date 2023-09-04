import './style/style.css';
import { useNavigate } from 'react-router-dom';

import { ExternalUrlIcon } from '../icons';

/**
 * A single button object:
 * - *icon*?: JSX.Element,
 * - *text*: String,
 * - *fontColor*?: String,
 * - *onClick*?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
 * - *url*?: String,
 * - *urlOpenNewTab*?: boolean,
 * - *isExternalLink*?: boolean
 */
export const Dropdown = ({ buttons = [{}] }) => {
	const navigate = useNavigate();
	let currBtn = 0;

	return (
		<div className='dropdown-wrapper'>
			<div className='btns-container'>
				{buttons.map(btn => {
					currBtn++;
					if (btn.isExternalLink)
						return (
							<a key={currBtn} href={btn.url} target={btn.urlOpenNewTab && '_blank'}>
								<div
									style={btn.fontColor !== undefined && { color: btn.fontColor }}
									onClick={e => { if (btn.onClick !== undefined) btn.onClick(e); }}
									className='btn'
								>
									{btn.icon}{btn.text}{btn.isExternalLink && <ExternalUrlIcon size={10} />}
								</div>
							</a>
						);
					else return (
						<div
							key={currBtn}
							style={btn.fontColor !== undefined && { color: btn.fontColor }}
							onClick={e => {
								if (btn.onClick !== undefined) btn.onClick(e);
								if (btn.url !== undefined) navigate(btn.url);
							}}
							className='btn'
						>
							{btn.icon}{btn.text}{btn.isExternalLink && <ExternalUrlIcon size={10} />}
						</div>
					);
				})}
			</div>
		</div>
	);
}