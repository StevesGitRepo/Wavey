using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.EntityFrameworkCore;
using HotBug.Data;
using HotBug.Models;
using HotBug.Services.Interfaces;

namespace HotBug.Services
{
    public class HBNotificationService : IHBNotifcationService
    {
        private readonly ApplicationDbContext _context;
        private readonly IEmailSender _emailSender;
        private readonly IHBRolesService _roleService;
        public HBNotificationService(ApplicationDbContext context,
                              IEmailSender emailSender,
                              IHBRolesService roleService)
        {
            _context = context;
            _emailSender = emailSender;
            _roleService = roleService;
        }
        public async Task AddNotificationAsync(Notification notification)
        {
            try
            {
                await _context.AddAsync(notification);
                await _context.SaveChangesAsync();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task<List<Notification>> GetReceivedNotificationsAsync(string userId)
        {
            try
            {
                List<Notification> notifications = await _context.Notifications
                                                                    .Include(n => n.Recipient)
                                                                    .Include(n => n.Sender)
                                                                    .Include(n => n.Ticket)
                                                                        .ThenInclude(t => t.Project)
                                                                    .Where(n => n.RecipientId == userId).ToListAsync();
                return notifications;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task<List<Notification>> GetSentNotificationsAsync(string userId)
        {
            try
            {
                List<Notification> notifications = await _context.Notifications
                                                                    .Include(n => n.Recipient)
                                                                    .Include(n => n.Sender)
                                                                    .Include(n => n.Ticket)
                                                                        .ThenInclude(t => t.Project)
                                                                    .Where(n => n.SenderId == userId).ToListAsync();
                return notifications;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task<bool> SendEmailNotificationAsync(Notification notification, string emailSubject)
        {
            HBUser hBUser = await _context.Users.FirstOrDefaultAsync(u => u.Id == notification.RecipientId);

            if(hBUser != null)
            {
                string btUserEmail = hBUser.Email;
                string message = notification.Message;

                //Send Email
                try
                {
                    await _emailSender.SendEmailAsync(btUserEmail, emailSubject, message);
                    return true;
                }
                catch (Exception)
                {

                    throw;
                }
            }
            else
            {
                return false;
            }
        }

        public async Task SendEmailNotificationsByRoleAsync(Notification notification, int companyId, string role)
        {
            try
            {
                List<HBUser> members = await _roleService.GetUsersInRoleAsync(role, companyId);
                
                foreach (HBUser hBUser in members) 
                {
                    notification.RecipientId = hBUser.Id;
                    await SendEmailNotificationAsync(notification, notification.Title);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task SendMembersEmailNotificationsAsync(Notification notification, List<HBUser> members)
        {
            try
            {
                foreach (HBUser hBUser in members)
                {
                    notification.RecipientId = hBUser.Id;
                    await SendEmailNotificationAsync(notification, notification.Title);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
