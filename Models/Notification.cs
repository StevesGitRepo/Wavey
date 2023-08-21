using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Net.Sockets;
using System.Linq;
using System.Threading.Tasks;


namespace HotBug.Models
{
    public class Notification
    {
        //Primary Key
        public int Id { get; set; }

        //Foreign Key
        [DisplayName("Ticket")]
        public int TicketId { get; set; }

        [DisplayName("Title")]
        public string? Title { get; set; }

        [DisplayName("Message")]
        public string? Message { get; set; }

        [DataType(DataType.Date)]
        [DisplayName("Name")]
        public DateTimeOffset Created { get; set; }

        [Required]
        [DisplayName("Recipient")]
        public string? RecipientId { get; set; }

        [Required]
        [DisplayName("Sender")]
        public string? SenderId { get; set; }

        [DisplayName("Has been viewed")]
        public bool Viewed { get; set; }

        //Navigation properties

        public virtual Ticket Ticket { get; set; }
        public virtual HBUser Recipient { get; set; }
        public virtual HBUser Sender { get; set; }
    }
}
