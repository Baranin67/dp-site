import './style/style.css';

import { default as LANG } from '../../lang.json';

import { NavBar } from '../../components/navbar';
import { Footer } from '../../components/footer';
import { Button } from '../../components/button';
import { Card } from '../../components/card';

import {
	DarkpixelLogo,
	ArrowDownIcon,
	ArrowRightIcon,
	MinecraftRedBedImg,
	MinecraftTallgrassImg,
	MinecraftPortalImg,
	MinecraftTntImg,
	MinecraftRedLeatherHelmetImg
} from '../../components/icons';

/*
	TODO: Płynne przejście do drugiej sekcji podstrony, po kliknięciu '#hero-down-indicator-container'.
	TODO: Animacje pojawiania się elementów na stronie, gdy stają się one widoczne dla użytkownika.
*/

const MinigameContainer = ({ header, image }) => {
	return <div className='minigame-container'>
		<header><h2>{header}</h2></header>
		{image}
		<Button text={LANG.pages.home.sections.minigames.buttons.more.text} icon={<ArrowRightIcon />} />
	</div>;
}

const StatContainer = ({ header, value }) => {
	return <div className='stat-container'>
		<header>
			<h3>{header}</h3>
			<div className='stat-underline'></div>
		</header>
		<span className='stat-value'>{value}</span>
	</div>;
}

const HeroSection = () => {
	return <section id='hero'>
		<header>
			<DarkpixelLogo id='hero-logo' />
			<h3 id='hero-subtitle'>{LANG.pages.home.sections.hero.subtitle}</h3>
			<h1 id='hero-title'>{LANG.pages.home.sections.hero.title}</h1>
		</header>
		<div id='hero-down-indicator-container' className='btn'><ArrowDownIcon size={15} /></div>
	</section>;
}

const MinigamesSection = () => {
	const cardBtn = { text: LANG.pages.home.sections.minigames.buttons.more.text, icon: <ArrowRightIcon /> };

	return <section id='minigames'>
		<header>
			<h1>{LANG.pages.home.sections.minigames.header}</h1>
			<div className='section-header-underline'></div>
		</header>
		<div id='minigames-wrapper'>
			<Card button={cardBtn} title={LANG.pages.home.sections.minigames.cards.bedwars.header} image={<MinecraftRedBedImg />} />
			<Card button={cardBtn} title={LANG.pages.home.sections.minigames.cards.survival.header} image={<MinecraftTallgrassImg />} />
			<Card button={cardBtn} title={LANG.pages.home.sections.minigames.cards.thebridge.header} image={<MinecraftPortalImg />} />
			<Card button={cardBtn} title={LANG.pages.home.sections.minigames.cards.tntrun.header} image={<MinecraftTntImg />} />
			<Card button={cardBtn} title={LANG.pages.home.sections.minigames.cards.tnttag.header} image={<MinecraftRedLeatherHelmetImg />} />
		</div>
	</section>;
}

const StatsSection = () => {
	return <section id='stats'>
		<header>
			<h1>{LANG.pages.home.sections.stats.header}</h1>
			<div className='section-header-underline'></div>
		</header>

		<div id='stats-wrapper'>
			<StatContainer header={LANG.pages.home.sections.stats.stats.all.header} value={LANG.pages.home.sections.stats.stats.all.value.replace('%s', 57)} />
			<StatContainer header={LANG.pages.home.sections.stats.stats.online.header} value={LANG.pages.home.sections.stats.stats.online.value.replace('%s', 2137)} />
			<StatContainer header={LANG.pages.home.sections.stats.stats.banned.header} value={LANG.pages.home.sections.stats.stats.banned.value.replace('%s', 0)} />
		</div>
	</section>;
}

export const HomePage = () => {
	window.document.title = LANG.pages.home.title;

	return <>
		<NavBar activeButtonID={0} />
		<main>
			<HeroSection />
			<MinigamesSection />
			<StatsSection />
		</main>
		<Footer />
	</>;
}