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
        id: number;

        project: IStudentModel;

    }
    export class ListCtrl extends wp.angularBase.BaseCtrl implements angular.IController {


        ClientId: number;
        ClientName: string;
        Descripion: string;
        ProjectType: string;
        Email: string;
        HourlyRate: string;
        iAccept: boolean;
        enable: boolean;
        id: number;


        $scope: FirstProjectExtension.IPathwayScope;
        $mdDialog: any;
        constructor($scope: FirstProjectExtension.IPathwayScope, private dataSvc: StudentDataService, $timeout, $mdDialog: any, $mdSelect: any, $mdToast: any) {

            super($scope, $mdToast);
            this.$scope = $scope;
            this.$mdDialog = $mdDialog;
            this.GetCRUDList();

        }

        $onInit() {
        }

        private init(): void {
        }

        studentList: IStudentModel[];
        GetCRUDList = () => {
            this.dataSvc.getPathwayDetail(this.$scope.project).then((data) => {
                var Student: string[] = new Array(100)
                this.studentList = data;
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })

        }

        ViewInput = (id: number) => {
            this.ShowInput(id);
            console.log(id);
            this.dataSvc.GetInput(id).then((data) => {
                console.log(data);
                this.$scope.project = data;
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }


        DeleteInput = (id) => {

            var confirm = this.$mdDialog.confirm()
                .title('Would you like to delete')
                .textContent('')
                .ariaLabel('')

                .targetEvent(null)
                .ok('Yes')
                .cancel('Cancel');

            this.$mdDialog.show(confirm).then(()=>{
                this.dataSvc.DeleteInput(id).then((data) => {
                    this.showWarning("Deleted Sucessfully");
                    console.log(data);
                    this.GetCRUDList();
                }).catch((error) => {
                    console.log(error);
                }).finally(() => {

                })
            },  ()=> {
            });
        }


        UpdateInput = (id) => {
            this.ShowInput(id);
            this.dataSvc.UpdateInput(id).then((data) => {
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }

        ShowInput = (id: number) => {
            window.location.href = "/Student/ViewInput/"+id;
        }

    }
    ListCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', StudentDataService.StudentDataServiceFactory]);
    app.controller('ListCtrl', ListCtrl);
}