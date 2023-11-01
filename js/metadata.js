/* This has all the dropdown menu activations that include 
metadata, & general-dropdown */

/* Metadata */
function FindOption(button){
    var buttonType = button.id; 

    /* Option: Project Tagline */
    if (buttonType == "projectTagline"){
    var buttonIconMinus = document.getElementById("tag-button-icon-minus");
    var buttonIconPlus = document.getElementById("tag-button-icon-plus");
    var description = document.getElementById("project-tag-description");

    switchIcons(buttonIconPlus, buttonIconMinus, description);
    }

    /*Option: Project Summary*/
    if (buttonType == "projectSummary"){
        var buttonIconMinus = document.getElementById("summary-button-icon-minus");
        var buttonIconPlus = document.getElementById("summary-button-icon-plus");
        var description = document.getElementById("summary-description");
    
        switchIcons(buttonIconPlus, buttonIconMinus, description);
    }

    /*Option: Client Name*/
    if (buttonType == "clientName"){
        var buttonIconMinus = document.getElementById("client-name-button-icon-minus");
        var buttonIconPlus = document.getElementById("client-name-button-icon-plus");
        var description = document.getElementById("client-name-description");
    
        switchIcons(buttonIconPlus, buttonIconMinus, description);
    }

     /*Option: Timeframe*/
     if (buttonType == "timeframe"){
        var buttonIconMinus = document.getElementById("timeframe-button-icon-minus");
        var buttonIconPlus = document.getElementById("timeframe-button-icon-plus");
        var description = document.getElementById("timeframe-description");
    
        switchIcons(buttonIconPlus, buttonIconMinus, description);
    }

    /* Option: Major Tasks & Responsibilities */
    if (buttonType == "majortandr"){
        var buttonIconMinus = document.getElementById("majortandr-button-icon-minus");
        var buttonIconPlus = document.getElementById("majortandr-button-icon-plus");
        var description = document.getElementById("majortandr-description");
    
        switchIcons(buttonIconPlus, buttonIconMinus, description);
    }
    
     /* Option: Platforms */
     if (buttonType == "platforms"){
        var buttonIconMinus = document.getElementById("platforms-button-icon-minus");
        var buttonIconPlus = document.getElementById("platforms-button-icon-plus");
        var description = document.getElementById("platforms-description");
    
        switchIcons(buttonIconPlus, buttonIconMinus, description);
    }

    /* Option: Design Tools / UX Methods Used */
    if (buttonType == "methods"){
        var buttonIconMinus = document.getElementById("methods-button-icon-minus");
        var buttonIconPlus = document.getElementById("methods-button-icon-plus");
        var description = document.getElementById("methods-description");
    
        switchIcons(buttonIconPlus, buttonIconMinus, description);
    }

    /* Option: Team Members & Collaborators */
    if (buttonType == "team"){
        var buttonIconMinus = document.getElementById("team-button-icon-minus");
        var buttonIconPlus = document.getElementById("team-button-icon-plus");
        var description = document.getElementById("team-description");
    
        switchIcons(buttonIconPlus, buttonIconMinus, description);
    }
}

function switchIcons(buttonIconPlus, buttonIconMinus, description){

    if(buttonIconMinus.style.display == "none"){
        buttonIconPlus.style.display = "none";
        $(buttonIconMinus).slideDown();
        $(description).slideDown();
    }
    else {
        $(buttonIconPlus).slideDown();
        buttonIconMinus.style.display = "none";
        $(description).slideUp();
    }
}

/*General Drop Down */
function FindGenOption(button){
    var buttonType = button.id; 

     /* General Option: Hard Drive */
     if (buttonType == "hardDrive"){
        var buttonIconMinus = document.getElementById("hard-drive-button-icon-minus");
        var buttonIconPlus = document.getElementById("hard-drive-button-icon-plus");
        var description = document.getElementById("hard-drive-description-1");
        var image = document.getElementById("hard-drive-img-1");
    
        switchIconsReverse(buttonIconPlus, buttonIconMinus, description, image);
    }

      /* General Option: Screen */
      if (buttonType == "screenOption"){
        var buttonIconMinus = document.getElementById("screen-button-icon-minus");
        var buttonIconPlus = document.getElementById("screen-button-icon-plus");
        var description1 = document.getElementById("screen-description-1");
        var description2 = document.getElementById("screen-description-2");
        var image1 = document.getElementById("screen-img-1");
        var image2 = document.getElementById("screen-img-2");
    
        switchIconsTwoDescriptionsReverse(buttonIconPlus, buttonIconMinus, description1, description2, image1, image2);
    }

    /* General Option: Motherboard*/
    if (buttonType == "motherboardOption"){
        var buttonIconMinus = document.getElementById("motherboard-button-icon-minus");
        var buttonIconPlus = document.getElementById("motherboard-button-icon-plus");
        var description = document.getElementById("motherboard-description-1");
        var image = document.getElementById("motherboard-img-1");
    
        switchIcons(buttonIconPlus, buttonIconMinus, description, image);
    }

}

function switchIconsTwoDescriptionsReverse(buttonIconPlus, buttonIconMinus, description1, description2, image1, image2){

    if(buttonIconPlus.style.display == "none"){
        buttonIconMinus.style.display = "none";
        $(buttonIconPlus).slideDown();
        $(description1).slideUp();
        $(description2).slideUp();
        $(image1).slideUp();
        $(image2).slideUp();
    }
    else {
        buttonIconPlus.style.display = "none";
        $(buttonIconMinus).slideDown();
        $(description1).slideDown();
        $(description2).slideDown();
        $(image1).slideDown();
        $(image2).slideDown();
    }
}

function switchIconsReverse (buttonIconPlus, buttonIconMinus, description, image){

    if(buttonIconPlus.style.display == "none"){
        buttonIconMinus.style.display = "none";
        $(buttonIconPlus).slideDown();
        $(description).slideUp();
        $(image).slideUp();
    }
    else {
        buttonIconPlus.style.display = "none";
        $(buttonIconMinus).slideDown();
        $(description).slideDown();
        $(image).slideDown();
    }
}
