import { NavBar } from '../../components/navbar/index';
import './style/style.css';

export const UnknownPage = () => {
	return (
		<div id="wrapper">
			<NavBar />
			<div id="main-text">
				<span id="error-number">404</span>
				<span id="description">Nie znaleziono podstrony!</span>
			</div>
		</div>
	);
}