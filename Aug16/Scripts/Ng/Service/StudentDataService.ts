/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />

module FirstProjectExtension {

    import ajaxApi = Workpulse.Site.AjaxApi;


    export class StudentDataService {

        constructor(private httpService: ng.IHttpService, private qService: ng.IQService) {
        }

        public static StudentDataServiceFactory($http: ng.IHttpService, $q: ng.IQService): StudentDataService {
            return new StudentDataService($http, $q);
        }

        getPathwayDetail(pathwayId: number): ng.IPromise<IPathwayDto> {
            var self = this;
            var deferred = self.qService.defer<IPathwayDto>();
            var apiUrl = `${Workpulse.Site.GetUrl('PathwaySchedule')}/detail/${pathwayId}`;

            ajaxApi({
                url: apiUrl,
                success: (response:IPathwayDto) => {
                    deferred.resolve(response);
                },
                error: (xhr) => {
                    Workpulse.Site.Alert(xhr)
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        }

        postPathway(pathway: IPathwayDto): ng.IPromise<IPathwayDto> {
            var self = this;
            var deferred = self.qService.defer<IPathwayDto>();
            var apiUrl = `${Workpulse.Site.GetUrl('PathwaySchedule')}/pathway`;
            ajaxApi({
                url: apiUrl,
                data: JSON.stringify(pathway),
                type: 'POST',
                contentType: 'application/json',
                success: (response: IPathwayDto) => {
                    deferred.resolve(response);
                },
                error: (xhr) => {
                    Workpulse.Site.Alert(xhr)
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        }
    }
    export interface IPathwayDto {
        id: number;
        name: string;
        description: string;
        status: true;
        updatedDate: string;
    }
}