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

    }
}