
const iconNames = ["accessibility",
"accessible",
"account-balance-wallet",
"account-balance",
"account-box",
"account-circle",
"add-shopping-cart",
"alarm-add",
"alarm-off",
"alarm-on",
"alarm",
"all-out",
"android",
"announcement",
"aspect-ratio",
"assessment",
"assignment-ind",
"assignment-late",
"assignment-return",
"assignment-returned",
"assignment-turned-in",
"assignment",
"autorenew",
"backup",
"book",
"bookmark-border",
"bookmark",
"bug-report",
"build",
"cached",
"camera-enhance",
"card-giftcard",
"card-membership",
"card-travel",
"change-history",
"check-circle",
"chrome-reader-mode",
"compare-arrows",
"copyright",
"credit-card",
"dashboard",
"date-range",
"delete-forever",
"description",
"dns",
"done-all",
"done",
"donut-large",
"donut-small",
"eject",
"euro-symbol",
"event-seat",
"event",
"exit-to-app",
"explore",
"extension",
"face",
"favorite-border",
"favorite",
"feedback",
"find-in-page",
"find-replace",
"fingerprint",
"flight-land",
"flight-takeoff",
"flip-to-back",
"flip-to-front",
"g-translate",
"gavel",
"get-app",
"gif",
"grade",
"group-work",
"help-outline",
"help",
"highlight-off",
"history",
"home",
"hourglass-empty",
"hourglass-full",
"http",
"https",
"important-devices",
"info-outline",
"info",
"input",
"invert-colors",
"label-outline",
"label",
"language",
"launch",
"lightbulb-outline",
"line-style",
"line-weight",
"list",
"lock-open",
"lock-outline",
"lock",
"loyalty",
"markunread-mailbox",
"motorcycle",
"note-add",
"offline-pin",
"opacity",
"open-in-browser",
"open-in-new",
"open-with"];

console.log("import React, { Component } from 'react';")
console.log("import {red500, yellow500, blue500} from 'material-ui/styles/colors';")
iconNames.forEach((name) => {
 if(name.indexOf("-") === -1)
 {
 	const camCase = name.substring(0,1).toUpperCase() + name.substring(0, name.length-1);
 	console.log("import "+camCase+" from 'material-ui/svg-icons/action/"+name+"'"); 
 }} );
console.log("exports.getElement = function(index, indLoc){");
console.log("switch(index){")
let index = 0;
iconNames.forEach((name) => {
	if(name.indexOf("-") === -1)
 {
	const camCase = name.substring(0,1).toUpperCase() + name.substring(0, name.length-1);
	console.log("\tcase("+index+"): return (<"+camCase+"  color={red500} key={indLoc}/>);");
	index++;
 }	
});
console.log("}};")