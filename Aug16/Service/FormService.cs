using Aug16.Models;
using Aug16.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Aug16.Service
{
    public class FormService
    {
        Models.CRUD db;
        public FormService()
        {
            db = new FormCRUDEntities();
        }
        public FormService(FormCRUDEntities _db)
        {
            db = _db;
        }
        //1. To Add
        //2. To Update
        //3. To Show All
        //4. To Show Only One
        //5. To Delete

        public int AddInput(FormViewModel model)
        {
            CRUD input = new CRUD()
            {
                Id = model.Id,
                ClientId=model.ClientId,
                ClientName = model.ClientName,
                Descripion = model.Descripion,
                Email = model.Email,
                iAccept = model.iAccept,
                ProjectType = model.ProjectType,
                HourlyRate = model.HourlyRate,
                enable = model.enable
            };
            db.CRUDs.Add(input);
            return db.saveChanges();
        }

        public int UpdateInput(FormViewModel model)
        {
            //To get exixting record
            var input = db.CRUDs.Where(s => s.Id == model.Id).FirstOrDefault();
            if(input!= null)
            {
                input.ClientId = model.ClientId;
                input.ClientName = model.ClientName;
                input.Descripion = model.Descripion;
                input.Email = model.Email;
                input.iAccept = model.iAccept;
                input.ProjectType = model.ProjectType;
                input.HourlyRate = model.HourlyRate;
                input.enable = model.enable;

                db.Entry<CRUD>(input).State = System.Data.Entity.EntityState.Modified;
                return db.saveChanges();

            }
            else
            {
                return -1;
            }
        }

    }
}