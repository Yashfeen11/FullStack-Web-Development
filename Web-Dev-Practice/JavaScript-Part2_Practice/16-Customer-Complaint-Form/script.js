let nameInput = document.querySelector("#full-name");
let emailInput = document.querySelector("#email");
let orderInput = document.querySelector("#order-no");
let productCode = document.querySelector("#product-code");
let quantity = document.querySelector("#quantity");
let complaintGroup = document.querySelector("#complaints-group");
let complaintDesc = document.querySelector("#complaint-description");
let solution = document.querySelector("#solutions-group");
let solDesc = document.querySelector("#solution-description");
let otherComplaint = document.querySelector("#other-complaint");
let damageProd = document.querySelector("#damaged-product");
let nonconformingProd = document.querySelector("#nonconforming-product");
let delayDisp = document.querySelector("#delayed-dispatch");
let refundRadio = document.querySelector("#refund");
let exchangeRadio = document.querySelector("#exchange");
let otherRadio = document.querySelector("#other-solution");
let solDescrp = document.querySelector("#solution-description");
let submitButton = document.querySelector("#submit-btn");
let form = document.querySelector("#form");


function validateForm() {

  let formDetails = {
    "full-name": false,
    email: false,
    "order-no": false,
    "product-code": false,
    quantity: false,
    "complaints-group": false,
    "complaint-description": false,
    "solutions-group": false,
    "solution-description": false
  }

  let isNamePresent = false;
  let isEmailValid = false;
  let isOrderNoValid = false;
  let isProductCodeValid = false;
  let isQuantityInt = false;
  let isOtherComplaint = true;
  let isComplaintReasonCheck = false;
  let isRadioButtonClicked = false;
  let isOtherRadioButtonClick = true;

  let productRegex = /^[A-Z][A-Z][0-9]{2}-[A-Z][0-9]{3}-[A-Z][A-Z][0-9]{1}$/i;
  let orderRegex = /^2024[0-9]{6}$/;


  if (nameInput.value.trim()) {
    isNamePresent = true;
    formDetails["full-name"] = isNamePresent;
  }


  if (emailInput.checkValidity()) {
    isEmailValid = true;
    formDetails["email"] = isEmailValid;
  }


  if (orderInput.value.match(orderRegex)) {
    isOrderNoValid = true;
    formDetails["order-no"] = isOrderNoValid;
  }


  if (productCode.value.match(productRegex)) {
    isProductCodeValid = true;
    formDetails["product-code"] = isProductCodeValid;
  }


  if (
    quantity.value > 0 &&
    Number.isInteger(Number(quantity.value))
  ) {
    isQuantityInt = true;
    formDetails["quantity"] = isQuantityInt;
  }


  // Complaints group
  if (
    damageProd.checked ||
    nonconformingProd.checked ||
    delayDisp.checked ||
    otherComplaint.checked
  ) {
    isComplaintReasonCheck = true;
  }

  formDetails["complaints-group"] = isComplaintReasonCheck;


  // Complaint description
  if (
    otherComplaint.checked &&
    complaintDesc.value.length < 20
  ) {
    isOtherComplaint = false;
  }

  formDetails["complaint-description"] = isOtherComplaint;


  // Solutions group
  if (
    refundRadio.checked ||
    exchangeRadio.checked ||
    otherRadio.checked
  ) {
    isRadioButtonClicked = true;
  }

  formDetails["solutions-group"] = isRadioButtonClicked;


  // Solution description
  if (
    otherRadio.checked &&
    solDescrp.value.length < 20
  ) {
    isOtherRadioButtonClick = false;
  }

  formDetails["solution-description"] = isOtherRadioButtonClick;


  return formDetails;
}


function isValid(formDetails) {

  return Object.values(formDetails).every(value => {
    return value === true;
  });

}


form.addEventListener("change", (e) => {

  const formDetails = validateForm();

  let element = e.target;

  switch (element) {

    case nameInput:

      if (formDetails["full-name"]) {
        element.style.borderColor = "green";
      }
      else {
        element.style.borderColor = "red";
      }

      break;


    case emailInput:

      if (formDetails["email"]) {
        element.style.borderColor = "green";
      }
      else {
        element.style.borderColor = "red";
      }

      break;


    case orderInput:

      if (formDetails["order-no"]) {
        element.style.borderColor = "green";
      }
      else {
        element.style.borderColor = "red";
      }

      break;


    case productCode:

      if (formDetails["product-code"]) {
        element.style.borderColor = "green";
      }
      else {
        element.style.borderColor = "red";
      }

      break;


    case quantity:

      if (formDetails["quantity"]) {
        element.style.borderColor = "green";
      }
      else {
        element.style.borderColor = "red";
      }

      break;


    case damageProd:
    case nonconformingProd:
    case delayDisp:
    case otherComplaint:

      if (formDetails["complaints-group"]) {
        complaintGroup.style.borderColor = "green";
      }
      else {
        complaintGroup.style.borderColor = "red";
      }

      break;


    case complaintDesc:

      if (formDetails["complaint-description"]) {
        element.style.borderColor = "green";
      }
      else {
        element.style.borderColor = "red";
      }

      break;


    case refundRadio:
    case exchangeRadio:
    case otherRadio:

      if (formDetails["solutions-group"]) {
        solution.style.borderColor = "green";
      }
      else {
        solution.style.borderColor = "red";
      }

      break;


    case solDescrp:

      if (formDetails["solution-description"]) {
        element.style.borderColor = "green";
      }
      else {
        element.style.borderColor = "red";
      }

      break;

  }

});


form.addEventListener("submit", (e) => {

  e.preventDefault();

  const formDetails = validateForm();

  if (isValid(formDetails)) {
    console.log("Form is valid");
  }
  else {
    console.log("Form is invalid");
  }

});