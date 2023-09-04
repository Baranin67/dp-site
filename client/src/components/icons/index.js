import { default as Logo } from '../../img/logo.png';
import { default as MinecraftRedBed } from '../../img/mc_bed.png';
import { default as MinecraftTallgrass } from '../../img/mc_tallgrass.png';
import { default as MinecraftPortal } from '../../img/mc_portal.png';
import { default as MinecraftTnt } from '../../img/mc_tnt.png';
import { default as MinecraftRedLeatherHelmet } from '../../img/mc_red_leather_helmet.png';
import { default as MinecraftLuckyBlock } from '../../img/mc_lucky_block.png';
import { default as MinecraftSunflower } from '../../img/mc_sunflower.png';

export const UserIcon = ({ size = 15, color = null }) => {
	return (
		<svg width={size} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
			<path d="M6 0H3V1H2V4H3V5H6V4H7V1H6V0Z" fill={color === null ? '#00386B' : color} />
			<path d="M8 6H3H1V7H0V9H9V7H8V6Z" fill={color === null ? '#00386B' : color} />
		</svg>
	);
}

export const DarkpixelLogo = ({ size = 70, id = '' }) => {
	return <img id={id} width={size} src={Logo} alt="DP" />;
}

export const DropdownIcon = ({ size = 10, color = null }) => {
	return (
		<svg width={size} viewBox="0 0 15 9" xmlns="http://www.w3.org/2000/svg">
			<path d="M3 3H6V6H9V3H12V0H15V3H12V6H9V9H6V6H3V3H0V0H3V3Z" fill={color === null ? '#ffffff' : color} />
		</svg>
	);
}

export const ArrowDownIcon = ({ size = 10, color = '#00386B' }) => {
	return (
		<svg width={size} viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M3 0V5H4V4H5V5H4V6H3V7H2V6H1V5H0V4H1V5H2L2 0L3 0Z" fill={color} />
		</svg>
	);
}

export const ArrowRightIcon = ({ size = 10, color = '#00386B' }) => {
	return (
		<svg width={size} viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 2H5V1H4V0H5V1H6V2H7V3H6V4H5V5H4V4H5V3H0V2Z" fill={color} />
		</svg>
	);
}

export const YouTubeIcon = ({ size = 25 }) => {
	return (
		<svg width={size} viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M2.72727 0H27.2727V2.72727H30V16.3636H27.2727V19.0909H2.72727V16.3636H0V2.72727H2.72727V0ZM15 5.45455H12.2727V13.6364H15V10.9091H17.7273V8.18182H15V5.45455Z" fill="#FF0000" />
			<path d="M12.2727 5.45455H15V8.18182H17.7273V10.9091H15V13.6364H12.2727V5.45455Z" fill="#ffffff" />
		</svg>
	);
}

export const DiscordIcon = ({ size = 25 }) => {
	return (
		<svg width={size} viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M18.4615 0H25.3846V2.27513H27.6923V6.8254H30V18.2011H27.6923V20.4762H20.7692V18.2011H23.0769V15.9259H18.4615V18.2011H11.5385V15.9259H6.92308V18.2011H9.23077V20.4762H2.30769V18.2011H0V6.8254H2.30769V2.27513H4.61538V0H11.5385V2.27513H18.4615V0ZM12.6923 12.5132H8.07692V7.96296H12.6923V12.5132Z" fill="#596BEB" />
			<path d="M8.07692 12.5132H12.6923V7.96296H8.07692V12.5132Z" fill="white" />
			<path d="M17.3077 12.5132H21.9231V7.96296H17.3077V12.5132Z" fill="white" />
		</svg>
	);
}

export const TikTokIcon = ({ size = 25 }) => {
	return (
		<svg width={size} viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M22.5 3H17.25H16.5V25.5H15V27H10.5V25.5H9V24H7.5V19.5H9V18H12V13.5H9V15H7.5V16.5H6V18H4.5V19.5H3V27H4.5V28.5H6V30H7.5V31.5H15V30H18V28.5H19.5V25.5H21V10.5H22.5V12H25.5V13.5H30V9H27V7.5H25.5V6H24V4.5H22.5V3Z" fill="#EE1C51" />
			<path d="M19.5 0H14.25H13.5V22.5H12V24H7.5V22.5H6V21H4.5V16.5H6V15H9V10.5H6V12H4.5V13.5H3V15H1.5V16.5H0V24H1.5V25.5H3V27H4.5V28.5H12V27H15V25.5H16.5V22.5H18V7.5H19.5V9H22.5V10.5H27V6H24V4.5H22.5V3H21V1.5H19.5V0Z" fill="#69C6CE" />
			<path d="M21.0001 1.5H15.7501H15.0001V24H13.5001V25.5H9.00012V24H7.50012V22.5H6.00012V18H7.50012V16.5H10.5001V12H7.50012V13.5H6.00012V15H4.50012V16.5H3.00012V18H1.50012V25.5H3.00012V27H4.50012V28.5H6.00012V30H13.5001V28.5H16.5001V27H18.0001V24H19.5001V9H21.0001V10.5H24.0001V12H28.5001V7.5H25.5001V6H24.0001V4.5H22.5001V3H21.0001V1.5Z" fill="white" />
		</svg>
	);
}

