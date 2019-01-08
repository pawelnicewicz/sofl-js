let anchorlinks = document.querySelectorAll('a[href^="#"]');
for (let item of anchorlinks) {
  let hrefArray = item.href.split("/");
  let itemToFix = hrefArray[hrefArray.length-1];
  hrefArray.pop();
  let fixedItem = itemToFix.split("#")[1];
  let fixedHref = hrefArray.join("/");
  fixedHref += "#" + fixedItem;
  item.href = fixedHref;
}