import React from "react"
import SideMenu from "./SideMenu"
import MenuSvg from 'material-ui/svg-icons/navigation/menu';
import EnigmePresenter from "./enigmePresenter";
import LetterList from "./letterList"
import BigEnigme from "./bigEnigme";

export default class Layout extends React.Component
{
	constructor()
	{
		super();
		
	}
	
	render(){		
		return (
			<div>		
				<BigEnigme />		
				<SideMenu/>
				<EnigmePresenter/>
				<LetterList />
			</div>
			)
		
	}
}



