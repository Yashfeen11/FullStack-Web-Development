const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};


function checkoutDevice(ledger, assetTag, borrower){
 
  if(!ledger[assetTag]){
    return {
      ledger,
      message: `Device ${assetTag} was not found.`
    };
  }
  if(ledger[assetTag].status==="CheckedOut"){
    return{
      ledger, 
      message: `Device ${assetTag} already checked out.`
    };
  }
  const updatedLedger = loadLedger(serializeLedger(ledger));
  updatedLedger[assetTag].borrower.name = borrower.name;
  updatedLedger[assetTag].borrower.email = borrower.email;
  updatedLedger[assetTag].status = "CheckedOut";

  return {
    ledger: updatedLedger,
    message: `Device ${assetTag} checked out to ${borrower.name}.`
  };
}

function checkinDevice(ledger, assetTag){
  if(!ledger[assetTag]){
    return {
      ledger,
      message: `${assetTag} Not found.`
    }
  }
  const updatedLedger = loadLedger(serializeLedger(ledger));
  updatedLedger[assetTag].borrower.name = "";
  updatedLedger[assetTag].borrower.email = "";
  updatedLedger[assetTag].dueDate = "";
  updatedLedger[assetTag].status = "CheckedIn";

  return{
    ledger: updatedLedger,
    message: `Device ${assetTag} Checked In`
  }
}

function listOverdueDevices(ledger, today){
  let deviceArr= [];
  const [month, day, year]= today.split("/").map(Number);
  const todayValue = year*10000 + month*100 + day;

  for(let asset of Object.values(ledger)){
    let dueDate = asset.dueDate;
    const[dmonth, dday, dyear]= dueDate.split("/").map(Number);
    const dueDateValue= dyear*10000 + dmonth*100+dday;
    if(asset.status==="CheckedOut" && dueDateValue<todayValue ){
      deviceArr.push(asset);
    }
  }
  deviceArr.sort((a,b) =>{
    const [am, ad,ay]= a.dueDate.split("/").map(Number);
    const [bm, bd, by]= b.dueDate.split("/").map(Number);
    const aValue = ay * 10000 + am * 100 + ad;
    const bValue = by * 10000 + bm * 100 + bd;
    return aValue - bValue;
  });
  
  return deviceArr;
}
function serializeLedger(ledger){
  return JSON.stringify(ledger);
}
function loadLedger(json){
  return JSON.parse(json);
}
