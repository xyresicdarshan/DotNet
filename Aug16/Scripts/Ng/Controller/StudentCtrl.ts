/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />

module FirstProjectExtension {
    export interface IPathwayScope extends ng.IScope {
        loading: boolean;
        loadingTask: boolean;
        firstName: string;
        getStudent(): void;
        studentDataList: any;
    }

   
    export class PathwayCtrl extends wp.angularBase.BaseCtrl implements angular.IController {
        $scope: FirstProjectExtension.IPathwayScope;
        private $mdDialog: any;
        $mdToast: any;

        firstName: String;
        lastName: String;
        rollNo: Number;
        myDate: any;

        constructor($scope: FirstProjectExtension.IPathwayScope, private dataSvc: StudentDataService, $timeout, $mdDialog: any, $mdSelect: any, $mdToast: any, $filter: any) {
            super($scope, $mdToast);
            this.$mdToast = $mdToast;
            this.$scope = $scope;
            this.firstName = "Abc";
            this.lastName = "Xyz";
            this.rollNo = 123;
            this.$scope.firstName = "abcd";
            this.myDate = new Date();

            $scope.project = {
                description: 'Nuclear Missile Defense System',
                rate: 500,
                special: true
            };

            $scope.getStudent = () => {
                //get the list of studnet.
                this.showMessage("Scope method")
            };


            this.$scope.getStudent();
            this.getStudent();
            this.showError("On load show error");
        }


        

        $onInit() {
            this.$scope.loading = true;
            this.getStudent();
            this.$scope.getStudent();
        }

        private init(): void {
        }
        studentList: any;
        getStudent() {
            this.showMessage("Controller method");
            this.dataSvc.getPathwayDetail(12).then((data) => {
                this.studentList = data;
                this.$scope.studentDataList = data;
            }).catch((error) => {

            }).finally(() => {
            })
        }

    }

    PathwayCtrl.$inject = ['$scope', 'PathwayDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('PathwayDataService', ['$http', '$q', StudentDataService.StudentDataServiceFactory]);
    app.controller('PathwayCtrl', PathwayCtrl);
}