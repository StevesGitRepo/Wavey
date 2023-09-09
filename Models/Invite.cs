using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace HotBug.Models
{
    public class Invite
    {
        public int Id { get; set; }
        private DateTime _inviteDate;
        private DateTime _joinDate;

        [DisplayName("Date Sent")]
        [DataType(DataType.DateTime)]
        public DateTime InviteDate
        {
            get => _inviteDate;
            set => _inviteDate = DateTime.SpecifyKind(value, DateTimeKind.Utc);
        }

        [DisplayName("Join Date")]
        [DataType(DataType.DateTime)]
        public DateTime JoinDate
        {
            get => _joinDate;
            set => _joinDate = DateTime.SpecifyKind(value, DateTimeKind.Utc);
        }

        [DisplayName("Code")]
        public Guid CompanyToken { get; set; }

        [DisplayName("Company")]
        public int CompanyId { get; set; }

        [DisplayName("Project")]
        public int ProjectId { get; set; }

        [DisplayName("Invitor")]
        public string? InvitorId { get; set; }

        [DisplayName("Invitee")]
        public string? InviteeId { get; set; }

        [DisplayName("Invitee Email")]
        public string? InviteeEmail { get; set; }

        [DisplayName("Invitee First Name")]
        public string? InviteeFirstName { get; set; }

        [DisplayName("Invitee Last Name")]
        public string? InviteeLastName { get; set; }

        public bool IsValid { get; set; }

        //Navigation properties
        public virtual Company Company { get; set; }
        public virtual Project Project { get; set; }
        public virtual HBUser Invitor { get; set; }
        public virtual HBUser Invitee { get; set; }
    }
}
