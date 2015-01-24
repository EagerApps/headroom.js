(function(){
  var header = document.querySelector(INSTALL_OPTIONS.header);
  if (!header) return;

  var clonedHeader = header.cloneNode(true);
  clonedHeader.className += ' headroom-cloned';
  header.parentNode.appendChild(clonedHeader);

  (new Headroom(clonedHeader)).init()
})()
