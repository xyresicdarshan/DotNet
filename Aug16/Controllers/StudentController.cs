using Aug16.Service;
using Aug16.ViewModel;
using System.Web.Mvc;

namespace Aug16.Controllers
{
    public class StudentController : Controller
    {
        FormService service = new FormService();


        // GET: Student
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult List()
        {
            return View();
        }
        public ActionResult ViewInput(int id)
        {
            ViewBag.Id = id;
            return View();
        }
        public JsonResult AddInput(FormViewModel model)
        {
            var result = service.AddInput(model);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetCRUDSList()
        {
            var result = service.GetCRUDSList();
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult DeleteInput(int id)
        {
            var result = service.DeleteInput(id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetInput(int id)
        {
            ViewBag.Id = id;
            var result = service.GetInput(id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult  UpdateInput(int id)
        {
            ViewBag.Id = id;
            var result = service.UpdateInput(id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}