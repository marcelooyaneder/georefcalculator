/*
/*
TEST ONLY 3
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.applet.*;
import java.awt.*;
import java.awt.event.*;
import java.text.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Locale;
import java.util.Properties;*/

//public class GC extends Applet implements ActionListener, ItemListener, FocusListener, KeyListener{ 
//var GC = {

//}

/*
	var g_embeddedCopyright = "copyright (c) 2001-2013 Regents of the University of California";
	var g_appletHeight = 480;  //BUGBUG not needed anymore?
	var g_appletWidth = 620;   //BUGBUG not needed anymore?
	var g_versionNumber = "20151101";

	//protected HashMap propertyMap = new HashMap();
	var g_propertyMap = {};
	//private static Properties props = new Properties();
	//var g_properties = {};    //Defined in geprefcalulator.js
	
	//final ArrayList canonicalheadings = new ArrayList();
	var g_canonicalheadings = g_factory.makeArrayList();
	var g_canonicalcoordsystems = g_factory.makeArrayList();
	var g_canonicalloctypes = g_factory.makeArrayList();
	var g_canonicalcalctypes = g_factory.makeArrayList();
	var g_canonicalddprec = g_factory.makeArrayList();
	var g_canonicaldmsprec = g_factory.makeArrayList();
	var g_canonicalddmprec = g_factory.makeArrayList();
	var g_canonicalsources = g_factory.makeArrayList();
	var g_languagelist = g_factory.makeArrayList();
	
	//Locale currentLocale = Locale.getDefault();
	var g_currentLocale = "en"; //BUGBUG FIXME TODO getDefaultLocal();
	//NumberFormat numberFormatter = NumberFormat.getNumberInstance(currentLocale); 
	//BUGBUG this wont work exactly
	var g_numberFormatter = "en"; //BUGBUG FIXME TODO getNumberInstance(currentLocale); 
	var g_language = "en";	
*/

	
function GC_init()
{
	g_embeddedCopyright = "copyright (c) 2001-2013 Regents of the University of California";
	g_appletHeight = 480;  //BUGBUG not needed anymore?
	g_appletWidth = 620;   //BUGBUG not needed anymore?
	g_versionNumber = "20151101";

	//protected HashMap propertyMap = new HashMap();
	g_propertyMap = {};
	//private static Properties props = new Properties();
	//var g_properties = {};    //Defined in geprefcalulator.js
	
	//final ArrayList canonicalheadings = new ArrayList();
	g_canonicalheadings = g_factory.makeArrayList("g_canonicalheadings", "headings");
	g_canonicalcoordsystems = g_factory.makeArrayList("g_canonicalcoordsystems","coordsystem...");
	g_canonicalloctypes = g_factory.makeArrayList("g_canonicalloctypes","loctype...");
	g_canonicalcalctypes = g_factory.makeArrayList("g_canonicalcalctypes","calctypes...");
	g_canonicalddprec = g_factory.makeArrayList("g_canonicalddprec","ddprec");
	g_canonicaldmsprec = g_factory.makeArrayList("g_canonicaldmsprec","dmsprec");
	g_canonicalddmprec = g_factory.makeArrayList("g_canonicalddmprec","ddmprec");
	g_canonicalsources = g_factory.makeArrayList("g_canonicalsources","dunno");
	g_languagelist = g_factory.makeArrayList("g_languagelist", "languages");
	
	//Locale currentLocale = Locale.getDefault();
	g_currentLocale = "en"; //BUGBUG FIXME TODO getDefaultLocal();
	//NumberFormat numberFormatter = NumberFormat.getNumberInstance(currentLocale); 
	//BUGBUG this wont work exactly
	g_numberFormatter = "en"; //BUGBUG FIXME TODO getNumberInstance(currentLocale); 
	g_language = "en";	

/*
	private Datumerror datumErrorInst = null;
	private int lastcoordsystem = 1; // 1=dd.ddddd, 2=ddmmss.ss, 3=ddmm.mmmm
	private int sign = 1;
	private int degrees = 0;
	private int minutes = 0;
	private double seconds = 0;
	private double decminutes = 0;

	private double decimallatitude = 0; // holds the decimal latitude of the starting point
	private double decimallongitude = 0; // holds the decimal longitude of the starting point

	private double latmetersperdegree = 0; // holds number of meters per degree of latitude for the current coordinate and error calculation
	private double longmetersperdegree = 0; // holds number of meters per degree of longitude for the current coordinate and error calculation

	private double newdecimallatitude = 0; // holds the decimal latitude of the end point
	private double newdecimallongitude = 0; // holds the decimal longitude of the end point

	private double maxerrordistance = 0; // calculated max error distance

	private double fromdistance = 0;  // holds the value of the left-hand side of the distance conversion equation
	private double todistance = 0;    // holds the value of the right-hand side of the distance conversion equation
	private double scalefromdistance = 0;  // holds the value of the left-hand side of the distance conversion equation
	private double scaletodistance = 0;    // holds the value of the right-hand side of the distance conversion equation
	private double scalefactor = 1; // holds the decimal latitude of the end point

	private double lastdecimalminutes = 0;
	private double lastdecimaldegrees = 0;
*/
	createDatum();
	var datumErrorInst = datumerror; 
	var lastcoordsystem = 1; // 1=dd.ddddd, 2=ddmmss.ss, 3=ddmm.mmmm
	var sign = 1;
	var degrees = 0;
	var minutes = 0;
	var seconds = 0;
	var decminutes = 0;

	var decimallatitude = 0; // holds the decimal latitude of the starting point
	var decimallongitude = 0; // holds the decimal longitude of the starting point

	var latmetersperdegree = 0; // holds number of meters per degree of latitude for the current coordinate and error calculation
	var longmetersperdegree = 0; // holds number of meters per degree of longitude for the current coordinate and error calculation

	var newdecimallatitude = 0; // holds the decimal latitude of the end point
	var newdecimallongitude = 0; // holds the decimal longitude of the end point

	var maxerrordistance = 0; // calculated max error distance

	var fromdistance = 0;  // holds the value of the left-hand side of the distance conversion equation
	var todistance = 0;    // holds the value of the right-hand side of the distance conversion equation
	var scalefromdistance = 0;  // holds the value of the left-hand side of the distance conversion equation
	var scaletodistance = 0;    // holds the value of the right-hand side of the distance conversion equation
	var scalefactor = 1; // holds the decimal latitude of the end point

	var lastdecimalminutes = 0;
	var lastdecimaldegrees = 0;
	
	var formatDec = null;
	var  formatDeg = null; 
	var  formatMin = null;
	var  formatMinMM = null;
	var  formatSec = null;
	var  formatCalcError = null;
	var  formatDistance = null;
	var  formatCalcDec = null;

	/*
 	DecimalFormat formatDec = new DecimalFormat("0.0000000"); 
	DecimalFormat formatDeg = new DecimalFormat("##0"); 
	DecimalFormat formatMin = new DecimalFormat("#0");
	DecimalFormat formatMinMM = new DecimalFormat("#0.000000");
	DecimalFormat formatSec = new DecimalFormat("#0.00");
	DecimalFormat formatCalcError = new DecimalFormat("##0.000");
	DecimalFormat formatCalcDec = new DecimalFormat("##0.00000");	
	*/
	

	var language = g_language; //g_properties.getProperty( "preferredlanguage" );
	setVariables( language );
	g_languagelist.clear();
		
	//BUGBUG the initialization of g_langualist should be its own function
	var i = 0;
	var lang = g_properties.getIndexedProperty( "language.name", i )
	var code = g_properties.getIndexedProperty( "language.code", i )
	var nObj = { 'name' : lang, 'value' : code };
	while( lang !== undefined )
	{
		g_languagelist.add( nObj );
		i++;
		lang = g_properties.getIndexedProperty( "language.name", i );
		code = g_properties.getIndexedProperty( "language.code", i );
		nObj = { 'name' : lang, 'value' : code };
	}
	uiClearSelect( "ChoiceLanguage", "g_languagelist" );
	uiFillLanguageSelect( "ChoiceLanguage", "g_languagelist", false );
//	uiSetLabel( "LabelStepZero", "label.step0" );
	uiShowElement( "LabelStepZero" );
	uiHideElement( "LabelTitle" );
	cleanSlate();
	uiSetSelectedIndex("ChoiceLanguage", 0 )
	onLanguageSelect();
		
	uiClearAndFillSelectCanonical( "ChoiceCalcType", "g_canonicalcalctypes", true );
} 

function onLanguageSelect()
{
	var sel = document.getElementById( 'ChoiceLanguage' );

	//BUGBUG is setting g_properties.preferredlanguage safe?
	//we want to NOT use g_properties and stay with otehr globals as a matter of form.
	//other globals retain a specific order where was g_properties contains all languages, with its bits not necessarily in order.
	//we should propably set g_language.
	//g_properties.preferredlanguage =  sel.options[sel.selectedIndex].value;
	g_language = sel.options[sel.selectedIndex].value;
	
	setVariables( );
	newLanguageChosen();

	uiSetLabel( "LabelStepZero", "label.step0" );
	uiSetLabel( "ChoiceCalcType", "calctype" );
	uiClearAndFillSelectCanonical( "ChoiceCalcType", "g_canonicalcalctypes", true );
}

function uiHideElement( name )
{
	var item = document.getElementById( name );
	if( item ) //BUGBUG is this safe enough?
	{
		item.style.display="none";
	}
	else
	(
		console.log("ERROR uiHideElement null element name:" + name )
	)
}

function uiShowElement( name )
{
	var item = document.getElementById( name );
	if( item ) //BUGBUG is this safe enough?
	{
		item.style.display="inline-block";
	}
	else
	(
		console.log("ERROR uiShowElement null element name:" + name )
	)

}

//BUGBUG unfinished, possibly uneeded fuynction
/*
function uiSwitchvisibility( name, visibility )
{
	var item = document.getElementById( name );
	if( item ) //BUGBUG is this safe enough?
	{
		item.style.display="inline-block";
	}
	else
	(
		console.log("ERROR uiSwitchvisibility null element name:" + name );
	)

}
*/

function uiSetLabel( name, source )
{
	var language = g_language; //g_properties.getProperty("preferredlanguage")
	var sel = document.getElementById( name );
	//BUGBUG NO! use g_OTHER var, not g_properties, g_OTHERVAR has specific order, g_properties does not.
	var c = eval( "g_properties." + source + "." + language );
	if(sel )
	{
		if( sel.childNodes.length > 0 )
		{
			sel.removeChild(sel.childNodes[0]);
		}
		var textnode = document.createTextNode(c);
		sel.appendChild(textnode);
	}
	else
	(
		console.log("ERROR uiSetLabel null element name: " + name +" source: " + source)
	)
}

function uiSetLabelExplicit( name, value )
{
	var sel = document.getElementById( name );
	if( sel )
	{
		if( sel.childNodes.length > 0 )
		{
			sel.removeChild(sel.childNodes[0]);
		}
		var textnode = document.createTextNode(value);
		sel.appendChild(textnode);
	}
	else
	(
		console.log("ERROR uiSetLabelExplicit null element name: " + name +" source: " + value)
	)
}


function uiEmptyLabel( name )
{
	var sel = document.getElementById( name );
	//BUGBUG NO! use g_OTHER var, not g_properties, g_OTHERVAR has specific order, g_properties does not.
	var c = "";
	if( sel )
	{
		if( sel.childNodes.length > 0 )
		{
			sel.removeChild(sel.childNodes[0]);
		}
		var textnode = document.createTextNode(c);
		sel.appendChild(textnode);
	}
	else
	(
		console.log("ERROR uiEmptyLabel null element name: " + name)
	)
	
}

function uiEmptyTextElement( name )
{
	return uiSetElementValue( name, "" );
	/*var sel = document.getElementById( name );
	//BUGBUG we should throw an error if we cant find name.
	if( sel )
	{
		sel.value = "";
	}*/
}

function uiSetElementValue( name, value )
{
	var returnValue = false;
	var sel = document.getElementById( name );
	//BUGBUG we should throw an error if we cant find name.
	if( sel )
	{
		sel.value = value;
		returnValue = true;
	}
	else
	(
		console.log("ERROR uiSetElementValue null element name: " + name +" source: " + value )
	)
	
	return returnValue;
}


function uiClearSelect( name )
{
	var sel = document.getElementById( name );
	if( sel !== undefined )
	{
		while( sel.length > 0)
		{
			sel.remove(sel.length-1);
		}
	}
	else
	(
		console.log("ERROR uiClearSelect null element name: " + name)
	)
}
	

function uiClearAndFillSelectCanonical( name, source, initialEmpty )
{
		uiClearSelect( name );
		uiFillSelectCanonical( name, source, initialEmpty )
}

function uiSelectAddItem( name, source )
{
	var sel = document.getElementById( name );
	var c = eval( "g_properties." + source + "." + g_language );
	
	if( sel !== undefined && c !== undefined  )
	{
		var itemCount = sel.length;
		var option = document.createElement("option");
		option.text = c;
		option.value= itemCount;
		sel.add( option );
	}
	else
	(
		console.log("ERROR uiSelectAddItem null element name: " + name +" source: "+ source + " c: " + c)
	)	
}

function uiSelectAddExplicitItem( name, value )
{
	var sel = document.getElementById( name );
	
	if( sel !== undefined )
	{
		var option = document.createElement("option");
		option.text = value;
		option.value= value;
		sel.add( option );
	}
	else
	(
		console.log("ERROR uiSelectAddExplicitItem null element name: " + name +" source: "+ value )
	)

}

function uiSelectAddEmptyItem( name )
{
	var sel = document.getElementById( name );
	if( sel !== undefined )
	{
		var	option = document.createElement("option");
		option.text = " ";
		option.value= " ";
		sel.add( option );
	}
	else
	(
		console.log("ERROR uiSelectAddEmptyItem null element name: " + name )
	)
}



function uiFillLanguageSelect( name, source, initialEmpty )
{
	var sel = document.getElementById( name );
	var c = eval( source + ".contents" );
	
	if( sel !== undefined )
	{
		var option;
		if( initialEmpty )
		{
			option = document.createElement("option");
			option.text = " ";
			option.value= " ";
			sel.add( option );

		}
	
		var l = 0
		while( l < c.length )
		{
			option = document.createElement("option");
			option.text = c[l].name;
			option.value= c[l].value;
			sel.add( option );
			l++;
		}
	}
	else
	(
		console.log("ERROR uiFillLanguageSelect null element name: " + name )
	)
	
}

//BUBUG unused?
function uiFillSelect( name, source, initialEmpty )
{
	var sel = document.getElementById( name );
	var c = eval( "g_properties." + source + "." +g_language );

	
	if( sel !== undefined )
	{
		var option;
		if( initialEmpty )
		{
			option = document.createElement("option");
			option.text = " ";
			option.value= " ";
			sel.add( option );
		}
	
		var l = 0
		while( l < c.length )
		{
			option = document.createElement("option");
			option.text = c[l].name;
			option.value= c[l].value;
			sel.add( option );
			l++;
		}
	}
	else
	(
		console.log("ERROR uiFillSelect null element name: " + name + " source: " + source )
	)
}

function uiFillSelectCanonical( name, source, initialEmpty )
{
	var sel = document.getElementById( name );
	var c = eval( source + ".contents");  //array

	
	if( sel !== undefined )
	{
		var option;
		if( initialEmpty )
		{
			option = document.createElement("option");
			option.text = "";
			option.value= "";
			sel.add( option );
		}
	
		var l = 0;
		while( l < c.length )
		{
			option = document.createElement("option");
			option.text = c[l];
			option.value= l;
			sel.add( option );
			l++;
		}
	}
	else
	(
		console.log("ERROR uiFillSelectCanonical null element name: " + name + " source: " + source )
	)
}


function uiGetTextValue( name )
{
	//BUGBUG maybe put toInt and such in here
	//Check format on input or use, if use then here.

	var ti = document.getElementById( name );
	var val = null;
	//BUGBUG if NOT ti we should force an error as we have sent in a bad name
	if( ti )
	{
		val = ti.value;
	}
	else
	(
		console.log("ERROR uiGetTextValue null element name:" + name )
	)
	return val;
}


