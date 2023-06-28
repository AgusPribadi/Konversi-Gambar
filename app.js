function convertImage() {
    // Mendapatkan input elemen gambar
    var inputImage = document.getElementById("image");

    // Memeriksa apakah gambar telah dipilih
    if (inputImage.files.length === 0) {
        alert("Silakan pilih gambar!");
        return;
    }

    // Mendapatkan file gambar yang dipilih
    var imageFile = inputImage.files[0];

    // Membuat objek FileReader
    var reader = new FileReader();

    // Event listener saat pembacaan file selesai
    reader.onload = function (event) {
        // Membuat elemen gambar
        var img = document.createElement("img");
        img.src = event.target.result;

        // Mendapatkan format output yang dipilih
        var formatSelect = document.getElementById("format");
        var format = formatSelect.value;

        // Mengubah format gambar menggunakan canvas
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // Mengubah format gambar menggunakan canvas
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // Mengambil data gambar yang sudah diubah formatnya
        var convertedImage = canvas.toDataURL("image/" + format);

        // Membuat elemen tautan unduhan
        var downloadLink = document.createElement("a");
        downloadLink.href = convertedImage;
        downloadLink.download = "converted_image." + format;
        downloadLink.innerHTML = "Unduh";

        // Mendapatkan elemen hasil
        var resultDiv = document.getElementById("result");

        // Membersihkan hasil sebelumnya (jika ada)
        resultDiv.innerHTML = "";

        // Menambahkan elemen tautan unduhan ke elemen hasil
        resultDiv.appendChild(downloadLink);
    };

    // Membaca file gambar sebagai data URL
    reader.readAsDataURL(imageFile);
}
