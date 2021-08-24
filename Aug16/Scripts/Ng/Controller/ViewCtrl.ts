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
    export class ViewCtrl extends wp.angularBase.BaseCtrl implements angular.IController {


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

            this.ClientId = $("#hdnid").val();
            this.ViewInput(this.ClientId);

        }

        $onInit() {
        }

        private init(): void {
        }

        ViewInput = (id: number) => {
            console.log(id);
            this.dataSvc.GetInput(id).then((data) => {
                console.log(data);
                this.$scope.project = data;
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }

        UpdateInput = () => {
            this.dataSvc.UpdateInput(this.$scope.project).then((data) => {
                this.showMessage("Updated Sucesfully");
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }

    }
    ViewCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', StudentDataService.StudentDataServiceFactory]);
    app.controller('ViewCtrl', ViewCtrl);
}