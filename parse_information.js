/**
  JSON Information Storing Links to your Social Network; Use with Font-Awesome Fonts (https://fontawesome.com/icons/) and ensure that you specify the Style as well (FAB, FAS, etc.).
**/

var json = {
  "socials": [
    {social_link:"https://www.linkedin.com/in/sam-herring-024876168/", social_icon:"fab fa-linkedin", social_title:"LinkedIn"},
    {social_link:"tel:+61754594714", social_icon:"fas fa-phone", social_title:"Phone"},
    {social_link:"sip:sherring@usc.edu.au", social_icon:"fas fa-comments", social_title:"Instant Message"}
  ],
  "knowledge":[
    {"knowledge_name":"IT Service Management", knowledge_accred: ["ServiceNow Developer"]},
    {"knowledge_name":"Application Administration", knowledge_accred: []},
    {"knowledge_name":"Business Systems Analysis", knowledge_accred: []}
  ]
};


/**
  User Information! Populate this with whatever information you require. 
**/
var name = "Sam Herring";
var jobTitle = "Business Systems Analyst";
var organization = "University of the Sunshine Coast";
var organizationURL = "https://usc.edu.au";
var locationString = "Sunshine Coast, Australia";
var locationURL = "https://goo.gl/maps/hK1Uyasi2kD2";

var nameTitle = name + " - Hosted by Glitch";

var backgroundGradient = "linear-gradient(45deg, rgba(32,124,202,1) 7%,rgba(32,124,202,1) 7%,rgba(255,184,28,1) 90%)";

/**
  Populate the information provided above
**/

//Name
document.getElementById('name').innerHTML = name;

//Title Information
document.getElementById('name_title').innerHTML = nameTitle;

//Job Title
document.getElementById('job_title').innerHTML = jobTitle;

//Organization Information
document.getElementById('organization_information').innerHTML = organization;

//Organization URL
if(organizationURL != ""){
  document.getElementById('organization_information').href = organizationURL;
  document.getElementById('organization_information').setAttribute('style', 'color:black');
}

//Location
document.getElementById('location').innerHTML = locationString;

//Location URL
if(locationURL != ""){
  document.getElementById('location').href = locationURL;
}
  
/**
  Iterate through the JSON file and populate the page with the appropriate Knowledge Elements.
**/
for(var i in json.knowledge){

  /** Create the Knowledge Headers **/
  var htmlDOMElement = document.createElement("div");
  var knowledge_name = json.knowledge[i].knowledge_name; 
 
  var HREFDOMElement = document.createElement('a');
  
  htmlDOMElement.setAttribute('id', knowledge_name)
  
  HREFDOMElement.innerHTML = (knowledge_name);
  // HREFDOMElement.setAttribute('id', 'myBtn');
  HREFDOMElement.setAttribute('href', '#');
  HREFDOMElement.setAttribute('style', 'color:black');
  
  document.getElementById('knowledge').appendChild(htmlDOMElement);
  document.getElementById(knowledge_name).appendChild(HREFDOMElement);
}
  

/**
  Iterate through the json file and populate the page with the appropriate Social Elements.
**/

for(var i in json.socials){
  
  var htmlDOMElement = document.createElement("a");
  var htmlInnerElement = document.createElement("i");
  
  var socialLink = (json.socials[i].social_link);
  var socialIcon = (json.socials[i].social_icon);
  var socialTitle = (json.socials[i].social_title);
  
  htmlDOMElement.href = socialLink;
  htmlDOMElement.setAttribute('class', "text-dark mx-2 mt-1");
  
  htmlInnerElement.setAttribute('class', socialIcon + " fa-2x");
  htmlInnerElement.setAttribute('data-toggle', 'tooltip');
  htmlInnerElement.setAttribute('data-placement', 'bottom');
  htmlInnerElement.setAttribute('title', socialTitle);
    
  htmlDOMElement.appendChild(htmlInnerElement);
  
  document.getElementById('socials').appendChild(htmlDOMElement);
    
}

// Get the modal
var modal = document.getElementById('KnowledgeModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}