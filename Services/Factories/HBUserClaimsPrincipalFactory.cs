using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using System.Security.Claims;
using HotBug.Models;

namespace HotBug.Services.Factories
{
    public class HBUserClaimsPrincipalFactory : UserClaimsPrincipalFactory<HBUser, IdentityRole>
    {
        public HBUserClaimsPrincipalFactory(UserManager<HBUser> userManager, 
                                    RoleManager<IdentityRole> roleManager, 
                                    IOptions<IdentityOptions> optionsAccessor) 
        : base(userManager, roleManager, optionsAccessor)
        {
        }

        protected override async Task<ClaimsIdentity> GenerateClaimsAsync(HBUser user)
        {
            ClaimsIdentity identity = await base.GenerateClaimsAsync(user);
            identity.AddClaim(new Claim("CompanyId", user.CompanyId.ToString()));
            return identity;
        }
    }
}
