let inventory = [];
function findProductIndex(productname){
  let search = productname.toLowerCase();
  for(let i=0; i<inventory.length; i++){
    if(inventory[i].name == search){
      return i;
    }
  }
  return -1;
}
function addProduct(probj){
  let isfound= false
 for( let i of inventory){
  if(i.name == (probj.name).toLowerCase()){
    i.quantity+=probj.quantity;
    console.log(`${(i.name).toLowerCase()} quantity updated`);
    isfound = true;
  }
 }
 if(isfound == false){
  let newobj = {
  name: probj.name.toLowerCase(),
  quantity: probj.quantity
};
  
  inventory.push(newobj);
    console.log(`${(probj.name).toLowerCase()} added to inventory`);
 }

}

function removeProduct(prname, prqty) {
  let found = false;

  for (let i = 0; i < inventory.length; i++) {

    if (prname.toLowerCase() === inventory[i].name) {
      found = true;

      let sub = inventory[i].quantity - prqty;

      if (sub > 0) {
        inventory[i].quantity = sub;
        console.log(`Remaining ${inventory[i].name} pieces: ${inventory[i].quantity}`);
      }

      else if (sub === 0) {
        inventory.splice(i, 1);
      }

      else {
        console.log(
          `Not enough ${inventory[i].name} available, remaining pieces: ${inventory[i].quantity}`
        );
      }
      break;
    }
  }

  if (found === false) {
    console.log(`${prname.toLowerCase()} not found`);
  }
}

addProduct({name: "FLOUR", quantity: 5})
removeProduct("FLOUR", 5) 