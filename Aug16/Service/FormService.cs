﻿using Aug16.Models;
using Aug16.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Aug16.Service
{
    public class FormService
    {
        FormCRUDEntities1 db;
        public FormService()
        {
            db = new FormCRUDEntities1();
        }
        public FormService(FormCRUDEntities1 _db)
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
            Student input = new Student()
            {
                ClientId=model.ClientId,
                ClientName = model.ClientName,
                Descripion = model.Descripion,
                Email = model.Email,
                iAccept = model.iAccept,
                ProjectType = model.ProjectType,
                HourlyRate = model.HourlyRate,
                enable = model.enable
            };
            db.Students.Add(input);
            return db.SaveChanges();
        }

        public int UpdateInput(FormViewModel model)
        {
            var input = db.Students.Where(s => s.Id == model.id).FirstOrDefault();
            if (input!= null)
            {
                input.ClientId = model.ClientId;
                input.ClientName = model.ClientName;
                input.Descripion = model.Descripion;
                input.Email = model.Email;
                input.iAccept = model.iAccept;
                input.ProjectType = model.ProjectType;
                input.HourlyRate = model.HourlyRate;
                input.enable = model.enable;

                db.Entry<Student>(input).State = System.Data.Entity.EntityState.Modified;
                return db.SaveChanges();
                    
            }
            else
            {
                return -1;
            }
        }
        public List<FormViewModel> GetCRUDSList()
        {
            var inputs = db.Students.ToList();
            List<FormViewModel> fv = new List<FormViewModel>();
            foreach (var input in inputs)
            {
                FormViewModel formView = new FormViewModel()
                {
                ClientId = input.ClientId,
                ClientName = input.ClientName, 
                Descripion = input.Descripion,
                Email =  input.Email,
                iAccept = input.iAccept,
                ProjectType = input.ProjectType, 
                HourlyRate = input.HourlyRate
            };
                fv.Add(formView);
            }
            return fv;
        }


        public FormViewModel GetInput(int id)
        {
            var input = db.Students.Where(s => s.Id == id).FirstOrDefault();
            if (input != null)
            {
                FormViewModel formView = new FormViewModel()
                {
                    ClientId = input.ClientId,
                    ClientName = input.ClientName,
                    Descripion = input.Descripion,
                    Email = input.Email,
                    iAccept = input.iAccept,
                    ProjectType = input.ProjectType,
                    HourlyRate = input.HourlyRate
                };
                return formView;
            }
            else
            {
                return null;
            }
        }

        public int DeleteInput(int id)
        {
            var input = db.Students.Where(s => s.Id == id).FirstOrDefault();
            if (input != null)
            {
                db.Students.Remove(input);
                return db.SaveChanges();
            }
            else
            {
                return 0;
            }
        }
    }
}