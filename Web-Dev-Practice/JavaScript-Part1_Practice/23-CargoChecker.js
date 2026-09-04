function normalizeUnits(manifest) {
  let copy = { ...manifest };

  if (copy.unit === "lb") {
    copy.weight = copy.weight * 0.45;
    copy.unit = "kg";
  }

  return copy;
}

function validateManifest(manifest) {
  let errors = {};

  // containerId
  if (manifest.containerId === undefined) {
    errors.containerId = "Missing";
  } 
  else if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0) 
  {
    errors.containerId = "Invalid";
  }

  // destination
  if (manifest.destination === undefined) {
    errors.destination = "Missing";
  } 
  else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") 
  {
    errors.destination = "Invalid";
  }

  // weight
  if (manifest.weight === undefined) {
    errors.weight = "Missing";
  } 
  else if (
    Number.isNaN(manifest.weight) ||
    typeof manifest.weight !== "number" ||
    manifest.weight <= 0) {
    errors.weight = "Invalid";
  }

  // unit
  if (manifest.unit === undefined) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  // hazmat
  if (manifest.hazmat === undefined) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  let errors = validateManifest(manifest);

  if (Object.keys(errors).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);

    let normalized = normalizeUnits(manifest);

    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);

    console.log(errors);
  }
}
console.log()

