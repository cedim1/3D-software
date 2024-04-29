var Heightsforblob = "100"
var Widthsforblob = "100"
createblob(add)
function screenCL() {
document.write("")
}
function createblob(Mode) {
if (Mode == Add) {
const Blob = document.createDocumentFragment();
const div = Blob
  .appendChild(document.createElement("div"))
div.class = "3Dblock";
div.height = Heightsforblob + %;
div.width = Widthsforblob + %;
document.body.appendChild(fragment);
} else {
  screenCL()
  const Blob = document.createDocumentFragment();
const div = Blob
  .appendChild(document.createElement("div"))
div.class = "3Dblock";
div.height = Heightsforblob + %;
div.width = Widthsforblob + %;
document.body.appendChild(fragment);
}
}
document.onkeydown = function(event) {
         switch (event.keyCode) {
            case 37:
               var Widthsforblob = Widthsforblob - 1
             createblob(delete)
            break;
            case 38:
               var Heightsforblob = Widthsforblob - 1
             createblob(delete)
            break;
            case 39:
               var Widthsforblob = Widthsforblob + 1
             createblob(delete)
            break;
            case 40:
               var Heightsforblob = Widthsforblob + 1
             createblob(delete)
            break;
         }
      };
