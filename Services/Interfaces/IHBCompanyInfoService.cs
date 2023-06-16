using HotBug.Models;
using Microsoft.Extensions;

namespace HotBug.Services.Interfaces
{
    public interface IHBCompanyInfoService
    {
        public Task<Company> AddCompanyAsync(Company company);
        public Task<Company> AddUserAsync(string Name, string Description);
        public Task<Company> GetCompanyInfoByIdAsync(int? companyId);
        public Task<List<HBUser>> GetAllMembersAsync(int companyId);
        public Task<List<Project>> GetAllProjectsAsync(int companyId);
        public Task<List<Ticket>> GetAllTicketsAsync(int ticketId);
    }
}
