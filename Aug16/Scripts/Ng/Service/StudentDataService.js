/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
var FirstProjectExtension;
(function (FirstProjectExtension) {
    var ajaxApi = Workpulse.Site.AjaxApi;
    var StudentDataService = /** @class */ (function () {
        function StudentDataService(httpService, qService) {
            this.httpService = httpService;
            this.qService = qService;
        }
        StudentDataService.prototype.postSkill = function (student) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44350/studentapi/AddInput";
            ajaxApi({
                url: apiUrl,
                data: JSON.stringify(student),
                type: 'POST',
                contentType: 'application/json',
                success: function (response) {
                    deferred.resolve(response);
                    //Workpulse.Site.AlertJS("Added Sucessfully")
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        StudentDataService.prototype.getPathwayDetail = function (Pathway) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44350/studentapi/GetCRUDSList";
            ajaxApi({
                type: 'GET',
                url: apiUrl,
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        StudentDataService.prototype.DeleteInput = function (id) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44350/studentapi/DeleteInput/" + id;
            ajaxApi({
                type: 'GET',
                url: apiUrl,
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        StudentDataService.prototype.GetInput = function (id) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44350/studentapi/GetInput/" + id;
            ajaxApi({
                type: 'GET',
                url: apiUrl,
                //contentType: 'application/json',
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        StudentDataService.prototype.UpdateInput = function (student) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44350/studentapi/UpdateInput   ";
            ajaxApi({
                url: apiUrl,
                data: JSON.stringify(student),
                type: 'POST',
                contentType: 'application/json',
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        StudentDataService.StudentDataServiceFactory = function ($http, $q) {
            return new StudentDataService($http, $q);
        };
        return StudentDataService;
    }());
    FirstProjectExtension.StudentDataService = StudentDataService;
})(FirstProjectExtension || (FirstProjectExtension = {}));
//# sourceMappingURL=StudentDataService.js.map