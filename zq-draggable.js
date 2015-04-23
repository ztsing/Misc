/*
 * Make the dom draggable in a simple way
 * ----------------------------------------------------
 * 
 * HTML Format:
 * --------------------------------------
 * <div>
 * 		<div class='_zq-dragger'></div>
 * 		<div></div>
 * </div>
 * --------------------------------------
 * 
 * Browser compatibility: chrome
 * 
 */
function _zqDragable(dom){
		var DRAGABLE={
	  		mousedown:false,
	  		etargOffsetX:-1,
	  		etargOffsetY:-1
	  	};
		document.onmousedown=function(e){
			   if(e.target.parentNode==dom && e.target.classList.contains('_zq-dragger')){
				    e.target.style.cursor='move';
			      DRAGABLE.mousedown=true;
			      DRAGABLE.etargOffsetX=e.screenX-dom.offsetLeft;
			      DRAGABLE.etargOffsetY=e.screenY-dom.offsetTop;
			      e.preventDefault();
			   }
		};
		document.onmousemove=function(e){
			  if(e.target.parentNode==dom && e.target.classList.contains('_zq-dragger') && DRAGABLE.mousedown){
				  dom.style.left=(e.screenX-DRAGABLE.etargOffsetX).toString()+'px';
				  dom.style.top=(e.screenY-DRAGABLE.etargOffsetY).toString()+'px';
			  }
		}
		document.onmouseup=function(e){
			DRAGABLE.mousedown=false;
		}
}
