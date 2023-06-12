using Microsoft.AspNetCore.Identity;
using HotBug.Models;

namespace HotBug.Services.Interfaces
{
    //There is no code but the definition of the methods or properties in an interface
    //Classes contain implementation code
    //everything within an Interface is public, Interfaces contain methods (functions) for classes
    public interface IHBRolesService
    {
        public Task<bool> IsUserInRoleAsync(HBUser user, string rolename);

        public Task<IEnumerable<string>> GetUserRolesAsync(HBUser user);

        public Task<bool> AddUserToRoleAsync(HBUser user, string rolename);

        public Task<bool> RemoveUserFromRoleAsync(HBUser user, string rolename);

        public Task<bool> RemoveUserFromRolesAsync(HBUser user, IEnumerable<string> roles);

        public Task<List<HBUser>> GetUsersInRoleAsync(string rolename, int companyId);

        public Task<List<HBUser>> GetUsersNotInRoleAsync(string rolename, int companyId);

        public Task<string> GetRoleNameByIdAsync(string roleId);
        Task<List<IdentityRole>> GetRolesAsync();
    }
}
