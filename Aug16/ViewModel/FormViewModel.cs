using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Aug16.ViewModel
{
    public class FormViewModel
    {

        public int ClientId { get; set; }
        public string ClientName { get; set; }
        public string Descripion { get; set; }
        public string ProjectType { get; set; }
        public string Email { get; set; }
        public int HourlyRate { get; set; }
        public bool iAccept { get; set; }
        public bool enable { get; set; }
    }

}
