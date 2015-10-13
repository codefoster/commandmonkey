// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=329104
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {

        var sf = Windows.Storage.StorageFile;
        var vcm = Windows.Media.SpeechRecognition.VoiceCommandManager;
        sf.getFileFromApplicationUriAsync(new Windows.Foundation.Uri("ms-appx:///vcd.xml"))
            .then(function (file) {
                vcm.installCommandSetsFromStorageFileAsync(file)
                    //.then(
                    //    function () { debugger; },
                    //    function (err) { debugger; }
                    //);
            });

        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
        }

        else if (args.detail.kind === activation.ActivationKind.voiceCommand) {
            var command = args.detail.result.semanticInterpretation.properties.command[0];
            WinJS.xhr({ url: 'http://CommandMonkey.azurewebsites.net/api/command?cmd=' + command });
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();
