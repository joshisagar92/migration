angular.module("studentListViewModal",['']).controller('studentListViewController',function($scope){
    console.log("studentListViewController loaded")
    $("#studentListViewModal").modal()
    $scope.students = [
        {name: 'Mark Waugh', city:'New York'},
        {name: 'Steve Jonathan', city:'London'},
        {name: 'John Marcus', city:'Paris'}
    ];

    $scope.editMode = false;
    $scope.current_index = -1;

    $scope.editStudent = function(index){
        console.log("Inside Edit"+ index)
        $scope.editMode = true;
        current_index = index;
    }

    $scope.deleteStudent = function(){

    }

    $scope.saveEdit = function(){
        $scope.editMode = false;
        current_index = -1;
    }


})