using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace HotBug.Models
{
    public class Company
    {
        public int Id { get; set; }

        [DisplayName("Company Name")]
        public string? Name { get; set; }

        [DisplayName("Company Description")]
        public string? Description { get; set; }

        //Navigation properties

        public virtual ICollection<HBUser> Members { get; set; }
        public virtual ICollection<Project> Projects { get; set; }

        //create relationship to Invitees
        public virtual ICollection<Invite> Invites { get; set; }
    }
}
