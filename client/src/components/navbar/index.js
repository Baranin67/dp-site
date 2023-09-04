import './style/style.css';
import { useNavigate } from 'react-router-dom';

import { default as COLORS } from '../../colors.json';
import { default as ROUTES } from '../../routes.json';
import { default as LANG } from '../../lang.json';

import { NavButton } from '../navbutton';
import { Dropdown } from '../dropdown';
import {
	UserIcon,
	DropdownIcon,
	YouTubeIcon,
	DiscordIcon,
	TikTokIcon,
	DarkpixelLogo
} from '../icons';

// TODO: Płynna animacja border'a przycisku strony, na której użytkownik się znajduje.

const LinksDropdown = () => {
	return <Dropdown buttons={[{
		icon: <DiscordIcon />,
		text: LANG.components.nav.buttons.dropdown.discord.text,
		fontColor: COLORS.discord[100],
		url: 'https://discord.gg/VUAQXPNYGB/',
		urlOpenNewTab: true,
		isExternalLink: true
	}, {
		icon: <YouTubeIcon />,
		text: LANG.components.nav.buttons.dropdown.youtube.text,
		fontColor: COLORS.youtube[100],
		url: 'https://www.youtube.com/channel/UCqsMbAIH7L9TntspA1vhPOA/',
		urlOpenNewTab: true,
		isExternalLink: true
	}, {
		icon: <TikTokIcon />,
		text: LANG.components.nav.buttons.dropdown.tiktok.text,
		fontColor: COLORS.tiktok[100],
		url: 'https://www.tiktok.com/@darkpixel.pl/',
		urlOpenNewTab: true,
		isExternalLink: true
	}]} />;
}

const ServerDropdown = () => {
	return <Dropdown buttons={[{
		icon: <UserIcon />,
		text: LANG.components.nav.buttons.dropdown.latest_news.text,
		fontColor: COLORS.primary[100]
	}, {
		icon: <UserIcon />,
		text: LANG.components.nav.buttons.dropdown.our_forum.text,
		fontColor: COLORS.primary[100],
		isExternalLink: true
	}, {
		icon: <UserIcon />,
		text: LANG.components.nav.buttons.dropdown.faq.text,
		fontColor: COLORS.primary[100]
	}, {
		icon: <UserIcon />,
		text: LANG.components.nav.buttons.dropdown.report_department.text,
		fontColor: COLORS.primary[100]
	}]} />;
}

export const NavBar = ({ activeButtonID = -1 }) => {
	const navigate = useNavigate();

	return (
		<nav id="nav-main-container">
			<div id="nav-left-container" className="btn">
				<div id="nav-logo-container" className="logo-container btn" onClick={() => { navigate(ROUTES.pages.home); }}>
					<DarkpixelLogo />
					<span>{LANG.components.logo.text}</span>
				</div>
			</div>
			<div id="nav-center-container">
				<NavButton url={ROUTES.pages.home} active={activeButtonID === 0}><span>{LANG.components.nav.buttons.home_page.text}</span></NavButton>
				<NavButton url={ROUTES.pages.shop} active={activeButtonID === 1}><span>{LANG.components.nav.buttons.shop_page.text}</span></NavButton>
				<NavButton url={ROUTES.pages.discord} active={activeButtonID === 2}><span>{LANG.components.nav.buttons.discord_page.text}</span></NavButton>
				<NavButton dropdown={<LinksDropdown />} active={activeButtonID === 3}><span>{LANG.components.nav.buttons.links_drop.text}</span><DropdownIcon /></NavButton>
				<NavButton dropdown={<ServerDropdown />} active={activeButtonID === 4}><span>{LANG.components.nav.buttons.server_drop.text}</span><DropdownIcon /></NavButton>
			</div>
			<div id="nav-right-container" className="btn" onClick={() => { navigate(ROUTES.pages.login); }}>
				<UserIcon size={17} />
				<span>{LANG.components.nav.buttons.login.text}</span>
			</div>
		</nav>
	);
}
