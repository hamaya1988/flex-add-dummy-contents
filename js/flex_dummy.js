const flexContainers = document.getElementsByClassName('flex-container');

[...flexContainers].forEach(function(value) {
  const columnCount = value.children[0].className;
  const formatedColumnCount = columnCount.replace(/[^0-9^\.]/g,"");
  const itemCount = value.children.length;
  
  if(itemCount - formatedColumnCount < 0) {
    for(let i = 1; i <= formatedColumnCount - itemCount; i++) {
      createDummy(value, formatedColumnCount);
    }
  } else if (itemCount % formatedColumnCount !== 0) {
    for(let i = 1; i <= formatedColumnCount - (itemCount % formatedColumnCount); i++) {
      createDummy(value, formatedColumnCount);
    }
  }
});

function createDummy(target, columnCount) {
  let dummy = document.createElement('li');
  dummy.className = 'flex-item-' + columnCount + '-dummy';
  target.appendChild(dummy);
}
