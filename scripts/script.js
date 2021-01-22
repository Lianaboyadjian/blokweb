/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

/*code geschreven met hulp van W3Schools en hulp van klasgenoot*/
/*variabelen zijn containers die gegevenswaarden opslaan*/
var mailInput = document.getElementById("email");
/* addEventListener hecht een click event aan het document.*/
mailInput.addEventListener("focus", mailFunction);
mailInput.addEventListener("blur", mailBlur);

/*getElementByID () retourneert het element met ID-kenmerk met de opgegeven waarde*/
var mailLabel = document.getElementById("email-label");

/* een function is een blok van code dat is ontworpen om een bepaalde taak uit te voeren. De functie wordt uitgevoerd waneer iets het aanroept.*/
function mailFunction() {
  mailLabel.classList.add("focus");
}

/* focus zorgt voor focus op een element. kan ongedaan gemaakt worden door blur()*/
function mailBlur() {
  mailLabel.classList.remove("focus");
}

