var imageObj = [];
var status = 0;
//creating module and controller
var app = angular.module("angModule", []).controller("imgController", function ($scope, $http, $log) {
    var id = 1;
    var getResponse;
    //Recursive function for getting url
    $scope.getImageUrl = function (imageID) {
        //http get request to get image form api
        $http({
            url: "https://5ad8d1c9dc1baa0014c60c51.mockapi.io/api/br/v1/magic/" + imageID, method: 'GET', async: false, catch: false
        }).then(function successCallback(response) {
            getResponse = response.data;
            //$log.info(getResponse);
            //Inserting Url to js array
            imageObj.push(getResponse.imageUrl);
            //Checking the response data
            if (getResponse !== null) {
                id = id + 1;
                $scope.getImageUrl(id);
            }
        }, function errorCallback(response) {
            return;
            status = response.status;
        })
    }
    $scope.getImageUrl(id);
    //assigning the js obj to scope.
    $scope.image = imageObj;
});