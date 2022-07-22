var elFeatItems = document.querySelectorAll(".features__item");
var elFeatLinks = document.querySelectorAll(".features__a");
var elPanelItems = document.querySelectorAll(".wrap");


elFeatLinks.forEach(function(link){


    link.addEventListener("click" , function(evt){
        evt.preventDefault();

        elFeatItems.forEach(function(item){
            item.classList.remove("features__item--active");
        })

        link.parentElement.classList.add("features__item--active");

        elPanelItems.forEach(function(panel){
            panel.classList.remove("wrap--active");
        })

        document.querySelector(link.getAttribute("href")).classList.add("wrap--active");
    })
});