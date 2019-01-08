var button =  document.getElementById("sendMessageButton");
var form = document.getElementById("sendCVForm");
var isUploaded = false;
var cvUrl = document.getElementById("cvUrl");
var publicId = document.getElementById("publicId");
var widget = cloudinary.createUploadWidget({ 
  cloudName: "dn0rss3vw", uploadPreset: "dzy8gpji", sources: ["local"] }, (error, result) => {
    if (result && result.event === "success") {
      isUploaded = true;
      cvUrl.value = result.info.secure_url;
      publicId.value = result.info.public_id;
    }
    if (result && result.event === "close" && isUploaded === true){
      form.submit();
    }
  });

button.onclick = function() {widget.open()};
