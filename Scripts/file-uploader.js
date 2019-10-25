function readURL(input) {
    if (input.files && input.files.length > 0) {
        for (var i = 0; i < input.files.length; i++) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.image-upload-wrap').hide();

                var imgHtml = "<img class=\"file-upload-image\" src=\"" + e.target.result + "\" />";
                $('.file-upload-image-section').append(imgHtml);
                $('.file-upload-content').show();
                debugger;
                if (input.files.length == 1) {
                    $('.image-title').html(input.files[0].name);
                } else {
                    $('.image-title').html("Uploaded Images");
                }
            };

            reader.readAsDataURL(input.files[i]);
        }
    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-image-section').html("");
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});