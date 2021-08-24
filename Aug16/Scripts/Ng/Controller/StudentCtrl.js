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
    var StudentCtrl = /** @class */ (function (_super) {
        __extends(StudentCtrl, _super);
        function StudentCtrl($scope, dataSvc, $timeout, $mdDialog, $mdSelect, $mdToast) {
            var _this = _super.call(this, $scope, $mdToast) || this;
            _this.dataSvc = dataSvc;
            _this.AddInput = function () {
                _this.dataSvc.postSkill(_this.$scope.project).then(function (data) {
                    console.log(data);
                    _this.showMessage("Added Sucessfully");
                    _this.$scope.project = null;
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.$scope = $scope;
            return _this;
        }
        StudentCtrl.prototype.$onInit = function () {
        };
        StudentCtrl.prototype.init = function () {
        };
        return StudentCtrl;
    }(wp.angularBase.BaseCtrl));
    FirstProjectExtension.StudentCtrl = StudentCtrl;
    StudentCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', FirstProjectExtension.StudentDataService.StudentDataServiceFactory]);
    app.controller('StudentCtrl', StudentCtrl);
})(FirstProjectExtension || (FirstProjectExtension = {}));
//# sourceMappingURL=StudentCtrl.js.map