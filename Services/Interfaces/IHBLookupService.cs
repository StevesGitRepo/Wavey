using HotBug.Models;

namespace HotBug.Services.Interfaces
{
    public interface IHBLookupService
    {
        public Task<List<TicketPriority>> GetTicketPrioritiesAsync();

        public Task<List<TicketStatus>> GetTicketStatusesAsync();

        public Task<List<TicketType>> GetTicketTypesAsync();

        public Task<List<ProjectPriority>> GetProjectPrioritiesAsync();
    }
}