export const ExternalUrlIcon = ({ size = 20, color = '#00386B' }) => {
	return (
		<svg width={size} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 9.42857V1.57143H1.57143V0H4.71429V1.57143H1.57143V9.42857H9.42857V6.28571H11V9.42857H9.42857V11H1.57143V9.42857H0Z" fill={color} fillOpacity="0.25" />
			<path d="M4.71429 7.85714H3.14286V6.28571H4.71429V4.71429H6.28571V3.14286H7.85714V1.57143H6.28571V0H11V4.71429H9.42857V3.14286H7.85714V4.71429H6.28571V6.28571H4.71429V7.85714Z" fill={color} fillOpacity="0.25" />
		</svg>
	);
}

export const MinecraftRedBedImg = ({ size = '50%' }) => {
	return (
		<img src={MinecraftRedBed} alt='minecraft red bed' width={size} />
	);
}

export const MinecraftTallgrassImg = ({ size = '50%' }) => {
	return (
		<img src={MinecraftTallgrass} alt='minecraft tallgrass' width={size} />
	);
}

export const MinecraftPortalImg = ({ size = '50%' }) => {
	return (
		<img src={MinecraftPortal} alt='minecraft portal' width={size} />
	);
}

export const MinecraftTntImg = ({ size = '50%' }) => {
	return (
		<img src={MinecraftTnt} alt='minecraft tnt' width={size} />
	);
}

export const MinecraftRedLeatherHelmetImg = ({ size = '50%' }) => {
	return (
		<img src={MinecraftRedLeatherHelmet} alt='minecraft red leather helmet' width={size} />
	);
}

export const MinecraftLuckyBlockImg = ({ size = '50%' }) => {
	return (
		<img src={MinecraftLuckyBlock} alt='minecraft lucky block' width={size} />
	);
}

export const MinecraftVipFont = ({ size = '50%', color = '#05FF00' }) => {
	return (
		<svg width={size} viewBox="0 0 44 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 0V13.1429H3.31017V0H0Z" fill={color} />
			<path d="M3.31017 13.1429V19.7143H6.62035V13.1429H3.31017Z" fill={color} />
			<path d="M6.62035 19.7143V23H9.93052V19.7143H6.62035Z" fill={color} />
			<path d="M9.93052 19.7143H13.2407V13.1429H9.93052V19.7143Z" fill={color} />
			<path d="M13.2407 13.1429H16.5509V0H13.2407V13.1429Z" fill={color} />
			<path d="M19.861 0V23H23.1712V0H19.861Z" fill={color} />
			<path d="M26.4814 0V23H29.7916V9.85714H39.7221V6.57143H29.7916V3.28571H39.7221V0H26.4814Z" fill={color} />
			<path d="M39.7221 6.57143H43.0323V3.28571H39.7221V6.57143Z" fill={color} />
		</svg>
	);
}

export const MinecraftVipPlusFont = ({ size = '50%', color = '#03A700' }) => {
	return (
		<svg width={size} viewBox="0 0 53 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 0V13.1429H3.29234V0H0Z" fill={color} />
			<path d="M3.29234 13.1429V19.7143H6.58468V13.1429H3.29234Z" fill={color} />
			<path d="M6.58468 19.7143V23H9.87702V19.7143H6.58468Z" fill={color} />
			<path d="M9.87702 19.7143H13.1694V13.1429H9.87702V19.7143Z" fill={color} />
			<path d="M13.1694 13.1429H16.4617V0H13.1694V13.1429Z" fill={color} />
			<path d="M19.754 0V23H23.0464V0H19.754Z" fill={color} />
			<path d="M26.3387 0V23H29.631V9.85714H39.5081V6.57143H29.631V3.28571H39.5081V0H26.3387Z" fill={color} />
			<path d="M39.5081 6.57143H42.8004V3.28571H39.5081V6.57143Z" fill={color} />
			<path d="M42.8004 9.85714H46.0927V6.57143H49.3851V9.85714H52.6774V13.1429H49.3851V16.4286H46.0927V13.1429H42.8004V9.85714Z" fill={color} />
		</svg>
	);
}

