using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions;
using System.Security.Cryptography.X509Certificates;
using HotBug.Data;
using HotBug.Models;
using HotBug.Services.Interfaces;

namespace HotBug.Services
{
    public class HBCompanyInfoService : IHBCompanyInfoService
    {
        //Dependency injection
        private readonly ApplicationDbContext _context;

        public HBCompanyInfoService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Company> AddCompanyAsync(Company company)
        {
            try
            {
                await _context.AddAsync(company);
                await _context.SaveChangesAsync();
                return company;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task<Company> AddUserAsync(string Name, string Description)
        {
            Name = Name.ToLower();
            Description = Description.ToLower();

            List<Company> companies = await _context.Companies!.ToListAsync();

            foreach (Company company in companies)
            {
                if(company.Name == Name && company.Description == Description)
                {
                    return company;
                }
            }

            Company newCompany = new()
            {
                Name = Name,
                Description = Description
            };

            await AddCompanyAsync(newCompany);
            return newCompany;
        }

        public async Task<List<HBUser>> GetAllMembersAsync(int companyId)
        {
            List<HBUser> result = new List<HBUser>();
            result = await _context.Users.Where(u=> u.CompanyId == companyId).ToListAsync();
            return result;
        }

        public async Task<List<Project>> GetAllProjectsAsync(int companyId)
        {
            List<Project> result = new List<Project>();

            result = await _context.Projects.Where(p => p.CompanyId == companyId)
                                            .Include(p => p.Members)
                                            .Include(p => p.Tickets)
                                                .ThenInclude(t=> t.Comments)
                                            .Include(p => p.Tickets)
                                                .ThenInclude(t => t.Attachments)
                                            .Include(p => p.Tickets)
                                                .ThenInclude(t => t.History)
                                            .Include(p => p.Tickets)
                                                .ThenInclude(t => t.Notifications)
                                            .Include(p => p.Tickets)
                                                .ThenInclude(t => t.DeveloperUser)
                                            .Include(p => p.Tickets)
                                                .ThenInclude(t => t.OwnerUser)
                                            .Include(p => p.Tickets)
                                                .ThenInclude(t => t.TicketStatus)
                                            .Include(p => p.Tickets)
                                                .ThenInclude(t => t.TicketPriority)
                                            .Include(p => p.Tickets)
                                                .ThenInclude(t => t.TicketType)
                                            .Include(p => p.ProjectPriority)
                                            .ToListAsync();

            return result;
        }

        public async Task<List<Ticket>> GetAllTicketsAsync(int companyId)
        {
            List<Ticket> result = new List<Ticket>(); //instatiation
            List<Project> projects = new List<Project>();           

            projects = await GetAllProjectsAsync(companyId);

            result = projects.SelectMany(p => p.Tickets).ToList();

            return result;

        }

        public async Task<Company> GetCompanyInfoByIdAsync(int? companyId)
        {
            Company result = new();
            
            if(companyId != null) 
            {
                result = await _context.Companies
                                        .Include(c => c.Members)
                                        .Include(c => c.Projects)
                                        .Include(c => c.Invites)
                                        .FirstOrDefaultAsync(c => c.Id == companyId);
            }
            return result;
        }
    }
}
