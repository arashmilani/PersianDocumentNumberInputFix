Persian Document Number Input Fix
=================================
"Persian Document Number Input Fix" is a Jquery plug-in to help Persian web application developers to get an expected behavior  while entering an alphanumeric value (mostly a official document number) in a text input reading from left to right (as all numbers are read).

For example start typing "123‎الف‎456" characters in a html input text, reading it from left to right. You will you will get "الف123456" entered in the input (depending on your browser or Operating System it may vary). This small code is trying to fix this issue.

Requirements
------------
Jquery javascript library

Usage
-----
include Jquery and the PersianDocumentNumberInputFix.js files in your html document as:

    <head>
        <script src="jquery.min.js" type="text/javascript"></script>
        <script src="PersianDocumentNumberInputFix.js" type="text/javascript"></script>
    </head>

Then select your input using jquery and run the "ApplyPersianDocumentNumberInputFix" function:

    <script type="text/javascript">
        $(document).ready(function () {
            $("#PersianDocumentNumberFixedInput").ApplyPersianDocumentNumberInputFix();
        });
    </script>

Known issues
------------
* We are aware about the additional Left To Right Mark character (LTM: 8206 charCode) before any number that is entered in the text input; Indeed this is trick that the fix use to render the input as expected. But if we store input value in the database and search it via the same fixed input, then we should be fine.
