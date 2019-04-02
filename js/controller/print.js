todoApp.controller('PrintCtrl', function($scope) {
      $scope.printToCart = function(printSectionId) {
        var innerContents = document.getElementById(printSectionId).innerHTML;
        var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head>');
        popupWinindow.document.write('<body onload="window.print()  onfocus="window.close()">');
        popupWinindow.document.write('<img src="logo-su.png" alt="Logo" class="center">');
        popupWinindow.document.write('<header><h1>كلية العلوم والآداب بساجر</h1></header>');
        popupWinindow.document.write(innerContents);
        popupWinindow.document.write('<div><h2>مساعد وكيل الكلية للشؤون التعليمية</h2><br><h2>د. حماد حسين حسن</h2></div>');
        popupWinindow.document.write('</html>');
        popupWinindow.document.close();

      }
    });
