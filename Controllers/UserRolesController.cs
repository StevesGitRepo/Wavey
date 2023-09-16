using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using HotBug.Extensions;
using HotBug.Models;
using HotBug.Models.ViewModels;
using HotBug.Services.Interfaces;

namespace HotBug.Controllers
{
    [Authorize]
    public class UserRolesController : Controller
    {
        private readonly IHBRolesService _rolesService;
        private readonly IHBCompanyInfoService _companyInfoService;

        public UserRolesController(IHBCompanyInfoService companyInfoService,
                                   IHBRolesService rolesService)
        {
            _companyInfoService = companyInfoService;
            _rolesService = rolesService;
        }

        [HttpGet]
        public async Task<IActionResult> ManageUserRoles()
        {

            // add an instance of the ViewModel as a list
            List<ManageUserRolesViewModel> model = new();

            // get CompanyId
            int companyId = User.Identity.GetCompanyId()!.Value;

            // get all users in the company
            List<HBUser> users = await _companyInfoService.GetAllMembersAsync(companyId);
            // instantiate ViewModel


            // use _roleService


            // Create multi-selects
            foreach (HBUser user in users)
            {
                ManageUserRolesViewModel viewModel = new();
                viewModel.HBUser = user;
                IEnumerable<string> selected = await _rolesService.GetUserRolesAsync(user);
                viewModel.Roles = new MultiSelectList(await _rolesService.GetRolesAsync(), "Name", "Name", selected);

                model.Add(viewModel);
            }

            // return the model to the view
            return View(model);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ManageUserRoles(ManageUserRolesViewModel member)
        {
            // get the company id
            int companyId = User.Identity.GetCompanyId().Value;

            // Instantiate the ITUser
            HBUser hBUser = (await _companyInfoService.GetAllMembersAsync(companyId)).FirstOrDefault(u => u.Id == member.HBUser.Id);

            // Get the roles for the user
            IEnumerable<string> roles = await _rolesService.GetUserRolesAsync(hBUser);


            // Grab the selected roles  
            string userRole = member.SelectedRoles.FirstOrDefault();

            if (!string.IsNullOrEmpty(userRole))
            {
                // Remove the user from the roles
                if (await _rolesService.RemoveUserFromRolesAsync(hBUser, roles))
                {
                    // Add the user to the role
                    await _rolesService.AddUserToRoleAsync(hBUser, userRole);
                }
            }

            // return to the view
            return RedirectToAction(nameof(ManageUserRoles));
        }
    }
}

