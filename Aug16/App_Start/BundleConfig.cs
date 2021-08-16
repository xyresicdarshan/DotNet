using System.Web;
using System.Web.Optimization;

namespace Aug16
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/Student").Include(
                     "~/Content/scss/StudentStyle.css",
                     "~/Content/angular-material.css"));

            bundles.Add(new ScriptBundle("~/bundles/Common").Include(
                     "~/Scripts/Ng/BaseController.js",
                     "~/Scripts/Ng/Site.js"));

            bundles.Add(new ScriptBundle("~/bundles/Angular").Include(
                      "~/Scripts/angular.js",
                    "~/Scripts/angular-messages.js",
                    "~/Scripts/angular-sanitize.js",
                    "~/Scripts/angular-touch.js",
                    "~/Scripts/angular-animate.js",
                    "~/Scripts/angular-aria.js",
                    "~/Scripts/angular-material.js"));

            bundles.Add(new ScriptBundle("~/bundles/Student").Include(
                    "~/Scripts/Ng/Service/StudentDataService.js",
                    "~/Scripts/Ng/Controller/StudentCtrl.js"));


        }
    }
}
