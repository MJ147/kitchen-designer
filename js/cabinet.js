/** cabinets **/

/* cabinets color */


function updateCabinets() {
   createCabinetWrappers();
   var baseCabinetsWrapper = $('#base-cabinets-wrapper');
   createCabinets(baseCabinetsWrapper);

   var upperCabinetsWrapper = $('#upper-cabinets-wrapper');
   createCabinets(upperCabinetsWrapper);
   
   allCabinets = $('.global-color, .global-color-shadow');
   
   var cabinetColorPicker = $('#cabinets-color-picker')[0];
   setColorFromPicker(cabinetColorPicker, allCabinets);
   pickerHandler(cabinetColorPicker, allCabinets);
   
   countertop = $('#countertop-wrapper');
   
   var countertopColorPicker = $('#countertop-color-picker')[0];
   setColorFromPicker(countertopColorPicker, countertop);
   pickerHandler(countertopColorPicker, countertop);
}

function createCabinetWrappers() {
   var backWall = $('#back-wall');
   backWall.empty();
   backWall.append('<div class="global-color" id="moulding-wrapper"></div>');
   backWall.append('<div id="main-cabinets-wrapper"></div>');
   backWall.append('<div class="global-color-shadow" id="plinth-wrapper"></div>');
  
   var mainCabinetsWrapper = $('#main-cabinets-wrapper');
   mainCabinetsWrapper.append('<div id="fridge-wrapper"></div>');
   mainCabinetsWrapper.append('<div id="cabinets-wrapper-1"></div>'); 
   
   var fridgeWrapper = $('#fridge-wrapper');
   fridgeWrapper.append('<div class="global-color" id="cabinet-over-fridge"></div>');
   fridgeWrapper.append('<div class="global-color" id="fridge"></div>');
   
   var cabinetsWrapper1 = $('#cabinets-wrapper-1');
   cabinetsWrapper1.append('<div id="upper-cabinets-wrapper"></div>');
   cabinetsWrapper1.append('<div id="backsplash-wrapper"></div>');
   cabinetsWrapper1.append('<div id="countertop-wrapper"></div>');
   cabinetsWrapper1.append('<div id="base-cabinets-wrapper"></div>');
}

function createCabinets(cabinetsWrapper) {
   cabinetsWrapper.empty();
   //create all 60cm width cabinets
   for(var i = 0; i < (cabinetsWrapper[0].offsetWidth/120) - 1 ; i++) {
      cabinetsWrapper.append('<div class="global-color cabinet"></div>');    
   }   
   //create last cabinet
   cabinetsWrapper.append('<div class="global-color last-cabinet"></div>');  
}