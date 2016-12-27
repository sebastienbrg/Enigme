import React, { Component } from 'react';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import Aaccessibilit from 'material-ui/svg-icons/action/accessibility'
import Aaccessibl from 'material-ui/svg-icons/action/accessible'
import Aalar from 'material-ui/svg-icons/action/alarm'
import Aandroi from 'material-ui/svg-icons/action/android'
import Aannouncemen from 'material-ui/svg-icons/action/announcement'
import Aassessmen from 'material-ui/svg-icons/action/assessment'
import Aassignmen from 'material-ui/svg-icons/action/assignment'
import Aautorene from 'material-ui/svg-icons/action/autorenew'
import Bbacku from 'material-ui/svg-icons/action/backup'
import Bboo from 'material-ui/svg-icons/action/book'
import Bbookmar from 'material-ui/svg-icons/action/bookmark'
import Bbuil from 'material-ui/svg-icons/action/build'
import Ccache from 'material-ui/svg-icons/action/cached'
import Ccopyrigh from 'material-ui/svg-icons/action/copyright'
import Ddashboar from 'material-ui/svg-icons/action/dashboard'
import Ddescriptio from 'material-ui/svg-icons/action/description'
import Ddn from 'material-ui/svg-icons/action/dns'
import Ddon from 'material-ui/svg-icons/action/done'
import Eejec from 'material-ui/svg-icons/action/eject'
import Eeven from 'material-ui/svg-icons/action/event'
import Eexplor from 'material-ui/svg-icons/action/explore'
import Eextensio from 'material-ui/svg-icons/action/extension'
import Ffac from 'material-ui/svg-icons/action/face'
import Ffavorit from 'material-ui/svg-icons/action/favorite'
import Ffeedbac from 'material-ui/svg-icons/action/feedback'
import Ffingerprin from 'material-ui/svg-icons/action/fingerprint'
import Ggave from 'material-ui/svg-icons/action/gavel'
import Ggi from 'material-ui/svg-icons/action/gif'
import Ggrad from 'material-ui/svg-icons/action/grade'
import Hhel from 'material-ui/svg-icons/action/help'
import Hhistor from 'material-ui/svg-icons/action/history'
import Hhom from 'material-ui/svg-icons/action/home'
import Hhtt from 'material-ui/svg-icons/action/http'
import Hhttp from 'material-ui/svg-icons/action/https'
import Iinf from 'material-ui/svg-icons/action/info'
import Iinpu from 'material-ui/svg-icons/action/input'
import Llabe from 'material-ui/svg-icons/action/label'
import Llanguag from 'material-ui/svg-icons/action/language'
import Llaunc from 'material-ui/svg-icons/action/launch'
import Llis from 'material-ui/svg-icons/action/list'
import Lloc from 'material-ui/svg-icons/action/lock'
import Lloyalt from 'material-ui/svg-icons/action/loyalty'
import Mmotorcycl from 'material-ui/svg-icons/action/motorcycle'
import Oopacit from 'material-ui/svg-icons/action/opacity'
exports.getElement = function(index, indLoc){
switch(index){
	case(0): return (<Aaccessibilit  color={red500} key={indLoc}/>);
	case(1): return (<Aaccessibl  color={red500} key={indLoc}/>);
	case(2): return (<Aalar  color={red500} key={indLoc}/>);
	case(3): return (<Aandroi  color={red500} key={indLoc}/>);
	case(4): return (<Aannouncemen  color={red500} key={indLoc}/>);
	case(5): return (<Aassessmen  color={red500} key={indLoc}/>);
	case(6): return (<Aassignmen  color={red500} key={indLoc}/>);
	case(7): return (<Aautorene  color={red500} key={indLoc}/>);
	case(8): return (<Bbacku  color={red500} key={indLoc}/>);
	case(9): return (<Bboo  color={red500} key={indLoc}/>);
	case(10): return (<Bbookmar  color={red500} key={indLoc}/>);
	case(11): return (<Bbuil  color={red500} key={indLoc}/>);
	case(12): return (<Ccache  color={red500} key={indLoc}/>);
	case(13): return (<Ccopyrigh  color={red500} key={indLoc}/>);
	case(14): return (<Ddashboar  color={red500} key={indLoc}/>);
	case(15): return (<Ddescriptio  color={red500} key={indLoc}/>);
	case(16): return (<Ddn  color={red500} key={indLoc}/>);
	case(17): return (<Ddon  color={red500} key={indLoc}/>);
	case(18): return (<Eejec  color={red500} key={indLoc}/>);
	case(19): return (<Eeven  color={red500} key={indLoc}/>);
	case(20): return (<Eexplor  color={red500} key={indLoc}/>);
	case(21): return (<Eextensio  color={red500} key={indLoc}/>);
	case(22): return (<Ffac  color={red500} key={indLoc}/>);
	case(23): return (<Ffavorit  color={red500} key={indLoc}/>);
	case(24): return (<Ffeedbac  color={red500} key={indLoc}/>);
	case(25): return (<Ffingerprin  color={red500} key={indLoc}/>);
	case(26): return (<Ggave  color={red500} key={indLoc}/>);
	case(27): return (<Ggi  color={red500} key={indLoc}/>);
	case(28): return (<Ggrad  color={red500} key={indLoc}/>);
	case(29): return (<Hhel  color={red500} key={indLoc}/>);
	case(30): return (<Hhistor  color={red500} key={indLoc}/>);
	case(31): return (<Hhom  color={red500} key={indLoc}/>);
	case(32): return (<Hhtt  color={red500} key={indLoc}/>);
	case(33): return (<Hhttp  color={red500} key={indLoc}/>);
	case(34): return (<Iinf  color={red500} key={indLoc}/>);
	case(35): return (<Iinpu  color={red500} key={indLoc}/>);
	case(36): return (<Llabe  color={red500} key={indLoc}/>);
	case(37): return (<Llanguag  color={red500} key={indLoc}/>);
	case(38): return (<Llaunc  color={red500} key={indLoc}/>);
	case(39): return (<Llis  color={red500} key={indLoc}/>);
	case(40): return (<Lloc  color={red500} key={indLoc}/>);
	case(41): return (<Lloyalt  color={red500} key={indLoc}/>);
	case(42): return (<Mmotorcycl  color={red500} key={indLoc}/>);
	case(43): return (<Oopacit  color={red500} key={indLoc}/>);
}};
