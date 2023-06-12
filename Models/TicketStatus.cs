using System.ComponentModel;

namespace HotBug.Models
{
    public class TicketStatus
    {
        //Primary Key
        public int Id { get; set; }

        [DisplayName("Status Name")]
        public string? Name { get; set; }
    }
}
