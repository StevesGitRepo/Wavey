using Microsoft.AspNetCore.Mvc.Rendering;

namespace HotBug.Models.ViewModels
{
    public class ManageUserRolesViewModel
    {
        public HBUser HBUser { get; set; }

        public MultiSelectList Roles { get; set; }

        public List<string> SelectedRoles { get; set; }
    }
}
