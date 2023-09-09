using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Net.Sockets;

namespace HotBug.Models
{
    public class Project
    {
        //Primary Key, Entity Framework recognizes "Id" as the primary key
        public int Id { get; set; }
        private DateTime _startDate;
        private DateTime _endDate;

        //CompanyId - Foreign Key
        [DisplayName("Company Id")]
        public int? CompanyId { get; set; }

        //Name
        [Required]
        [StringLength(50)]
        [DisplayName("Project Name")]
        public string? Name { get; set; }

        //Description
        [DisplayName("Description")]
        public string? Description { get; set; }

        //StartDate
        [DisplayName("Start Date")]
        [DataType(DataType.DateTime)]
        public DateTime StartDate
        {
            get => _startDate;
            set => _startDate = DateTime.SpecifyKind(value, DateTimeKind.Utc);
        }

        //EndDate
        [DisplayName("End Date")]
        [DataType(DataType.DateTime)]
        public DateTime EndDate
        {
            get => _endDate;
            set => _endDate = DateTime.SpecifyKind(value, DateTimeKind.Utc);
        }

        //ProjectPriorityId - Foreign Key
        [DisplayName("Priority")]
        public int ProjectPriorityId { get; set; }

        //Attachment
        [NotMapped]
        [DataType(DataType.Upload)]
        public IFormFile? ImageFormFile { get; set; }

        [DisplayName("File Name")]
        public string? ImageFileName { get; set; }
        public byte[]? ImageFileData { get; set; }

        [DisplayName("File Extension")]
        public string? ImageContentType { get; set; }

        //Archived
        [DisplayName("Archived")]
        public bool Archived { get; set; }

        //Navigation

        public virtual Company? Company { get; set; }

        public virtual ProjectPriority? ProjectPriority { get; set; }
        public virtual ICollection<HBUser> Members { get; set; } = new HashSet<HBUser>();

        public virtual ICollection<Ticket> Tickets { get; set; } = new HashSet<Ticket>();
    }
}
