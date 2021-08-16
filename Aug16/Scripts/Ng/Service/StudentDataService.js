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
        StudentDataService.StudentDataServiceFactory = function ($http, $q) {
            return new StudentDataService($http, $q);
        };
        StudentDataService.prototype.getPathwayDetail = function (pathwayId) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = Workpulse.Site.GetUrl('PathwaySchedule') + "/detail/" + pathwayId;
            ajaxApi({
                url: apiUrl,
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    Workpulse.Site.Alert(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        StudentDataService.prototype.postPathway = function (pathway) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = Workpulse.Site.GetUrl('PathwaySchedule') + "/pathway";
            ajaxApi({
                url: apiUrl,
                data: JSON.stringify(pathway),
                type: 'POST',
                contentType: 'application/json',
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    Workpulse.Site.Alert(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        return StudentDataService;
    }());
    FirstProjectExtension.StudentDataService = StudentDataService;
})(FirstProjectExtension || (FirstProjectExtension = {}));
//# sourceMappingURL=StudentDataService.js.map