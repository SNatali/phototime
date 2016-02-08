$("#owl-pagination").owlCarousel({
 
    // Most important owl features
    items : 2,
    itemsCustom : false,
    itemsDesktop : [768,4],
    itemsDesktopSmall : [580,3],
    itemsTablet: [568,2],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : true,
 
    //Basic Speeds
    slideSpeed : 900,
    paginationSpeed : 1900,
    rewindSpeed : 3000,
 
    //Autoplay
    autoPlay : false,
    stopOnHover : false,
 
    // Navigation
    navigation : true,
    navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    rewindNav : false,
    scrollPerPage : false,
 
    //Pagination
    pagination : false,
    paginationNumbers: false,
 
    // Responsive 
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
 
    // CSS Styles
    baseClass : "owl-carousel",
    theme : "owl-theme",
 
    //Lazy load
    lazyLoad : false,
    lazyFollow : true,
    lazyEffect : "fade",
 
    //Auto height
    autoHeight : false,
 
    //JSON 
    jsonPath : false, 
    jsonSuccess : false,
 
    //Mouse Events
    dragBeforeAnimFinish : true,
    mouseDrag : true,
    touchDrag : true,
 
    //Transitions
    transitionStyle : false,
 
    // Other
    addClassActive : false,
 
    //Callbacks
    beforeUpdate : false,
    afterUpdate : false,
    beforeInit: false, 
    afterInit: false, 
    beforeMove: false, 
    afterMove: false,
    afterAction: false,
    startDragging : false,
    afterLazyLoad : false
 
})