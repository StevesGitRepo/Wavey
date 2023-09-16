﻿using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using System.Security.Principal;

namespace HotBug.Extensions
{
    public static class IdentityExtensions
    {
        public static int? GetCompanyId(this IIdentity identity)
        {
            //FindFirst gives immediate access to the first claim that matches the specified type
            Claim claim = ((ClaimsIdentity)identity).FindFirst("CompanyId")!;
            return (claim != null) ? int.Parse(claim.Value) : null;
        }
    }
}
