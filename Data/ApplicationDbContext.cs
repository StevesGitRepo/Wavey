﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using HotBug.Models;
using Microsoft.AspNetCore.Identity;

namespace HotBug.Data
{
    //ApplicationDbContext extends IdentityDbContext and supplied IdentityDbContex with type parameter of HBUser

    public class ApplicationDbContext : IdentityDbContext<HBUser>
        /*IdentityRole, string*/
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        
        public DbSet<Company> Companies { get; set; }
        public DbSet<Invite> Invites { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Ticket> Tickets { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<ProjectPriority> ProjectPriorities { get; set; }
        public DbSet<TicketAttachment> TicketAttachments { get; set; }
        public DbSet<TicketComment> TicketComments { get; set; }
        public DbSet<TicketHistory> TicketHistories { get; set; }
        public DbSet<TicketPriority> TicketPriorities { get; set; }
        public DbSet<TicketStatus> TicketStatuses { get; set; }
        public DbSet<TicketType> TicketTypes { get; set; }
    }
}