import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const NavButton = ({
	active = false,
	url = null,
	onClick = () => { },
	dropdown = null,
	children
}) => {
	const navigate = useNavigate();
	const [dropdownShown, setDropdownShown] = useState(false);

	return (
		<div
			onMouseEnter={() => { if (dropdown != null) setDropdownShown(true); }}
			onMouseLeave={e => { if (dropdown != null) setDropdownShown(false); }}
			onClick={e => {
				setDropdownShown(!dropdownShown);
				onClick(e);
				if (url !== null && !active) navigate(url);
			}}
			className={'nav-btn btn' + (active ? ' active disabled' : '')}
		>
			<div className="nav-btn-content">{children}</div>
			{dropdownShown && dropdown}
		</div>
	);
}