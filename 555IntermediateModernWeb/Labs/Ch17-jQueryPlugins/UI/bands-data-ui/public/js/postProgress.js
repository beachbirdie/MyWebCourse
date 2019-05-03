

function posting() {
    var progressBar = $("#progressbar"),
        progressLabel = $(".progress-label");

    progressBar.progressbar({
        value: false,
        change: function () {
            progressLabel.text(progressBar.progressbar("value") + "%");
        },
        complete: function () {
            progressBar.progressbar('destroy');
            progressLabel.html('');
        }
    });

    function progress() {
        var val = progressBar.progressbar("value") || 0;

        progressBar.progressbar("value", val + 5);

        if (val < 99) {
            setTimeout(progress, 100);
        }
    }

    setTimeout(progress, 100);
}