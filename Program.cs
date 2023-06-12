using HotBug.Data;
using HotBug.Models;
using HotBug.Services.Interfaces;
using HotBug.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.EntityFrameworkCore;
using HotBug.Services.Factories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();

/*builder.Services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
    .AddEntityFrameworkStores<ApplicationDbContext>();*/
builder.Services.AddIdentity<HBUser, IdentityRole>(options => options.SignIn.RequireConfirmedAccount = true)
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddClaimsPrincipalFactory<HBUserClaimsPrincipalFactory>()
    .AddDefaultUI()
    .AddDefaultTokenProviders();


//Custom Services
builder.Services.AddScoped<IHBRolesService, HBRolesService>();
builder.Services.AddScoped<IHBCompanyInfoService, HBCompanyInfoService>();
builder.Services.AddScoped<IHBProjectService, HBProjectService>();
builder.Services.AddScoped<IHBTicketService, HBTicketService>();
builder.Services.AddScoped<IHBTicketHistoryService, HBTicketHistoryService>();
builder.Services.AddScoped<IHBNotifcationService, HBNotificationService>();
builder.Services.AddScoped<IHBInviteService, HBInviteService>();
builder.Services.AddScoped<IHBFileService, HBFileService>();
builder.Services.AddScoped<IHBLookupService, HBLookupService>();
builder.Services.AddScoped<IEmailSender, HBEmailService>();
builder.Services.Configure<MailSettings>(builder.Configuration.GetSection("MailSettings"));

builder.Services.AddControllersWithViews();


builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseMigrationsEndPoint();
}
else
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
app.MapRazorPages();

app.Run();
