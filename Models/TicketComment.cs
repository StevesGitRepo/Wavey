using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace HotBug.Models
{
    public class TicketComment
    {
        //Id (Primary Key)
        public int Id { get; set; }
        private DateTime _created;

        //Comment
        [DisplayName("Member Comment")]
        public string? Comment { get; set; }

        //Created
        [DisplayName("Date")]
        [DataType(DataType.DateTime)]
        public DateTime Created
        {
            get => _created;
            set => _created = DateTime.SpecifyKind(value, DateTimeKind.Utc);
        }

        //TicketId
        [DisplayName("Ticket")]
        public int TicketId { get; set; }

        //User Id
        [DisplayName("Team Member")]
        public string? UserId { get; set; }

        //Navigation Properties
        //Ticket
        public virtual Ticket Ticket { get; set; }
        //user
        public virtual HBUser User { get; set; }
    }
}
