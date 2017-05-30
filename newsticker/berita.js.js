<<<<<<< HEAD
/*! vTicker 1.21 http://richhollis.github.com/vticker/ | http://richhollis.github.com/vticker/license/ | based on Jubgits vTicker http://www.jugbit.com/jquery-vticker-vertical-news-ticker/ */
(function(d){var g,c,f;g={speed:700,pause:4E3,showItems:1,mousePause:!0,height:0,animate:!0,margin:0,padding:0,startPaused:!1,autoAppend:!0};c={moveUp:function(a,b){return c.showNextItem(a,b,"up")},moveDown:function(a,b){return c.showNextItem(a,b,"down")},nextItemState:function(a,b){var e,c;c=a.element.children("ul");e=a.itemHeight;0<a.options.height&&(e=c.children("li:first").height());e+=a.options.margin+2*a.options.padding;return{height:e,options:a.options,el:a.element,obj:c,selector:"up"===b?
"li:first":"li:last",dir:b}},showNextItem:function(a,b,e){var d;d=c.nextItemState(a,e);d.el.trigger("vticker.beforeTick");e=d.obj.children(d.selector).clone(!0);"down"===d.dir&&d.obj.css("top","-"+d.height+"px").prepend(e);b&&b.animate?a.animating||c.animateNextItem(d,a):c.nonAnimatedNextItem(d);"up"===d.dir&&a.options.autoAppend&&e.appendTo(d.obj);return d.el.trigger("vticker.afterTick")},animateNextItem:function(a,b){b.animating=!0;return a.obj.animate("up"===a.dir?{top:"-="+a.height+"px"}:{top:0},
b.options.speed,function(){d(a.obj).children(a.selector).remove();d(a.obj).css("top","0px");return b.animating=!1})},nonAnimatedNextItem:function(a){a.obj.children(a.selector).remove();return a.obj.css("top","0px")},nextUsePause:function(){var a,b;b=d(this).data("state");a=b.options;if(!b.isPaused&&!c.hasSingleItem(b))return f.next.call(this,{animate:a.animate})},startInterval:function(){var a,b;b=d(this).data("state");a=b.options;return b.intervalId=setInterval(function(a){return function(){return c.nextUsePause.call(a)}}(this),
a.pause)},stopInterval:function(){var a;if(a=d(this).data("state"))return a.intervalId&&clearInterval(a.intervalId),a.intervalId=void 0},restartInterval:function(){c.stopInterval.call(this);return c.startInterval.call(this)},getState:function(a,b){var c;if(!(c=d(b).data("state")))throw Error("vTicker: No state available from "+a);return c},isAnimatingOrSingleItem:function(a){return a.animating||this.hasSingleItem(a)},hasMultipleItems:function(a){return 1<a.itemCount},hasSingleItem:function(a){return!c.hasMultipleItems(a)},
bindMousePausing:function(a){return function(a,e){return a.bind("mouseenter",function(){if(!e.isPaused)return e.pausedByCode=!0,c.stopInterval.call(this),f.pause.call(this,!0)}).bind("mouseleave",function(){if(!e.isPaused||e.pausedByCode)return e.pausedByCode=!1,f.pause.call(this,!1),c.startInterval.call(this)})}}(this),setItemLayout:function(a,b,c){var f;a.css({overflow:"hidden",position:"relative"}).children("ul").css({position:"absolute",margin:0,padding:0}).children("li").css({margin:c.margin,
padding:c.padding});return isNaN(c.height)||0===c.height?(a.children("ul").children("li").each(function(){if(d(this).height()>b.itemHeight)return b.itemHeight=d(this).height()}),a.children("ul").children("li").each(function(){return d(this).height(b.itemHeight)}),f=c.margin+2*c.padding,a.height((b.itemHeight+f)*c.showItems+c.margin)):a.height(c.height)},defaultStateAttribs:function(a,b){return{itemCount:a.children("ul").children("li").length,itemHeight:0,itemMargin:0,element:a,animating:!1,options:b,
isPaused:b.startPaused,pausedByCode:!1}}};f={init:function(a){var b,e;d(this).data("state")&&f.stop.call(this);b=jQuery.extend({},g);a=d.extend(b,a);b=d(this);e=c.defaultStateAttribs(b,a);d(this).data("state",e);c.setItemLayout(b,e,a);a.startPaused||c.startInterval.call(this);if(a.mousePause)return c.bindMousePausing(b,e)},pause:function(a){var b;b=c.getState("pause",this);if(!c.hasMultipleItems(b))return!1;b.isPaused=a;b=b.element;if(a)return d(this).addClass("paused"),b.trigger("vticker.pause");
d(this).removeClass("paused");return b.trigger("vticker.resume")},next:function(a){var b;b=c.getState("next",this);if(c.isAnimatingOrSingleItem(b))return!1;c.restartInterval.call(this);return c.moveUp(b,a)},prev:function(a){var b;b=c.getState("prev",this);if(c.isAnimatingOrSingleItem(b))return!1;c.restartInterval.call(this);return c.moveDown(b,a)},stop:function(){c.getState("stop",this);return c.stopInterval.call(this)},remove:function(){var a;a=c.getState("remove",this);c.stopInterval.call(this);
a=a.element;a.unbind();return a.remove()}};return d.fn.vTicker=function(a){return f[a]?f[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!==typeof a&&a?d.error("Method "+a+" does not exist on jQuery.vTicker"):f.init.apply(this,arguments)}})(jQuery);
=======
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js"></script>  
<script src="http://www.jquerynewsticker.com/includes/jquery.ticker.js" type="text/javascript"></script>        
         
var ListBlogLink = "http://www.tdcsmansa2017.com";           
var ListCount = 5;           
var TitleCount = 70;           
var ListLabel ="Widgets";           
var ChrCount = 140;           
var ImageSize = 200; 
        
       
function mbtlist(json) {           
document.write('<ul id="js-news" class="js-hidden">');           
for (var i = 0; i < ListCount; i++)           
{
        
     
var listing= ListImage = ListUrl = ListTitle = ListImage = ListContent = ListConten = ListAuthor = ListTag = ListDate = ListUpdate = ListComments = thumbUrl = TotalPosts = sk = AuthorPic= ListMonth = Y = D = M = m = YY = DD = MM = mm = TT =  "";           
     
for (var j = 0; j < json.feed.entry[i].link.length; j++) {           
if (json.feed.entry[i].link[j].rel == 'alternate') {           
break;           
}           
}           
ListUrl= "'" + json.feed.entry[i].link[j].href + "'";           
         
if (json.feed.entry[i].title!= null)           
{           
ListTitle= json.feed.entry[i].title.$t.substr(0, TitleCount);           
}
        
if (json.feed.entry[i].thr$total)          
{           
ListComments= "<a href='"+json.feed.entry[i].link[j].href+"#comment-form'>"+json.feed.entry[i].thr$total.$t+"</a>";           
}           
ListAuthor= json.feed.entry[i].author[0].name.$t.split(" ");           
ListAuthor=ListAuthor.slice(0, 1).join(" ");           
AuthorPic = json.feed.entry[i].author[0].gd$image.src;
        
         
      
ListConten = json.feed.entry[i].content.$t;           
ListContent= ListConten.replace(/(<([^>]+)>)/ig,"").substring(0, ChrCount);
        

        
ListMonth= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
ListDate= json.feed.entry[i].published.$t.substring(0,10);
        
                         Y = ListDate.substring(0, 4);          
                        m = ListDate.substring(5, 7);           
                         D = ListDate.substring(8, 10);           
                         M = ListMonth[parseInt(m - 1)];  
        
         
if (json.feed.entry[i].media$thumbnail)           
{           
thumbUrl = json.feed.entry[i].media$thumbnail.url;           
sk= thumbUrl.replace("/s72-c/","/s"+ImageSize+"/");           
ListImage= "'" + sk.replace("?imgmax=800","") + "'";           
}
        
         
else if (json.feed.entry[i].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/) != null)           
{           
    var youtube_id = json.feed.entry[i].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();           
    
    if (youtube_id.length == 11) {           
        var ListImage = "'//img.youtube.com/vi/"+youtube_id+"/0.jpg'";           
        }           
}
        
         
else if (json.feed.entry[i].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/) != null)           
{           
          
ListImage =  json.feed.entry[i].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1];           
}           
else           
{           
ListImage= "'http://4.bp.blogspot.com/-HALLtgFeep0/VfryhQ0C5oI/AAAAAAAAPcY/77mSGND4q84/s200/Icon.png'";           
} 
        
        
var listing = "<li class='news-item'><span class='iauthor'><img class='iauthorpic' src='"+AuthorPic+"'/>"           
+ListAuthor+ "</span> <span class='icomments'>"           
+ListComments + "</span>  <span class='idate'>"           
+ D + " " + M + "</span><i class='fa fa-chevron-right'></i> <a class='mbttitle tooltip' href="           
+ListUrl+           
"><span><b></b><img src="           
+ListImage+           
"/>"           
+ListContent+           
" ?</span>"+ListTitle+"</a></li>";           
document.write(listing);           
}}
        
document.write("</ul><script src='"+ListBlogLink+"/feeds/posts/default/?alt=json-in-script&callback=mbtlist'></"+"script>");           
          
    $(function () {           
        $('#js-news').ticker({           
        speed: 0.20,           
        controls: true,   
        titleText: 'Headlines',           
        displayType: 'reveal',           
        pauseOnItems: 2000});           
});           
>>>>>>> db043e37a7597e27a2af12258dde04ed1a49bf17
