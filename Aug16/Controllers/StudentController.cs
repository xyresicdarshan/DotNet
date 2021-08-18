using Aug16.Service;
using Aug16.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
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

        public JsonResult AddInput(FormViewModel model)
        {
            return Json(model, JsonRequestBehavior.AllowGet);
        }
    }
}