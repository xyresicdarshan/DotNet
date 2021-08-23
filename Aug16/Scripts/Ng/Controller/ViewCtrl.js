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
    var ViewCtrl = /** @class */ (function (_super) {
        __extends(ViewCtrl, _super);
        function ViewCtrl($scope, dataSvc, $timeout, $mdDialog, $mdSelect, $mdToast) {
            var _this = _super.call(this, $scope, $mdToast) || this;
            _this.dataSvc = dataSvc;
            _this.ViewInput = function (id) {
                console.log(id);
                _this.dataSvc.GetInput(id).then(function (data) {
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.UpdateInput = function (id) {
                console.log(id);
                _this.ShowInput(id);
                _this.dataSvc.UpdateInput(id).then(function (data) {
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.ShowInput = function (id) {
                window.location.href = "/Student/ViewInput/" + id;
            };
            _this.$scope = $scope;
            _this.ClientId = $("#hdnid").val();
            _this.ViewInput(_this.ClientId);
            return _this;
        }
        ViewCtrl.prototype.$onInit = function () {
        };
        ViewCtrl.prototype.init = function () {
        };
        return ViewCtrl;
    }(wp.angularBase.BaseCtrl));
    FirstProjectExtension.ViewCtrl = ViewCtrl;
    ViewCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', FirstProjectExtension.StudentDataService.StudentDataServiceFactory]);
    app.controller('ViewCtrl', ViewCtrl);
})(FirstProjectExtension || (FirstProjectExtension = {}));
//# sourceMappingURL=ViewCtrl.js.map