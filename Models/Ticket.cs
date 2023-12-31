﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Net.Sockets;

namespace HotBug.Models
{
    public class Ticket
    {
        //Primary Key
        public int Id { get; set; }
        private DateTime _created;
        private DateTime _updated;

        //Lookup tables

        //[Required]
        [StringLength(50)]
        [DisplayName("Ticket Name")]
        public string? Title { get; set; }

        //[Required]
        [DisplayName("Description")]
        public string? Description { get; set; }

        [DisplayName("Created")]
        [DataType(DataType.DateTime)]
        public DateTime Created
        {
            get => _created;
            set => _created = DateTime.SpecifyKind(value, DateTimeKind.Utc);
        }

        [DisplayName("Created")]
        [DataType(DataType.DateTime)]
        public DateTime Updated
        {
            get => _updated;
            set => _updated = DateTime.SpecifyKind(value, DateTimeKind.Utc);
        }

        [DisplayName("Archived")]
        public bool Archived { get; set; }

		[DisplayName("Archived By Project")]
        public bool ArchivedByProject { get; set; }

        [DisplayName("Project")]
        public int ProjectId { get; set; }

		[DisplayName("Ticket Type")]
        public int TicketTypeId { get; set; }

        [DisplayName("Ticket Priority")]
        public int TicketPriorityId { get; set; }

        [DisplayName("Ticket Status")]
        public int TicketStatusId { get; set; }

        //HBUsers

        [DisplayName("Ticket Owner")]
        public string? OwnerUserId { get; set; }

        [DisplayName("Ticket Developer")]
        public string? DeveloperUserId { get; set; }

        //Navigation Properties
        public virtual Project? Project { get; set; }

        public virtual TicketType? TicketType { get; set; }

        public virtual TicketPriority? TicketPriority { get; set; }

        public virtual TicketStatus? TicketStatus { get; set; }

        public virtual HBUser? OwnerUser { get; set; }

        public virtual HBUser? DeveloperUser { get; set; }

        public virtual ICollection<TicketComment> Comments { get; set; } = new HashSet<TicketComment>();

        public virtual ICollection<TicketAttachment> Attachments { get; set; } = new HashSet<TicketAttachment>();

        public virtual ICollection<Notification> Notifications { get; set; } = new HashSet<Notification>();

        public virtual ICollection<TicketHistory> History { get; set; } = new HashSet<TicketHistory>();
    }
}
