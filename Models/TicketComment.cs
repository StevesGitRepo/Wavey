using System.ComponentModel;

namespace HotBug.Models
{
    public class TicketComment
    {
        //Id (Primary Key)
        public int Id { get; set; }

        //Comment
        [DisplayName("Member Comment")]
        public string? Comment { get; set; }

        //Created
        [DisplayName("Date")]
        public DateTimeOffset Created { get; set; }

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
