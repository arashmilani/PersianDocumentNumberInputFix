/**
 PersianDocumentNumberInputFix v0.9 is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> by narmand.com 
 Lastest version can be found at https://github.com/arashmilani/PersianDocumentNumberInputFix
 
 Contributors: 	Tahereh Pourkhalil <taherehpourkhalil.m@gmail.com>
				Arash Milani <me@arashmilani.com>
				Farzam Khojasteh <fkniya@gmail.com>
				
 - Jquery library is required.
*/

var PersianDocumentNumberInputFix = {
    Apply: function (TargetInputElement) {
        $(TargetInputElement).css("direction", "ltr").css("text-align", "left");

        $(TargetInputElement).keydown(function (Event) {
            var InputCurrentText = $(this).val();
            switch (Event.which) {
                case 8:
                    if (InputCurrentText.length === 0) {
                        return true;
                    }

                    var LastInputCharCode = InputCurrentText[InputCurrentText.length - 1].charCodeAt(0);
                    if (LastInputCharCode > 1775 && LastInputCharCode < 1786) {
                        $(this).val(InputCurrentText.substr(0, InputCurrentText.length - 2));
                    }
                    else {
                        $(this).val(InputCurrentText.substr(0, InputCurrentText.length - 1));
                    }
                    return false;

                default:
                    if (Event.which > 47 && Event.which < 58) {
                        //Normal latin numbers
                        $(this).val(InputCurrentText + String.fromCharCode(8206) + String.fromCharCode(Event.which + 1728));
                        return false;
                    }
                    else if (Event.which > 95 && Event.which < 106) {
                        //Numpad numbers
                        $(this).val(InputCurrentText + String.fromCharCode(8206) + String.fromCharCode(Event.which + 1680));
                        return false;
                    }
                    else if (Event.which > 1631 && Event.which < 1642) {
                        //Arabic numbers
                        $(this).val(InputCurrentText + String.fromCharCode(8206) + String.fromCharCode(Event.which + 144));
                        return false;
                    }
                    break;
            }
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