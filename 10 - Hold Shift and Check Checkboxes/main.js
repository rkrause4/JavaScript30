const checkboxes = document.querySelectorAll("input[type='checkbox']");

let lastChecked;

function handleCheck(e) {
  // check if they had the shift key down
  // and check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Starting to check them in-between");
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));

// If shift is keydown
//    get first click index on checkboxes
//    Then get the second index
//    Once both indexes have been chosen, loop through to select
//      If first index is larger then second index, swap them for looping.