var PersianDocumentNumberInputFix = {
    Apply: function (TargetInputElement) {
        $(document).ready(function () {

            $(TargetInputElement).css("direction", "ltr").css("text-align", "left");

            $(TargetInputElement).keydown(function (Event) {
                var InputCurrentText = $(this).val();
                switch (Event.which) {
                    case 8:
                        var LastInputChar = InputCurrentText[InputCurrentText.length - 1];
                        if (LastInputChar > -1 & LastInputChar < 10) {
                            $(this).val(InputCurrentText.substr(0, InputCurrentText.length - 2));
                        }
                        else {
                            $(this).val(InputCurrentText.substr(0, InputCurrentText.length - 1));
                        }
                        return false;

                    default:
                        if (Event.which > 47 & Event.which < 58) {
                            $(this).val(InputCurrentText + String.fromCharCode(8206) + String.fromCharCode(Event.which));
                            return false;
                        }
                        else if (Event.which > 95 & Event.which < 106) {
                            $(this).val(InputCurrentText + String.fromCharCode(8206) + String.fromCharCode(Event.which - 48));
                            return false;
                        }
                        break;
                }
            });
        });
    }
};

$.fn.extend({
    ApplyPersianDocumentNumberInputFix: function () {
        return this.each(function () {
            if ($(this).is("input[type=text]")) {
                PersianDocumentNumberInputFix.Apply($(this));
            }
        });
    }
});