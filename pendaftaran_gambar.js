//=====================================global variabel
var defaultscr;
var img = new Image();

//==============================style input=========================================
window.onload = function() {
        var file = fileInput.files[0];
        var imageType = /image.*/;
        if (file.type.match(imageType)){
          var reader = new FileReader();
          reader.onload = function(e){
            img.src = reader.result;
            defaultscr=reader.result;
            img.onload = function(){
            draw(this);
            $('#tutup').click();//trigger toggle
            };
        }
      reader.readAsDataURL(file); 
      }
      else{
        fileDisplayArea.innerHTML = "File not supported!";
      }

};

//=======================================Kanvas=====================================
//fungsi untuk mengambil gambar ke kanvas
function draw(img) {
  var canvas = document.getElementById('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  img.style.display = 'none';
  var imageData = ctx.getImageData(0,0,canvas.width, canvas.height);
  var data = imageData.data;   
}