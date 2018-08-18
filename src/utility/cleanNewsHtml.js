const cleanNewsHtml = (type) => {
    let js = "";
    switch(type){
        case "ilry":
            js = 'function hideHead(){document.getElementById("section-header").style.display="none"; document.getElementById("section-footer").style.display="none"; document.getElementById("breadcrumb").style.display="none"; document.getElementById("block-views-node-related-blocks-block-5").style.display="none";};hideHead();'
            break;
        case "ytn":
            //const js = ''
            break;
        case "insinoori":
            js = 'function hideHead(){document.getElementById("header-group-inner").style.display="none"; document.getElementById("main-menu-wrapper").style.display="none";document.getElementById("footer-wrapper").style.display="none";document.getElementByClassName("views-row views-row-2 views-row-even").style.display="none"; document.getElementByClassName("views-row views-row-1 views-row-odd views-row-first").style.display="none";document.getElementByClassName("views-row views-row-3 views-row-odd views-row-last").style.display="none";document.getElementByClassName("panel-panel panel-col-last").style.display="none";document.getElementByClassName("pane-title block-title").style.display="none";document.select("div.addthis_toolbox.addthis_default_style").style.display="none";};hideHead();'
            break;
        case "akava":
            js = 'function hideHead(){document.getElementsByClassName("pwd-mobile-nav-bar").style.display="none"; document.getElementsByClassName("top-bar").style.display="none";document.getElementsByClassName("col-sm-12").style.display="none";document.getElementsByClassName("site-header container").style.display="none";document.select("h1").first().text("");document.getElementsByClassName("newstitle").style.display="none";document.getElementsByClassName("newsdate").style.display="none";document.getElementsByClassName("newsreadmore newsitemreadmore").style.display="none";document.getElementsByClassName("col-sm-4 side-bar").style.display="none";document.getElementsByClassName("addthis_sharing_toolbox").style.display="none";document.getElementsByClassName("site-footer").style.display="none";document.getElementsByClassName("disclaimer-bar").style.display="none";};hideHead();'
            break;
        default:
            break;
    }
    
    return js;
}

export default cleanNewsHtml;