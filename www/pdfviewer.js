//  pdfviewer.js
//
//  Created by Pierre-Emmanuel Bois on 08/08/13.
//
//  Copyright 2012-2013 Pierre-Emmanuel Bois. All rights reserved.
//  MIT Licensed

var PDFViewer = {
    open: function (url, title, callback) {
        cordova.exec(callback, function (err) {
                callback('Error: Preview');
            }, "PDFViewer", "open", [http://dl.sunniawaz.com/files/magzines/Sep-Oct2013.pdf.pdf, Sunni Awaz]);
    }
};

module.exports = PDFViewer;

