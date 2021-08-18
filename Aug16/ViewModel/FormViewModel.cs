using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Aug16.ViewModel
{
    public class FormViewModel
    {
        internal int id;

        public string ClientId { get; set; }
        public string ClientName { get; set; }
        public string Descripion { get; set; }
        public string ProjectType { get; set; }
        public string Email { get; set; }
        public string HourlyRate { get; set; }
        public string iAccept { get; set; }
        public string enable { get; set; }
        public object Id { get; internal set; }
    }

}
