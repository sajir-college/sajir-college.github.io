todoApp.factory('ExamsFactory', function($http, $q){
  var factory={
                        exams: false,
                        getExams: function(){
                          var deferred = $q.defer();
                          if(factory.exams!=false){
                            deferred.resolve(factory.exams);
                          }
                          else{
                                  $http({
                                               method: 'GET',
                                               url: 'students_exams.json'
                                              }).then(function successCallback(response){
                                               factory.exams = response.data;
                                               deferred.resolve(factory.exams);
                                              }, function errorCallback(response){
                                               alert(response);
                                              });
                                    }
                        return deferred.promise;},
                      }
                      return factory;
                      });
