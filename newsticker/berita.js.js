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
