/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />

module FirstProjectExtension {
    export interface IPathwayScope extends ng.IScope {
        loading: boolean;
        loadingTask: boolean;

        ClientId: number;
        ClientName: string;
        Descripion: string;
        ProjectType: string;
        Email: string;
        HourlyRate: string;
        iAccept: boolean;
        enable: boolean;
       

        project: IStudentModel;

    }
    export class StudentCtrl extends wp.angularBase.BaseCtrl implements angular.IController {


        ClientId: number;
        ClientName: string;
        Descripion: string;
        ProjectType: string;
        Email: string;
        HourlyRate: string;
        iAccept: boolean;
        enable: boolean;

        

     

        $scope: FirstProjectExtension.IPathwayScope;
        private $mdDialog: any;
        constructor($scope: FirstProjectExtension.IPathwayScope, private dataSvc: StudentDataService, $timeout, $mdDialog: any, $mdSelect: any, $mdToast: any) {

            super($scope, $mdToast);
            this.$scope = $scope;

        }

        $onInit() {
        }

        private init(): void {
        }

        AddInput = () => {
            this.dataSvc.postSkill(this.$scope.project).then((data) => {
                console.log(data);
                this.showMessage("Added Sucessfully")
                this.$scope.project = null;
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })

        }
    }
    StudentCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', StudentDataService.StudentDataServiceFactory]);
    app.controller('StudentCtrl', StudentCtrl);
}