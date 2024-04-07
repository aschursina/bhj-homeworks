let arrTabs = Array.from(document.querySelectorAll(".tabs"));

arrTabs.forEach((tabs) => {
  const arrItems = Array.from(tabs.querySelectorAll(".tab"));
  const arrContent = Array.from(tabs.querySelectorAll(".tab__content"));
  
  arrItems.forEach((tabItem, tabIndex) => {
    tabItem.addEventListener("click", event => {
      for (let i = 0; i < arrItems.length; i++) {
        if (i === tabIndex) {
          arrItems[i].classList.add("tab_active");
          arrContent[i].classList.add("tab__content_active");
        } else {
          arrItems[i].classList.remove("tab_active");
          arrContent[i].classList.remove("tab__content_active");
        }
      };
    });
  })
});