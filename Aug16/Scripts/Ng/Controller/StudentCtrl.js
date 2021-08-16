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
        function PathwayCtrl($scope, dataSvc, $timeout, $mdDialog, $mdSelect, $mdToast, $filter) {
            var _this = _super.call(this, $scope, $mdToast) || this;
            _this.dataSvc = dataSvc;
            _this.$mdToast = $mdToast;
            _this.$scope = $scope;
            _this.firstName = "Abc";
            _this.lastName = "Xyz";
            _this.rollNo = 123;
            _this.$scope.firstName = "abcd";
            _this.myDate = new Date();
            $scope.getStudent = function () {
                //get the list of studnet.
                _this.showMessage("Scope method");
            };
            _this.$scope.getStudent();
            _this.getStudent();
            _this.showError("On load show error");
            return _this;
        }
        PathwayCtrl.prototype.$onInit = function () {
            this.$scope.loading = true;
            this.getStudent();
            this.$scope.getStudent();
        };
        PathwayCtrl.prototype.init = function () {
        };
        PathwayCtrl.prototype.getStudent = function () {
            var _this = this;
            this.showMessage("Controller method");
            this.dataSvc.getPathwayDetail(12).then(function (data) {
                _this.studentList = data;
                _this.$scope.studentDataList = data;
            }).catch(function (error) {
            }).finally(function () {
            });
        };
        return PathwayCtrl;
    }(wp.angularBase.BaseCtrl));
    FirstProjectExtension.PathwayCtrl = PathwayCtrl;
    PathwayCtrl.$inject = ['$scope', 'PathwayDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('PathwayDataService', ['$http', '$q', FirstProjectExtension.StudentDataService.StudentDataServiceFactory]);
    app.controller('PathwayCtrl', PathwayCtrl);
})(FirstProjectExtension || (FirstProjectExtension = {}));
//# sourceMappingURL=StudentCtrl.js.map