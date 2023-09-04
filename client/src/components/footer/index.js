import './style/style.css';
import { useNavigate } from 'react-router-dom';

import { default as ROUTES } from '../../routes.json';
import { default as LANG } from '../../lang.json';

import {
	DarkpixelLogo,
	ExternalUrlIcon,
	DiscordIcon,
	YouTubeIcon,
	TikTokIcon
} from '../icons';

export const Footer = () => {
	const navigate = useNavigate();

	return (
		<footer>
			<div id="footer-logo-container" className="logo-container btn" onClick={() => { navigate(ROUTES.pages.home); }}>
				<DarkpixelLogo />
				<span>{LANG.components.logo.text}</span>
			</div>
			<nav>
				<div>
					<a href="#">{LANG.components.footer.links.help_page}</a>
					<a href="#">{LANG.components.footer.links.faq_page}</a>
					<div><a href="#">{LANG.components.footer.links.forum}</a><ExternalUrlIcon size={10} color='#ffffff' /></div>
				</div>
				<div>
					<div><DiscordIcon size={15} /><a href="#">{LANG.components.footer.links.discord}</a><ExternalUrlIcon size={10} color='#ffffff' /></div>
					<div><YouTubeIcon size={15} /><a href="#">{LANG.components.footer.links.youtube}</a><ExternalUrlIcon size={10} color='#ffffff' /></div>
					<div><TikTokIcon size={15} /><a href="#">{LANG.components.footer.links.tiktok}</a><ExternalUrlIcon size={10} color='#ffffff' /></div>
				</div>
			</nav>
			<div id="footer-info-container">
				<span>{LANG.components.footer.copyright}</span>
				<span>{LANG.components.footer.mojang_info}</span>
			</div>
		</footer>
	);
}