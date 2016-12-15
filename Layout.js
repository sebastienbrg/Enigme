import React from "react"
import SideMenu from "./SideMenu"
import MenuSvg from 'material-ui/svg-icons/navigation/menu';
import EnigmePresenter from "./enigmePresenter";

export default class Layout extends React.Component
{
	constructor()
	{
		super();
		
	}
	
	render(){		
		return (
			<div>				
				<SideMenu/>
				<EnigmePresenter/>
			</div>
			)
		
	}
}



