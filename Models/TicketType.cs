using System.ComponentModel;

namespace HotBug.Models
{
    public class TicketType
    {
        //Primary Key
        public int Id { get; set; }

        [DisplayName("Type Name")]
        public string? Name { get; set; }
    }
}
