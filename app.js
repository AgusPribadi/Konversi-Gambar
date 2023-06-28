function convertImage() {
    var inputImage = document.getElementById("image");

    if (inputImage.files.length === 0) {
        alert("Silakan pilih gambar!");
        return;
    }

    var imageFile = inputImage.files[0];

    var reader = new FileReader();
    reader.onload = function (event) {
        var img = document.createElement("img");
        img.src = event.target.result;

        var formatSelect = document.getElementById("format");
        var format = formatSelect.value;

        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        var convertedImage = canvas.toDataURL("image/" + format);

        var downloadLink = document.createElement("a");
        downloadLink.href = convertedImage;
        downloadLink.download = "converted_image." + format;

        downloadLink.innerHTML = "Unduh";

        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "";

        var previewContainer = document.createElement("div");
        previewContainer.classList.add("preview-container");

        var previewImage = document.createElement("img");
        previewImage.classList.add("preview-image");
        previewImage.src = convertedImage;

        previewContainer.appendChild(previewImage);
        resultDiv.appendChild(previewContainer);
        resultDiv.appendChild(downloadLink);

        resultDiv.classList.remove("loading");
    };

    reader.onloadstart = function () {
        var resultDiv = document.getElementById("result");
        resultDiv.classList.add("loading");
    };

    reader.readAsDataURL(imageFile);
}
