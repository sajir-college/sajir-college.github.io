todoApp.controller("ExamsCtrl", function ($scope, ExamsFactory) {
    $scope.todo = ExamsFactory.getExams().then(function(){
              $scope.todo=ExamsFactory.exams;
              console.log($scope.todo);


    }, function(msg){
      alert(msg);
    });//model;

    $scope.IsEmpty=true;
    $scope.IsNotFound=false;
    $scope.result=[];
    /*$scope.addNewItem = function (actionText) {
        //$scope.todo.items.push({ action: actionText, done: false });
      }*/

    /*  $scope.change= function(){
        console.log("hello");
        $scope.IsNotFound=false;
      }*/

      $scope.selectExams = function (id) {
                console.log($scope.todo);
                $scope.result=[];
                $scope.IsEmpty=true;
                $scope.IsNotFound=true;

                angular.forEach($scope.todo, function(value, key){

                      if(value.id===id){
                        console.log(value);

                            $scope.result.push(value);
                            $scope.IsEmpty=false;
                          $scope.IsNotFound=false; }
                });
      }
});
