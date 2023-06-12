using Microsoft.Build.Evaluation;
using HotBug.Models;
using Project = HotBug.Models.Project;

namespace HotBug.Services.Interfaces
{
    public interface IHBProjectService
    {
        public Task AddNewProjectAsync(Project project);

        public Task<bool> AddProjectManagerAsync(string userId, int projectId);

        public Task<bool> AddUserToProjectAsync(string userId, int projectId);

        public Task ArchiveProjectAsync(Project project);

        public Task<List<Project>> GetAllProjectsByCompanyAsync(int companyId);

        public Task<List<Project>> GetAllProjectsByPriority(int companyId, string priorityName);

        public Task<List<HBUser>> GetAllProjectMembersExceptPMAsync(int projectId);

        public Task<List<Project>> GetArchivedProjectsByCompanyAsync(int companyId);

        public Task<List<HBUser>> GetDevelopersOnProjectAsync(int projectId);

        public Task<HBUser> GetProjectManagerAsync(int projectId);

        public Task<List<HBUser>> GetProjectMembersByRoleAsync(int projectId, string role);

        public Task<Project> GetProjectByIdAsync(int projectId, int companyId);

        public Task<HBUser> GetSubmittersOnProjectAsync(int projectId);

        public Task<List<Project>> GetUnassignedProjectsAsync(int companyId);

        public Task<List<HBUser>> GetUsersNotOnProjectAsync(int projectId, int companyId);

        public Task<List<Project>> GetUserProjectsAsync(string userId);

        public Task<bool> IsAssignedProjectManagerAsync(string userId, int projectId);

        public Task<bool> IsUserOnProjectAsync(string userId, int projectId);

        public Task<int> LookupProjectPriorityId(string priorityName);

        public Task RemoveProjectManagerAsync(int projectId);

        public Task RemoveUsersFromProjectByRoleAsync(string role, int projectId);

        public Task RemoveUserFromProjectAsync(string userId, int projectId);

        public Task RestoreProjectAsync(Project project);

        public Task UpdateProjectAsync(Project project);
    }
}
