if (typeof Worker !== "undefined") {
  let i = 0;
  while (i <= 1000000000) {
    i++;
  }
  postMessage("Worker calculation finished!");
} else {
  alert("Your browser doen't support web workers.");
}
