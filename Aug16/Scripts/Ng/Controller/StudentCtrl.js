/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FirstProjectExtension;
(function (FirstProjectExtension) {
    var PathwayCtrl = /** @class */ (function (_super) {
        __extends(PathwayCtrl, _super);
        function PathwayCtrl($scope, dataSvc, $timeout, $mdDialog, $mdSelect, $mdToast) {
            var _this = _super.call(this, $scope, $mdToast) || this;
            _this.dataSvc = dataSvc;
            _this.AddInput = function () {
                _this.dataSvc.postSkill(_this.$scope.project).then(function (data) {
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.GetCRUDList = function () {
                _this.dataSvc.getPathwayDetail(_this.$scope.project).then(function (data) {
                    var Student = new Array(100);
                    _this.studentList = data;
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.DeleteInput = function (id) {
                _this.dataSvc.DeleteInput(id).then(function (data) {
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.GetInput = function (id) {
                _this.dataSvc.GetInput(id).then(function (data) {
                    _this.$scope.project = data;
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.UpdateInput = function () {
                _this.dataSvc.UpdateInput(_this.$scope.project).then(function (data) {
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.$scope = $scope;
            _this.ClientId = $("#hdnid").val();
            console.log(_this.ClientId);
            _this.GetInput(_this.ClientId);
            return _this;
        }
        PathwayCtrl.prototype.$onInit = function () {
        };
        PathwayCtrl.prototype.init = function () {
        };
        return PathwayCtrl;
    }(wp.angularBase.BaseCtrl));
    FirstProjectExtension.PathwayCtrl = PathwayCtrl;
    PathwayCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', FirstProjectExtension.StudentDataService.StudentDataServiceFactory]);
    app.controller('PathwayCtrl', PathwayCtrl);
})(FirstProjectExtension || (FirstProjectExtension = {}));
//# sourceMappingURL=StudentCtrl.js.map