export const MinecraftMvpFont = ({ size = '50%', color = '#FA00FF' }) => {
	return (
		<svg width={size} viewBox="0 0 56 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M19.7647 0V13.1429H23.0588V0H19.7647Z" fill={color} />
			<path d="M23.0588 13.1429V19.7143H26.3529V13.1429H23.0588Z" fill={color} />
			<path d="M26.3529 19.7143V23H29.6471V19.7143H26.3529Z" fill={color} />
			<path d="M29.6471 19.7143H32.9412V13.1429H29.6471V19.7143Z" fill={color} />
			<path d="M32.9412 13.1429H36.2353V0H32.9412V13.1429Z" fill={color} />
			<path d="M39.5294 0V23H42.8235V9.85714H52.7059V6.57143H42.8235V3.28571H52.7059V0H39.5294Z" fill={color} />
			<path d="M52.7059 6.57143H56V3.28571H52.7059V6.57143Z" fill={color} />
			<path d="M6.58824 6.57143V3.28571H3.29412V0H0V23H3.29412V6.57143H6.58824Z" fill={color} />
			<path d="M9.88235 6.57143H6.58824V9.85714H9.88235V6.57143Z" fill={color} />
			<path d="M16.4706 23V0H13.1765V3.28571H9.88235V6.57143H13.1765V23H16.4706Z" fill={color} />
		</svg>
	);
}

export const MinecraftMvpPlusFont = ({ size = '50%', color = '#A400A7' }) => {
	return (
		<svg width={size} viewBox="0 0 74 26" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M22.2 0V14.8571H25.9V0H22.2Z" fill={color} />
			<path d="M25.9 14.8571V22.2857H29.6V14.8571H25.9Z" fill={color} />
			<path d="M29.6 22.2857V26H33.3V22.2857H29.6Z" fill={color} />
			<path d="M33.3 22.2857H37V14.8571H33.3V22.2857Z" fill={color} />
			<path d="M37 14.8571H40.7V0H37V14.8571Z" fill={color} />
			<path d="M44.4 0V26H48.1V11.1429H59.2V7.42857H48.1V3.71429H59.2V0H44.4Z" fill={color} />
			<path d="M59.2 7.42857H62.9V3.71429H59.2V7.42857Z" fill={color} />
			<path d="M62.9 11.1429H66.6V7.42857H70.3V11.1429H74V14.8571H70.3V18.5714H66.6V14.8571H62.9V11.1429Z" fill={color} />
			<path d="M7.4 7.42857V3.71429H3.7V0H0V26H3.7V7.42857H7.4Z" fill={color} />
			<path d="M11.1 7.42857H7.4V11.1429H11.1V7.42857Z" fill={color} />
			<path d="M18.5 26V0H14.8V3.71429H11.1V7.42857H14.8V26H18.5Z" fill={color} />
		</svg>
	);
}

export const MinecraftMvpPlusPlusFont = ({ size = '50%', color = '#FF9900' }) => {
	return (
		<svg width={size} viewBox="0 0 62 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M15.5 0V10.2857H18.0833V0H15.5Z" fill={color} />
			<path d="M18.0833 10.2857V15.4286H20.6667V10.2857H18.0833Z" fill={color} />
			<path d="M20.6667 15.4286V18H23.25V15.4286H20.6667Z" fill={color} />
			<path d="M23.25 15.4286H25.8333V10.2857H23.25V15.4286Z" fill={color} />
			<path d="M25.8333 10.2857H28.4167V0H25.8333V10.2857Z" fill={color} />
			<path d="M31 0V18H33.5833V7.71429H41.3333V5.14286H33.5833V2.57143H41.3333V0H31Z" fill={color} />
			<path d="M41.3333 5.14286H43.9167V2.57143H41.3333V5.14286Z" fill={color} />
			<path d="M43.9167 7.71429H46.5V5.14286H49.0833V7.71429H51.6667V10.2857H49.0833V12.8571H46.5V10.2857H43.9167V7.71429Z" fill={color} />
			<path d="M5.16667 5.14286V2.57143H2.58333V0H0V18H2.58333V5.14286H5.16667Z" fill={color} />
			<path d="M7.75 5.14286H5.16667V7.71429H7.75V5.14286Z" fill={color} />
			<path d="M12.9167 18V0H10.3333V2.57143H7.75V5.14286H10.3333V18H12.9167Z" fill={color} />
			<path d="M56.8333 7.71429V5.14286H59.4167V7.71429H62V10.2857H59.4167V12.8571H56.8333V10.2857H54.25V7.71429H56.8333Z" fill={color} />
		</svg>

	);
}

export const MinecraftSunflowerImg = ({ size = '50%' }) => {
	return (
		<img width={size} src={MinecraftSunflower} alt='minecraft sunflower' />
	);
}