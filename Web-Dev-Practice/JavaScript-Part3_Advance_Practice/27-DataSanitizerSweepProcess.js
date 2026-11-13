function sanitizeLog(entry, disallowedCharacters) {
  let newStr = "";

  for (let i = 0; i < entry.length; i++) {
    let isDisallowed = false; 

    for (let j = 0; j < disallowedCharacters.length; j++) {
      if (entry[i] === disallowedCharacters[j]) {
        isDisallowed = true;
        break; 
      }
    }

    if (isDisallowed) {
      newStr += '#';
    } else {
      newStr += entry[i];
    }
  }

  return newStr;
}


console.log(sanitizeLog("DEBUG: Server started on port 3000",["e", "E", "o", "r"]))

function cleanLogs(logs , disallowedCharacters){
  let informationEntryCount =0;
  let totalEntryCount =0;
  let sanitizedEntryCount = 0;

  for(let i=0; i<logs.length; i++){

    totalEntryCount+=1;

    for(let j=0; j<logs[i].length; j++){
    if(logs[i][j]==='$'){
       return `Sanitizing stopped. Failure Reason: Fatal character occurred.`;
     }
    }
      if(logs[i][0]==='/'){
        informationEntryCount+=1;
      }
      else{
       sanitizedEntryCount+=1;
       sanitizeLog(logs[i], disallowedCharacters); 
       }
  }
    return `Total Entry Count: ${totalEntryCount}. Sanitized Entry Count: ${sanitizedEntryCount}. Informational Entry Count: ${informationEntryCount}. Finished sanitizing logs.`
  
}
let logs_1 = [
  "INFO: Server started on port 3000",
  "DEBUG: user=admin token=abc123 connected",
  "WARN: High memory usage detected at 87%"
];
let logs_2 = [
  "FATAL: System overload detected, shutting down",
  "DEBUG: token=def456$ refreshed for session",
  "ERROR: Null pointer exception in module auth"
];

let logs_3 = [
  "ERROR: Failed to connect to db, retry=3",
  "DEBUG: api_key=XYZ789 used in request",
  "/INFO: Cache cleared successfully",
  "WARN: Disk usage at 92%, threshold=90%",
  "/INFO: Disk usage stabilized"
];
// console.log(cleanLogs(logs_1, ["a", "A", "c", "T"]))
// console.log(cleanLogs(logs_2, ["a", "A", "c", "T"]))
console.log(cleanLogs(logs_3, ["a", "A", "c", "T"]))
