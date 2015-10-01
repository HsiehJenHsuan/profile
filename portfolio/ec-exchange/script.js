$(document).ready(function(){
	/* This code is executed after the DOM has been completely loaded */

	/* Changing thedefault easing effect - will affect the slideUp/slideDown methods: */
	$.easing.def = "easeInOutCubic";
	/* Binding a click event handler to the links: */
	$('li.btn a').click(function(e){		
		var a=$(this).parent().attr("id");
		
		if (a==''){
			return false;
			}
		
		/* Finding the drop down list that corresponds to the current section: */
		var dropDown = $("#"+a+"_dropdown");
		
		/* Closing all other drop down sections, except the current one */
		
		$(".dropdown").not(dropDown).slideUp('slow');

		dropDown.slideToggle('slow');

		/* Preventing the default event (which would be to navigate the browser to the link's address) */
		e.preventDefault();
	})
	
});

 
$(function(){
	$('.dropdown').corner();
});
 
function over(imgObj,picname) { imgObj.src=picname; }
function out(imgObj,picname) { imgObj.src=picname; }

   			$(document).ready(function(){
				//Examples of how to assign the ColorBox event to elements
				$(".group1").colorbox({rel:'group1'});
				$(".group2").colorbox({rel:'group2', transition:"fade"});
				$(".group3").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
				$(".group4").colorbox({rel:'group4', slideshow:true});
				$(".ajax").colorbox();
				$(".youtube").colorbox({iframe:true, innerWidth:425, innerHeight:344});
				$(".iframe").colorbox({iframe:true, width:"580", height:"400"});
				$(".inline").colorbox({inline:true, width:"50%"});
				$(".callbacks").colorbox({
					onOpen:function(){ alert('onOpen: colorbox is about to open'); },
					onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
					onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
					onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
					onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
				});
				
				//Example of preserving a JavaScript event for inline calls.
				$("#click").click(function(){ 
					$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
					return false;
				});
			});
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function click_button(id){
	var x=0;
	switch(id){
		case 'bar1':{
			MM_swapImage('Image1','','images/member1.jpg',1);
			document.getElementById('member_content').innerHTML='<<翁翊秦>><br/>。FB資料存取。我要長到一八零。';
			break;
		}
		case 'bar2':{
			MM_swapImage('Image1','','images/member2.jpg',1);
			document.getElementById('member_content').innerHTML='<<蔡育軒>><br/>。主要程式設計。書香獎大忙人。';
			break;
		}
		case 'bar3':{
			MM_swapImage('Image1','','images/member3.jpg',1);
			document.getElementById('member_content').innerHTML='<<陳岱杰>><br/>。主要程式設計。西斯板常客。';
			break;
		}
		case 'bar4':{
			MM_swapImage('Image1','','images/member4.jpg',1);
			document.getElementById('member_content').innerHTML='<<謝任軒>><br/>。行銷策略規劃。搞笑影片大師。';
			break;
		}
		case 'bar5':{
			MM_swapImage('Image1','','images/member5.jpg',1);
			document.getElementById('member_content').innerHTML='<<邱政杰>><br/>。伺服器管理員。我要胖到一八零。';
			break;
		}
		case 'bar6':{
			MM_swapImage('Image1','','images/member6.jpg',1);
			document.getElementById('member_content').innerHTML='<<蔡宛臻>><br/>。美工設計製作。板標製造機。';
			break;
		}		
	}
}
