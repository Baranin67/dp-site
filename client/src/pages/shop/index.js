import './style/style.css';

import { default as LANG } from '../../lang.json';
import { default as SHOP_ITEMS } from '../../shop_items.json';

import {
	MinecraftRedBedImg,
	ArrowRightIcon,
	MinecraftVipFont,
	MinecraftVipPlusFont,
	MinecraftMvpFont,
	MinecraftMvpPlusFont,
	MinecraftMvpPlusPlusFont,
	MinecraftSunflowerImg
} from '../../components/icons';
import { NavBar } from '../../components/navbar';
import { Footer } from '../../components/footer';
import { Card } from '../../components/card';
import { Button } from '../../components/button';

const RanksSection = () => {
	let i = -1;

	// Automatic card's title getter.
	const card = (image, price) => {
		i++;
		return <Card
			title={LANG.pages.shop.sections.ranks.cards[i].title ? LANG.pages.shop.sections.ranks.cards[i].title : 'No title'}
			image={image}
		>
			<div className='price-container'>
				<span className='caption'>{LANG.pages.shop.price.caption}</span>
				<span className='price'>{LANG.pages.shop.price.value.replace('%s', SHOP_ITEMS.ranks[i].price)}</span>
			</div>
			<Button text={LANG.pages.shop.buttons.buy.text} icon={<ArrowRightIcon />} />
		</Card>;
	};

	return <section id='ranks'>
		<header><h1>{LANG.pages.shop.sections.ranks.header}</h1></header>
		<div className='shop-items-wrapper'>
			{card(<MinecraftVipFont />)}
			{card(<MinecraftVipPlusFont />)}
			{card(<MinecraftMvpFont />)}
			{card(<MinecraftMvpPlusFont />)}
			{card(<MinecraftMvpPlusPlusFont />)}
		</div>
	</section>
}

const CoinsSection = () => {
	let i = -1;

	// Automatic card's title getter.
	const card = () => {
		i++;
		return <Card
			title={LANG.pages.shop.sections.coins.cards[i].title ? LANG.pages.shop.sections.coins.cards[i].title : 'No title'}
			subtitle={LANG.pages.shop.sections.coins.cards[i].subtitle ? LANG.pages.shop.sections.coins.cards[i].subtitle
				.replace('%s', SHOP_ITEMS.coins[i].min_coins).replace('%s', SHOP_ITEMS.coins[i].max_coins) : 'No subtitle'}
			image={<MinecraftSunflowerImg size='40%' />}
		>
			<div className='price-container'>
				<span className='caption'>{LANG.pages.shop.price.caption}</span>
				<span className='price'>{LANG.pages.shop.price.value.replace('%s', SHOP_ITEMS.coins[i].price)}</span>
			</div>
			<Button text={LANG.pages.shop.buttons.buy.text} icon={<ArrowRightIcon />} />
		</Card>;
	};

	return <section id='coins'>
		<header><h1>{LANG.pages.shop.sections.coins.header}</h1></header>
		<div className='shop-items-wrapper'>
			{card()}
			{card()}
			{card()}
			{card()}
			{card()}
		</div>
	</section>
}

export const ShopPage = () => {
	return (
		<>
			<NavBar activeButtonID={1} />
			<main>
				<RanksSection />
				<CoinsSection />
			</main>
			<Footer />
		</>
	);
}