//function setVariables( languagecode )
function setVariables( )
{
		var language = g_language;
		// Do not change the following, the order is important
		g_canonicalheadings.clear();
		g_canonicalheadings.add(g_properties.getProperty("headings.n."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.e."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.s."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.w."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.ne."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.se."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.sw."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.nw."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.nne."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.ene."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.ese."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.sse."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.ssw."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.wsw."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.wnw."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.nnw."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.nbe."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.nebn."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.nebe."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.ebn."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.ebs."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.sebe."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.sebs."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.sbe."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.sbw."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.swbs."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.swbw."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.wbs."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.wbn."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.nwbw."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.nwbn."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.nbw."+language));
		g_canonicalheadings.add(g_properties.getProperty("headings.nearestdegree."+language));

		// Do not change the following, the order is important
		g_canonicalcoordsystems.clear();
		g_canonicalcoordsystems.add(g_properties.getProperty("coordsys.dd."+language));
		g_canonicalcoordsystems.add(g_properties.getProperty("coordsys.dms."+language));
		g_canonicalcoordsystems.add(g_properties.getProperty("coordsys.ddm."+language));

		// Do not change the following, the order is important
		g_canonicalloctypes.clear();
		g_canonicalloctypes.add(g_properties.getProperty("loctype.coordonly."+language));
		g_canonicalloctypes.add(g_properties.getProperty("loctype.namedplaceonly."+language));
		g_canonicalloctypes.add(g_properties.getProperty("loctype.distanceonly."+language));
		g_canonicalloctypes.add(g_properties.getProperty("loctype.distalongpath."+language));
		g_canonicalloctypes.add(g_properties.getProperty("loctype.orthodist."+language));
		g_canonicalloctypes.add(g_properties.getProperty("loctype.distatheading."+language));

		// Do not change the following, the order is important
		g_canonicalcalctypes.clear();
		g_canonicalcalctypes.add(g_properties.getProperty("calctype.erroronly."+language));
		g_canonicalcalctypes.add(g_properties.getProperty("calctype.coordsanderror."+language));
		g_canonicalcalctypes.add(g_properties.getProperty("calctype.coordsonly."+language));

		// Do not change the following, the order is important
		g_canonicalsources.clear();
		g_canonicalsources.add(g_properties.getProperty("coordsource.gaz."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.gps."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.loc."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.usgs250000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.usgs100000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.usgs63360."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.usgs62500."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.usgs25000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.usgs24000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.usgs12000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.usgs10000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.usgs4800."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.usgs2400."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.usgs1200."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.ntsa250000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.ntsb250000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.ntsc250000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.ntsa50000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.ntsb50000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.ntsc50000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.non3000000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.non2500000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.non1000000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.non500000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.non250000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.non200000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.non180000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.non150000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.non125000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.non100000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.non80000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.non62500."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.non60000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.non50000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.non40000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.non32500."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.non25000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.non20000."+language));
		g_canonicalsources.add(g_properties.getProperty("coordsource.non10000."+language));

		g_canonicalddprec.clear();
		g_canonicalddprec.add(g_properties.getProperty("coordprec.dd.degree."+language));
		g_canonicalddprec.add(g_properties.getProperty("coordprec.dd.cp_01."+language));
		g_canonicalddprec.add(g_properties.getProperty("coordprec.dd.cp_001."+language));
		g_canonicalddprec.add(g_properties.getProperty("coordprec.dd.cp_0001."+language));
		g_canonicalddprec.add(g_properties.getProperty("coordprec.dd.cp_00001."+language));
		g_canonicalddprec.add(g_properties.getProperty("coordprec.dd.cp_000001."+language));
		g_canonicalddprec.add(g_properties.getProperty("coordprec.dd.half."+language));
		g_canonicalddprec.add(g_properties.getProperty("coordprec.dd.quarter."+language));
		g_canonicalddprec.add(g_properties.getProperty("coordprec.dd.exact."+language));

		g_canonicaldmsprec.clear();
		g_canonicaldmsprec.add(g_properties.getProperty("coordprec.dms.degree."+language));
		g_canonicaldmsprec.add(g_properties.getProperty("coordprec.dms.cp_30m."+language));
		g_canonicaldmsprec.add(g_properties.getProperty("coordprec.dms.cp_10m."+language));
		g_canonicaldmsprec.add(g_properties.getProperty("coordprec.dms.cp_5m."+language));
		g_canonicaldmsprec.add(g_properties.getProperty("coordprec.dms.cp_1m."+language));
		g_canonicaldmsprec.add(g_properties.getProperty("coordprec.dms.cp_30s."+language));
		g_canonicaldmsprec.add(g_properties.getProperty("coordprec.dms.cp_10s."+language));
		g_canonicaldmsprec.add(g_properties.getProperty("coordprec.dms.cp_5s."+language));
		g_canonicaldmsprec.add(g_properties.getProperty("coordprec.dms.cp_1s."+language));
		g_canonicaldmsprec.add(g_properties.getProperty("coordprec.dms.cp_01s."+language));
		g_canonicaldmsprec.add(g_properties.getProperty("coordprec.dms.cp_001s."+language));
		g_canonicaldmsprec.add(g_properties.getProperty("coordprec.dms.exact."+language));

		g_canonicalddmprec.clear();
		g_canonicalddmprec.add(g_properties.getProperty("coordprec.ddm.degree."+language));
		g_canonicalddmprec.add(g_properties.getProperty("coordprec.ddm.cp_30m."+language));
		g_canonicalddmprec.add(g_properties.getProperty("coordprec.ddm.cp_10m."+language));
		g_canonicalddmprec.add(g_properties.getProperty("coordprec.ddm.cp_5m."+language));
		g_canonicalddmprec.add(g_properties.getProperty("coordprec.ddm.cp_1m."+language));
		g_canonicalddmprec.add(g_properties.getProperty("coordprec.ddm.cp_01m."+language));
		g_canonicalddmprec.add(g_properties.getProperty("coordprec.ddm.cp_001m."+language));
		g_canonicalddmprec.add(g_properties.getProperty("coordprec.ddm.cp_0001m."+language));
		g_canonicalddmprec.add(g_properties.getProperty("coordprec.ddm.exact."+language));
	}	
	
	
	function uiGetSelectedText( name )
	{
		var el = document.getElementById( name );
		var returnVal = null;
		if( el )
		{
			returnVal = el.options[el.selectedIndex].text;
		}
		else
		(
			console.log("ERROR uiGetSelectedText null element name: " + name  )
		)
		
		return returnVal;
	}

	function uiGetSelectedValue( name )
	{
		var el = document.getElementById( name );
		var returnVal = null;
		if( el )
		{
			returnVal = el.options[el.selectedIndex].value;
		}
		else
		(
			console.log("ERROR uiGetSelectedValue null element name: " + name  )
		)
		
		return returnVal;
	}

	function uiGetSelectedIndex( name )
	{
		var el = document.getElementById( name );
		var returnVal = null;
		if( el )
		{
			returnVal = el.selectedIndex;
		}
		else
		(
			console.log("ERROR uiGetSelectedIndex null element name: " + name  )
		)
		return returnVal;
	}

	function uiSetSelectedIndex( name, index )
	{
		var el = document.getElementById( name );
		if( el )
		{
			el.selectedIndex = index;
		}
		else
		(
			console.log("ERROR uiSetSelectedIndex null element name: " + name  )
		)
	}
	
	
	
	//void ChoiceCalcType_itemStateChanged(String value){
	function onCalcTypeSelect()
	{
		cleanCalcTypeSlate();
		var value = uiGetSelectedText( "ChoiceCalcType" )
		if( value == "" ){
			//setVisibility( "LabelStepZero", true );
			uiShowElement( "LabelStepZero" );
			uiHideElement( "LabelStepTitle" );
			setVisibility( "ChoiceModel", false );
			setVisibility( "LabelModel", false );
			
			//BUGBUG WE SHOULD NOT HAVE TO SHOW/HIDE BUT USE setVisibility(
			//not sure why its not working for LabelStepOne LabelStepTwo
			//			setVisibility( "LabelStepOne", false );
			uiHideElement( "LabelStepOne" );
			return;
		} else {
			uiHideElement( "LabelStepZero" );
			uiShowElement( "LabelTitle" );
			//BUGBUG WE SHOULD NOT HAVE TO SHOW/HIDE BUT USE setVisibility(
			//not sure why its not working for LabelStepOne LabelStepTwo
			//setVisibility( "LabelStepOne", true );
			uiShowElement( "LabelStepOne" );
			
			setVisibility( "ChoiceModel", true );
			setVisibility( "LabelModel", true );
			
		}

		uiClearSelect( "ChoiceModel" );
		uiSelectAddEmptyItem("ChoiceModel");
		uiSelectAddItem("ChoiceModel", "calctype.coordsanderror");

		var index = g_canonicalcalctypes.indexOf( value );
		//BUGBUG WE CAN Use uiClearAndFillSelectCanonical here instead?
		if( index==0 )
		{
			uiSelectAddItem("ChoiceModel", "loctype.coordonly");
			uiSelectAddItem("ChoiceModel", "loctype.namedplaceonly");
			uiSelectAddItem("ChoiceModel", "loctype.distanceonly");
			uiSelectAddItem("ChoiceModel", "loctype.distalongpath");
			uiSetLabel("lblT2Dec_Lat","label.lat");
			uiSetLabel("lblT2Dec_Long","label.lon");
		}
		uiSelectAddItem("ChoiceModel", "loctype.orthodist" );
		uiSelectAddItem("ChoiceModel", "loctype.distatheading" );
		uiSetSelectedIndex("ChoiceModel", 0 );
	}

	/*void ChoiceCoordSource_itemStateChanged(String value){
		newModelChosen( (String)ChoiceModel.getSelectedItem() );
		clearResults();
	}*/


	/*void ChoiceDatum_itemStateChanged(String value){
		clearResults();
	}*/

	/*void ChoiceDirection_itemStateChanged(String value){
		clearResults();
		int index = g_canonicalcalctypes.indexOf(value);
		if( index==0 ){
//			if( value.equals("Error only - enter Lat/Long for the actual locality") ){
			showDirectionPrecision(true);
		} else {
			showDirection(true);
		}
	}*/

	/*void ChoiceDistancePrecision_itemStateChanged(String value ){
		clearResults();
	}*/
/*
	void ChoiceDistUnits_itemStateChanged(String value){
		clearResults();
		populateDistancePrecision(value);
	}

	void ChoiceLatDirDMS_itemStateChanged(String value){
		clearResults();
		ChoiceLatDirMM.select(value);
	}

	void ChoiceLatDirMM_itemStateChanged(String value){
		clearResults();
		ChoiceLatDirDMS.select(value);
	}

	void ChoiceLatPrecision_itemStateChanged(String value){
		clearResults();
	}

	void ChoiceLongDirDMS_itemStateChanged(String value ){
		clearResults();
		ChoiceLongDirMM.select(value);
	}

	void ChoiceLongDirMM_itemStateChanged(String value ){
		clearResults();
		ChoiceLongDirDMS.select(value);
	}

	void ChoiceLanguage_itemStateChanged(int value )throws ParseException{
		newLanguageChosen(value);
	}
*/
//	function newLanguageChosen( value ) was this signature but "value" is not used  //throws ParseException{
	function newLanguageChosen( ){

		//NOTE: original Java data types, for reference and ugging
		//double m, latminmm, longminmm, extent, measurementerror, latsec, longsec;
		//double offset, offsetew, heading;
		//int latdirindex, longdirindex, offsetdirnsindex, offsetdirewindex;
		//int datumindex, latprecindex, loctypeindex, calctypeindex;
		//int coordsystemindex, latdirmmindex, longdirmmindex, distunitsindex;
		//int distprecindex, coordsourceindex, directionindex;		
		var m, latminmm, longminmm, extent, measurementerror, latsec, longsec;
		var offset, offsetew, heading;
		var latdirindex, longdirindex, offsetdirnsindex, offsetdirewindex;
		var datumindex, latprecindex, loctypeindex, calctypeindex;
		var coordsystemindex, latdirmmindex, longdirmmindex, distunitsindex;
		var distprecindex, coordsourceindex, directionindex;
		

		latdirindex=uiGetSelectedIndex( "ChoiceLatDirDMS" );
		longdirindex=uiGetSelectedIndex( "ChoiceLongDirDMS" );
		latdirmmindex=uiGetSelectedIndex( "ChoiceLatDirMM" );
		longdirmmindex=uiGetSelectedIndex( "ChoiceLongDirMM" );
		offsetdirnsindex=uiGetSelectedIndex( "ChoiceOffsetNSDir" );
		offsetdirewindex=uiGetSelectedIndex( "ChoiceOffsetEWDir" );
		latprecindex=uiGetSelectedIndex( "ChoiceLatPrecision" );
		datumindex=uiGetSelectedIndex( "ChoiceDatum" );
		calctypeindex=uiGetSelectedIndex( "ChoiceCalcType" );
		loctypeindex=uiGetSelectedIndex( "ChoiceModel" );
		coordsourceindex=uiGetSelectedIndex( "ChoiceCoordSource" );
		coordsystemindex=uiGetSelectedIndex( "ChoiceCoordSystem" );
		distunitsindex=uiGetSelectedIndex( "ChoiceDistUnits" );
		distprecindex=uiGetSelectedIndex( "ChoiceDistancePrecision" );
		directionindex=uiGetSelectedIndex( "ChoiceDirection" );


		//Number num = null;
		var num = null;
		
		//String s = txtT7Lat_MinMM.getText();
		var s = uiGetTextValue("txtT7Lat_MinMM");
		
/*		
		if( s == null || s.length == 0 ){
			m = 0;
		} else {
			num = formatMinMM.parse(s.trim());
			m = num.doubleValue();
		}
		latminmm=m;

		s = txtT7Long_MinMM.getText();
		if( s == null || s.length() == 0 ){
			m = 0;
		} else {
			num = formatMinMM.parse(s.trim());
			m = num.doubleValue();
		}
		longminmm=m;

		s = txtT7Lat_Sec.getText();
		m = 0;
		if( s == null || s.length() == 0 ){
			m = 0;
		} else {
			num = formatSec.parse(s.trim());
			m = num.doubleValue();
		}
		latsec=m;

		s = txtT7Long_Sec.getText();
		m = 0;
		if( s == null || s.length() == 0 ){
			m = 0;
		} else {
			num = formatSec.parse(s.trim());
			m = num.doubleValue();
		}
		longsec=m;

		s = TextFieldExtent.getText();
		m = 0;
		if( s == null || s.length() == 0 ){
			m = 0;
		} else {
			num = formatCalcError.parse(s.trim());
			m = num.doubleValue();
		}
		extent=m;

		s = TextFieldMeasurementError.getText();
		m = 0;
		if( s == null || s.length() == 0 ){
			m = 0;
		} else {
			num = formatCalcError.parse(s.trim());
			m = num.doubleValue();
		}
		measurementerror=m;
*/



/*BUGBUG it is CRITICAL to add these back but not all elements exist yet
//		s = TextFieldOffset.getText();
		s = uiGetTextValue( "TextFieldOffset" );
		m = 0;
		if( s == null || s.length() == 0 ){
			m = 0;
		} else {
			num = formatCalcError.parse(s.trim());
			m = num.doubleValue();
		}
		offset=m;

		s = TextFieldOffsetEW.getText();
		m = 0;
		if( s == null || s.length() == 0 ){
			m = 0;
		} else {
			num = formatCalcError.parse(s.trim());
			m = num.doubleValue();
		}
		offsetew=m;

		s = TextFieldHeading.getText();
		m = 0;
		if( s == null || s.length() == 0 ){
			m = 0;
		} else {
			num = formatCalcError.parse(s.trim());
			m = num.doubleValue();
		}
		heading=m;
*/		

		var language = g_language;
		clearResults();
		setVariables(language);
		setLabels(  );		
		//BUGBUG add me back in when we start doing formaters
		//setDecimalFormat();
		populateStableControls();

		uiClearSelect("ChoiceModel");
		uiSelectAddEmptyItem("ChoiceModel");
	
		if( calctypeindex>0 )
		{
			if( calctypeindex==2 ){
				uiSelectAddItem("ChoiceModel","loctype.coordonly");
				uiSelectAddItem("ChoiceModel","loctype.namedplaceonly");
				uiSelectAddItem("ChoiceModel","loctype.distanceonly");
				uiSelectAddItem("ChoiceModel","loctype.distalongpath");
				
				uiSetLabel( "lblT2Dec_Lat","label.lat");
				uiSetLabel( "lblT2Dec_Long","label.lon");
				
			}
			uiSelectAddItem("ChoiceModel","loctype.orthodist");
			uiSelectAddItem("ChoiceModel","loctype.distatheading");
		}

		/*BUBUG ADD ME BACK
		if(coordsystemindex==0){
			populateCoordinatePrecision(g_properties.getProperty("coordsys.dms."+language));
		} else if(coordsystemindex==1){
			populateCoordinatePrecision(g_properties.getProperty("coordsys.dd."+language));			
		} else {
			populateCoordinatePrecision(g_properties.getProperty("coordsys.ddm."+language));
		}
		
		populateDistancePrecision(ChoiceDistUnits.getItem(distunitsindex));


		uiSetText( "txtT2Dec_Lat.setText( formatDec.format(decimallatitude) );
		uiSetText( "txtT2Dec_Long.setText( formatDec.format(decimallongitude) );
		uiSetText( "txtT7Lat_MinMM.setText( formatMinMM.format(latminmm) );		
		uiSetText( "txtT7Long_MinMM.setText( formatMinMM.format(longminmm) );
		uiSetText( "txtT7Lat_Sec.setText( formatSec.format(latsec) );
		uiSetText( "txtT7Long_Sec.setText( formatSec.format(longsec) );
		uiSetText( "TextFieldExtent.setText( formatCalcError.format(extent) );
		uiSetText( "TextFieldMeasurementError.setText( formatCalcError.format(measurementerror) );
		uiSetText( "TextFieldFromDistance.setText( formatDistance.format(fromdistance) );
		uiSetText( "TextFieldToDistance.setText( formatDistance.format(todistance) );
		uiSetText( "TextFieldScaleFromDistance.setText( formatDistance.format(scalefromdistance) );
		uiSetText( "TextFieldScaleToDistance.setText( formatDistance.format(scaletodistance) );
		uiSetText( "TextFieldOffset.setText( formatCalcError.format(offset) );
		uiSetText( "TextFieldOffsetEW.setText( formatCalcError.format(offsetew) );
		uiSetText( "TextFieldHeading.setText( formatCalcError.format(heading) );
*/
		if(calctypeindex >= 0)
		{
			uiSetSelectedIndex("ChoiceCalcType", calctypeindex );
		}
		if(loctypeindex >= 0)
		{
			uiSetSelectedIndex("ChoiceModel",loctypeindex);
		}
		
//		if( ChoiceModel.getSelectedIndex()!=-1 &&
//			ChoiceModel.getSelectedItem().equals(props.getProperty("loctype.orthodist."+language)))
//		{
//		LabelOffset.setText(props.getProperty("label.distns."+language));
		
		
		if( 
//BUGBUG UNSURE OF THIS LINE, WAS		uiSetSelectedIndex("ChoiceModel".getSelectedIndex()!=-1 && 
		uiSetSelectedIndex("ChoiceModel") != 0 && 
		uiGetSelectedValue( "ChoiceModel") == g_properties.getPropertyLang("loctype.orthodist")
		)
		{
			uiSetLabel("LabelOffset", g_properties.getPropertyLang("label.distns"));
		}
		
		if(coordsourceindex >= 0)
		{
			uiSetSelectedIndex("ChoiceCoordSource",coordsourceindex);
		}
		if(coordsystemindex >= 0)
		{
			uiSetSelectedIndex("ChoiceCoordSystem",coordsystemindex);
		}
		if(latdirindex >= 0)
		{
			uiSetSelectedIndex("ChoiceLatDirDMS",latdirindex);
		}
		if(longdirindex >= 0)
		{
			uiSetSelectedIndex("ChoiceLongDirDMS",longdirindex);
		}
		if(latdirmmindex >= 0)
		{
			uiSetSelectedIndex("ChoiceLatDirMM",latdirmmindex);
		}
		if(longdirmmindex >= 0)
		{
			uiSetSelectedIndex("ChoiceLongDirMM",longdirmmindex);
		}
		if(datumindex >= 0)
		{
			uiSetSelectedIndex("ChoiceDatum",datumindex);
		}
		if(latprecindex >= 0)
		{
			uiSetSelectedIndex("ChoiceLatPrecision",latprecindex);
		}
		if(offsetdirnsindex >= 0)
		{
			uiSetSelectedIndex("ChoiceOffsetNSDir",offsetdirnsindex);
		}
		if(offsetdirewindex >= 0)
		{
			uiSetSelectedIndex("ChoiceOffsetEWDir",offsetdirewindex);
		}
		if(distunitsindex >= 0)
		{
			uiSetSelectedIndex("ChoiceDistUnits",distunitsindex);
		}
		if(distprecindex >= 0)
		{
			uiSetSelectedIndex("ChoiceDistancePrecision",distprecindex);
		}
		if(directionindex >= 0)
		{
			uiSetSelectedIndex("ChoiceDirection",directionindex);
		}
		
	}


	function onModelSelect( )
	{
		var value = uiGetSelectedText("ChoiceModel");
		newModelChosen(value);
	}
/*
	void ChoiceFromDistUnits_itemStateChanged(String value){
		convertDistance();
	}
	void ChoiceToDistUnits_itemStateChanged(String value){
		convertDistance();
	}

	void ChoiceScaleFromDistUnits_itemStateChanged(String value){
		convertScale();
	}
	void ChoiceScaleToDistUnits_itemStateChanged(String value){
		convertScale();
	}
	void ChoiceScale_itemStateChanged(String value){
		convertScale();
	}
*/
	function newModelChosen( value )
	{	
		if( value == "" )
		{
			cleanSlate();
			uiShowElement("LabelTitle");
			uiHideElement("LabelStepZero");
			return;
		}

		showResults(false);
		clearResults();
		showOffset(false);
		
		uiHideElement("LabelStepOne");
		uiShowElement("LabelStepTwo");
		
		showDistancePrecision(false);
		showDirectionPrecision(false);
		setVisibility("ButtonCalculate",false);
		setVisibility("ButtonPromote",false);
		
		showNSOffset(false);
		showEWOffset(false);
		
		setVisibility("TextFieldHeading",false);
		
		showCoordinateSystem(true);
		showCoordinateSource(true);
		showDistanceUnits(true);
		showCoordinatePrecision(true);
		showExtents(true);
		showMeasurementError(true);
		showErrors(true);
		showDistanceConverter(true);
		showScaleConverter(true);
		showRelevantCoordinates();
		
		uiSetLabel("LabelOffset","label.offset");
		uiSetLabel("LabelExtent","label.extent");
		uiSetLabel("LabelMeasurementError","label.measurementerror");
		var index = g_canonicalloctypes.indexOf(value);
		var csource = uiGetSelectedValue("ChoiceCoordSource");
		var cindex = g_canonicalsources.indexOf(csource);
		if( cindex==1 ){ // GPS
			uiSetLabel("LabelMeasurementError","label.extent.gps");
		} else {
			uiSetLabel("LabelMeasurementError","label.measurementerror");
		}
		if( index==0 ){ // Coordinates only
			showExtents(false);
		} else if( index==2 ){ // Distance only
			showOffset(true);
			showDistancePrecision(true);
		} else if( index==3 ){ // Distance along path
			showDistancePrecision(true);
		} else if( index==4 ){ // Distance along orthogonal directions
			var SCalcType = uiGetSelectedValue("ChoiceCalcType");
			var calcindex = g_canonicalcalctypes.indexOf(SCalcType);
			if( calcindex==0 ){ // Error only
				showNSOffset(true);
				showEWOffset(true);
				showDistancePrecision(true);
			}else if( calcindex==1 ){ // Coordinates and error
				showNSOffset(true);
				showEWOffset(true);
				showDistancePrecision(true);
			} else if ( calcindex == 2 ){ // Coordinates only Calculation Type
				showNSOffset(true);
				showEWOffset(true);
				showDistancePrecision(false);
				showCoordinatePrecision(false);
				showDirectionPrecision(false);
				showExtents(false);
				showMeasurementError(false);
				showErrors(false);
			}
		} else if( index==5 ){ // Distance at a heading
			showOffset(true);
			var SCalcType = uiGetSelectedValue("ChoiceCalcType");
			var calcindex = g_canonicalcalctypes.indexOf(SCalcType);
			if( calcindex==1 ){ // Coordinates and error
				showDistancePrecision(true);
				showDirection(true);
			} else if( calcindex==0 ){ // Error only
				showDistancePrecision(true);
				showDirectionPrecision(true);
			} else if ( calcindex == 2){ // Coordinates only
				showDirection(true);
			}
		}
		
		setVisibility("ButtonCalculate",true);
		setVisibility("ButtonPromote",true);
		showResults(true);
	}
/*
	void ChoiceOffsetEWDir_itemStateChanged(String value ){
		clearResults();
	}

	void ChoiceOffsetNSDir_itemStateChanged(String value ){
		clearResults();
	}
*/
//	private void cleanCalcTypeSlate(){
	function cleanCalcTypeSlate(){
		cleanSlate();
		setVisibility("ChoiceModel", false );
		setVisibility("LabelModel", false );
		setVisibility("LabelTitle", false );
		setVisibility("LabelStepOne", false );
		setVisibility("LabelStepTwo", false );
		setVisibility("LabelStepZero", false );
		
		/*LabelModel.setVisible(false);
		LabelTitle.setVisible(false);
		LabelStepOne.setVisible(false);
		LabelStepTwo.setVisible(false);
		LabelStepZero.setVisible(true);*/
	}

//	private void cleanSlate(){
	function cleanSlate()
	{
		showCoordinates(false);
		showCoordinateSource(false);
		showCoordinateSystem(false);
		showCoordinatePrecision(false);
		showDistancePrecision(false);
		showDistanceUnits(false);
		showDirectionPrecision(false);
		showResults(false);
		showExtents(false);
		showMeasurementError(false);
		showDistanceConverter(false);
		showScaleConverter(false);
		showOffset(false);
		showNSOffset(false);
		showEWOffset(false);
		setVisibility("TextFieldOffsetEW", false);
		setVisibility("ChoiceOffsetEWDir", false);
		setVisibility("ChoiceOffsetNSDir", false);
		setVisibility("TextFieldHeading", false);
		setVisibility("LabelOffsetEW", false);
		setVisibility("ButtonCalculate", false);
		setVisibility("ButtonPromote", false);
		uiHideElement("LabelTitle" );
		uiShowElement("LabelStepZero" );
	
//		setVisibility("LabelStepTwo", false);
//		setVisibility("LabelStepOne", false);
		uiHideElement("LabelStepTwo");
		uiHideElement("LabelStepOne");
		
		setVisibility("LabelModel", false);
		setVisibility("ChoiceModel", false);		
	}

	function clearResults()
	{
		uiEmptyTextElement( "TextFieldCalcDecLat" );
		uiEmptyTextElement( "TextFieldCalcDecLong" );
		uiEmptyTextElement( "TextFieldCalcErrorDist" );
		uiEmptyTextElement( "TextFieldCalcErrorUnits" );
		uiEmptyTextElement( "TextFieldFullResult" );
	}



	function setLabels( ){
		var language = g_language;
		var version = g_versionNumber;
		var v = g_properties.getPropertyLang("version")+" " + version + language;
		uiSetLabelExplicit("LabelVersion", v);
		
		uiSetLabel("LabelCalcType", "label.calctype");
		uiSetLabel("LabelStepZero","label.step0");
		uiSetLabel("LabelTitle","label.title");
		uiSetLabel("LabelModel","label.loctype");
		uiSetLabel("LabelStepOne","label.step1");
		uiSetLabel("LabelStepTwo","label.step2");
		uiSetLabel("LabelCoordSource","label.coordsource");
		uiSetLabel("LabelCoordSystem","label.coordsys");
		uiSetLabel("lblT2Dec_Lat","label.lat");
		uiSetLabel("lblT2Dec_Long","label.lon");
		uiSetLabel("LabelDatum","label.datum");
		uiSetLabel("LabelLatPrecision","label.coordprec");
		uiSetLabel("LabelOffsetEW","label.distew");
		uiSetLabel("LabelOffset","label.offset");
		uiSetLabel("LabelExtent","label.extent");
		uiSetLabel("LabelMeasurementError","label.measurementerror");
		uiSetLabel("LabelDistUnits","label.distunits");
		uiSetLabel("LabelDistancePrecision","label.distprec");
		
		uiSetLabel("LabelDirection","label.direction");
		uiSetLabel("LabelCalcDecLat","label.declat");
		uiSetLabel("LabelCalcDecLong","label.declon");
		uiSetLabel("LabelCalcMaxError","label.maxerrdist");

		uiSetElementValue("ButtonCalculate","label.calculate");
		uiSetElementValue("ButtonPromote","label.promote");
		
		
		uiSetLabel("LabelDistanceConverter","label.distanceconverter");
		uiSetLabel("LabelScaleConverter","label.scaleconverter");
	
	}
	
/*
	public Component createComponents() {
		pane = new Panel();
		if(pane==null) return null;
		pane.setSize(appletWidth, appletHeight);
		pane.setLayout(null);  
		pane.setVisible(true);

		ChoiceLanguage = new Choice ();
		ChoiceLanguage.setName ("ChoiceLanguage");
		ChoiceLanguage.setFont (new Font ("Helvetica", 0, 12));
		ChoiceLanguage.setForeground (new Color (0x000000));
		ChoiceLanguage.setBackground (new Color (0xffffff));
		ChoiceLanguage.setVisible(true);
		pane.add (ChoiceLanguage);
		ChoiceLanguage.setBounds (5, 5, 110, 23);

		ChoiceLanguage.removeAll();
		int i=0;
		while(g_properties.getProperty("language.name."+i)!=null){
			ChoiceLanguage.addItem(g_properties.getProperty("language.name."+i));
			i++;
		}

		LabelVersion = new Label (g_properties.getProperty("version."+language)+" "+versionNumber+language, Label.LEFT);
		LabelVersion.setName ("LabelVersion");
		LabelVersion.setFont (new Font ("Helvetica", 0, 10));
		LabelVersion.setForeground (new Color (0x000000));
		LabelVersion.setBackground (new Color (0xc0c0c0));
		LabelVersion.setVisible (true);
		pane.add(LabelVersion);
		LabelVersion.setBounds (10, 465, 100, 10);

		LabelCopyright = new Label (embeddedCopyright, Label.RIGHT);
		LabelCopyright.setName ("LabelCopyright");
		LabelCopyright.setFont (new Font ("Helvetica", 0, 10));
		LabelCopyright.setForeground (new Color (0x000000));
		LabelCopyright.setBackground (new Color (0xc0c0c0));
		LabelCopyright.setVisible (true);
		pane.add(LabelCopyright);
		LabelCopyright.setBounds (310, 465, 300, 10);

		LabelCalcType = new Label (g_properties.getProperty("label.calctype."+language), Label.LEFT);
		LabelCalcType.setName ("LabelCalcType");
		LabelCalcType.setFont (new Font ("Helvetica", 0, 12));
		LabelCalcType.setForeground (new Color (0x000000));
		LabelCalcType.setBackground (new Color (0xc0c0c0));
		pane.add (LabelCalcType);
		LabelCalcType.setBounds (5, 33, 115, 27);
		LabelCalcType.setVisible(true);

		ChoiceCalcType = new Choice ();
		ChoiceCalcType.setName ("ChoiceCalcType");
		ChoiceCalcType.setFont (new Font ("Helvetica", 0, 12));
		ChoiceCalcType.setForeground (new Color (0x000000));
		ChoiceCalcType.setBackground (new Color (0xffffff));
		ChoiceCalcType.setVisible(true);
		pane.add (ChoiceCalcType);
		ChoiceCalcType.setBounds (125, 33, 490, 23);

		LabelStepZero = new Label (g_properties.getProperty("label.step0."+language), Label.CENTER);
		LabelStepZero.setName ("LabelStepZero");
		LabelStepZero.setFont (new Font ("Helvetica", 0, 18));
		LabelStepZero.setForeground (new Color (0x000000));
		LabelStepZero.setBackground (new Color (0xc0c0c0));
		LabelCalcType.setVisible(true);
		pane.add (LabelStepZero);
		LabelStepZero.setBounds (125, 2, 490, 27);

		LabelTitle = new Label (g_properties.getProperty("label.title."+language), Label.CENTER);
		LabelTitle.setName ("LabelTitle");
		LabelTitle.setFont (new Font ("Helvetica", 0, 18));
		LabelTitle.setForeground (new Color (0x000000));
		LabelTitle.setBackground (new Color (0xc0c0c0));
		LabelTitle.setVisible (false);
		pane.add (LabelTitle);
		LabelTitle.setBounds (125, 2, 490, 27);

		LabelModel = new Label (g_properties.getProperty("label.loctype."+language), Label.LEFT);
		LabelModel.setName ("LabelModel");
		LabelModel.setSize( 118, 27);
		LabelModel.setFont (new Font ("Helvetica", 0, 12));
		LabelModel.setVisible (false);
		LabelModel.setForeground (new Color (0x000000));
		LabelModel.setBackground (new Color (0xc0c0c0));
		pane.add (LabelModel);
		LabelModel.setBounds (5, 86, 108, 27);

		ChoiceModel = new Choice ();
		ChoiceModel.setName ("ChoiceModel");
		ChoiceModel.setFont (new Font ("Helvetica", 0, 12));
		ChoiceModel.setVisible (false);
		ChoiceModel.setForeground (new Color (0x00000));
		ChoiceModel.setBackground (new Color (0xffffff));
		ChoiceModel.setVisible(false);
		pane.add (ChoiceModel);
		ChoiceModel.setBounds (125, 87, 490, 23);

		LabelStepOne = new Label (g_properties.getProperty("label.step1."+language), Label.CENTER);
		LabelStepOne.setName ("LabelStepOne");
		LabelStepOne.setFont (new Font ("Helvetica", 0, 18));
		LabelStepOne.setVisible (false);
		LabelStepOne.setForeground (new Color (0x000000));
		LabelStepOne.setBackground (new Color (0xc0c0c0));
		pane.add (LabelStepOne);
		LabelStepOne.setBounds (125, 61, 490, 27);

		LabelStepTwo = new Label (g_properties.getProperty("label.step2."+language), Label.CENTER);
		LabelStepTwo.setName ("LabelStepTwo");
		LabelStepTwo.setFont (new Font ("Helvetica", 0, 18));
		LabelStepTwo.setVisible (false);
		LabelStepTwo.setForeground (new Color (0x000000));
		LabelStepTwo.setBackground (new Color (0xc0c0c0));
		pane.add (LabelStepTwo);
		LabelStepTwo.setBounds (125, 113, 490, 27);

		LabelCoordSource = new Label (g_properties.getProperty("label.coordsource."+language), Label.LEFT);
		LabelCoordSource.setName ("LabelCoordSource");
		LabelCoordSource.setFont (new Font ("Helvetica", 0, 12));
		LabelCoordSource.setVisible (false);
		LabelCoordSource.setForeground (new Color (0x000000));
		pane.add (LabelCoordSource);
		LabelCoordSource.setBounds (5, 145, 160, 27);

		ChoiceCoordSource = new Choice ();
		ChoiceCoordSource.setName ("ChoiceCoordSource");
		ChoiceCoordSource.setFont (new Font ("Helvetica", 0, 12));
		ChoiceCoordSource.setVisible (false);
		ChoiceCoordSource.setForeground (new Color (0x000000));
		ChoiceCoordSource.setBackground (new Color (0xffffff));
		ChoiceCoordSource.setVisible(false);
		pane.add (ChoiceCoordSource);
		ChoiceCoordSource.setBounds (165, 146, 180, 23);

		LabelCoordSystem = new Label (g_properties.getProperty("label.coordsys."+language), Label.LEFT);
		LabelCoordSystem.setName ("LabelCoordSystem");
		LabelCoordSystem.setFont (new Font ("Helvetica", 0, 12));
		LabelCoordSystem.setVisible (false);
		LabelCoordSystem.setForeground (new Color (0x000000));
		pane.add (LabelCoordSystem);
		LabelCoordSystem.setBounds (5, 172, 160, 27);

		ChoiceCoordSystem = new Choice ();
		ChoiceCoordSystem.setName ("ChoiceCoordSystem");
		ChoiceCoordSystem.setFont (new Font ("Helvetica", 0, 12));
		ChoiceCoordSystem.setVisible (false);
		ChoiceCoordSystem.setForeground (new Color (0x000000));
		ChoiceCoordSystem.setBackground (new Color (0xffffff));
		ChoiceCoordSystem.setVisible(false);
		pane.add (ChoiceCoordSystem);
		ChoiceCoordSystem.setBounds (165, 173, 180, 23);

		PanelCoords = new Panel ();
		PanelCoords.setName ("PanelCoords");
		PanelCoords.setLayout(null);
		PanelCoords.setFont (new Font ("Helvetica", 0, 12));
		PanelCoords.setVisible (false);
		PanelCoords.setForeground (new Color (0x000000));
		pane.add (PanelCoords);
		PanelCoords.setBounds (4, 201, 340, 83);

		lblT2Dec_Lat = new Label (g_properties.getProperty("label.lat."+language), Label.LEFT);
		lblT2Dec_Lat.setName ("lblT2Dec_Lat");
		lblT2Dec_Lat.setFont (new Font ("Helvetica", 0, 12));
		lblT2Dec_Lat.setForeground (new Color (0x000000));
		PanelCoords.add (lblT2Dec_Lat);
		lblT2Dec_Lat.setBounds (2, 2, 80, 26);

		lblT2Dec_Long = new Label (g_properties.getProperty("label.lon."+language), Label.LEFT);
		lblT2Dec_Long.setName ("lblT2Dec_Long");
		lblT2Dec_Long.setFont (new Font ("Helvetica", 0, 12));
		lblT2Dec_Long.setForeground (new Color (0x000000));
		PanelCoords.add (lblT2Dec_Long);
		lblT2Dec_Long.setBounds (2, 29, 80, 24);

		PanelDecLatLong = new Panel ();
		PanelDecLatLong.setName ("PanelDecLatLong");
		PanelDecLatLong.setLayout(null);  
		PanelDecLatLong.setFont (new Font ("Helvetica", 0, 12));
		PanelDecLatLong.setForeground (new Color (0x000000));
		PanelCoords.add (PanelDecLatLong);
		PanelDecLatLong.setBounds (80, 0, 120, 51);

		txtT2Dec_Lat = new TextField ("txtT2Dec_Lat");
		txtT2Dec_Lat.setName ("txtT2Dec_Lat");
		txtT2Dec_Lat.setFont (new Font ("TimesRoman", 0, 13));
		txtT2Dec_Lat.setForeground (new Color (0x000000));
		txtT2Dec_Lat.setText ("");
		PanelDecLatLong.add (txtT2Dec_Lat);
		txtT2Dec_Lat.setBounds (4, 2, 108, 23);

		txtT2Dec_Long = new TextField ("txtT2Dec_Long");
		txtT2Dec_Long.setName ("txtT2Dec_Long");
		txtT2Dec_Long.setFont (new Font ("TimesRoman", 0, 13));
		txtT2Dec_Long.setForeground (new Color (0x000000));
		txtT2Dec_Long.setText ("");
		PanelDecLatLong.add (txtT2Dec_Long);
		txtT2Dec_Long.setBounds (4, 26, 108, 23);

		PanelDDMMSS = new Panel ();
		PanelDDMMSS.setName ("PanelDDMMSS");
		PanelDDMMSS.setLayout(null);  
		PanelDDMMSS.setFont (new Font ("Helvetica", 0, 12));
		PanelDDMMSS.setForeground (new Color (0x000000));
		PanelCoords.add (PanelDDMMSS);
		PanelDDMMSS.setBounds (96, 0, 250, 53);

		txtT7Lat_DegDMS = new TextField ("txtT7Lat_DegDMS");
		txtT7Lat_DegDMS.setName ("txtT7Lat_DegDMS");
		txtT7Lat_DegDMS.setFont (new Font ("TimesRoman", 0, 13));
		txtT7Lat_DegDMS.setForeground (new Color (0x000000));
		txtT7Lat_DegDMS.setText ("");
		PanelDDMMSS.add (txtT7Lat_DegDMS);
		txtT7Lat_DegDMS.setBounds (4, 2, 45, 23);

		txtT7Lat_MinDMS = new TextField ("txtT7Lat_MinDMS");
		txtT7Lat_MinDMS.setName ("txtT7Lat_MinDMS");
		txtT7Lat_MinDMS.setFont (new Font ("TimesRoman", 0, 13));
		txtT7Lat_MinDMS.setForeground (new Color (0x000000));
		txtT7Lat_MinDMS.setText ("");
		PanelDDMMSS.add (txtT7Lat_MinDMS);
		txtT7Lat_MinDMS.setBounds (62, 2, 40, 23);

		txtT7Lat_Sec = new TextField ("txtT7Lat_Sec");
		txtT7Lat_Sec.setName ("txtT7Lat_Sec");
		txtT7Lat_Sec.setFont (new Font ("TimesRoman", 0, 13));
		txtT7Lat_Sec.setForeground (new Color (0x000000));
		txtT7Lat_Sec.setText ("");
		PanelDDMMSS.add (txtT7Lat_Sec);
		txtT7Lat_Sec.setBounds (112, 2, 65, 23);

		ChoiceLatDirDMS = new Choice ();
		ChoiceLatDirDMS.setName ("ChoiceLatDirDMS");
		ChoiceLatDirDMS.setFont (new Font ("Helvetica", 0, 12));
		ChoiceLatDirDMS.setForeground (new Color (0x000000));
		ChoiceLatDirDMS.setBackground (new Color (0xffffff));
		ChoiceLatDirDMS.setVisible(false);
		PanelDDMMSS.add (ChoiceLatDirDMS);
		ChoiceLatDirDMS.setBounds (188, 2, 41, 23);

		txtT7Long_DegDMS = new TextField ("txtT7Long_DegDMS");
		txtT7Long_DegDMS.setName ("txtT7Long_DegDMS");
		txtT7Long_DegDMS.setFont (new Font ("TimesRoman", 0, 13));
		txtT7Long_DegDMS.setForeground (new Color (0x000000));
		txtT7Long_DegDMS.setText ("");
		PanelDDMMSS.add (txtT7Long_DegDMS);
		txtT7Long_DegDMS.setBounds (4, 26, 45, 23);

		txtT7Long_MinDMS = new TextField ("txtT7Long_MinDMS");
		txtT7Long_MinDMS.setName ("txtT7Long_MinDMS");
		txtT7Long_MinDMS.setFont (new Font ("TimesRoman", 0, 13));
		txtT7Long_MinDMS.setForeground (new Color (0x000000));
		txtT7Long_MinDMS.setText ("");
		PanelDDMMSS.add (txtT7Long_MinDMS);
		txtT7Long_MinDMS.setBounds (62, 26, 40, 23);

		txtT7Long_Sec = new TextField ("txtT7Long_Sec");
		txtT7Long_Sec.setName ("txtT7Long_Sec");
		txtT7Long_Sec.setFont (new Font ("TimesRoman", 0, 13));
		txtT7Long_Sec.setForeground (new Color (0x000000));
		txtT7Long_Sec.setText ("");
		PanelDDMMSS.add (txtT7Long_Sec);
		txtT7Long_Sec.setBounds (112, 26, 65, 23);

		ChoiceLongDirDMS = new Choice ();
		ChoiceLongDirDMS.setName ("ChoiceLongDirDMS");
		ChoiceLongDirDMS.setFont (new Font ("Helvetica", 0, 12));
		ChoiceLongDirDMS.setForeground (new Color (0x000000));
		ChoiceLongDirDMS.setBackground (new Color (0xffffff));
		ChoiceLongDirDMS.setVisible(false);
		PanelDDMMSS.add (ChoiceLongDirDMS);
		ChoiceLongDirDMS.setBounds (188, 26, 56, 23);

		PanelDecMin = new Panel ();
		PanelDecMin.setName ("PanelDecMin");
		PanelDecMin.setLayout(null);  
		PanelDecMin.setFont (new Font ("Helvetica", 0, 12));
		PanelDecMin.setForeground (new Color (0x000000));
		PanelCoords.add (PanelDecMin);
		PanelDecMin.setBounds (142, 0, 210, 51);

		txtT7Lat_DegMM = new TextField ("txtT7Lat_DegMM");
		txtT7Lat_DegMM.setName ("txtT7Lat_DegMM");
		txtT7Lat_DegMM.setFont (new Font ("TimesRoman", 0, 13));
		txtT7Lat_DegMM.setForeground (new Color (0x000000));
		txtT7Lat_DegMM.setText ("");
		PanelDecMin.add (txtT7Lat_DegMM);
		txtT7Lat_DegMM.setBounds (4, 2, 45, 22);

		txtT7Lat_MinMM = new TextField ("txtT7Lat_MinMM");
		txtT7Lat_MinMM.setName ("txtT7Lat_MinMM");
		txtT7Lat_MinMM.setFont (new Font ("TimesRoman", 0, 13));
		txtT7Lat_MinMM.setForeground (new Color (0x000000));
		txtT7Lat_MinMM.setText ("");
		PanelDecMin.add (txtT7Lat_MinMM);
		txtT7Lat_MinMM.setBounds (61, 2, 70, 23);

		ChoiceLatDirMM = new Choice ();
		ChoiceLatDirMM.setName ("ChoiceLatDirMM");
		ChoiceLatDirMM.setFont (new Font ("Helvetica", 0, 12));
		ChoiceLatDirMM.setForeground (new Color (0x000000));
		ChoiceLatDirMM.setBackground (new Color (0xffffff));
		ChoiceLatDirMM.setVisible(false);
		PanelDecMin.add (ChoiceLatDirMM);
		ChoiceLatDirMM.setBounds (142, 3, 56, 23);

		txtT7Long_DegMM = new TextField ("txtT7Long_DegMM");
		txtT7Long_DegMM.setName ("txtT7Long_DegMM");
		txtT7Long_DegMM.setFont (new Font ("TimesRoman", 0, 13));
		txtT7Long_DegMM.setForeground (new Color (0x000000));
		txtT7Long_DegMM.setText ("");
		PanelDecMin.add (txtT7Long_DegMM);
		txtT7Long_DegMM.setBounds (4, 26, 45, 23);

		txtT7Long_MinMM = new TextField ("txtT7Long_MinMM");
		txtT7Long_MinMM.setName ("txtT7Long_MinMM");
		txtT7Long_MinMM.setFont (new Font ("TimesRoman", 0, 13));
		txtT7Long_MinMM.setForeground (new Color (0x000000));
		txtT7Long_MinMM.setText ("");
		PanelDecMin.add (txtT7Long_MinMM);
		txtT7Long_MinMM.setBounds (61, 26, 70, 23);

		ChoiceLongDirMM = new Choice ();
		ChoiceLongDirMM.setName ("ChoiceLongDirMM");
		ChoiceLongDirMM.setFont (new Font ("Helvetica", 0, 12));
		ChoiceLongDirMM.setForeground (new Color (0x000000));
		ChoiceLongDirMM.setBackground (new Color (0xffffff));
		ChoiceLongDirMM.setVisible(false);
		PanelDecMin.add (ChoiceLongDirMM);
		ChoiceLongDirMM.setBounds (142, 27, 56, 23);

		Label2111111 = new Label ("'", Label.LEFT);
		Label2111111.setName ("Label2111111");
		Label2111111.setFont (new Font ("Helvetica", 0, 14));
		Label2111111.setForeground (new Color (0x000000));
		PanelDecMin.add (Label2111111);
		Label2111111.setBounds (133, 26, 12, 14);

		Label22111 = new Label ("'", Label.LEFT);
		Label22111.setName ("Label22111");
		Label22111.setFont (new Font ("Helvetica", 0, 14));
		Label22111.setForeground (new Color (0x000000));
		PanelDecMin.add (Label22111);
		Label22111.setBounds (133, 0, 12, 14);

		Label21212 = new Label ("o", Label.LEFT);
		Label21212.setName ("Label21212");
		Label21212.setFont (new Font ("Helvetica", 0, 12));
		Label21212.setForeground (new Color (0x000000));
		PanelDecMin.add (Label21212);
		Label21212.setBounds (50, 23, 12, 14);

		Label231 = new Label ("o", Label.LEFT);
		Label231.setName ("Label231");
		Label231.setFont (new Font ("Helvetica", 0, 12));
		Label231.setForeground (new Color (0x000000));
		PanelDecMin.add (Label231);
		Label231.setBounds (50, -1, 12, 14);

		Label211111 = new Label ("\"", Label.LEFT);
		Label211111.setName ("Label211111");
		Label211111.setFont (new Font ("Helvetica", 0, 14));
		Label211111.setForeground (new Color (0x000000));
		PanelDDMMSS.add (Label211111);
		Label211111.setBounds (179, 25, 12, 14);

		Label2211 = new Label ("\"", Label.LEFT);
		Label2211.setName ("Label2211");
		Label2211.setFont (new Font ("Helvetica", 0, 14));
		Label2211.setForeground (new Color (0x000000));
		PanelDDMMSS.add (Label2211);
		Label2211.setBounds (179, 0, 12, 14);

		Label21121 = new Label ("'", Label.LEFT);
		Label21121.setName ("Label21121");
		Label21121.setFont (new Font ("Helvetica", 0, 14));
		Label21121.setForeground (new Color (0x000000));
		PanelDDMMSS.add (Label21121);
		Label21121.setBounds (105, 25, 12, 14);

		Label222 = new Label ("'", Label.LEFT);
		Label222.setName ("Label222");
		Label222.setFont (new Font ("Helvetica", 0, 14));
		Label222.setForeground (new Color (0x000000));
		PanelDDMMSS.add (Label222);
		Label222.setBounds (105, 0, 12, 14);

		Label2123 = new Label ("o", Label.LEFT);
		Label2123.setName ("Label2123");
		Label2123.setFont (new Font ("Helvetica", 0, 12));
		Label2123.setForeground (new Color (0x000000));
		PanelDDMMSS.add (Label2123);
		Label2123.setBounds (50, 21, 12, 14);

		Label23 = new Label ("o", Label.LEFT);
		Label23.setName ("Label23");
		Label23.setFont (new Font ("Helvetica", 0, 12));
		Label23.setForeground (new Color (0x000000));
		Label23.setBounds (50, -1, 12, 14);
		PanelDDMMSS.add (Label23);

		LabelDatum = new Label (g_properties.getProperty("label.datum."+language), Label.LEFT);
		LabelDatum.setName ("LabelDatum");
		LabelDatum.setFont (new Font ("Helvetica", 0, 12));
		LabelDatum.setForeground (new Color (0x000000));
		LabelDatum.setBackground (new Color (0xc0c0c0));
		PanelCoords.add (LabelDatum);
		LabelDatum.setBounds (2, 52, 42, 27);

		ChoiceDatum = new Choice ();
		ChoiceDatum.setName ("ChoiceDatum");
		ChoiceDatum.setFont (new Font ("Helvetica", 0, 12));
		ChoiceDatum.setForeground (new Color (0x000000));
		ChoiceDatum.setBackground (new Color (0xffffff));
		ChoiceDatum.setVisible(false);
		PanelCoords.add (ChoiceDatum);
		ChoiceDatum.setBounds (50, 53, 290, 23);

		PanelCoordPrecision = new Panel ();
		PanelCoordPrecision.setName ("PanelCoordPrecision");
		PanelCoordPrecision.setLayout(null);  
		PanelCoordPrecision.setFont (new Font ("Helvetica", 0, 12));
		PanelCoordPrecision.setVisible (false);
		PanelCoordPrecision.setForeground (new Color (0x000000));
		pane.add (PanelCoordPrecision);
		PanelCoordPrecision.setBounds (3, 281, 340, 32);

		LabelLatPrecision = new Label (g_properties.getProperty("label.coordprec."+language), Label.LEFT);
		LabelLatPrecision.setName ("LabelLatPrecision");
		LabelLatPrecision.setFont (new Font ("Helvetica", 0, 12));
		LabelLatPrecision.setForeground (new Color (0x000000));
		PanelCoordPrecision.add (LabelLatPrecision);
		LabelLatPrecision.setBounds (2, 3, 170, 27);

		ChoiceLatPrecision = new Choice ();
		ChoiceLatPrecision.setName ("ChoiceLatPrecision");
		ChoiceLatPrecision.setFont (new Font ("Helvetica", 0, 12));
		ChoiceLatPrecision.setForeground (new Color (0x000000));
		ChoiceLatPrecision.setBackground (new Color (0xffffff));
		ChoiceLatPrecision.setVisible(false);
		PanelCoordPrecision.add (ChoiceLatPrecision);
		ChoiceLatPrecision.setBounds (175, 4, 165, 23);

		LabelDirection = new Label (g_properties.getProperty("label.direction."+language), Label.RIGHT);
		LabelDirection.setName ("LabelDirection");
		LabelDirection.setFont (new Font ("Helvetica", 0, 12));
		LabelDirection.setVisible (false);
		LabelDirection.setForeground (new Color (0x000000));
		LabelDirection.setBackground (new Color (0xc0c0c0));
		pane.add (LabelDirection);
		LabelDirection.setBounds (360, 146, 90, 23);

		ChoiceDirection = new Choice ();
		ChoiceDirection.setName ("ChoiceDirection");
		ChoiceDirection.setFont (new Font ("Helvetica", 0, 12));
		ChoiceDirection.setVisible (false);
		ChoiceDirection.setForeground (new Color (0x000000));
		ChoiceDirection.setBackground (new Color (0xffffff));
		ChoiceDirection.setVisible(false);
		pane.add (ChoiceDirection);
		ChoiceDirection.setBounds (455, 145, 110, 23);

		TextFieldHeading = new TextField ("TextFieldHeading");
		TextFieldHeading.setName ("TextFieldHeading");
		TextFieldHeading.setFont (new Font ("Helvetica", 0, 12));
		TextFieldHeading.setVisible (false);
		TextFieldHeading.setForeground (new Color (0x000000));
		TextFieldHeading.setBackground (new Color (0xffffff));
		TextFieldHeading.setText("");
		pane.add (TextFieldHeading);
		TextFieldHeading.setBounds (570, 145, 40, 23);

		TextFieldOffset = new TextField ("TextFieldOffset");
		TextFieldOffset.setName ("TextFieldOffset");
		TextFieldOffset.setFont (new Font ("Helvetica", 0, 12));
		TextFieldOffset.setVisible (false);
		TextFieldOffset.setForeground (new Color (0x000000));
		TextFieldOffset.setBackground (new Color (0xffffff));
		TextFieldOffset.setText("");
		pane.add (TextFieldOffset);
		TextFieldOffset.setBounds (525, 146, 40, 23);

		ChoiceOffsetNSDir = new Choice ();
		ChoiceOffsetNSDir.setName ("ChoiceOffsetNSDir");
		ChoiceOffsetNSDir.setFont (new Font ("Helvetica", 0, 12));
		ChoiceOffsetNSDir.setForeground (new Color (0x000000));
		ChoiceOffsetNSDir.setBackground (new Color (0xffffff));
		ChoiceOffsetNSDir.setVisible(false);
		pane.add (ChoiceOffsetNSDir);
		ChoiceOffsetNSDir.setBounds (565, 145, 50, 23);

		LabelOffsetEW = new Label (g_properties.getProperty("label.distew."+language), Label.RIGHT);
		LabelOffsetEW.setName ("LabelOffsetEW");
		LabelOffsetEW.setFont (new Font ("Helvetica", 0, 12));
		LabelOffsetEW.setVisible (false);
		LabelOffsetEW.setForeground (new Color (0x000000));
		LabelOffsetEW.setBackground (new Color (0xc0c0c0));
		pane.add (LabelOffsetEW);
		LabelOffsetEW.setBounds (350, 174, 170, 23);

		TextFieldOffsetEW = new TextField ("TextFieldOffsetEW");
		TextFieldOffsetEW.setName ("TextFieldOffsetEW");
		TextFieldOffsetEW.setFont (new Font ("Helvetica", 0, 12));
		TextFieldOffsetEW.setVisible (false);
		TextFieldOffsetEW.setForeground (new Color (0x000000));
		TextFieldOffsetEW.setBackground (new Color (0xffffff));
		TextFieldOffsetEW.setText("");
		pane.add (TextFieldOffsetEW);
		TextFieldOffsetEW.setBounds (525, 173, 40, 23);

		ChoiceOffsetEWDir = new Choice();
		ChoiceOffsetEWDir.setName("ChoiceOffsetEWDir");
		ChoiceOffsetEWDir.setFont(new Font ("Helvetica", 0, 12));
		ChoiceOffsetEWDir.setForeground (new Color (0x000000));
		ChoiceOffsetEWDir.setBackground (new Color (0xffffff));
		ChoiceOffsetEWDir.setVisible(false);
		pane.add(ChoiceOffsetEWDir);
		ChoiceOffsetEWDir.setBounds(565, 172, 50, 23);

		LabelOffset = new Label (g_properties.getProperty("label.offset."+language), Label.RIGHT);
		LabelOffset.setName ("LabelOffset");
		LabelOffset.setFont (new Font ("Helvetica", 0, 12));
		LabelOffset.setVisible (false);
		LabelOffset.setForeground (new Color (0x000000));
		LabelOffset.setBackground (new Color (0xc0c0c0));
		pane.add (LabelOffset);
		LabelOffset.setBounds (340, 147, 180, 23);

		LabelExtent = new Label (g_properties.getProperty("label.extent."+language), Label.RIGHT);
		LabelExtent.setName ("LabelExtent");
		LabelExtent.setFont (new Font ("Helvetica", 0, 12));
		LabelExtent.setVisible (false);
		LabelExtent.setForeground (new Color (0x000000));
		LabelExtent.setBackground (new Color (0xc0c0c0));
		pane.add (LabelExtent);
		LabelExtent.setBounds (340, 201, 180, 23);

		TextFieldExtent = new TextField ("TextFieldExtent");
		TextFieldExtent.setName ("TextFieldExtent");
		TextFieldExtent.setFont (new Font ("Helvetica", 0, 12));
		TextFieldExtent.setVisible (false);
		TextFieldExtent.setForeground (new Color (0x000000));
		TextFieldExtent.setBackground (new Color (0xffffff));
		TextFieldExtent.setText ("");
		pane.add (TextFieldExtent);
		TextFieldExtent.setBounds (525, 200, 40, 23);

		LabelMeasurementError = new Label (g_properties.getProperty("label.measurementerror."+language), Label.RIGHT);
		LabelMeasurementError.setName ("LabelMeasurementError");
		LabelMeasurementError.setFont (new Font ("Helvetica", 0, 12));
		LabelMeasurementError.setVisible (false);
		LabelMeasurementError.setForeground (new Color (0x000000));
		LabelMeasurementError.setBackground (new Color (0xc0c0c0));
		pane.add (LabelMeasurementError);
		LabelMeasurementError.setBounds (340, 226, 180, 23);

		TextFieldMeasurementError = new TextField ("TextFieldMeasurementError");
		TextFieldMeasurementError.setName ("TextFieldMeasurementError");
		TextFieldMeasurementError.setFont (new Font ("Helvetica", 0, 12));
		TextFieldMeasurementError.setVisible (false);
		TextFieldMeasurementError.setForeground (new Color (0x000000));
		TextFieldMeasurementError.setBackground (new Color (0xffffff));
		TextFieldMeasurementError.setText ("");
		pane.add (TextFieldMeasurementError);
		TextFieldMeasurementError.setBounds (525, 226, 40, 23);

		LabelDistUnits = new Label (g_properties.getProperty("label.distunits."+language), Label.RIGHT);
		LabelDistUnits.setName ("LabelDistUnits");
		LabelDistUnits.setFont (new Font ("Helvetica", 0, 12));
		LabelDistUnits.setVisible (false);
		LabelDistUnits.setForeground (new Color (0x000000));
		LabelDistUnits.setBackground (new Color (0xc0c0c0));
		pane.add (LabelDistUnits);
		LabelDistUnits.setBounds (340, 255, 180, 27);

		ChoiceDistUnits = new Choice ();
		ChoiceDistUnits.setName ("ChoiceDistUnits");
		ChoiceDistUnits.setFont (new Font ("Helvetica", 0, 12));
		ChoiceDistUnits.setVisible (false);
		ChoiceDistUnits.setForeground (new Color (0x000000));
		ChoiceDistUnits.setBackground (new Color (0xffffff));
		ChoiceDistUnits.setVisible(false);
		pane.add (ChoiceDistUnits);
		ChoiceDistUnits.setBounds (525, 256, 60, 23);

		LabelDistancePrecision = new Label (g_properties.getProperty("label.distprec."+language), Label.RIGHT);
		LabelDistancePrecision.setName ("LabelDistancePrecision");
		LabelDistancePrecision.setFont (new Font ("Helvetica", 0, 12));
		LabelDistancePrecision.setVisible (false);
		LabelDistancePrecision.setForeground (new Color (0x000000));
		LabelDistancePrecision.setBackground (new Color (0xc0c0c0));
		pane.add (LabelDistancePrecision);
		LabelDistancePrecision.setBounds (350, 280, 170, 23);

		ChoiceDistancePrecision = new Choice ();
		ChoiceDistancePrecision.setName ("ChoiceDistancePrecision");
		ChoiceDistancePrecision.setFont (new Font ("Helvetica", 0, 12));
		ChoiceDistancePrecision.setVisible (false);
		ChoiceDistancePrecision.setForeground (new Color (0x000000));
		ChoiceDistancePrecision.setBackground (new Color (0xffffff));
		ChoiceDistancePrecision.setVisible(false);
		pane.add (ChoiceDistancePrecision);
		ChoiceDistancePrecision.setBounds (525, 281, 90, 23);

		ButtonCalculate = new Button(g_properties.getProperty("label.calculate."+language));
		ButtonCalculate.setName ("ButtonCalculate");
		ButtonCalculate.setFont (new Font ("Helvetica", 1, 12));
		ButtonCalculate.setForeground (new Color (0x000000));
		ButtonCalculate.setBackground (new Color (0xc6c6c6));
		ButtonCalculate.setVisible (false);
		pane.add(ButtonCalculate);
		ButtonCalculate.setBounds (445, 343, 82, 26); 

		ButtonPromote = new Button(g_properties.getProperty("label.promote."+language));
		ButtonPromote.setName ("ButtonPromote");
		ButtonPromote.setFont (new Font ("Helvetica", 1, 12));
		ButtonPromote.setForeground (new Color (0x000000));
		ButtonPromote.setBackground (new Color (0xc6c6c6));
		ButtonPromote.setVisible (false);
		pane.add(ButtonPromote);
		ButtonPromote.setBounds (527, 343, 82, 26); 

		PanelResults = new Panel ();
		PanelResults.setName ("PanelResults");
		PanelResults.setLayout(null);  
		PanelResults.setFont (new Font ("Helvetica", 0, 12));
		PanelResults.setVisible (false);
		PanelResults.setForeground (new Color (0x000000));
		pane.add (PanelResults);
		PanelResults.setBounds (4, 322, 611, 77);

		LabelCalcDecLat = new Label (g_properties.getProperty("label.declat."+language), Label.CENTER);
		LabelCalcDecLat.setName ("LabelCalcDecLat");
		LabelCalcDecLat.setFont (new Font ("Helvetica", 0, 12));
		LabelCalcDecLat.setForeground (new Color (0x000000));
		PanelResults.add (LabelCalcDecLat);
		LabelCalcDecLat.setBounds (1, 3, 134, 18);

		TextFieldCalcDecLat = new TextField ("TextFieldCalcDecLat");
		TextFieldCalcDecLat.setName ("TextFieldCalcDecLat");
		TextFieldCalcDecLat.setFont (new Font ("Helvetica", 1, 12));
		TextFieldCalcDecLat.setForeground (new Color (0x0000ff));
		TextFieldCalcDecLat.setText ("");
		TextFieldCalcDecLat.setEditable(false);
		PanelResults.add (TextFieldCalcDecLat);
		TextFieldCalcDecLat.setBounds (5, 21, 130, 25);

		LabelCalcDecLong = new Label (g_properties.getProperty("label.declon."+language), Label.CENTER);
		LabelCalcDecLong.setName ("LabelCalcDecLong");
		LabelCalcDecLong.setFont (new Font ("Helvetica", 0, 12));
		LabelCalcDecLong.setForeground (new Color (0x000000));
		PanelResults.add (LabelCalcDecLong);
		LabelCalcDecLong.setBounds (138, 3, 134, 18);

		TextFieldCalcDecLong = new TextField ("TextFieldCalcDecLong");
		TextFieldCalcDecLong.setName ("TextFieldCalcDecLong");
		TextFieldCalcDecLong.setFont (new Font ("Helvetica", 1, 12));
		TextFieldCalcDecLong.setForeground (new Color (0x0000ff));
		TextFieldCalcDecLong.setText ("");
		TextFieldCalcDecLong.setEditable(false);
		PanelResults.add (TextFieldCalcDecLong);
		TextFieldCalcDecLong.setBounds (140, 21, 130, 25);

		LabelCalcMaxError = new Label (g_properties.getProperty("label.maxerrdist."+language), Label.CENTER);
		LabelCalcMaxError.setName ("LabelCalcMaxError");
		LabelCalcMaxError.setFont (new Font ("Helvetica", 0, 12));
		LabelCalcMaxError.setForeground (new Color (0x000000));
		PanelResults.add (LabelCalcMaxError);
		LabelCalcMaxError.setBounds (273, 3, 165, 18);

		TextFieldCalcErrorDist = new TextField ("TextFieldCalcErrorDist");
		TextFieldCalcErrorDist.setName ("TextFieldCalcErrorDist");
		TextFieldCalcErrorDist.setFont (new Font ("Helvetica", 1, 12));
		TextFieldCalcErrorDist.setForeground (new Color (0x0000ff));
		TextFieldCalcErrorDist.setText ("");
		TextFieldCalcErrorDist.setEditable(false);
		PanelResults.add (TextFieldCalcErrorDist);
		TextFieldCalcErrorDist.setBounds (275, 21, 111, 25);

		TextFieldCalcErrorUnits = new TextField ("TextFieldCalcErrorUnits");
		TextFieldCalcErrorUnits.setName ("TextFieldCalcErrorUnits");
		TextFieldCalcErrorUnits.setFont (new Font ("Helvetica", 1, 12));
		TextFieldCalcErrorUnits.setForeground (new Color (0x0000ff));
		TextFieldCalcErrorUnits.setEditable(false);
		PanelResults.add (TextFieldCalcErrorUnits);
		TextFieldCalcErrorUnits.setBounds (390, 21, 46, 25);

		TextFieldFullResult = new TextField ("TextFieldFullResult");
		TextFieldFullResult.setName ("TextFieldFullResult");
		TextFieldFullResult.setFont (new Font ("Helvetica", 1, 12));
		TextFieldFullResult.setForeground (new Color (0x0000ff));
		TextFieldFullResult.setEditable(false);
		PanelResults.add (TextFieldFullResult);
		TextFieldFullResult.setBounds (5, 48, 602, 25);

		//=== Distance Converter Controls ===//
		LabelDistanceConverter = new Label (g_properties.getProperty("label.distanceconverter."+language), Label.LEFT);
		LabelDistanceConverter.setName ("LabelDistanceConverter");
		LabelDistanceConverter.setFont (new Font ("Helvetica", 0, 12));
		LabelDistanceConverter.setVisible (false);
		LabelDistanceConverter.setForeground (new Color (0x000000));
		LabelDistanceConverter.setBackground (new Color (0xc0c0c0));
		pane.add (LabelDistanceConverter);
		LabelDistanceConverter.setBounds (10, 410, 160, 27);

		TextFieldFromDistance = new TextField ("TextFieldFromDistance");
		TextFieldFromDistance.setName ("TextFieldFromDistance");
		TextFieldFromDistance.setFont (new Font ("Helvetica", 0, 12));
		TextFieldFromDistance.setVisible (false);
		TextFieldFromDistance.setForeground (new Color (0x000000));
		TextFieldFromDistance.setBackground (new Color (0xffffff));
		TextFieldFromDistance.setText ("");
		pane.add (TextFieldFromDistance);
		TextFieldFromDistance.setBounds (180, 410, 80, 23);

		ChoiceFromDistUnits = new Choice();
		ChoiceFromDistUnits.setName ("ChoiceFromDistUnits");
		ChoiceFromDistUnits.setFont (new Font ("Helvetica", 0, 12));
		ChoiceFromDistUnits.setVisible (false);
		ChoiceFromDistUnits.setForeground (new Color (0x000000));
		ChoiceFromDistUnits.setBackground (new Color (0xffffff));
		ChoiceFromDistUnits.setVisible(false);
		pane.add (ChoiceFromDistUnits);
		ChoiceFromDistUnits.setBounds (265, 410, 60, 23);

		LabelEquals = new Label ("=", Label.CENTER);
		LabelEquals.setName ("LabelEquals");
		LabelEquals.setFont (new Font ("Helvetica", 0, 12));
		LabelEquals.setVisible (false);
		LabelEquals.setForeground (new Color (0x000000));
		LabelEquals.setBackground (new Color (0xc0c0c0));
		pane.add (LabelEquals);
		LabelEquals.setBounds (325, 410, 20, 27);

		TextFieldToDistance = new TextField ("TextFieldToDistance");
		TextFieldToDistance.setName ("TextFieldToDistance");
		TextFieldToDistance.setFont (new Font ("Helvetica", 1, 12));
		TextFieldToDistance.setVisible (false);
		TextFieldToDistance.setForeground (new Color (0x0000ff));
		TextFieldToDistance.setText ("");
		TextFieldToDistance.setEditable(false);
		pane.add (TextFieldToDistance);
		TextFieldToDistance.setBounds (345, 410, 80, 23);
		
		ChoiceToDistUnits = new Choice();
		ChoiceToDistUnits.setName ("ChoiceToDistUnits");
		ChoiceToDistUnits.setFont (new Font ("Helvetica", 0, 12));
		ChoiceToDistUnits.setVisible (false);
		ChoiceToDistUnits.setForeground (new Color (0x000000));
		ChoiceToDistUnits.setBackground (new Color (0xffffff));
		ChoiceToDistUnits.setVisible(false);
		pane.add (ChoiceToDistUnits);
		ChoiceToDistUnits.setBounds (430, 410, 60, 23);

		//=== Scale Converter Controls ===//
		LabelScaleConverter = new Label (g_properties.getProperty("label.scaleconverter."+language), Label.LEFT);
		LabelScaleConverter.setName ("LabelScaleConverter");
		LabelScaleConverter.setFont (new Font ("Helvetica", 0, 12));
		LabelScaleConverter.setVisible (false);
		LabelScaleConverter.setForeground (new Color (0x000000));
		LabelScaleConverter.setBackground (new Color (0xc0c0c0));
		pane.add (LabelScaleConverter);
		LabelScaleConverter.setBounds (10, 440, 160, 27);

		TextFieldScaleFromDistance = new TextField ("TextFieldScaleFromDistance");
		TextFieldScaleFromDistance.setName ("TextFieldScaleFromDistance");
		TextFieldScaleFromDistance.setFont (new Font ("Helvetica", 0, 12));
		TextFieldScaleFromDistance.setVisible (false);
		TextFieldScaleFromDistance.setForeground (new Color (0x000000));
		TextFieldScaleFromDistance.setBackground (new Color (0xffffff));
		TextFieldScaleFromDistance.setText ("");
		pane.add (TextFieldScaleFromDistance);
		TextFieldScaleFromDistance.setBounds (180, 440, 80, 23);

		ChoiceScaleFromDistUnits = new Choice();
		ChoiceScaleFromDistUnits.setName ("ChoiceScaleFromDistUnits");
		ChoiceScaleFromDistUnits.setFont (new Font ("Helvetica", 0, 12));
		ChoiceScaleFromDistUnits.setVisible (false);
		ChoiceScaleFromDistUnits.setForeground (new Color (0x000000));
		ChoiceScaleFromDistUnits.setBackground (new Color (0xffffff));
		ChoiceScaleFromDistUnits.setVisible(false);
		pane.add (ChoiceScaleFromDistUnits);
		ChoiceScaleFromDistUnits.setBounds (265, 440, 60, 23);

		ChoiceScale = new Choice();
		ChoiceScale.setName ("ChoiceScale");
		ChoiceScale.setFont (new Font ("Helvetica", 0, 12));
		ChoiceScale.setVisible (false);
		ChoiceScale.setForeground (new Color (0x000000));
		ChoiceScale.setBackground (new Color (0xffffff));
		ChoiceScale.setVisible(false);
		pane.add (ChoiceScale);
		ChoiceScale.setBounds (325, 440, 120, 23);

		LabelScaleEquals = new Label ("=", Label.CENTER);
		LabelScaleEquals.setName ("LabelScaleEquals");
		LabelScaleEquals.setFont (new Font ("Helvetica", 0, 12));
		LabelScaleEquals.setVisible (false);
		LabelScaleEquals.setForeground (new Color (0x000000));
		LabelScaleEquals.setBackground (new Color (0xc0c0c0));
		pane.add (LabelScaleEquals);
		LabelScaleEquals.setBounds (445, 440, 20, 27);

		TextFieldScaleToDistance = new TextField ("TextFieldScaleToDistance");
		TextFieldScaleToDistance.setName ("TextFieldScaleToDistance");
		TextFieldScaleToDistance.setFont (new Font ("Helvetica", 1, 12));
		TextFieldScaleToDistance.setVisible (false);
		TextFieldScaleToDistance.setForeground (new Color (0x0000ff));
		TextFieldScaleToDistance.setText ("");
		TextFieldScaleToDistance.setEditable(false);
		pane.add (TextFieldScaleToDistance);
		TextFieldScaleToDistance.setBounds (465, 440, 80, 23);
		
		ChoiceScaleToDistUnits = new Choice();
		ChoiceScaleToDistUnits.setName ("ChoiceScaleToDistUnits");
		ChoiceScaleToDistUnits.setFont (new Font ("Helvetica", 0, 12));
		ChoiceScaleToDistUnits.setVisible (false);
		ChoiceScaleToDistUnits.setForeground (new Color (0x000000));
		ChoiceScaleToDistUnits.setBackground (new Color (0xffffff));
		ChoiceScaleToDistUnits.setVisible(false);
		pane.add (ChoiceScaleToDistUnits);
		ChoiceScaleToDistUnits.setBounds (545, 440, 60, 23);

		PanelResults.setBackground (new Color (0xc0c0c0));
		PanelCoords.setBackground (new Color (0xc0c0c0));
		PanelDecLatLong.setBackground (new Color (0xc0c0c0));
		PanelDecMin.setBackground (new Color (0xc0c0c0));
		PanelDDMMSS.setBackground (new Color (0xc0c0c0));
		PanelCoordPrecision.setBackground (new Color (0xc0c0c0));
		pane.setBackground (new Color (0xc0c0c0));

		afterFormInitialize();
		addListeners();
		return pane;
	}
*/
/*
	public void focusGained(FocusEvent e){
		if (e.getSource() == TextFieldFromDistance) {
			TextFieldFromDistance_focusGained();
		}
		if (e.getSource() == TextFieldToDistance) {
			TextFieldToDistance_focusGained();
		}
		if (e.getSource() == TextFieldScaleFromDistance) {
			TextFieldScaleFromDistance_focusGained();
		}
		if (e.getSource() == TextFieldScaleToDistance) {
			TextFieldScaleToDistance_focusGained();
		}
		if (e.getSource() == TextFieldExtent) {
			TextFieldExtent_focusGained();
		}
		if (e.getSource() == TextFieldMeasurementError) {
			TextFieldMeasurementError_focusGained();
		}
		if (e.getSource() == txtT2Dec_Lat) {
			txtT2Dec_Lat_focusGained();
		}
		if (e.getSource() == txtT2Dec_Long) {
			txtT2Dec_Long_focusGained();
		}
		if (e.getSource() == txtT7Lat_DegDMS) {
			txtT7Lat_DegDMS_focusGained();
		}
		if (e.getSource() == txtT7Lat_DegMM) {
			txtT7Lat_DegMM_focusGained();
		}
		if (e.getSource() == txtT7Lat_MinDMS) {
			txtT7Lat_MinDMS_focusGained();
		}
		if (e.getSource() == txtT7Lat_MinMM) {
			txtT7Lat_MinMM_focusGained();
		}
		if (e.getSource() == txtT7Lat_Sec) {
			txtT7Lat_Sec_focusGained();
		}
		if (e.getSource() == txtT7Long_DegDMS) {
			txtT7Long_DegDMS_focusGained();
		}
		if (e.getSource() == txtT7Long_DegMM) {
			txtT7Long_DegMM_focusGained();
		}
		if (e.getSource() == txtT7Long_MinDMS) {
			txtT7Long_MinDMS_focusGained();
		}
		if (e.getSource() == txtT7Long_MinMM) {
			txtT7Long_MinMM_focusGained();
		}
		if (e.getSource() == txtT7Long_Sec) {
			txtT7Long_Sec_focusGained();
		}
		if (e.getSource() == TextFieldOffset) {
			TextFieldOffset_focusGained();
		}
		if (e.getSource() == TextFieldOffsetEW) {
			TextFieldOffsetEW_focusGained();
		}
		if (e.getSource() == TextFieldHeading) {
			TextFieldHeading_focusGained();
		}
	}

	public void focusLost( FocusEvent e ){}

	private double getCoordPrecisionError(){
		String latprecision = (String)ChoiceLatPrecision.getSelectedItem();
		if( latprecision.equals(g_properties.getProperty("coordprec.dd.exact."+language)) ) return 0.0;

		// Assume coordinate precision is the same in both latitude and longitude.
		// Also assume that precision of one degree corresponds to the distance
		// in one degree of both latitude and longitude from the given latitude
		// and longitude.
		calculateLatLongMetersPerDegree();
		double error = Math.sqrt( Math.pow(latmetersperdegree,2.0) + Math.pow(longmetersperdegree,2.0) );

		String distunitsstr = (String)ChoiceDistUnits.getSelectedItem();
		error = convertFromMetersTo( error, distunitsstr );

		if( latprecision.equals(g_properties.getProperty("coordprec.dd.degree."+language)) ){
//			if( latprecision.equals("nearest degree") ){
			error *= 1.0;
		} else if( latprecision.equals(g_properties.getProperty("coordprec.dd.01."+language)) ){
//			} else if( latprecision.equals("0.1 degrees") ){
			error *= 0.1;
		} else if( latprecision.equals(g_properties.getProperty("coordprec.dd.001."+language)) ){
//			} else if( latprecision.equals("0.01 degrees") ){
			error *= 0.01;
		} else if( latprecision.equals(g_properties.getProperty("coordprec.dd.0001."+language)) ){
//			} else if( latprecision.equals("0.001 degrees") ){
			error *= 0.001;
		} else if( latprecision.equals(g_properties.getProperty("coordprec.dd.00001."+language)) ){
//			} else if( latprecision.equals("0.0001 degrees") ){
			error *= 0.0001;
		} else if( latprecision.equals(g_properties.getProperty("coordprec.dd.000001."+language)) ){
//			} else if( latprecision.equals("0.00001 degrees") ){
			error *= 0.00001;
		} else if( latprecision.equals(g_properties.getProperty("coordprec.dd.half."+language)) ){
//			} else if( latprecision.equals("nearest 1/2 degree") ){
			error *= 0.5;
		} else if( latprecision.equals(g_properties.getProperty("coordprec.dd.quarter."+language)) ){
//			} else if( latprecision.equals("nearest 1/4 degree") ){
			error *= 0.25;
		} else if( latprecision.equals(g_properties.getProperty("coordprec.dms.30m."+language)) ){
//			} else if( latprecision.equals("nearest 30 minutes") ){
			error *= 0.5;
		} else if( latprecision.equals(g_properties.getProperty("coordprec.dms.10m."+language)) ){
//			} else if( latprecision.equals("nearest 10 minutes") ){
			error /= 6.0;
		} else if( latprecision.equals(g_properties.getProperty("coordprec.dms.5m."+language)) ){
//			} else if( latprecision.equals("nearest 5 minutes") ){
			error /= 12.0;
		} else if( latprecision.equals(g_properties.getProperty("coordprec.dms.1m."+language)) ){
//			} else if( latprecision.equals("nearest minute") ){
			error /= 60.0;
		} else if( latprecision.equals(g_properties.getProperty("coordprec.dms.30s."+language)) ){
//			} else if( latprecision.equals("nearest 30 seconds") ){
			error /= 120.0;
		} else if( latprecision.equals(g_properties.getProperty("coordprec.dms.10s."+language)) ){
//			} else if( latprecision.equals("nearest 10 seconds") ){
			error /= 360.0;
		} else if( latprecision.equals(g_properties.getProperty("coordprec.dms.5s."+language)) ){
//			} else if( latprecision.equals("nearest 5 seconds") ){
			error /= 720.0;
		} else if( latprecision.equals(g_properties.getProperty("coordprec.dms.1s."+language)) ){
//			} else if( latprecision.equals("nearest second") ){
			error /= 3600.0;
		} else if( latprecision.equals(g_properties.getProperty("coordprec.dms.01s."+language)) ){
//			} else if( latprecision.equals("0.1 seconds") ){
			error /= 36000.0;
		} else if( latprecision.equals(g_properties.getProperty("coordprec.dms.001s."+language)) ){
//			} else if( latprecision.equals("0.01 seconds") ){
			error /= 360000.0;
		} else if( latprecision.equals(g_properties.getProperty("coordprec.ddm.1m."+language)) ){
//			} else if( latprecision.equals("1 minute") ){
			error /= 60.0;
		} else if( latprecision.equals(g_properties.getProperty("coordprec.ddm.01m."+language)) ){
//			} else if( latprecision.equals("0.1 minutes") ){
			error /= 600.0;
		} else if( latprecision.equals(g_properties.getProperty("coordprec.ddm.001m."+language)) ){
//			} else if( latprecision.equals("0.01 minutes") ){
			error /= 6000.0;
		} else if( latprecision.equals(g_properties.getProperty("coordprec.ddm.0001m."+language)) ){
//			} else if( latprecision.equals("0.001 minutes") ){
			error /= 60000.0;
		}
		return error;
	}
*/

/*
	function getGPSAccuracy() throws ParseException{
		if( ((String)ChoiceCoordSource.getSelectedItem()).equals(g_properties.getProperty("coordsource.gps."+language)) ){
			return getMeasurementError();
		}
		return 0;
	}
*/

	/*
	//initialize the applet
	public void init() {
		Component contents = createComponents();
		this.add(contents);
		this.setVisible(true);
		setIgnoreRepaint(true);
		datumErrorInst=new Datumerror();
		datumErrorInst.init();
		datumErrorInst.create();
	}

	public void keyPressed(KeyEvent e) {
		int keyCode = e.getKeyCode();
		if (keyCode == 10) { // Enter = Calculate
			if (ButtonCalculate.isShowing()){
				try {
					ButtonCalculate_afterActionPerformed();
				} catch (ParseException e1) {
					e1.printStackTrace();
				}
			}
		}
	}

	public void keyReleased(KeyEvent e) {
		convertDistance();
		convertScale();
	}

	public void keyTyped(KeyEvent e) {
	}

	public void paint(Graphics g) {
		super.paint (g);
		if (!ChoiceOffsetEWDir.isShowing ()) {
			ChoiceOffsetEWDir.setBounds (565, 173, 50, 23);
		}
		if(!ChoiceOffsetNSDir.isShowing ()) {
			ChoiceOffsetNSDir.setBounds (565, 146, 50, 23);
		}
		if (!ChoiceCalcType.isShowing ()) {
			ChoiceCalcType.setBounds (117, 33, 478, 23);
			ChoiceCalcType.setVisible(true);
		}
		if (!ChoiceModel.isShowing ()) {
			ChoiceModel.setBounds (125, 87, 490, 23);
		}
		if (!ChoiceCoordSource.isShowing ()) {
			ChoiceCoordSource.setBounds (165, 146, 180, 23);
		}
		if (!ChoiceCoordSystem.isShowing ()) {
			ChoiceCoordSystem.setBounds (165, 173, 180, 23);
		}
		if (!ChoiceDatum.isShowing ()) {
			ChoiceDatum.setBounds (50, 53, 290, 23);
			ChoiceDatum.setVisible(true);
		}
		if (!ChoiceDistUnits.isShowing ()) {
			ChoiceDistUnits.setBounds (525, 256, 60, 23);
		}
		if (!ChoiceFromDistUnits.isShowing ()) {
			ChoiceFromDistUnits.setBounds (265, 410, 60, 23);
		}
		if (!ChoiceToDistUnits.isShowing ()) {
			ChoiceToDistUnits.setBounds (430, 410, 60, 23);
		}
		if (!ChoiceScaleFromDistUnits.isShowing ()) {
			ChoiceScaleFromDistUnits.setBounds (265, 440, 60, 23);
		}
		if (!ChoiceScaleToDistUnits.isShowing ()) {
			ChoiceScaleToDistUnits.setBounds (545, 440, 60, 23);
		}
		if (!ChoiceScale.isShowing ()) {
			ChoiceScale.setBounds (325, 440, 120, 23);
		}

		if (!ChoiceDistancePrecision.isShowing ()) {
			ChoiceDistancePrecision.setBounds (525, 281, 90, 23);
		}
		if (!ChoiceDirection.isShowing ()) {
			ChoiceDirection.setBounds (455, 145, 110, 23);
		}
		if (!ChoiceLatDirMM.isShowing ()) {
			ChoiceLatDirMM.setBounds (142, 2, 56, 23);
			ChoiceLatDirMM.setVisible(true);
		}
		if (!ChoiceLongDirMM.isShowing ()) {
			ChoiceLongDirMM.setBounds (142, 26, 56, 23);
			ChoiceLongDirMM.setVisible(true);
		}
		if (!ChoiceLongDirDMS.isShowing ()) {
			ChoiceLongDirDMS.setBounds (188, 26, 56, 23);
			ChoiceLongDirDMS.setVisible(true);
		}
		if (!ChoiceLatDirDMS.isShowing ()) {
			ChoiceLatDirDMS.setBounds (188, 2, 56, 23);
			ChoiceLatDirDMS.setVisible(true);
		}
		if (!ChoiceLatPrecision.isShowing ()) {
			ChoiceLatPrecision.setBounds (175, 4, 165, 23);
			ChoiceLatPrecision.setVisible(true);
		}
	}

	// Populate the Coordinate Precision Controls based on the Coordinate System
	private void populateCoordinatePrecision( String system ){
		ChoiceLatPrecision.removeAll();
		int index = g_canonicalcoordsystems.indexOf(system);
		if( index==0 ){
			for(int i=0;i<g_canonicalddprec.size();i++){
				ChoiceLatPrecision.addItem((String)g_canonicalddprec.get(i));
			}
			ChoiceLatPrecision.select(g_properties.getProperty("coordprec.dd.degree."+language));
		} else if( index==1 ){
			for(int i=0;i<g_canonicaldmsprec.size();i++){
				ChoiceLatPrecision.addItem((String)g_canonicaldmsprec.get(i));
			}
			ChoiceLatPrecision.select(g_properties.getProperty("coordprec.dms.degree."+language));
		} else if( index==2 ){
			for(int i=0;i<g_canonicalddmprec.size();i++){
				ChoiceLatPrecision.addItem((String)g_canonicalddmprec.get(i));
			}
			ChoiceLatPrecision.select(g_properties.getProperty("coordprec.ddm.degree."+language));
		}
	}

	private void populateDistancePrecision( String units ){
		ChoiceDistancePrecision.removeAll();
		ChoiceDistancePrecision.addItem("100 "+units);
		ChoiceDistancePrecision.addItem("10 "+units);
		ChoiceDistancePrecision.addItem("1 "+units);
		ChoiceDistancePrecision.addItem("1/2 "+units);
		ChoiceDistancePrecision.addItem("1/3 "+units);
		ChoiceDistancePrecision.addItem("1/4 "+units);
		ChoiceDistancePrecision.addItem("1/8 "+units);
		ChoiceDistancePrecision.addItem("1/10 "+units);
		ChoiceDistancePrecision.addItem("1/100 "+units);
		ChoiceDistancePrecision.addItem(g_properties.getProperty("coordprec.dd.exact."+language));
		ChoiceDistancePrecision.select("1 "+units);
	}
*/

	function populateStableControls()
	{
		//uiClearSelect("ChoiceCalcType");
		uiClearSelect( "ChoiceCalcType" );
		uiSelectAddEmptyItem("ChoiceCalcType");
		uiSelectAddItem("ChoiceCalcType", "calctype.coordsanderror");
		uiSelectAddItem("ChoiceCalcType", "calctype.erroronly");
		uiSelectAddItem("ChoiceCalcType","calctype.coordsonly");
		//ChoiceCalcType.select("");

		// Coordinate System controls
		uiClearSelect( "ChoiceCoordSystem");
		uiSelectAddEmptyItem("ChoiceCoordSystem");
		uiSelectAddItem("ChoiceCoordSystem","coordsys.dms");
		uiSelectAddItem("ChoiceCoordSystem","coordsys.dd");
		uiSelectAddItem("ChoiceCoordSystem","coordsys.ddm");

		//BUGBUG add me back ChoiceCoordSystem.select(g_properties.getProperty("coordsys.dd."+language));

		// Coordinate Source controls
		uiClearSelect("ChoiceCoordSource");
		for( i=0; i< g_canonicalsources.contents.length; i++){
			uiSelectAddExplicitItem("ChoiceCoordSource", g_canonicalsources.contents[i] )
		}
		//BUGBUG add me back ChoiceCoordSource.select("gazetteer");
/*

		// Datum controls
		ChoiceDatum.removeAll();
		ChoiceDatum.addItem(g_properties.getProperty("datum.notrecorded."+language));
		ChoiceDatum.addItem("(WGS84) World Geodetic System 1984");
		ChoiceDatum.addItem("(NAD83) North American 1983");
		ChoiceDatum.addItem("(NAD27) North American 1927");

		ChoiceDatum.addItem("Adindan");
		ChoiceDatum.addItem("Afgooye");
		ChoiceDatum.addItem("Ain el Abd 1970");
		ChoiceDatum.addItem("Airy 1830 ellipsoid");
		ChoiceDatum.addItem("American Samoa 1962");
		ChoiceDatum.addItem("Anna 1 Astro 1965");
		ChoiceDatum.addItem("Antigua Island Astro 1943");
		ChoiceDatum.addItem("Arc 1950");
		ChoiceDatum.addItem("Arc 1960");
		ChoiceDatum.addItem("Ascension Island 1958");
		ChoiceDatum.addItem("Astro Beacon 'E' 1945");
		ChoiceDatum.addItem("Astro DOS 71/4");
		ChoiceDatum.addItem("Astro Tern Island (FRIG) 1961");
		ChoiceDatum.addItem("Astronomic Station No. 1 1951");
		ChoiceDatum.addItem("Astronomic Station No. 2 1951, Truk Island");
		ChoiceDatum.addItem("Astronomic Station Ponape 1951");
		ChoiceDatum.addItem("Astronomical Station 1952");
		ChoiceDatum.addItem("(AGD66) Australian Geodetic 1966");
		ChoiceDatum.addItem("(AGD84) Australian Geodetic 1984");
		ChoiceDatum.addItem("Australian National ellipsoid");
		ChoiceDatum.addItem("Ayabelle Lighthouse");
		ChoiceDatum.addItem("Bekaa Valley 1920 (IGN)");
		ChoiceDatum.addItem("Bellevue (IGN)");
		ChoiceDatum.addItem("Bermuda 1957");
		ChoiceDatum.addItem("Bessel 1841 ellipsoid (Namibia)");
		ChoiceDatum.addItem("Bessel 1841 ellipsoid (non-Namibia)");
		ChoiceDatum.addItem("Bissau");
		ChoiceDatum.addItem("Bogota Observatory");
		ChoiceDatum.addItem("Bukit Rimpah");
		ChoiceDatum.addItem("Campo Inchauspe");
		ChoiceDatum.addItem("Canton Astro 1966");
		ChoiceDatum.addItem("Cape");
		ChoiceDatum.addItem("Cape Canaveral");
		ChoiceDatum.addItem("Carthage");
		ChoiceDatum.addItem("Chatham Island Astro 1971");
		ChoiceDatum.addItem("Chua Astro");
		ChoiceDatum.addItem("Clarke 1858 ellipsoid");
		ChoiceDatum.addItem("Clarke 1866 ellipsoid");
		ChoiceDatum.addItem("Clarke 1880 ellipsoid");
		ChoiceDatum.addItem("Co-Ordinate System 1937 of Estonia");
		ChoiceDatum.addItem("Corrego Alegre");
		ChoiceDatum.addItem("Dabola");
		ChoiceDatum.addItem("Deception Island");
		ChoiceDatum.addItem("Djakarta (Batavia)");
		ChoiceDatum.addItem("DOS 1968");
		ChoiceDatum.addItem("Easter Island 1967");

		ChoiceDatum.addItem("European 1950");
		ChoiceDatum.addItem("European 1979");

		ChoiceDatum.addItem("Everest ellipsoid (Brunei, Sabah, Sarawak)");
		ChoiceDatum.addItem("Everest India 1830 ellipsoid");
		ChoiceDatum.addItem("Everest India 1856 ellipsoid");
		ChoiceDatum.addItem("Everest Pakistan ellipsoid");
		ChoiceDatum.addItem("Everest ellipsoid (W. Malaysia, Singapore 1948)");
		ChoiceDatum.addItem("Everest W. Malaysia 1969 ellipsoid");

		ChoiceDatum.addItem("Fort Thomas 1955");
		ChoiceDatum.addItem("Gan 1970");
		ChoiceDatum.addItem("Geodetic Datum 1949");
		ChoiceDatum.addItem("Graciosa Base SW 1948");

		ChoiceDatum.addItem("GRS80 ellipsoid");

		ChoiceDatum.addItem("Guam 1963");
		ChoiceDatum.addItem("Gunung Segara");
		ChoiceDatum.addItem("GUX 1 Astro");

		ChoiceDatum.addItem("Helmert 1906 ellipsoid");

		ChoiceDatum.addItem("Hito XVIII 1963");
		ChoiceDatum.addItem("Hjorsey 1955");
		ChoiceDatum.addItem("Hong Kong 1963");

		ChoiceDatum.addItem("Hough 1960 ellipsoid");

		ChoiceDatum.addItem("Hu-Tzu-Shan");
		ChoiceDatum.addItem("Indian");
		ChoiceDatum.addItem("Indian 1954");
		ChoiceDatum.addItem("Indian 1960");
		ChoiceDatum.addItem("Indian 1975");
		ChoiceDatum.addItem("Indonesian 1974");

		ChoiceDatum.addItem("International 1924 ellipsoid");

		ChoiceDatum.addItem("Ireland 1965");
		ChoiceDatum.addItem("ISTS 061 Astro 1968");
		ChoiceDatum.addItem("ISTS 073 Astro 1969");
		ChoiceDatum.addItem("Japanese Geodetic Datum 2000");
		ChoiceDatum.addItem("Johnston Island 1961");
		ChoiceDatum.addItem("Kandawala");
		ChoiceDatum.addItem("Kapingamarangi Astronomic Station No. 3 1951");
		ChoiceDatum.addItem("Kerguelen Island 1949");
		ChoiceDatum.addItem("Kertau 1948");
		ChoiceDatum.addItem("Korean Geodetic System 1995");

		ChoiceDatum.addItem("Krassovsky 1940 ellipsoid");

		ChoiceDatum.addItem("Kusaie Astro 1951");
		ChoiceDatum.addItem("L.C. 5 Astro 1961");
		ChoiceDatum.addItem("Leigon");
		ChoiceDatum.addItem("Lemuta");
		ChoiceDatum.addItem("Liberia 1964");
		ChoiceDatum.addItem("Luzon");
		ChoiceDatum.addItem("Mahe 1971");
		ChoiceDatum.addItem("Massawa");
		ChoiceDatum.addItem("Merchich");
		ChoiceDatum.addItem("Midway Astro 1961");
		ChoiceDatum.addItem("Minna");

		ChoiceDatum.addItem("Modified Airy ellipsoid");
		ChoiceDatum.addItem("Modified Fischer 1960 ellipsoid");

		ChoiceDatum.addItem("Montserrat Island Astro 1958");
		ChoiceDatum.addItem("M'Poraloko");
		ChoiceDatum.addItem("Nahrwan");
		ChoiceDatum.addItem("Naparima, BWI");
		ChoiceDatum.addItem("Naparima 1972");
		ChoiceDatum.addItem("North Sahara 1959");
		ChoiceDatum.addItem("Observatorio Meteorologico 1939");
		ChoiceDatum.addItem("Ocotepeque 1935");
		ChoiceDatum.addItem("Old Egyptian 1907");
		ChoiceDatum.addItem("Old Hawaiian, Clarke 1866");
		ChoiceDatum.addItem("Old Hawaiian, International 1924");
		ChoiceDatum.addItem("Old Trinidad 1903");
		ChoiceDatum.addItem("Oman");
		ChoiceDatum.addItem("Ordnance Survey of Great Britain 1936");
		ChoiceDatum.addItem("Pico de las Nieves");
		ChoiceDatum.addItem("Pitcairn Astro 1967");
		ChoiceDatum.addItem("Point 58");
		ChoiceDatum.addItem("Point Noire 1958");
		ChoiceDatum.addItem("Porto Santo 1936");
		ChoiceDatum.addItem("Provisional South American 1956");
		ChoiceDatum.addItem("Provisional South Chilean 1963");
		ChoiceDatum.addItem("Puerto Rico");
		ChoiceDatum.addItem("Qatar National");
		ChoiceDatum.addItem("Qornoq");
		ChoiceDatum.addItem("Reunion");
		ChoiceDatum.addItem("Rome 1940");
		ChoiceDatum.addItem("S-42 (Pulkovo 1942)");
		ChoiceDatum.addItem("S-JTSK");
		ChoiceDatum.addItem("Santo (DOS) 1965");
		ChoiceDatum.addItem("Sao Braz");
		ChoiceDatum.addItem("Sapper Hill 1943");

		ChoiceDatum.addItem("Schwarzeck");
		ChoiceDatum.addItem("Selvagem Grande 1938");
		ChoiceDatum.addItem("Sierra Leone 1960");
		ChoiceDatum.addItem("South American 1969");
		ChoiceDatum.addItem("SIRGAS - South American Geocentric Reference System");
		ChoiceDatum.addItem("South Asia");
		ChoiceDatum.addItem("Tananarive Observatory 1925");
		ChoiceDatum.addItem("Timbalai 1948");
		ChoiceDatum.addItem("Tokyo");
		ChoiceDatum.addItem("Tristan Astro 1968");
		ChoiceDatum.addItem("Viti Levu 1916");
		ChoiceDatum.addItem("Voirol 1874");
		ChoiceDatum.addItem("Voirol 1960");
		ChoiceDatum.addItem("Wake-Eniwetok 1960");
		ChoiceDatum.addItem("Wake Island Astro 1952");
		ChoiceDatum.addItem("(WGS66) World Geodetic System 1966");
		ChoiceDatum.addItem("(WGS72) World Geodetic System 1972");
		ChoiceDatum.addItem("Yacare");
		ChoiceDatum.addItem("Zanderij");
		ChoiceDatum.select(g_properties.getProperty("datum.notrecorded."+language));


		// Distance Precision controls
		populateDistancePrecision("km");

		// Direction Precision controls
		ChoiceDirection.removeAll();
		ChoiceDirection.addItem(g_properties.getProperty("headings.nearestdegree."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.n."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.e."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.s."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.w."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.ne."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.se."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.sw."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.nw."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.nne."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.ene."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.ese."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.sse."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.ssw."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.wsw."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.wnw."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.nnw."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.nbe."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.nebn."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.nebe."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.ebn."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.ebs."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.sebe."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.sebs."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.sbe."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.sbw."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.swbs."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.swbw."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.wbs."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.wbn."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.nwbw."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.nwbn."+language));
		ChoiceDirection.addItem(g_properties.getProperty("headings.nbw."+language));
		ChoiceDirection.select(g_properties.getProperty("headings.n."+language));

		// Distance Units controls
		ChoiceDistUnits.removeAll();
		ChoiceDistUnits.addItem("km");
		ChoiceDistUnits.addItem("m");
		ChoiceDistUnits.addItem("mi");
		ChoiceDistUnits.addItem("yds");
		ChoiceDistUnits.addItem("ft");
		ChoiceDistUnits.addItem("nm");
		ChoiceDistUnits.select("km");

		ChoiceFromDistUnits.removeAll();
		ChoiceFromDistUnits.addItem("km");
		ChoiceFromDistUnits.addItem("m");
		ChoiceFromDistUnits.addItem("mi");
		ChoiceFromDistUnits.addItem("yds");
		ChoiceFromDistUnits.addItem("ft");
		ChoiceFromDistUnits.addItem("nm");
		ChoiceFromDistUnits.select("km");

		ChoiceToDistUnits.removeAll();
		ChoiceToDistUnits.addItem("km");
		ChoiceToDistUnits.addItem("m");
		ChoiceToDistUnits.addItem("mi");
		ChoiceToDistUnits.addItem("yds");
		ChoiceToDistUnits.addItem("ft");
		ChoiceToDistUnits.addItem("nm");
		ChoiceToDistUnits.select("km");

		ChoiceScaleFromDistUnits.removeAll();
		ChoiceScaleFromDistUnits.addItem("mm");
		ChoiceScaleFromDistUnits.addItem("cm");
		ChoiceScaleFromDistUnits.addItem("in");
		ChoiceScaleFromDistUnits.select("mm");

		ChoiceScale.removeAll();
		ChoiceScale.addItem("1:1000");
		ChoiceScale.addItem("1:1200");
		ChoiceScale.addItem("1:2000");
		ChoiceScale.addItem("1:2400");
		ChoiceScale.addItem("1:2500");
		ChoiceScale.addItem("1:4800");
		ChoiceScale.addItem("1:5000");
		ChoiceScale.addItem("1:9600");
		ChoiceScale.addItem("1:10000");
		ChoiceScale.addItem("1:12000");
		ChoiceScale.addItem("1:20000");
		ChoiceScale.addItem("1:24000");
		ChoiceScale.addItem("1:25000");
		ChoiceScale.addItem("1:32500");
		ChoiceScale.addItem("1:40000");
		ChoiceScale.addItem("1:50000");
		ChoiceScale.addItem("1:60000");
		ChoiceScale.addItem("1:62500");
		ChoiceScale.addItem("1:63600");
		ChoiceScale.addItem("1:80000");
		ChoiceScale.addItem("1:100000");
		ChoiceScale.addItem("1:120000");
		ChoiceScale.addItem("1:125000");
		ChoiceScale.addItem("1:150000");
		ChoiceScale.addItem("1:180000");
		ChoiceScale.addItem("1:200000");
		ChoiceScale.addItem("1:250000");
		ChoiceScale.addItem("1:500000");
		ChoiceScale.addItem("1:1000000");
		ChoiceScale.addItem("1:1500000");
		ChoiceScale.addItem("1:2500000");
		ChoiceScale.addItem("1:3000000");
		ChoiceScale.select("1:24000");

		ChoiceScaleToDistUnits.removeAll();
		ChoiceScaleToDistUnits.addItem("km");
		ChoiceScaleToDistUnits.addItem("m");
		ChoiceScaleToDistUnits.addItem("mi");
		ChoiceScaleToDistUnits.addItem("yds");
		ChoiceScaleToDistUnits.addItem("ft");
		ChoiceScaleToDistUnits.addItem("nm");
		ChoiceScaleToDistUnits.select("km");

		// Lat/Long Direction controls
		ChoiceLatDirMM.removeAll();
		ChoiceLatDirMM.addItem(g_properties.getProperty("headings.n."+language));
		ChoiceLatDirMM.addItem(g_properties.getProperty("headings.s."+language));
//		ChoiceLatDirMM.addItem("N");
//		ChoiceLatDirMM.addItem("S");

		ChoiceLongDirMM.removeAll();
		ChoiceLongDirMM.addItem(g_properties.getProperty("headings.w."+language));
		ChoiceLongDirMM.addItem(g_properties.getProperty("headings.e."+language));
//		ChoiceLongDirMM.addItem("W");
//		ChoiceLongDirMM.addItem("E");

		ChoiceLatDirDMS.removeAll();
		ChoiceLatDirDMS.addItem(g_properties.getProperty("headings.n."+language));
		ChoiceLatDirDMS.addItem(g_properties.getProperty("headings.s."+language));
//		ChoiceLatDirDMS.addItem("N");
//		ChoiceLatDirDMS.addItem("S");

		ChoiceLongDirDMS.removeAll();
		ChoiceLongDirDMS.addItem(g_properties.getProperty("headings.w."+language));
		ChoiceLongDirDMS.addItem(g_properties.getProperty("headings.e."+language));
//		ChoiceLongDirDMS.addItem("W");
//		ChoiceLongDirDMS.addItem("E");

		// Offset Direction Controls
		ChoiceOffsetNSDir.removeAll();
		ChoiceOffsetNSDir.addItem(g_properties.getProperty("headings.n."+language));
		ChoiceOffsetNSDir.addItem(g_properties.getProperty("headings.s."+language));
		ChoiceOffsetEWDir.removeAll();
		ChoiceOffsetEWDir.addItem(g_properties.getProperty("headings.w."+language));
		ChoiceOffsetEWDir.addItem(g_properties.getProperty("headings.e."+language));
//		ChoiceOffsetNSDir.addItem("N");
//		ChoiceOffsetNSDir.addItem("S");
//		ChoiceOffsetEWDir.addItem("W");
//		ChoiceOffsetEWDir.addItem("E");

*/
	}



	function showCoordinatePrecision( b )
	{
		PanelCoordPrecision_SetVisible(b);
	}

	function setVisibility( name, v )
	{
		var el = document.getElementById( name );
		if( el && v === true )
		{
			el.visibility = "visible";
			el.hidden = false;
		}
		else if( el )
		{
			el.visibility = "hidden";
			el.hidden = true;
		}
		else
		{
			console.log( "ERROR setVisibility el is null, name  " + name + " value is X" + v +"X");
		}
		
	}
	
	function PanelCoords_SetVisible( v )
	{
		setVisibility( "lblT2Dec_Lat", v);
		setVisibility( "lblT2Dec_Long", v);
			PanelDecLatLong_SetVisible( v );
			PanelDDMMSS_SetVisible( v );
			PanelDecMin_SetVisible( v );
		setVisibility( "LabelDatum", v);
		setVisibility( "ChoiceDatum", v);
	}

	function PanelCoordPrecision_SetVisible( v )
	{
		setVisibility( "LabelLatPrecision", v );
		setVisibility( "ChoiceLatPrecision", v );
	}
	

	function PanelDecLatLong_SetVisible( v )
	{
		setVisibility( "txtT2Dec_Lat", v );
		setVisibility( "txtT2Dec_Long", v );
	}


	function PanelDDMMSS_SetVisible( v )
	{
		setVisibility( "txtT7Lat_DegDMS", v );
		setVisibility( "txtT7Lat_MinDMS", v );
		setVisibility( "txtT7Lat_Sec", v );
		setVisibility( "ChoiceLatDirDMS", v );
		
		setVisibility( "txtT7Long_DegDMS", v );
		setVisibility( "txtT7Long_MinDMS", v );
		setVisibility( "txtT7Long_Sec", v );
		setVisibility( "ChoiceLongDirDMS", v );
		
		setVisibility( "Label211111", v );
		setVisibility( "Label2211", v );
		setVisibility( "Label21121", v );
		setVisibility( "Label222", v );
		setVisibility( "Label2123", v );
		setVisibility( "Label23", v );
	}

	function PanelDecMin_SetVisible( v )
	{
		setVisibility( "txtT7Lat_DegMM", v);
		setVisibility( "txtT7Lat_MinMM", v);
		setVisibility( "ChoiceLatDirMM", v);
		
		setVisibility( "txtT7Long_DegMM", v);
		setVisibility( "txtT7Long_MinMM", v);
		setVisibility( "ChoiceLongDirMM", v);
		
		setVisibility( "Label2111111", v );
		setVisibility( "Label22111", v );
		setVisibility( "Label21212", v );
		setVisibility( "Label231", v );
	
	}

	//STEP 1 TO USER, BUT WE ZERO INXDEX LANGUAGE choice
	function Step0_Visibility_Init( v )
	{
		setVisibility( "ChoiceLanguage", true );
//ALWAYS VISIBLE		LabelVersion
//ALWAYS VISIBLE		LabelCopyright
		setVisibility( "LabelCalcType", true );
		setVisibility( "ChoiceCalcType", true );
		setVisibility( "LabelStepZero", true );
		setVisibility( "LabelTitle", false );
		Step1Controls_SetVisible( false );
		Step2Controls_SetVisible( false );
	}

	function Step0_Visibility_ChoiceMade( v )
	{
		setVisibility( "ChoiceLanguage", true );
//ALWAYS VISIBLE		LabelVersion
//ALWAYS VISIBLE		LabelCopyright
		setVisibility( "LabelCalcType", true );
		setVisibility( "ChoiceCalcType", true );
		setVisibility( "LabelStepZero", false );
		setVisibility( "LabelTitle", true );

		Step1Controls_SetVisible( true );
		Step2Controls_SetVisible( false );
	}
	
	//STEP 2 TO USER, BUT WE ZERO INXDEX LANGUAGE choice
	function Step1Controls_SetVisible( v )
	{		
		setVisibility( "LabelModel", v );
		setVisibility( "ChoiceModel", v );
		setVisibility( "LabelStepOne", v );
	}

	//STEP 3 TO USER, BUT WE ZERO INXDEX LANGUAGE choice
	function Step2Controls_SetVisible( v )
	{
		/*step cero
		ChoiceLanguage
		LabelVersion
		LabelCopyright
		LabelCalcType
		ChoiceCalcType
		LabelStepZero
		LabelTitle
		*/
		/*step one
		
		LabelModel
		ChoiceModel
		LabelStepOne
		*/
		
		/*step two*/
		setVisibility( "LabelStepTwo", v );
		setVisibility( "LabelCoordSource", v );
		setVisibility( "ChoiceCoordSource", v );
		setVisibility( "LabelCoordSystem", v );
		setVisibility( "ChoiceCoordSystem", v );
		PanelCoords_SetVisible( v );
		PanelCoordPrecision_SetVisible( v );
		setVisibility( "LabelDirection", v );
		setVisibility( "ChoiceDirection", v );
		setVisibility( "TextFieldHeading", v );
		setVisibility( "TextFieldOffset", v );
		setVisibility( "ChoiceOffsetNSDir", v );
		setVisibility( "LabelOffsetEW", v );
		setVisibility( "TextFieldOffsetEW", v );
		setVisibility( "ChoiceOffsetEWDir", v );
		setVisibility( "LabelOffset", v );
		setVisibility( "LabelExtent", v );
		setVisibility( "TextFieldExtent", v );
		setVisibility( "LabelMeasurementError", v );
		setVisibility( "TextFieldMeasurementError", v );
		setVisibility( "LabelDistUnits", v );
		setVisibility( "ChoiceDistUnits", v );
		setVisibility( "LabelDistancePrecision", v );
		setVisibility( "ChoiceDistancePrecision", v );
		setVisibility( "ButtonCalculate", v );
		setVisibility( "ButtonPromote", v );
		PanelResults_SetVisbility( v );
		setVisibility( "LabelDistanceConverter", v );
		setVisibility( "TextFieldFromDistance", v );
		setVisibility( "ChoiceFromDistUnits", v );
		setVisibility( "LabelEquals", v );
		setVisibility( "TextFieldToDistance", v );
		setVisibility( "ChoiceToDistUnits", v );
		setVisibility( "LabelScaleConverter", v );
		setVisibility( "TextFieldScaleFromDistance", v );
		setVisibility( "ChoiceScaleFromDistUnits", v );
		setVisibility( "ChoiceScale", v );
		setVisibility( "LabelScaleEquals", v );
		setVisibility( "TextFieldScaleToDistance", v );
		setVisibility( "ChoiceScaleToDistUnits", v );
	}

	function PanelResults_SetVisible( v )
	{
		setVisibility( "LabelCalcDecLat", v);
		setVisibility( "TextFieldCalcDecLat", v);
		setVisibility( "LabelCalcDecLong", v);
		setVisibility( "TextFieldCalcDecLong", v);
		setVisibility( "LabelCalcMaxError", v);
		setVisibility( "TextFieldCalcErrorDist", v);
		setVisibility( "TextFieldCalcErrorUnits", v);
		setVisibility( "TextFieldFullResult", v);
	}
	
/* BUGBUG Java	 UI Layout, I am using it for hidden attribute setting as it does not translate well from Java pane to HTML div/span
	pane
		ChoiceLanguage
		LabelVersion
		LabelCopyright
		LabelCalcType
		ChoiceCalcType
		LabelStepZero
		LabelTitle
		LabelModel
		ChoiceModel
		LabelStepOne
		LabelStepTwo
		LabelCoordSource
		ChoiceCoordSource
		LabelCoordSystem
		ChoiceCoordSystem
		+	PanelCoords
		+	PanelCoordPrecision
		LabelDirection
		ChoiceDirection
		TextFieldHeading
		TextFieldOffset
		ChoiceOffsetNSDir
		LabelOffsetEW
		TextFieldOffsetEW
		ChoiceOffsetEWDir
		LabelOffset
		LabelExtent
		TextFieldExtent
		LabelMeasurementError
		TextFieldMeasurementError
		LabelDistUnits
		ChoiceDistUnits
		LabelDistancePrecision
		ChoiceDistancePrecision
		ButtonCalculate
		ButtonPromote
		+	PanelResults
		LabelDistanceConverter
		TextFieldFromDistance
		ChoiceFromDistUnits
		LabelEquals
		TextFieldToDistance
		ChoiceToDistUnits
		LabelScaleConverter
		TextFieldScaleFromDistance
		ChoiceScaleFromDistUnits
		ChoiceScale
		LabelScaleEquals
		TextFieldScaleToDistance
		ChoiceScaleToDistUnits
	
	PanelCoords
		lblT2Dec_Lat
		lblT2Dec_Long
		+	PanelDecLatLong
		+	PanelDDMMSS
		+	PanelDecMin
		LabelDatum
		ChoiceDatum
	
	PanelCoordPrecision
		LabelLatPrecision
		ChoiceLatPrecision
	
	PanelDecLatLong
		txtT2Dec_Lat
		txtT2Dec_Long
		
	PanelDDMMSS
		txtT7Lat_DegDMS
		txtT7Lat_MinDMS
		txtT7Lat_Sec
		ChoiceLatDirDMS
		
		txtT7Long_DegDMS
		txtT7Long_MinDMS
		txtT7Long_Sec
		ChoiceLongDirDMS
		
		Label211111
		Label2211
		Label21121
		Label222
		Label2123
		Label23
		
		
	PanelDecMin
		txtT7Lat_DegMM
		txtT7Lat_MinMM
		ChoiceLatDirMM
		
		txtT7Long_DegMM
		txtT7Long_MinMM
		ChoiceLongDirMM
		
		Label2111111
		Label22111
		Label21212
		Label231
		
	PanelResults
		LabelCalcDecLat
		TextFieldCalcDecLat
		LabelCalcDecLong
		TextFieldCalcDecLong
		LabelCalcMaxError
		TextFieldCalcErrorDist
		TextFieldCalcErrorUnits
		TextFieldFullResult
	*/
	
	function showCoordinates( b )
	{
		PanelCoords_SetVisible( b )
	}

	function showCoordinateSource( b )
	{
		setVisibility( "ChoiceCoordSource", b );
		setVisibility( "LabelCoordSource", b );
	}

	function showCoordinateSystem( b )
	{
		setVisibility( "ChoiceCoordSystem", b );
		setVisibility( "LabelCoordSystem", b );
	}

	function showDecimalDegrees( b )
	{
		PanelDecLatLong_SetVisible( b );
	}

	function showDegreesDecimalMinutes( b )
	{
		PanelDecMin_SetVisible( b );
	}

	function showDirection( b )
	{
		//(String)ChoiceDirection.getSelectedItem();
		var value = uiGetSelectedText( "ChoiceDirection" );
		
		setVisibility( "ChoiceDirection", b );
		setVisibility( "LabelDirection", b );
		
//		if( b && value.equals(g_properties.getProperty("headings.nearestdegree."+language)) ){
		if( b && value == g_properties.getPropertyLang("headings.nearestdegree." ) )
		{
//			if( b && value.equals("nearest degree") ){
			setVisibility( "TextFieldHeading", true );
		} else {
			setVisibility( "TextFieldHeading", false );
		}
	}

	function showDirectionPrecision( b )
	{
		setVisibility( "ChoiceDirection", b );
		setVisibility( "LabelDirection", b );
		setVisibility( "TextFieldHeading", false );
	}

	function showDistancePrecision( b )
	{
		setVisibility( "ChoiceDistancePrecision", b );
		setVisibility( "LabelDistancePrecision", b );
	}

	function showDistanceUnits( b )
	{
		setVisibility( "ChoiceDistUnits", b );
		setVisibility( "LabelDistUnits", b );
	}

	function showDistanceConverter( b )
	{
		setVisibility( "ChoiceFromDistUnits", b );
		setVisibility( "ChoiceToDistUnits", b );

		//		LabelFromDistUnits", b );
//		LabelToDistUnits", b );

		setVisibility( "LabelEquals", b );
		setVisibility( "LabelDistanceConverter", b );
		setVisibility( "TextFieldFromDistance", b );
		setVisibility( "TextFieldToDistance", b );
	}

	function showScaleConverter( b )
	{
		setVisibility( "ChoiceScaleFromDistUnits", b );
		setVisibility( "ChoiceScaleToDistUnits", b );
		setVisibility( "ChoiceScale", b );
		setVisibility( "LabelScaleEquals", b );
		setVisibility( "LabelScaleConverter", b );
		setVisibility( "TextFieldScaleFromDistance", b );
		setVisibility( "TextFieldScaleToDistance", b );
	}

	function showDMS( b )
	{
		PanelDDMMSS_SetVisible( b );
	}

	function showEWOffset( b )
	{
		setVisibility( "TextFieldOffsetEW", b );
		uiSetLabel( "LabelOffsetEW", "label.distew" );
		setVisibility( "LabelOffsetEW", b );
		setVisibility( "ChoiceOffsetEWDir", b );
	}

	function showExtents( b )
	{
		setVisibility( "LabelExtent", b );
		setVisibility( "TextFieldExtent", b );
	}

	function showMeasurementError( b )
	{
		setVisibility( "LabelMeasurementError", b );
		setVisibility( "TextFieldMeasurementError", b );
	}

	function showErrors( b )
	{
		setVisibility( "LabelCalcMaxError", b );
		setVisibility( "TextFieldCalcErrorDist", b );
		setVisibility( "TextFieldCalcErrorUnits", b );
		setVisibility( "TextFieldFullResult", b );
	}

	function showNSOffset( b )
	{
		setVisibility( "TextFieldOffset", b );

//		***LabelOffset.setText(g_properties.getProperty("."+language));
		uiSetLabel( "LabelOffset", "label.distns" );

		setVisibility( "LabelOffset", b );
		setVisibility( "ChoiceOffsetNSDir", b );
	}

	function showOffset( b )
	{
		setVisibility( "TextFieldOffsetEW", b );
//		***LabelOffsetEW.setText(g_properties.getProperty("label.offset."+language));
		uiSetLabel( "LabelOffsetEW", "label.offset" );
		setVisibility( "LabelOffsetEW", b );
	}

	
	function showRelevantCoordinates( )
	{

		//NOTE: we cant just grab index from the SELECT,
		//g_canonical* properties have an *exact* order, whereas
		//SELECT and g_properties ordering are not guaranteed
		var value = uiGetSelectedText( "ChoiceCoordSystem");  
		var index = g_canonicalcoordsystems.indexOf( value );

		if ( index==0 ){
//			if ( value.equals("decimal degrees") ){
			showDMS( false );
			showDegreesDecimalMinutes( false );
			showDecimalDegrees( true );
		} else if ( index==1 ){
//			} else if ( value.equals("degrees minutes seconds") ){
			showDecimalDegrees( false );
			showDegreesDecimalMinutes( false );
			showDMS( true );
		} else if ( index==2 ){
//			} else if ( value.equals("degrees decimal minutes") ){
			showDecimalDegrees( false );
			showDMS( false );
			showDegreesDecimalMinutes( true );
		}
		showCoordinates( true );
	}

	function showResults( b )
	{
		PanelResults_SetVisible( b );
	}




/*
	private boolean testHeadingLimits() throws ParseException{
		boolean testpasses = true;
		String s = null;
		double d = 0;
		Number num = null;

		s = TextFieldHeading.getText();
		if( s == null || s.length() == 0 ){
			TextFieldHeading.setText("0");
		} else { // test input within limits and valid
			try{
				num = numberFormatter.parse(s.trim());
				d = num.doubleValue();
				if( d < 0 || d >= 360 ){
					testpasses = false;
					errorDialog(g_properties.getProperty("error.heading.message."+language), 						g_properties.getProperty("error.heading.title."+language), 0);
//					errorDialog("The heading must be a value between 0 (North) and 360.", "Heading Input Error", 0);
					TextFieldHeading.setText("0");
				}
			}catch(NumberFormatException e){
				testpasses = false;
				errorDialog(g_properties.getProperty("error.heading.message."+language), g_properties.getProperty("error.heading.title."+language), 0);
//				errorDialog("The heading must be a value between 0 (North) and 360.", "Heading Input Error", 0);
				TextFieldHeading.setText("0");
			}
		}
		return testpasses;
	}

	private boolean testLatLongLimits() throws ParseException{
		boolean testpasses = true;
		double d = 0;
		int i = 0;
		String s = null;
		Number num = null;
		if( txtT2Dec_Lat.isVisible() ){
			s = txtT2Dec_Lat.getText();
			if( s == null || s.length() == 0 ){
				txtT2Dec_Lat.setText("0");
			} else { // test input within limits and valid
				try{
					num = numberFormatter.parse(s.trim());
					d = num.doubleValue();
					if( d < -90.0 ){
						testpasses = false;
						errorDialog(g_properties.getProperty("error.lat.message."+language), 							g_properties.getProperty("error.lat.title."+language), 0);
//						errorDialog("The latitude must be a between -90 (South Pole) and 90 (North Pole).", "Coordinate Input Error", 0);
						decimallatitude = -90;
						txtT2Dec_Lat.setText("-90");
					} else if( d > 90 ){
						testpasses = false;
						errorDialog(g_properties.getProperty("error.lat.message."+language), 							g_properties.getProperty("error.lat.title."+language), 0);
//						errorDialog("The latitude must be a between -90 (South Pole) and 90 (North Pole).", "Coordinate Input Error", 0);
						decimallatitude = 90;
						txtT2Dec_Lat.setText("90");
					}
				} catch(NumberFormatException e){
					testpasses = false;
					errorDialog(g_properties.getProperty("error.lat.message."+language), g_properties.getProperty("error.lat.title."+language), 0);
//					errorDialog("The latitude must be a between -90 (South Pole) and 90 (North Pole).", "Coordinate Input Error", 0);
					decimallatitude = 0;
					txtT2Dec_Lat.setText("0");
				}
			}
		}

		if( txtT2Dec_Long.isVisible() ){
			s = txtT2Dec_Long.getText();
			if( s == null || s.length() == 0 ){
				txtT2Dec_Long.setText("0");
			} else { // test input within limits and valid
				try{
					num = numberFormatter.parse(s.trim());
					d = num.doubleValue();
					if( d < -180 ){
						testpasses = false;
						errorDialog(g_properties.getProperty("error.lon.message."+language), 							g_properties.getProperty("error.lon.title."+language), 0);
//						errorDialog("The longitude must be a between -180 and 180.", "Coordinate Input Error", 0);
						decimallongitude = -180;
						txtT2Dec_Long.setText("-180");
					} else if( d > 180 ){
						decimallongitude = 180;
						errorDialog(g_properties.getProperty("error.lon.message."+language), 							g_properties.getProperty("error.lon.title."+language), 0);
//						errorDialog("The longitude must be a between -180 and 180.", "Coordinate Input Error", 0);
						txtT2Dec_Long.setText("180");
					}
				} catch(NumberFormatException e){
					testpasses = false;
					decimallongitude = 0;
					errorDialog(g_properties.getProperty("error.lon.message."+language), g_properties.getProperty("error.lon.title."+language), 0);
//					errorDialog("The longitude must be a between -180 and 180.", "Coordinate Input Error", 0);
					txtT2Dec_Long.setText("0");
				}
			}
		}

		if( txtT7Lat_DegDMS.isVisible() ){
			s = txtT7Lat_DegDMS.getText();
			if( s == null || s.length() == 0 ){
				txtT7Lat_DegDMS.setText("0");
			} else { // test input within limits and valid
				try{
					num = numberFormatter.parse(s.trim());
					i = num.intValue();
					if( i < 0 ){
						testpasses = false;
						errorDialog(g_properties.getProperty("error.lat.message."+language), 							g_properties.getProperty("error.lat.title."+language), 0);
//						errorDialog("The latitude must be a between 0 and 90.", "Coordinate Input Error", 0);
						txtT7Lat_DegDMS.setText("0");
					} else if( i > 90 ){
						testpasses = false;
						errorDialog(g_properties.getProperty("error.lat.message."+language), 							g_properties.getProperty("error.lat.title."+language), 0);
//						errorDialog("The latitude must be a between 0 and 90.", "Coordinate Input Error", 0);
						decimallatitude = 90;
						txtT7Lat_DegDMS.setText("90");
						txtT7Lat_MinDMS.setText("0");
						txtT7Lat_Sec.setText("0");
					}
				} catch(NumberFormatException e){
					testpasses = false;
					errorDialog(g_properties.getProperty("error.lat.message."+language), g_properties.getProperty("error.lat.title."+language), 0);
//					errorDialog("The latitude must be a between 0 and 90.", "Coordinate Input Error", 0);
					txtT7Lat_DegDMS.setText("0");
				}
			}
		}

		if( txtT7Long_DegDMS.isVisible() ){
			s = txtT7Long_DegDMS.getText();
			if( s == null || s.length() == 0 ){
				txtT7Long_DegDMS.setText("0");
			} else { // test input within limits and valid
				try{
					num = numberFormatter.parse(s.trim());
					i = num.intValue();
					if( i < 0 ){
						testpasses = false;
						errorDialog(g_properties.getProperty("error.lon.message."+language), 							g_properties.getProperty("error.lon.title."+language), 0);
//						errorDialog("The longitude must be a between 0 and 180.", "Coordinate Input Error", 0);
						txtT7Long_DegDMS.setText("0");
					} else if( i > 180 ){
						testpasses = false;
						errorDialog(g_properties.getProperty("error.lon.message."+language), 							g_properties.getProperty("error.lon.title."+language), 0);
//						errorDialog("The longitude must be a between 0 and 180.", "Coordinate Input Error", 0);
						txtT7Long_DegDMS.setText("180");
						txtT7Long_MinDMS.setText("0");
						txtT7Long_Sec.setText("0");
					}
				} catch(NumberFormatException e){
					testpasses = false;
					errorDialog(g_properties.getProperty("error.lon.message."+language), g_properties.getProperty("error.lon.title."+language), 0);
//					errorDialog("The longitude must be a between 0 and 180.", "Coordinate Input Error", 0);
					txtT7Long_DegDMS.setText("0");
				}
			}
		}

		if( txtT7Lat_DegMM.isVisible() ){
			s = txtT7Lat_DegMM.getText();
			if( s == null || s.length() == 0 ){
				txtT7Lat_DegMM.setText("0");
			} else { // test input within limits and valid
				try{
					num = numberFormatter.parse(s.trim());
					i = num.intValue();
					if( i < 0 ){
						testpasses = false;
						errorDialog(g_properties.getProperty("error.lat.message."+language), 							g_properties.getProperty("error.lat.title."+language), 0);
//						errorDialog("The latitude must be a between 0 and 90.", "Coordinate Input Error", 0);
						txtT7Lat_DegMM.setText("0");
					} else if( i > 90 ){
						testpasses = false;
						errorDialog(g_properties.getProperty("error.lat.message."+language), 							g_properties.getProperty("error.lat.title."+language), 0);
//						errorDialog("The latitude must be a between 0 and 90.", "Coordinate Input Error", 0);
						txtT7Lat_DegMM.setText("90");
						txtT7Lat_MinMM.setText("0");
					}
				} catch(NumberFormatException e){
					testpasses = false;
					errorDialog(g_properties.getProperty("error.lat.message."+language), g_properties.getProperty("error.lat.title."+language), 0);
//					errorDialog("The latitude must be a between 0 and 90.", "Coordinate Input Error", 0);
					txtT7Lat_DegMM.setText("0");
				}
			}
		}

		if( txtT7Long_DegMM.isVisible() ){
			s = txtT7Long_DegMM.getText();
			if( s == null || s.length() == 0 ){
				txtT7Long_DegMM.setText("0");
			} else { // test input within limits and valid
				try{
					num = numberFormatter.parse(s.trim());
					i = num.intValue();
					if( i < 0 ){
						testpasses = false;
						errorDialog(g_properties.getProperty("error.lon.message."+language), 							g_properties.getProperty("error.lon.title."+language), 0);
//						errorDialog("The longitude must be a between 0 and 180.", "Coordinate Input Error", 0);
						txtT7Long_DegMM.setText("0");
					} else if( i > 180 ){
						testpasses = false;
						errorDialog(g_properties.getProperty("error.lon.message."+language), 							g_properties.getProperty("error.lon.title."+language), 0);
//						errorDialog("The longitude must be a between 0 and 180.", "Coordinate Input Error", 0);
						txtT7Long_DegMM.setText("180");
						txtT7Long_MinMM.setText("0");
					}
				} catch(NumberFormatException e){
					testpasses = false;
					errorDialog(g_properties.getProperty("error.lon.message."+language), g_properties.getProperty("error.lon.title."+language), 0);
//					errorDialog("The longitude must be a between 0 and 180.", "Coordinate Input Error", 0);
					txtT7Long_DegMM.setText("0");
				}
			}
		}

		if( txtT7Lat_MinDMS.isVisible() ){
			s = txtT7Lat_MinDMS.getText();
			if( s == null || s.length() == 0 ){
				txtT7Lat_MinDMS.setText("0");
			} else { // test input within limits and valid
				try{
					num = numberFormatter.parse(s.trim());
					i = num.intValue();
					if( i < 0 || i >= 60 ){
						testpasses = false;
						errorDialog(g_properties.getProperty("error.min.message."+language), 							g_properties.getProperty("error.min.title."+language), 0);
//						errorDialog("The minutes must be a between 0 and 60.", "Coordinate Input Error", 0);
						txtT7Lat_MinDMS.setText("0");
						txtT7Lat_Sec.setText("0");
					}
				} catch(NumberFormatException e){
					testpasses = false;
					errorDialog(g_properties.getProperty("error.lon.message."+language), g_properties.getProperty("error.lon.title."+language), 0);
//					errorDialog("The longitude must be a between 0 and 180.", "Coordinate Input Error", 0);
					txtT7Long_DegMM.setText("0");
				}
			}
		}

		if( txtT7Long_MinDMS.isVisible() ){
			s = txtT7Long_MinDMS.getText();
			if( s == null || s.length() == 0 ){
				txtT7Long_MinDMS.setText("0");
			} else { // test input within limits and valid
				try{
					num = numberFormatter.parse(s.trim());
					i = num.intValue();
					if( i < 0 || i >= 60 ){
						testpasses = false;
						errorDialog(g_properties.getProperty("error.min.message."+language), 							g_properties.getProperty("error.min.title."+language), 0);
//						errorDialog("The minutes must be a between 0 and 60.", "Coordinate Input Error", 0);
						txtT7Long_MinDMS.setText("0");
						txtT7Long_Sec.setText("0");
					}
				} catch(NumberFormatException e){
					testpasses = false;
					errorDialog(g_properties.getProperty("error.min.message."+language), g_properties.getProperty("error.min.title."+language), 0);
//					errorDialog("The minutes must be a between 0 and 60.", "Coordinate Input Error", 0);
					txtT7Long_MinDMS.setText("0");
					txtT7Long_Sec.setText("0");
				}
			}
		}

		if( txtT7Lat_MinMM.isVisible() ){
			s = txtT7Lat_MinMM.getText();
			if( s == null || s.length() == 0 ){
				txtT7Lat_MinMM.setText("0");
			} else { // test input within limits and valid
				try{
					num = numberFormatter.parse(s.trim());
					d = num.doubleValue();
					if( d < 0 || d >= 60 ){
						testpasses = false;
						errorDialog(g_properties.getProperty("error.min.message."+language), 							g_properties.getProperty("error.min.title."+language), 0);
//						errorDialog("The minutes must be a between 0 and 60.", "Coordinate Input Error", 0);
						txtT7Lat_MinMM.setText("0");
					}
				} catch(NumberFormatException e){
					testpasses = false;
					errorDialog(g_properties.getProperty("error.min.message."+language), g_properties.getProperty("error.min.title."+language), 0);
//					errorDialog("The minutes must be a between 0 and 60.", "Coordinate Input Error", 0);
					txtT7Lat_MinMM.setText("0");
				}
			}
		}

		if( txtT7Long_MinMM.isVisible() ){
			s = txtT7Long_MinMM.getText();
			if( s == null || s.length() == 0 ){
				txtT7Long_MinMM.setText("0");
			} else { // test input within limits and valid
				try{
					num = numberFormatter.parse(s.trim());
					d = num.doubleValue();
					if( d < 0 || d >= 60 ){
						testpasses = false;
						errorDialog(g_properties.getProperty("error.min.message."+language), 							g_properties.getProperty("error.min.title."+language), 0);
//						errorDialog("The minutes must be a between 0 and 60.", "Coordinate Input Error", 0);
						txtT7Long_MinMM.setText("0");
					}
				} catch(NumberFormatException e){
					testpasses = false;
					errorDialog(g_properties.getProperty("error.min.message."+language), g_properties.getProperty("error.min.title."+language), 0);
//					errorDialog("The minutes must be a between 0 and 60.", "Coordinate Input Error", 0);
					txtT7Long_MinMM.setText("0");
				}
			}
		}

		if( txtT7Lat_Sec.isVisible() ){
			s = txtT7Lat_Sec.getText();
			if( s == null || s.length() == 0 ){
				txtT7Lat_Sec.setText("0");
			} else { // test input within limits and valid
				try{
					num = numberFormatter.parse(s.trim());
					d = num.doubleValue();
					if( d < 0 || d >= 60 ){
						testpasses = false;
						errorDialog(g_properties.getProperty("error.sec.message."+language), 							g_properties.getProperty("error.sec.title."+language), 0);
//						errorDialog("The seconds must be a between 0 and 60.", "Coordinate Input Error", 0);
						txtT7Lat_Sec.setText("0");
					}
				} catch(NumberFormatException e){
					testpasses = false;
					errorDialog(g_properties.getProperty("error.sec.message."+language), g_properties.getProperty("error.sec.title."+language), 0);
//					errorDialog("The seconds must be a between 0 and 60.", "Coordinate Input Error", 0);
					txtT7Lat_Sec.setText("0");
				}
			}
		}

		if( txtT7Long_Sec.isVisible() ){
			s = txtT7Long_Sec.getText();
			if( s == null || s.length() == 0 ){
				txtT7Long_Sec.setText("0");
			} else { // test input within limits and valid
				try{
					num = numberFormatter.parse(s.trim());
					d = num.doubleValue();
					if( d < 0 || d >= 60 ){
						testpasses = false;
						errorDialog(g_properties.getProperty("error.sec.message."+language), 							g_properties.getProperty("error.sec.title."+language), 0);
//						errorDialog("The seconds must be a between 0 and 60.", "Coordinate Input Error", 0);
						txtT7Long_Sec.setText("0");
					}
				} catch(NumberFormatException e){
					testpasses = false;
					errorDialog(g_properties.getProperty("error.sec.message."+language), g_properties.getProperty("error.sec.title."+language), 0);
//					errorDialog("The seconds must be a between 0 and 60.", "Coordinate Input Error", 0);
					txtT7Long_Sec.setText("0");
				}
			}
		}
		return testpasses;
	}

	private boolean testOffsetLimits() throws ParseException{
		boolean testpasses = true;
		String s = null;
		double d = 0;
		Number num = null;

		s = TextFieldOffset.getText();
		if( s == null || s.length() == 0 ){
			TextFieldOffset.setText("0");
		} else {
			try{
				num = numberFormatter.parse(s.trim());
				d = num.doubleValue();
				if( d < 0 ){
					testpasses = false;
					errorDialog(g_properties.getProperty("error.offset.message."+language), 						g_properties.getProperty("error.offset.title."+language), 0);
//					errorDialog("The offset must be a non-negative value.", "Offset Input Error", 0);
					TextFieldOffset.setText("0");
				}
			} catch(NumberFormatException e){
				testpasses = false;
				errorDialog(g_properties.getProperty("error.offset.message."+language), g_properties.getProperty("error.offset.title."+language), 0);
//				errorDialog("The offset must be a non-negative value.", "Offset Input Error", 0);
				TextFieldOffset.setText("0");
			}
		}

		s = TextFieldOffsetEW.getText();
		if( s == null || s.length() == 0 ){
			TextFieldOffsetEW.setText("0");
		} else {
			try{
				num = numberFormatter.parse(s.trim());
				d = num.doubleValue();
				if( d < 0 ){
					testpasses = false;
					errorDialog(g_properties.getProperty("error.offset.message."+language), 												g_properties.getProperty("error.offset.title."+language), 0);
//					errorDialog("The offset must be a non-negative value.", "Offset Input Error", 0);
					TextFieldOffsetEW.setText("0");
				}
			} catch(NumberFormatException e){
				testpasses = false;
				errorDialog(g_properties.getProperty("error.offset.message."+language), g_properties.getProperty("error.offset.title."+language), 0);
//				errorDialog("The offset must be a non-negative value.", "Offset Input Error", 0);
				TextFieldOffsetEW.setText("0");
			}
		}

		s = TextFieldExtent.getText();
		if( s == null || s.length() == 0 ){
			TextFieldExtent.setText("0");
		} else { // test input within limits and valid
			try{
				num = numberFormatter.parse(s.trim());
				d = num.doubleValue();
				if( d < 0 ){
					testpasses = false;
					errorDialog(g_properties.getProperty("error.extent.message."+language), 												g_properties.getProperty("error.extent.title."+language), 0);
//					errorDialog("The extent must be a non-negative value.", "Extent Input Error", 0);
					TextFieldExtent.setText("0");
				}
			} catch(NumberFormatException e){
				testpasses = false;
				errorDialog(g_properties.getProperty("error.extent.message."+language), g_properties.getProperty("error.offset.extent."+language), 0);
//				errorDialog("The extent must be a non-negative value.", "Extent Input Error", 0);
				TextFieldExtent.setText("0");
			}
		}

		s = TextFieldMeasurementError.getText();
		if( s == null || s.length() == 0 ){
			TextFieldMeasurementError.setText("0");
		} else { // test input within limits and valid
			try{
				num = numberFormatter.parse(s.trim());
				d = num.doubleValue();
				if( d < 0 ){
					testpasses = false;
					errorDialog(g_properties.getProperty("error.measurementerror.message."+language), 												g_properties.getProperty("error.measurementerror.title."+language), 0);
//					errorDialog("The measurement error must be a non-negative value.", "Measurement Input Error", 0);
					TextFieldMeasurementError.setText("0");
				}
			} catch(NumberFormatException e){
				testpasses = false;
				errorDialog(g_properties.getProperty("error.measurementerror.message."+language), 					g_properties.getProperty("error.measurement.title."+language), 0);
//				errorDialog("The measurement error must be a non-negative value.", "Measurement Input Error", 0);
				TextFieldMeasurementError.setText("0");
			}
		}
		return testpasses;
	}

	private boolean testParameterLimits() throws ParseException{
		boolean testspass = testLatLongLimits();
		testspass &= testHeadingLimits();
		testspass &= testOffsetLimits();
		return testspass;
	}

	private void testResultCoordinates() {
		if( newdecimallatitude > 90.0 ) newdecimallatitude = 90.0;
		if( newdecimallatitude < -90.0 ) newdecimallatitude = -90.0;
		if( newdecimallatitude == 90.0 || newdecimallatitude == -90.0 ){
			newdecimallongitude = decimallongitude;
		} else {
			while( newdecimallongitude > 180.0 ){
				newdecimallatitude -= 360.0;
			}
			while( newdecimallongitude < -180.0 ){
				newdecimallongitude += 360.0;
			}
		}
	}
*/

/*
	void TextFieldFromDistance_focusGained(){
		convertDistance();
	}

	void TextFieldToDistance_focusGained(){
		convertDistance();
	}

	void TextFieldScaleFromDistance_focusGained(){
		convertScale();
	}
	void TextFieldScaleToDistance_focusGained(){
		convertScale();
	}

	void TextFieldExtent_focusGained(){
		clearResults();
	}

	void TextFieldMeasurementError_focusGained(){
		clearResults();
	}

	void TextFieldHeading_focusGained(){
		clearResults();
	}

	void TextFieldOffset_focusGained(){
		clearResults();
	}

	void TextFieldOffsetEW_focusGained(){
		clearResults();
	}
*/

/*
	private void translateCoords() throws ParseException{
		double ddeclat = 0;
		double ddeclong = 0;
		Number num = null;
		String s = null;

		if( lastcoordsystem == 1 ){ // was decimal degrees
			s = txtT2Dec_Lat.getText();
			if( s == null || s.length() == 0 ){
				ddeclat = 0;
			} else {
				num = numberFormatter.parse(s.trim());
				ddeclat = num.doubleValue();
			}
			decimallatitude = ddeclat;
			getDMSFromDecDegrees( decimallatitude );

			txtT7Lat_DegDMS.setText( formatDeg.format(degrees) );
			txtT7Lat_DegMM.setText( formatDeg.format(degrees) );
			txtT7Lat_MinDMS.setText( formatMin.format(minutes) );
			txtT7Lat_Sec.setText( formatSec.format(seconds) );
			if( decimallatitude >= 0 ) {
				ChoiceLatDirDMS.select(g_properties.getProperty("headings.n."+language));
				ChoiceLatDirMM.select(g_properties.getProperty("headings.n."+language));
//				ChoiceLatDirDMS.select("N");
//				ChoiceLatDirMM.select("N");
			} else {
				ChoiceLatDirDMS.select(g_properties.getProperty("headings.s."+language));
				ChoiceLatDirMM.select(g_properties.getProperty("headings.s."+language));
//				ChoiceLatDirDMS.select("S");
//				ChoiceLatDirMM.select("S");
			}

			double dmins = getDecimalMinutesFromMS( minutes, seconds );
			txtT7Lat_MinMM.setText( formatMinMM.format(dmins) );

			s = txtT2Dec_Long.getText();
			if( s == null || s.length() == 0 ){
				ddeclong = 0;
			} else {
				num = numberFormatter.parse(s.trim());
				ddeclong = num.doubleValue();
			}

			decimallongitude = ddeclong;
			getDMSFromDecDegrees( decimallongitude );
			txtT7Long_DegDMS.setText( formatDeg.format(degrees) );
			txtT7Long_DegMM.setText( formatDeg.format(degrees) );
			txtT7Long_MinDMS.setText( formatMin.format(minutes) );
			txtT7Long_Sec.setText( formatSec.format(seconds) );
			if( decimallongitude >= 0 ) {
				ChoiceLongDirDMS.select(g_properties.getProperty("headings.e."+language));
				ChoiceLongDirMM.select(g_properties.getProperty("headings.e."+language));
//				ChoiceLongDirDMS.select("E");
//				ChoiceLongDirMM.select("E");
			} else {
				ChoiceLongDirDMS.select(g_properties.getProperty("headings.w."+language));
				ChoiceLongDirMM.select(g_properties.getProperty("headings.w."+language));
//				ChoiceLongDirDMS.select("W");
//				ChoiceLongDirMM.select("W");
			}

			dmins = getDecimalMinutesFromMS( minutes, seconds );
			txtT7Long_MinMM.setText( formatMinMM.format(dmins) );
		} else if( lastcoordsystem == 2 ){ // was degrees minutes seconds
			num = numberFormatter.parse(txtT7Lat_DegDMS.getText());
			degrees = num.intValue();
			num = numberFormatter.parse(txtT7Lat_MinDMS.getText());
			minutes = num.intValue();

//			degrees = Integer.parseInt( txtT7Lat_DegDMS.getText() );
//			minutes = Integer.parseInt( txtT7Lat_MinDMS.getText() );

			double d = 0;
			s = txtT7Lat_Sec.getText();
			if( s == null || s.length() == 0 ){
				d = 0;
			} else {
				num = numberFormatter.parse(s.trim());
				d = num.doubleValue();
			}
			seconds = d;

			decimallatitude = Math.abs( getDecimalDegreesFromDMS(degrees, minutes, seconds) );

			String SLatDirDMS = (String)ChoiceLatDirDMS.getSelectedItem();
			if( SLatDirDMS.equals(g_properties.getProperty("headings.s."+language)) ){
				decimallatitude *= -1.0;
			}
			txtT2Dec_Lat.setText( formatDec.format(decimallatitude) );

			txtT7Lat_DegMM.setText( formatDeg.format(degrees) );
			decminutes = getDecimalMinutesFromMS( minutes, seconds );
			txtT7Lat_MinMM.setText( formatMinMM.format(decminutes) );

			num = numberFormatter.parse(txtT7Long_DegDMS.getText());
			degrees = num.intValue();
			num = numberFormatter.parse(txtT7Long_MinDMS.getText());
			minutes = num.intValue();

//			degrees = Integer.parseInt( txtT7Long_DegDMS.getText() );
//			minutes = Integer.parseInt( txtT7Long_MinDMS.getText() );
			s = txtT7Long_Sec.getText();
			if( s == null || s.length() == 0 ){
				d = 0;
			} else {
				num = numberFormatter.parse(s.trim());
				d = num.doubleValue();
			}
			seconds = d;

			decimallongitude = Math.abs( getDecimalDegreesFromDMS(degrees, minutes, seconds) );
			String SLongDirDMS = (String)ChoiceLongDirDMS.getSelectedItem();
			if( SLongDirDMS.equals(g_properties.getProperty("headings.w."+language)) ){
				decimallongitude *= -1;
			}
			txtT2Dec_Long.setText( formatDec.format(decimallongitude) );

			txtT7Long_DegMM.setText( formatDeg.format(degrees) );
			decminutes = getDecimalMinutesFromMS( minutes, seconds );
			txtT7Long_MinMM.setText( formatMinMM.format(decminutes) );
		} else if( lastcoordsystem == 3 ){ // was degrees decimal minutes
			num = numberFormatter.parse(txtT7Lat_DegMM.getText());
			degrees = num.intValue();

//			degrees = Integer.parseInt( txtT7Lat_DegMM.getText() );
			double m = 0;
			s = txtT7Lat_MinMM.getText();
			if( s == null || s.length() == 0 ){
				m = 0;
			} else {
				num = numberFormatter.parse(s.trim());
				m = num.doubleValue();
			}
			decminutes = m;

			decimallatitude = Math.abs( getDecimalDegreesFromDegreesDecimalMinutes(degrees, decminutes) );
			String SLatDirMM = (String)ChoiceLatDirMM.getSelectedItem();
			if( SLatDirMM.equals(g_properties.getProperty("headings.s."+language)) ){
				decimallatitude *= -1;
			}
			txtT2Dec_Lat.setText( formatDec.format(decimallatitude) );

			getMSFromDecMinutes(decminutes);
			txtT7Lat_DegDMS.setText( formatDeg.format(degrees) );
			txtT7Lat_MinDMS.setText( formatMin.format(minutes) );
			txtT7Lat_Sec.setText( formatSec.format(seconds) );
			ChoiceLatDirDMS.select( ChoiceLatDirMM.getSelectedItem() );

			num = numberFormatter.parse(txtT7Long_DegMM.getText());
			degrees = num.intValue();

//			degrees = Integer.parseInt( txtT7Long_DegMM.getText() );
			s = txtT7Long_MinMM.getText();
			if( s == null || s.length() == 0 ){
				m = 0;
			} else {
				num = numberFormatter.parse(s.trim());
				m = num.doubleValue();
			}
			decminutes = m;

			decimallongitude = Math.abs( getDecimalDegreesFromDegreesDecimalMinutes(degrees, decminutes) );
			String SLongDirMM = (String)ChoiceLongDirMM.getSelectedItem();
			if( SLongDirMM.equals(g_properties.getProperty("headings.w."+language)) ){
				decimallongitude *= -1;
			}
			txtT2Dec_Long.setText( formatDec.format(decimallongitude) );

			getMSFromDecMinutes(decminutes);
			txtT7Long_DegDMS.setText( formatDeg.format(degrees) );
			txtT7Long_MinDMS.setText( formatMin.format(minutes) );
			txtT7Long_Sec.setText( formatSec.format(seconds) );
			ChoiceLongDirDMS.select( ChoiceLongDirMM.getSelectedItem() );
		}
		String SCoordSystem = (String)ChoiceCoordSystem.getSelectedItem();
		int index = g_canonicalcoordsystems.indexOf(SCoordSystem);

		lastcoordsystem = index+1;
	}

	void txtT2Dec_Lat_focusGained(){
		clearResults();
	}

	void txtT2Dec_Long_focusGained(){
		clearResults();
	}

	void txtT7Lat_DegDMS_focusGained(){
		clearResults();
	}

	void txtT7Lat_DegMM_focusGained(){
		clearResults();
	}

	void txtT7Lat_MinDMS_focusGained(){
		clearResults();
	}

	void txtT7Lat_MinMM_focusGained(){
		clearResults();
	}

	void txtT7Lat_Sec_focusGained(){
		clearResults();
	}

	void txtT7Long_DegDMS_focusGained(){
		clearResults();
	}

	void txtT7Long_DegMM_focusGained(){
		clearResults();
	}

	void txtT7Long_MinDMS_focusGained(){
		clearResults();
	}

	void txtT7Long_MinMM_focusGained(){
		clearResults();
	}

	void txtT7Long_Sec_focusGained(){
		clearResults();
	}

	public void itemStateChanged(ItemEvent e){
		ActionEvent ae = new ActionEvent(e.getSource(),e.getID(),null);
		actionPerformed(ae);
	}

	public void errorDialog(String error, String title, int style){
		Frame f=null;
		Container c=getParent();
		while(c!=null){
			if(c instanceof Frame){
				f=(Frame)c;
				break;
			}else c=c.getParent();
		}
		MinMaxDialog d=new MinMaxDialog(f, error, title, style);
		d.setVisible(true);
	}

	public static void main(String[] args) throws Exception {
		GC gc = new GC();
		Locale currentLocale = Locale.getDefault();
		currentLocale = Locale.FRENCH;

		String testString = new String("1:1000");
		String s0 = testString.substring(2, testString.length());

		NumberFormat numberFormatter = NumberFormat.getNumberInstance(currentLocale); 
		double d;
		boolean testpasses;
		String s = new String("1,234");
		try{
			Number num = numberFormatter.parse(s.trim());
			d = num.doubleValue();
			if( d < -90.0 ){
				testpasses = false;
			} else if( d > 90 ){
				testpasses = false;
			}
		} catch(NumberFormatException e){
			testpasses = false;
		}
	}
	// Control Declarations
	Panel pane = null;
	Choice ChoiceLanguage = null;
	Choice ChoiceOffsetEWDir = null;
	Button ButtonCalculate = null;
	Button ButtonPromote = null;
	Choice ChoiceOffsetNSDir = null;
	Label LabelVersion = null;
	Label LabelCopyright = null;
	Choice ChoiceCalcType = null;
	Label LabelCalcType = null;
	Label LabelOffset = null;
	TextField TextFieldOffsetEW = null;
	TextField TextFieldHeading = null;
	Label LabelTitle = null;
	Label LabelStepTwo = null;
	Label LabelOffsetEW = null;
	TextField TextFieldOffset = null;
	Label LabelCoordSource = null;
	Choice ChoiceCoordSource = null;
	Label LabelStepOne = null;
	Label LabelDirection = null;
	Label LabelDistancePrecision = null;
	Choice ChoiceDistancePrecision = null;
	Choice ChoiceDirection = null;
	TextField TextFieldExtent = null;
	Label LabelExtent = null;
	TextField TextFieldMeasurementError = null;
	Label LabelMeasurementError = null;

	Panel PanelResults = null;
	TextField TextFieldFullResult = null;
	TextField TextFieldCalcDecLat = null;
	Label LabelCalcDecLat = null;
	TextField TextFieldCalcDecLong = null;
	Label LabelCalcDecLong = null;
	Label LabelCalcMaxError = null;
	TextField TextFieldCalcErrorDist = null;
	TextField TextFieldCalcErrorUnits = null;
	Choice ChoiceModel = null;
	Label LabelModel = null;

	Panel PanelCoords = null;
	Label LabelDatum = null;
	Choice ChoiceDatum = null;
	Label lblT2Dec_Lat = null;
	Label lblT2Dec_Long = null;

	Panel PanelDecLatLong = null;
	TextField txtT2Dec_Lat = null;
	TextField txtT2Dec_Long = null;

	Panel PanelDecMin = null;
	Choice ChoiceLatDirMM = null;
	Choice ChoiceLongDirMM = null;
	Label Label2111111 = null;
	Label Label22111 = null;
	Label Label21212 = null;
	Label Label231 = null;
	TextField txtT7Lat_DegMM = null;
	TextField txtT7Lat_MinMM = null;
	TextField txtT7Long_DegMM = null;
	TextField txtT7Long_MinMM = null;

	Panel PanelDDMMSS = null;
	Choice ChoiceLongDirDMS = null;
	Choice ChoiceLatDirDMS = null;
	Label Label211111 = null;
	Label Label2211 = null;
	Label Label21121 = null;
	Label Label222 = null;
	Label Label2123 = null;
	Label Label23 = null;
	TextField txtT7Lat_DegDMS = null;
	TextField txtT7Lat_MinDMS = null;
	TextField txtT7Lat_Sec = null;
	TextField txtT7Long_DegDMS = null;
	TextField txtT7Long_MinDMS = null;
	TextField txtT7Long_Sec = null;

	Panel PanelCoordPrecision = null;
	Choice ChoiceLatPrecision = null;
	Label LabelLatPrecision = null;
	Label LabelDistUnits = null;
	Choice ChoiceDistUnits = null;

	Label LabelEquals = null;
	Label LabelDistanceConverter = null;
	Choice ChoiceFromDistUnits = null;
	Choice ChoiceToDistUnits = null;
	TextField TextFieldFromDistance = null;
	TextField TextFieldToDistance = null;
	
	Label LabelScaleEquals = null;
	Label LabelScaleConverter = null;
	Choice ChoiceScale = null;
	Choice ChoiceScaleFromDistUnits = null;
	Choice ChoiceScaleToDistUnits = null;
	TextField TextFieldScaleFromDistance = null;
	TextField TextFieldScaleToDistance = null;
	
	Label LabelCoordSystem = null;
	Choice ChoiceCoordSystem = null;
	Label LabelStepZero = null;

	DecimalFormat formatDec = null;
	DecimalFormat formatDeg = null; 
	DecimalFormat formatMin = null;
	DecimalFormat formatMinMM = null;
	DecimalFormat formatSec = null;
	DecimalFormat formatCalcError = null;
	DecimalFormat formatDistance = null;
	DecimalFormat formatCalcDec = null;

	/*
 	DecimalFormat formatDec = new DecimalFormat("0.0000000"); 
	DecimalFormat formatDeg = new DecimalFormat("##0"); 
	DecimalFormat formatMin = new DecimalFormat("#0");
	DecimalFormat formatMinMM = new DecimalFormat("#0.000000");
	DecimalFormat formatSec = new DecimalFormat("#0.00");
	DecimalFormat formatCalcError = new DecimalFormat("##0.000");
	DecimalFormat formatCalcDec = new DecimalFormat("##0.00000");
	 */

//	Declarations for instance variables used in the form


	/*public void setDecimalFormat(){
		if(ChoiceLanguage.getSelectedIndex()==0) currentLocale = Locale.getDefault();
		else if(ChoiceLanguage.getSelectedItem().equalsIgnoreCase("english")){
			currentLocale = Locale.US;
		} else {
			currentLocale=Locale.FRENCH;
		}
		numberFormatter = NumberFormat.getNumberInstance(currentLocale); 

		formatDec = (DecimalFormat)NumberFormat.getNumberInstance(currentLocale);
		formatDeg = (DecimalFormat)NumberFormat.getNumberInstance(currentLocale);
		formatMin = (DecimalFormat)NumberFormat.getNumberInstance(currentLocale);
		formatMinMM = (DecimalFormat)NumberFormat.getNumberInstance(currentLocale);
		formatSec = (DecimalFormat)NumberFormat.getNumberInstance(currentLocale);
		formatCalcError = (DecimalFormat)NumberFormat.getNumberInstance(currentLocale);
		formatDistance = (DecimalFormat)NumberFormat.getNumberInstance(currentLocale);
		formatCalcDec = (DecimalFormat)NumberFormat.getNumberInstance(currentLocale);
		if ( formatDec instanceof DecimalFormat) {
			((DecimalFormat) formatDec).setDecimalSeparatorAlwaysShown(false);
			((DecimalFormat) formatDec).setGroupingUsed(false);
			((DecimalFormat) formatDec).setMaximumFractionDigits(7);
		}
		if ( formatDeg instanceof DecimalFormat) {
			((DecimalFormat) formatDeg).setDecimalSeparatorAlwaysShown(false);
			((DecimalFormat) formatDeg).setGroupingUsed(false);
			((DecimalFormat) formatDeg).setMaximumFractionDigits(0);
		}
		if ( formatMin instanceof DecimalFormat) {
			((DecimalFormat) formatMin).setDecimalSeparatorAlwaysShown(false);
			((DecimalFormat) formatMin).setGroupingUsed(false);
			((DecimalFormat) formatMin).setMaximumFractionDigits(0);
		}
		if ( formatMinMM instanceof DecimalFormat) {
			((DecimalFormat) formatMinMM).setDecimalSeparatorAlwaysShown(false);
			((DecimalFormat) formatMinMM).setGroupingUsed(false);
			((DecimalFormat) formatMinMM).setMaximumFractionDigits(6);
		}
		if ( formatSec instanceof DecimalFormat) {
			((DecimalFormat) formatSec).setDecimalSeparatorAlwaysShown(false);
			((DecimalFormat) formatSec).setGroupingUsed(false);
			((DecimalFormat) formatSec).setMaximumFractionDigits(2);
		}
		if ( formatCalcError instanceof DecimalFormat) {
			((DecimalFormat) formatCalcError).setDecimalSeparatorAlwaysShown(false);
			((DecimalFormat) formatCalcError).setGroupingUsed(false);
			((DecimalFormat) formatCalcError).setMaximumFractionDigits(3);
		}
		if ( formatDistance instanceof DecimalFormat) {
			((DecimalFormat) formatDistance).setDecimalSeparatorAlwaysShown(false);
			((DecimalFormat) formatDistance).setGroupingUsed(false);
			((DecimalFormat) formatDistance).setMaximumFractionDigits(5);
		}
		if ( formatCalcDec instanceof DecimalFormat) {
			((DecimalFormat) formatCalcDec).setDecimalSeparatorAlwaysShown(false);
			((DecimalFormat) formatCalcDec).setGroupingUsed(false);
			((DecimalFormat) formatCalcDec).setMaximumFractionDigits(7);
		}
	}
	*/
	/*
	public void actionPerformed(ActionEvent e) {
		if(e.getSource() == ChoiceLanguage ){
			try {
				ChoiceLanguage_itemStateChanged(ChoiceLanguage.getSelectedIndex());				
			} catch (ParseException e2){
				e2.printStackTrace();
			}
		}
		if (e.getSource() == ButtonCalculate) {
			try {
				ButtonCalculate_afterActionPerformed();
			} catch (ParseException e1) {
				e1.printStackTrace();
			}
		}
		if (e.getSource() == ButtonPromote) {
			try {
				ButtonPromote_afterActionPerformed();
			} catch (ParseException e1) {
				e1.printStackTrace();
			}
		}
		if (e.getSource() == ChoiceCoordSystem) {
			try {
				ChoiceCoordSystem_itemStateChanged((String)ChoiceCoordSystem.getSelectedItem());
			} catch (ParseException e1) {
				e1.printStackTrace();
			}
		}
		if (e.getSource() == ChoiceModel) {
			ChoiceModel_itemStateChanged((String)ChoiceModel.getSelectedItem());
		}
		if (e.getSource() == ChoiceDistUnits) {
			ChoiceDistUnits_itemStateChanged((String)ChoiceDistUnits.getSelectedItem());
		}
		if (e.getSource() == ChoiceFromDistUnits) {
			ChoiceFromDistUnits_itemStateChanged((String)ChoiceFromDistUnits.getSelectedItem());
		}
		if (e.getSource() == ChoiceToDistUnits) {
			ChoiceToDistUnits_itemStateChanged((String)ChoiceToDistUnits.getSelectedItem());
		}
		if (e.getSource() == ChoiceScaleFromDistUnits) {
			ChoiceScaleFromDistUnits_itemStateChanged((String)ChoiceScaleFromDistUnits.getSelectedItem());
		}
		if (e.getSource() == ChoiceScaleToDistUnits) {
			ChoiceScaleToDistUnits_itemStateChanged((String)ChoiceScaleToDistUnits.getSelectedItem());
		}
		if (e.getSource() == ChoiceScale) {
			ChoiceScale_itemStateChanged((String)ChoiceScale.getSelectedItem());
		}
		if (e.getSource() == ChoiceLatDirDMS) {
			ChoiceLatDirDMS_itemStateChanged((String)ChoiceLatDirDMS.getSelectedItem());
		}
		if (e.getSource() == ChoiceLatDirMM) {
			ChoiceLatDirMM_itemStateChanged((String)ChoiceLatDirMM.getSelectedItem());
		}
		if (e.getSource()== ChoiceLongDirMM) {
			ChoiceLongDirMM_itemStateChanged((String)ChoiceLongDirMM.getSelectedItem());
		}
		if (e.getSource()== ChoiceLongDirDMS) {
			ChoiceLongDirDMS_itemStateChanged((String)ChoiceLongDirDMS.getSelectedItem());
		}
		if (e.getSource()== ChoiceCalcType) {
			ChoiceCalcType_itemStateChanged((String)ChoiceCalcType.getSelectedItem());
		}
		if (e.getSource()== ChoiceDirection) {
			ChoiceDirection_itemStateChanged((String)ChoiceDirection.getSelectedItem());
		}
		if (e.getSource()== ChoiceCoordSource) {
			ChoiceCoordSource_itemStateChanged((String)ChoiceCoordSource.getSelectedItem());
		}
		if (e.getSource()== ChoiceDatum) {
			ChoiceDatum_itemStateChanged((String)ChoiceDatum.getSelectedItem());
		}
		if (e.getSource()== ChoiceLatPrecision) {
			ChoiceLatPrecision_itemStateChanged((String)ChoiceLatPrecision.getSelectedItem());
		}
		if (e.getSource()== ChoiceOffsetNSDir) {
			ChoiceOffsetNSDir_itemStateChanged((String)ChoiceOffsetNSDir.getSelectedItem());
		}
		if (e.getSource()== ChoiceOffsetEWDir) {
			ChoiceOffsetEWDir_itemStateChanged((String)ChoiceOffsetEWDir.getSelectedItem());
		}
		if (e.getSource()== ChoiceDistancePrecision) {
			ChoiceDistancePrecision_itemStateChanged((String)ChoiceDistancePrecision.getSelectedItem());
		}
	}
	public void addListeners() {
		ChoiceLanguage.addItemListener(this);
		ButtonCalculate.addActionListener(this);
		ButtonPromote.addActionListener(this);
		ChoiceCalcType.addItemListener(this);
		ChoiceCoordSystem.addItemListener(this);
		ChoiceModel.addItemListener(this);
		ChoiceDistUnits.addItemListener(this);
		ChoiceFromDistUnits.addItemListener(this);
		ChoiceToDistUnits.addItemListener(this);
		ChoiceScaleFromDistUnits.addItemListener(this);
		ChoiceScaleToDistUnits.addItemListener(this);
		ChoiceScale.addItemListener(this);
		ChoiceLatDirDMS.addItemListener(this);
		ChoiceLatDirMM.addItemListener(this);
		ChoiceLongDirMM.addItemListener(this);
		ChoiceLongDirDMS.addItemListener(this);
		ChoiceDirection.addItemListener(this);
		ChoiceCoordSource.addItemListener(this);
		ChoiceDatum.addItemListener(this);
		ChoiceLatPrecision.addItemListener(this);
		ChoiceOffsetNSDir.addItemListener(this);
		ChoiceOffsetEWDir.addItemListener(this);
		ChoiceDistancePrecision.addItemListener(this);

		TextFieldFromDistance.addFocusListener(this);
		TextFieldToDistance.addFocusListener(this);
		TextFieldScaleFromDistance.addFocusListener(this);
		TextFieldScaleToDistance.addFocusListener(this);
		TextFieldExtent.addFocusListener(this);
		TextFieldMeasurementError.addFocusListener(this);
		txtT2Dec_Lat.addFocusListener(this);
		txtT2Dec_Long.addFocusListener(this);
		txtT7Lat_DegDMS.addFocusListener(this);
		txtT7Lat_DegMM.addFocusListener(this);
		txtT7Lat_MinDMS.addFocusListener(this);
		txtT7Lat_MinMM.addFocusListener(this);
		txtT7Lat_Sec.addFocusListener(this);
		txtT7Long_DegDMS.addFocusListener(this);
		txtT7Long_DegMM.addFocusListener(this);
		txtT7Long_MinDMS.addFocusListener(this);
		txtT7Long_MinMM.addFocusListener(this);
		txtT7Long_Sec.addFocusListener(this);
		TextFieldOffset.addFocusListener(this);
		TextFieldOffsetEW.addFocusListener(this);
		TextFieldHeading.addFocusListener(this);

		addKeyListener(this);
		ChoiceLanguage.addKeyListener(this);
		ChoiceCalcType.addKeyListener(this);
		ChoiceCoordSystem.addKeyListener(this);
		ChoiceModel.addKeyListener(this);
		ChoiceDistUnits.addKeyListener(this);
		ChoiceFromDistUnits.addKeyListener(this);
		ChoiceToDistUnits.addKeyListener(this);
		ChoiceScaleFromDistUnits.addKeyListener(this);
		ChoiceScaleToDistUnits.addKeyListener(this);
		ChoiceScale.addKeyListener(this);
		ChoiceLatDirDMS.addKeyListener(this);
		ChoiceLatDirMM.addKeyListener(this);
		ChoiceLongDirMM.addKeyListener(this);
		ChoiceLongDirDMS.addKeyListener(this);
		ChoiceDirection.addKeyListener(this);
		ChoiceCoordSource.addKeyListener(this);
		ChoiceDatum.addKeyListener(this);
		ChoiceLatPrecision.addKeyListener(this);
		ChoiceOffsetNSDir.addKeyListener(this);
		ChoiceOffsetEWDir.addKeyListener(this);
		ChoiceDistancePrecision.addKeyListener(this);
		TextFieldFromDistance.addKeyListener(this);
		TextFieldToDistance.addKeyListener(this);
		TextFieldScaleFromDistance.addKeyListener(this);
		TextFieldScaleToDistance.addKeyListener(this);
		TextFieldExtent.addKeyListener(this);
		TextFieldMeasurementError.addKeyListener(this);
		txtT2Dec_Lat.addKeyListener(this);
		txtT2Dec_Long.addKeyListener(this);
		txtT7Lat_DegDMS.addKeyListener(this);
		txtT7Lat_DegMM.addKeyListener(this);
		txtT7Lat_MinDMS.addKeyListener(this);
		txtT7Lat_MinMM.addKeyListener(this);
		txtT7Lat_Sec.addKeyListener(this);
		txtT7Long_DegDMS.addKeyListener(this);
		txtT7Long_DegMM.addKeyListener(this);
		txtT7Long_MinDMS.addKeyListener(this);
		txtT7Long_MinMM.addKeyListener(this);
		txtT7Long_Sec.addKeyListener(this);
		TextFieldOffset.addKeyListener(this);
		TextFieldOffsetEW.addKeyListener(this);
		TextFieldHeading.addKeyListener(this);
	}

	public void afterFormInitialize() {
		// Write code here for initializing your own control
		// or creating a new control.
		setDecimalFormat();
		populateStableControls();
		populateCoordinatePrecision(g_properties.getProperty("coordsys.dd."+language));
//		populateCoordinatePrecision("decimal degrees");
	}

	void ButtonCalculate_afterActionPerformed() throws ParseException{
		clearResults();
		calculateResults();
		showResults(true);
	}

	void ButtonPromote_afterActionPerformed() throws ParseException{
//		newdecimallatitude = decimallatitude;
//		newdecimallongitude = decimallongitude;
		lastcoordsystem = 1;
//		TextFieldCalcDecLat.setText(formatCalcDec.format(newdecimallatitude));
//		TextFieldCalcDecLong.setText(formatCalcDec.format(newdecimallongitude));

		txtT2Dec_Lat.setText(formatCalcDec.format(newdecimallatitude));
		txtT2Dec_Long.setText(formatCalcDec.format(newdecimallongitude));
		try {
			ChoiceCoordSystem_itemStateChanged((String)ChoiceCoordSystem.getSelectedItem());
		} catch (ParseException e1) {
			e1.printStackTrace();
		}
	}
*/

/*
	//BUGBUG this function no longer needed, properties are now a .js file, auto loaded and constructed as object arrays.
	protected void initProps(String propsfile, Properties props) {
		InputStream inputStream;
		try {
			// Load the properties file
			ClassLoader loader = this.getClass().getClassLoader();
			inputStream = loader.getResourceAsStream(propsfile);
			props.load(inputStream);
		} catch (FileNotFoundException e1) {
			e1.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
*/
//}