using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using HotBug.Extensions;

namespace HotBug.Models
{
    public class TicketAttachment
    {
        //properies:
        //Id is the primary key
        public int Id { get; set; }
        private DateTime _created;

        //TicketId is the foreign key
        [DisplayName("Ticket")]
        public int TicketId { get; set; }

        [DisplayName("File Date")]
        [DataType(DataType.DateTime)]
        public DateTime Created
        {
            get => _created;
            set => _created = DateTime.SpecifyKind(value, DateTimeKind.Utc);
        }

        [DisplayName("Team Member")]
        public string? UserId { get; set; }

        [DisplayName("File Description")]
        public string? Description { get; set; }

        //Ticket attachment, Form type
        [NotMapped]
        [DisplayName("Select a file")]
        [DataType(DataType.Upload)]
        [MaxFileSize(1024 * 1024)]
        [AllowedExtensions(new string[] { ".jpg", ".png", ".doc", ".docx", ".xls", ".xlsx", ".pdf", ".ppt", ".pptx", ".html" })]
        public IFormFile FormFile { get; set; }

        [DisplayName("File Name")]
        public string? FileName { get; set; }
        public byte[] FileData { get; set; }

        [DisplayName("File Extension")]
        public string? FileContentType { get; set; }



        //Navigation Properties
        public virtual Ticket Ticket { get; set; }
        public virtual HBUser User { get; set; }
    }
}
