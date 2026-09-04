const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

const pantry = [
  {
    sku: "A10",
    name: "Tomatoes",
    qty: 10,
    expires: "2027-01-01",
    zone: "general"
  },
  {
    sku: "B21",
    name: "Bananas",
    qty: 5,
    expires: "2027-01-01",
    zone: "general"
  },
  {
    sku: "E54",
    name: "Peppers",
    qty: 3,
    expires: "2027-01-01",
    zone: "fridge"
  }
];

function parseShipment(rawData){
  let newarr = [];
  for(let i=0; i<rawData.length; i++){
    let obj = {
    sku: "",
    name: "",
    qty: "",
    expires: 0,
    zone: ""
   };
    let spl = rawData[i].split("|"); 
    let isDuplicate = false;
      obj.sku = spl[0];
      obj.name = spl[1];
      obj.qty = Number(spl[2]);
      obj.expires = spl[3];
      obj.zone = spl[4]||"general";
      for(let j=0; j<newarr.length; j++){
      if(spl[0] === newarr[j]["sku"]){
        isDuplicate = true;
      }
      }
      if(isDuplicate === false){
          newarr.push(obj); 
      }
      
        
  }
  return(newarr);
}
//console.log(parseShipment(rawData));

function planRestock(pantry, shipment){
  let newarr = [];
  for(let i=0; i<shipment.length; i++){
    
    if(shipment[i].qty <= 0){
      let obj = {
        type: "discard",
        item: shipment[i]
      }
      newarr.push(obj);
    }
    else{
      let inPantry = false;
      for(let j=0; j<pantry.length; j++){
      if(shipment[i].sku == pantry[j].sku ){
        inPantry = true;
        break;
    }
      }
    if(inPantry == true){
      let obj = {
        type: "restock",
        item: shipment[i]
      }
      newarr.push(obj);
    }
    else{
      let obj = {
        type: "donate",
        item: shipment[i]
      }
      newarr.push(obj);
    }
    } 
  }
  return (newarr);
  }
function groupByZone(actions){
   
  let obj = {}
  for(let i=0; i<actions.length; i++){
    let isAction = false;
    let zone = (actions[i]['item']['zone'])
    if (!(zone in obj)) {
      obj[zone] = [];
    }

    obj[zone].push(actions[i]);
  }
  return(obj);
    
  }
  
function clonePantry(pantry){
 let clonedPantry = JSON.parse(JSON.stringify(pantry));
 return clonedPantry
}


let shipment = parseShipment(rawData);
let actions = planRestock(pantry, shipment);
let grouped = groupByZone(actions);

console.log(grouped);