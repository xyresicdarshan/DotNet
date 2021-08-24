/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />

module FirstProjectExtension {

    import ajaxApi = Workpulse.Site.AjaxApi;


    export class StudentDataService {

        constructor(private httpService: ng.IHttpService, private qService: ng.IQService) {
        }


        postSkill(student: IStudentModel): ng.IPromise<IStudentModel> {
            var self = this;
            var deferred = self.qService.defer<IStudentModel>();
            var apiUrl = "https://localhost:44350/studentapi/AddInput";
            ajaxApi({
                url: apiUrl,
                data: JSON.stringify(student),
                type: 'POST',
                contentType: 'application/json',
                success: (response: IStudentModel) => {
                    deferred.resolve(response);
                    //Workpulse.Site.AlertJS("Added Sucessfully")
                },
                error: (xhr) => {
                    console.log(xhr)
                    Workpulse.Site.AlertJS(xhr)
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        }

        getPathwayDetail(Pathway: IStudentModel): ng.IPromise<IStudentModel[]> {
            var self = this;
            var deferred = self.qService.defer<IStudentModel[]>();
            var apiUrl = "https://localhost:44350/studentapi/GetCRUDSList";
            ajaxApi({
                type: 'GET',
                url: apiUrl,
                success: (response: IStudentModel[]) => {
                    deferred.resolve(response);
                },
                error: (xhr) => {
                    console.log(xhr)
                    Workpulse.Site.AlertJS(xhr)
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        }


        DeleteInput(id: number): ng.IPromise<IStudentModel> {
            var self = this;
            var deferred = self.qService.defer<IStudentModel>();
            var apiUrl = "https://localhost:44350/studentapi/DeleteInput/" + id;
            ajaxApi({
                type: 'GET',
                url: apiUrl,
                success: (response: IStudentModel) => {
                    deferred.resolve(response);
                },
                error: (xhr) => {
                    console.log(xhr)
                    Workpulse.Site.AlertJS(xhr)
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        }


        GetInput(id: number): ng.IPromise<IStudentModel> {
            var self = this;
            var deferred = self.qService.defer<IStudentModel>();
            var apiUrl = "https://localhost:44350/studentapi/GetInput/"+id;
            ajaxApi({
                type: 'GET',
                url: apiUrl,
                //contentType: 'application/json',
                success: (response: IStudentModel) => {
                    deferred.resolve(response);
                },
                error: (xhr) => {
                    console.log(xhr)
                    Workpulse.Site.AlertJS(xhr)
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        }

        UpdateInput(student: IStudentModel): ng.IPromise<IStudentModel> {
            var self = this;
            var deferred = self.qService.defer<IStudentModel>();
            var apiUrl = "https://localhost:44350/studentapi/UpdateInput   "
            ajaxApi({
                url: apiUrl,
                data: JSON.stringify(student),
                type: 'POST',
                contentType: 'application/json',
                success: (response: IStudentModel) => {
                    deferred.resolve(response);
                },
                error: (xhr) => {
                    console.log(xhr)
                    Workpulse.Site.AlertJS(xhr)
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        }

        public static StudentDataServiceFactory($http: ng.IHttpService, $q: ng.IQService): StudentDataService {
            return new StudentDataService($http, $q);
        }

    }
}