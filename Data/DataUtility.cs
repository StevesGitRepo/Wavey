using HotBug.Models.Enums;
using HotBug.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Npgsql;

namespace HotBug.Data;

public static class DataUtility
{
    //Company Ids
    private static int company1Id;

    public static string GetConnectionString(IConfiguration configuration)
    {
        //The default connection string will come from appSettings like usual
        var connectionString = configuration.GetSection("pgSettings")["pgConnection"];
        //It will be automatically overwritten if we are running on Heroku
        var databaseUrl = Environment.GetEnvironmentVariable("DATABASE_URL");
        return string.IsNullOrEmpty(databaseUrl) ? connectionString : BuildConnectionString(databaseUrl);
    }

    public static string BuildConnectionString(string databaseUrl)
    {
        //Provides an object representation of a uniform resource identifier (URI) and easy access to the parts of the URI.
        var databaseUri = new Uri(databaseUrl);
        var userInfo = databaseUri.UserInfo.Split(':');
        //Provides a simple way to create and manage the contents of connection strings used by the NpgsqlConnection class.
        var builder = new NpgsqlConnectionStringBuilder
        {
            Host = databaseUri.Host,
            Port = databaseUri.Port,
            Username = userInfo[0],
            Password = userInfo[1],
            Database = databaseUri.LocalPath.TrimStart('/'),
            SslMode = SslMode.Prefer,
            TrustServerCertificate = true
        };
        return builder.ToString();
    }

    public static async Task ManageDataAsync(IHost host, IConfiguration configuration)
    {
        using var svcScope = host.Services.CreateScope();
        var svcProvider = svcScope.ServiceProvider;
        //Service: An instance of RoleManager
        var dbContextSvc = svcProvider.GetRequiredService<ApplicationDbContext>();
        //Service: An instance of RoleManager
        var roleManagerSvc = svcProvider.GetRequiredService<RoleManager<IdentityRole>>();
        //Service: An instance of the UserManager
        var userManagerSvc = svcProvider.GetRequiredService<UserManager<HBUser>>();
        //Migration: This is the programmatic equivalent to Update-Database
        await dbContextSvc.Database.MigrateAsync();


        //Custom  Bug Tracker Seed Methods
        await SeedRolesAsync(roleManagerSvc);
        await SeedDefaultCompaniesAsync(dbContextSvc);
        await SeedDefaultUsersAsync(userManagerSvc);
        await SeedDefaultTicketTypeAsync(dbContextSvc);
        await SeedDefaultTicketStatusAsync(dbContextSvc);
        await SeedDefaultTicketPriorityAsync(dbContextSvc);
        await SeedDefaultProjectPriorityAsync(dbContextSvc);
        await SeedDefautProjectsAsync(dbContextSvc);
        await SeedDefautTicketsAsync(dbContextSvc);
    }


    public static async Task SeedRolesAsync(RoleManager<IdentityRole> roleManager)
    {
        //Seed Roles
        await roleManager.CreateAsync(new IdentityRole(Roles.Admin.ToString()));
        await roleManager.CreateAsync(new IdentityRole(Roles.ProjectManager.ToString()));
        await roleManager.CreateAsync(new IdentityRole(Roles.Developer.ToString()));
        await roleManager.CreateAsync(new IdentityRole(Roles.Submitter.ToString()));
        await roleManager.CreateAsync(new IdentityRole(Roles.DemoUser.ToString()));
    }

    public static async Task SeedDefaultCompaniesAsync(ApplicationDbContext context)
    {
        try
        {
            IList<Company> defaultcompanies = new List<Company>() {
                    new Company() { Name = "TechBuilder", Description="Helping You Build Technological Strength" },
                };

            var dbCompanies = context.Companies.Select(c => c.Name).ToList();
            await context.Companies.AddRangeAsync(defaultcompanies.Where(c => !dbCompanies.Contains(c.Name)));
            await context.SaveChangesAsync();

            //Get company Ids
            company1Id = context.Companies.FirstOrDefault(p => p.Name == "TechBuilder").Id;
        }
        catch (Exception ex)
        {
            Console.WriteLine("*************  ERROR  *************");
            Console.WriteLine("Error Seeding Companies.");
            Console.WriteLine(ex.Message);
            Console.WriteLine("***********************************");
            throw;
        }
    }

    public static async Task SeedDefaultProjectPriorityAsync(ApplicationDbContext context)
    {
        try
        {
            IList<ProjectPriority> projectPriorities = new List<ProjectPriority>() {
                                                    new ProjectPriority() { Name = HBProjectPriority.Low.ToString() },
                                                    new ProjectPriority() { Name = HBProjectPriority.Medium.ToString() },
                                                    new ProjectPriority() { Name = HBProjectPriority.High.ToString() },
                                                    new ProjectPriority() { Name = HBProjectPriority.Urgent.ToString() },
                };

            var dbProjectPriorities = context.ProjectPriorities!.Select(c => c.Name).ToList();
            await context.ProjectPriorities!.AddRangeAsync(projectPriorities.Where(c => !dbProjectPriorities.Contains(c.Name)));
            await context.SaveChangesAsync();

        }
        catch (Exception ex)
        {
            Console.WriteLine("*************  ERROR  *************");
            Console.WriteLine("Error Seeding Project Priorities.");
            Console.WriteLine(ex.Message);
            Console.WriteLine("***********************************");
            throw;
        }
    }

    public static async Task SeedDefautProjectsAsync(ApplicationDbContext context)
    {

        //Get project priority Ids
        int priorityLow = context.ProjectPriorities!.FirstOrDefault(p => p.Name == HBProjectPriority.Low.ToString())!.Id;
        int priorityMedium = context.ProjectPriorities!.FirstOrDefault(p => p.Name == HBProjectPriority.Medium.ToString())!.Id;
        int priorityHigh = context.ProjectPriorities!.FirstOrDefault(p => p.Name == HBProjectPriority.High.ToString())!.Id;
        int priorityUrgent = context.ProjectPriorities!.FirstOrDefault(p => p.Name == HBProjectPriority.Urgent.ToString())!.Id;

        try
        {
            IList<Project> projects = new List<Project>() {
                     new Project()
                     {
                         CompanyId = company1Id,
                         Name = "Build a student Dashboard",
                         Description="Some State College is requesting a dashboard that allows students to see their academic progress in realtime. The dashboard should show grades as well as realtime attendance and assignment progress" ,
                         StartDate = new DateTime(2022,10,20),
                         EndDate = new DateTime(2022,10,20).AddMonths(6),
                         ProjectPriorityId = priorityLow
                     },
                     new Project()
                     {
                         CompanyId = company1Id,
                         Name = "Build a Marketing Automation Application",
                         Description="Candidate's custom built web application using .Net Core with MVC, a postgres database and hosted in a heroku container.  The app is designed for the candidate to create, update and maintain a live marketing automation site.",
                         StartDate = new DateTime(2022,10,20),
                         EndDate = new DateTime(2022,10,20).AddMonths(4),
                         ProjectPriorityId = priorityMedium
                     },
                     new Project()
                     {
                         CompanyId = company1Id,
                         Name = "Build an Issue Tracking Web Application",
                         Description="A custom designed .Net Core application with postgres database.  The application is a multi tennent application designed to track issue tickets' progress.  Implemented with identity and user roles, Tickets are maintained in projects which are maintained by users in the role of projectmanager.  Each project has a team and team members.",
                         StartDate = new DateTime(2022,10,20),
                         EndDate = new DateTime(2022,10,20).AddMonths(7),
                         ProjectPriorityId = priorityHigh
                     },
                     new Project()   
                     {
                         CompanyId = company1Id,
                         Name = "Build an Address Book Web Application",
                         Description="A custom designed .Net Core application with postgres database.  This is an application to serve as a rolodex of contacts for a given user..",
                         StartDate = new DateTime(2022,10,20),
                         EndDate = new DateTime(2022,10,20).AddMonths(3),
                         ProjectPriorityId = priorityLow
                     },
                    new Project()
                     {
                         CompanyId = company1Id,
                         Name = "Build a Movie Information Web Application",
                         Description="A custom designed .Net Core application with postgres database.  An API based application allows users to input and import movie posters and details including cast and crew information.",
                         StartDate = new DateTime(2022,10,20),
                         EndDate = new DateTime(2022,10,20).AddMonths(5),
                         ProjectPriorityId = priorityHigh
                     }
                };

            var dbProjects = context.Projects.Select(c => c.Name).ToList();
            await context.Projects!.AddRangeAsync(projects.Where(c => !dbProjects.Contains(c.Name)));
            await context.SaveChangesAsync();
        }
        catch (Exception ex)
        {
            Console.WriteLine("*************  ERROR  *************");
            Console.WriteLine("Error Seeding Projects.");
            Console.WriteLine(ex.Message);
            Console.WriteLine("***********************************");
            throw;
        }
    }



    public static async Task SeedDefaultUsersAsync(UserManager<HBUser> userManager)
    {


        //Seed Default Admin
        var defaultUser = new HBUser
        {
            UserName = "demo.admin@bugtrackerpro.com",
            Email = "demo.admin@bugtrackerpro.com",
            FirstName = "Derek",
            LastName = "Jeter",
            EmailConfirmed = true,
            CompanyId = company1Id
        };
        try
        {
            var user = await userManager.FindByEmailAsync(defaultUser.Email);
            if (user == null)
            {
                await userManager.CreateAsync(defaultUser, "S3cureP@ssword");
                await userManager.AddToRoleAsync(defaultUser, Roles.Admin.ToString());
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine("*************  ERROR  *************");
            Console.WriteLine("Error Seeding Demo Admin User.");
            Console.WriteLine(ex.Message);
            Console.WriteLine("***********************************");
            throw;
        }

        //Seed Demo ProjectManager
        defaultUser = new HBUser
        {
            UserName = "demo.pm@bugtrackerpro.com",
            Email = "demo.pm@bugtrackerpro.com",
            FirstName = "Bernie",
            LastName = "Williams",
            EmailConfirmed = true,
            CompanyId = company1Id
        };
        try
        {
            var user = await userManager.FindByEmailAsync(defaultUser.Email);
            if (user == null)
            {
                await userManager.CreateAsync(defaultUser, "S3cureP@ssword");
                await userManager.AddToRoleAsync(defaultUser, Roles.ProjectManager.ToString());
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine("*************  ERROR  *************");
            Console.WriteLine("Error Seeding Demo ProjectManager1 User.");
            Console.WriteLine(ex.Message);
            Console.WriteLine("***********************************");
            throw;
        }

        //Seed Demo Developer User
        defaultUser = new HBUser
        {
            UserName = "demo.dev@bugtrackerpro.com",
            Email = "demo.dev@bugtrackerpro.com",
            FirstName = "Aaron",
            LastName = "Judge",
            EmailConfirmed = true,
            CompanyId = company1Id
        };
        try
        {
            var user = await userManager.FindByEmailAsync(defaultUser.Email);
            if (user == null)
            {
                await userManager.CreateAsync(defaultUser, "S3cureP@ssword");
                await userManager.AddToRoleAsync(defaultUser, Roles.Developer.ToString());
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine("*************  ERROR  *************");
            Console.WriteLine("Error Seeding Demo Developer1 User.");
            Console.WriteLine(ex.Message);
            Console.WriteLine("***********************************");
            throw;
        }

        //Seed Default Developer1 User
        defaultUser = new HBUser
        {
            UserName = "ashwari.singh@techbuilder.net",
            Email = "ashwari.singh@techbuilder.net",
            FirstName = "Ashwari",
            LastName = "Singh",
            EmailConfirmed = true,
            CompanyId = company1Id
        };
        try
        {
            var user = await userManager.FindByEmailAsync(defaultUser.Email);
            if (user == null)
            {
                await userManager.CreateAsync(defaultUser, "S3cureP@ssword");
                await userManager.AddToRoleAsync(defaultUser, Roles.Developer.ToString());
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine("*************  ERROR  *************");
            Console.WriteLine("Error Seeding Default Developer1 User.");
            Console.WriteLine(ex.Message);
            Console.WriteLine("***********************************");
            throw;
        }


        //Seed Default Developer2 User
        defaultUser = new HBUser
        {
            UserName = "madeline.johnson@techbuilder.net",
            Email = "madeline.johnson@techbuilder.net",
            FirstName = "Madeline",
            LastName = "Johnson",
            EmailConfirmed = true,
            CompanyId = company1Id
        };
        try
        {
            var user = await userManager.FindByEmailAsync(defaultUser.Email);
            if (user == null)
            {
                await userManager.CreateAsync(defaultUser, "S3cureP@ssword");
                await userManager.AddToRoleAsync(defaultUser, Roles.Developer.ToString());
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine("*************  ERROR  *************");
            Console.WriteLine("Error Seeding Default Developer2 User.");
            Console.WriteLine(ex.Message);
            Console.WriteLine("***********************************");
            throw;
        }


        //Seed Default Developer3 User
        defaultUser = new HBUser
        {
            UserName = "andre.blankenship@widgisoft.com",
            Email = "andre.blankenship@widgisoft.com",
            FirstName = "Andre",
            LastName = "Blankenship",
            EmailConfirmed = true,
            CompanyId = company1Id
        };
        try
        {
            var user = await userManager.FindByEmailAsync(defaultUser.Email);
            if (user == null)
            {
                await userManager.CreateAsync(defaultUser, "S3cureP@ssword");
                await userManager.AddToRoleAsync(defaultUser, Roles.Developer.ToString());
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine("*************  ERROR  *************");
            Console.WriteLine("Error Seeding Default Developer3 User.");
            Console.WriteLine(ex.Message);
            Console.WriteLine("***********************************");
            throw;
        }


        //Seed Default Developer4 User
        defaultUser = new HBUser
        {
            UserName = "terrance.turner@techbuilder.net",
            Email = "terrance.turner@techbuilder.net",
            FirstName = "Terrance",
            LastName = "Turner",
            EmailConfirmed = true,
            CompanyId = company1Id
        };
        try
        {
            var user = await userManager.FindByEmailAsync(defaultUser.Email);
            if (user == null)
            {
                await userManager.CreateAsync(defaultUser, "S3cureP@ssword");
                await userManager.AddToRoleAsync(defaultUser, Roles.Developer.ToString());
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine("*************  ERROR  *************");
            Console.WriteLine("Error Seeding Default Developer4 User.");
            Console.WriteLine(ex.Message);
            Console.WriteLine("***********************************");
            throw;
        }


        //Seed Default Developer5 User
        defaultUser = new HBUser
        {
            UserName = "jessica.simpson@widgisoft.com",
            Email = "jessica.simpson@widgisoft.com",
            FirstName = "Jessica",
            LastName = "Simpson",
            EmailConfirmed = true,
            CompanyId = company1Id
        };
        try
        {
            var user = await userManager.FindByEmailAsync(defaultUser.Email);
            if (user == null)
            {
                await userManager.CreateAsync(defaultUser, "S3cureP@ssword");
                await userManager.AddToRoleAsync(defaultUser, Roles.Developer.ToString());
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine("*************  ERROR  *************");
            Console.WriteLine("Error Seeding Default Developer5 User.");
            Console.WriteLine(ex.Message);
            Console.WriteLine("***********************************");
            throw;
        }
    }

    public static async Task SeedDefaultTicketTypeAsync(ApplicationDbContext context)
    {
        try
        {
            IList<TicketType> ticketTypes = new List<TicketType>() {
                new TicketType() { Name = HBTicketType.NewDevelopment.ToString() },      // Ticket involves development of a new, uncoded solution 
                new TicketType() { Name = HBTicketType.WorkTask.ToString() },            // Ticket involves development of the specific ticket description 
                     new TicketType() { Name = HBTicketType.Defect.ToString()},               // Ticket involves unexpected development/maintenance on a previously designed feature/functionality
                     new TicketType() { Name = HBTicketType.ChangeRequest.ToString() },       // Ticket involves modification development of a previously designed feature/functionality
                     new TicketType() { Name = HBTicketType.Enhancement.ToString() },         // Ticket involves additional development on a previously designed feature or new functionality
                     new TicketType() { Name = HBTicketType.GeneralTask.ToString() }          // Ticket involves no software development but may involve tasks such as configuations, or hardware setup
                };

            var dbTicketTypes = context.TicketTypes!.Select(c => c.Name).ToList();
            await context.TicketTypes.AddRangeAsync(ticketTypes.Where(c => !dbTicketTypes.Contains(c.Name)));
            await context.SaveChangesAsync();

        }
        catch (Exception ex)
        {
            Console.WriteLine("*************  ERROR  *************");
            Console.WriteLine("Error Seeding Ticket Types.");
            Console.WriteLine(ex.Message);
            Console.WriteLine("***********************************");
            throw;
        }
    }

    public static async Task SeedDefaultTicketStatusAsync(ApplicationDbContext context)
    {
        try
        {
            IList<TicketStatus> ticketStatuses = new List<TicketStatus>() {
                new TicketStatus() { Name = HBTicketStatus.New.ToString() },                 // Newly Created ticket having never been assigned
                new TicketStatus() { Name = HBTicketStatus.Development.ToString() },         // Ticket is assigned and currently being worked 
                new TicketStatus() { Name = HBTicketStatus.Testing.ToString()  },            // Ticket is assigned and is currently being tested
                    new TicketStatus() { Name = HBTicketStatus.Resolved.ToString()  },           // Ticket remains assigned to the developer but work in now complete
                };

            var dbTicketStatuses = context.TicketStatuses!.Select(c => c.Name).ToList();
            await context.TicketStatuses.AddRangeAsync(ticketStatuses.Where(c => !dbTicketStatuses.Contains(c.Name)));
            await context.SaveChangesAsync();

        }
        catch (Exception ex)
        {
            Console.WriteLine("*************  ERROR  *************");
            Console.WriteLine("Error Seeding Ticket Statuses.");
            Console.WriteLine(ex.Message);
            Console.WriteLine("***********************************");
            throw;
        }
    }

    public static async Task SeedDefaultTicketPriorityAsync(ApplicationDbContext context)
    {
        try
        {
            IList<TicketPriority> ticketPriorities = new List<TicketPriority>() {
                                                    new TicketPriority() { Name = HBTicketPriority.Low.ToString()  },
                                                    new TicketPriority() { Name = HBTicketPriority.Medium.ToString() },
                                                    new TicketPriority() { Name = HBTicketPriority.High.ToString()},
                                                    new TicketPriority() { Name = HBTicketPriority.Urgent.ToString()},
                };

            var dbTicketPriorities = context.TicketPriorities.Select(c => c.Name).ToList();
            await context.TicketPriorities!.AddRangeAsync(ticketPriorities.Where(c => !dbTicketPriorities.Contains(c.Name)));
            context.SaveChanges();

        }
        catch (Exception ex)
        {
            Console.WriteLine("*************  ERROR  *************");
            Console.WriteLine("Error Seeding Ticket Priorities.");
            Console.WriteLine(ex.Message);
            Console.WriteLine("***********************************");
            throw;
        }
    }



    public static async Task SeedDefautTicketsAsync(ApplicationDbContext context)
    {
        //Get project Ids
        int dashboardId = context.Projects!.FirstOrDefault(p => p.Name == "Build a student Dashboard")!.Id;
        int marketingId = context.Projects!.FirstOrDefault(p => p.Name == "Build a Marketing Automation Application")!.Id;
        int bugtrackerId = context.Projects!.FirstOrDefault(p => p.Name == "Build an Issue Tracking Web Application")!.Id;
        int movieId = context.Projects!.FirstOrDefault(p => p.Name == "Build a Movie Information Web Application")!.Id;
        int addressbookId = context.Projects!.FirstOrDefault(p => p.Name == "Build an Address Book Web Application")!.Id;

        //Get ticket type Ids
        int typeNewDev = context.TicketTypes!.FirstOrDefault(p => p.Name == HBTicketType.NewDevelopment.ToString())!.Id;
        int typeWorkTask = context.TicketTypes!.FirstOrDefault(p => p.Name == HBTicketType.WorkTask.ToString())!.Id;
        int typeDefect = context.TicketTypes!.FirstOrDefault(p => p.Name == HBTicketType.Defect.ToString())!.Id;
        int typeEnhancement = context.TicketTypes!.FirstOrDefault(p => p.Name == HBTicketType.Enhancement.ToString())!.Id;
        int typeChangeRequest = context.TicketTypes!.FirstOrDefault(p => p.Name == HBTicketType.ChangeRequest.ToString())!.Id;

        //Get ticket priority Ids
        int priorityLow = context.TicketPriorities!.FirstOrDefault(p => p.Name == HBTicketPriority.Low.ToString())!.Id;
        int priorityMedium = context.TicketPriorities!.FirstOrDefault(p => p.Name == HBTicketPriority.Medium.ToString())!.Id;
        int priorityHigh = context.TicketPriorities!.FirstOrDefault(p => p.Name == HBTicketPriority.High.ToString())!.Id;
        int priorityUrgent = context.TicketPriorities!.FirstOrDefault(p => p.Name == HBTicketPriority.Urgent.ToString())!.Id;

        //Get ticket status Ids
        int statusNew = context.TicketStatuses!.FirstOrDefault(p => p.Name == HBTicketStatus.New.ToString())!.Id;
        int statusDev = context.TicketStatuses!.FirstOrDefault(p => p.Name == HBTicketStatus.Development.ToString())!.Id;
        int statusTest = context.TicketStatuses!.FirstOrDefault(p => p.Name == HBTicketStatus.Testing.ToString())!.Id;
        int statusResolved = context.TicketStatuses!.FirstOrDefault(p => p.Name == HBTicketStatus.Resolved.ToString())!.Id;


        try
        {
            IList<Ticket> tickets = new List<Ticket>() {
                                //PORTFOLIO
                                new Ticket() {Title = "Dashboard Ticket Card Correction", Description = "Ticket Card on Dashboard View 5 px smaller than other cards in row", Created = DateTime.Now, ProjectId = dashboardId, TicketPriorityId = priorityLow, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Dashboard Change Card Color", Description = "Lighten All-Data card to add contrast to text", Created = DateTime.Now, ProjectId = dashboardId, TicketPriorityId = priorityMedium, TicketStatusId = statusNew, TicketTypeId = typeChangeRequest},
                                new Ticket() {Title = "Dashboard Projects List card sizing issue", Description = "Re-size Projects List card on Dashboard to maintain uniform height to other cards in row", Created = DateTime.Now, ProjectId = dashboardId, TicketPriorityId = priorityHigh, TicketStatusId = statusDev, TicketTypeId = typeEnhancement},
                                new Ticket() {Title = "Dashboard Features cards mis-aligned on mobile", Description = "On mobile, Features cars are mis-aligned, add margin to end of cards column", Created = DateTime.Now, ProjectId = dashboardId, TicketPriorityId = priorityUrgent, TicketStatusId = statusTest, TicketTypeId = typeDefect},
                                new Ticket() {Title = "Dashboard Remove Shared Layout", Description = "Remove Layout view until after Authentication", Created = DateTime.Now, ProjectId = dashboardId, TicketPriorityId = priorityLow, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Dashboard Tickets By Priority margin", Description = "Tickets by Priority not aligned, set margin or padding", Created = DateTime.Now, ProjectId = dashboardId, TicketPriorityId = priorityMedium, TicketStatusId = statusNew, TicketTypeId = typeChangeRequest},
                                new Ticket() {Title = "Dashboard Recent Tickets Card", Description = "Limit number of entries in Recent Tickets card to 20", Created = DateTime.Now, ProjectId = dashboardId, TicketPriorityId = priorityHigh, TicketStatusId = statusDev, TicketTypeId = typeEnhancement},
                                new Ticket() {Title = "Dashboard Menu button", Description = "Menu buttons only work on dashboard page, extend functionality to all Views", Created = DateTime.Now, ProjectId = dashboardId, TicketPriorityId = priorityUrgent, TicketStatusId = statusTest, TicketTypeId = typeDefect},
                                //BLOG
                                new Ticket() {Title = "Marketing Ticket 1", Description = "Ticket details for marketing ticket 1", Created = DateTime.Now, ProjectId = marketingId, TicketPriorityId = priorityLow, TicketStatusId = statusNew, TicketTypeId = typeDefect},
                                new Ticket() {Title = "Marketing Ticket 2", Description = "Ticket details for marketing ticket 2", Created = DateTime.Now, ProjectId = marketingId, TicketPriorityId = priorityMedium, TicketStatusId = statusDev, TicketTypeId = typeEnhancement},
                                new Ticket() {Title = "Marketing Ticket 3", Description = "Ticket details for marketing ticket 3", Created = DateTime.Now, ProjectId = marketingId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeChangeRequest},
                                new Ticket() {Title = "Marketing Ticket 4", Description = "Ticket details for marketing ticket 4", Created = DateTime.Now, ProjectId = marketingId, TicketPriorityId = priorityUrgent, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Marketing Ticket 5", Description = "Ticket details for marketing ticket 5", Created = DateTime.Now, ProjectId = marketingId, TicketPriorityId = priorityLow, TicketStatusId = statusDev,  TicketTypeId = typeDefect},
                                new Ticket() {Title = "Marketing Ticket 6", Description = "Ticket details for marketing ticket 6", Created = DateTime.Now, ProjectId = marketingId, TicketPriorityId = priorityMedium, TicketStatusId = statusNew,  TicketTypeId = typeEnhancement},
                                new Ticket() {Title = "Marketing Ticket 7", Description = "Ticket details for marketing ticket 7", Created = DateTime.Now, ProjectId = marketingId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeChangeRequest},
                                new Ticket() {Title = "Marketing Ticket 8", Description = "Ticket details for marketing ticket 8", Created = DateTime.Now, ProjectId = marketingId, TicketPriorityId = priorityUrgent, TicketStatusId = statusDev,  TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Marketing Ticket 9", Description = "Ticket details for marketing ticket 9", Created = DateTime.Now, ProjectId = marketingId, TicketPriorityId = priorityLow, TicketStatusId = statusNew,  TicketTypeId = typeDefect},
                                new Ticket() {Title = "Marketing Ticket 10", Description = "Ticket details for marketing ticket 10", Created = DateTime.Now, ProjectId = marketingId, TicketPriorityId = priorityMedium, TicketStatusId = statusNew, TicketTypeId = typeEnhancement},
                                new Ticket() {Title = "Marketing Ticket 11", Description = "Ticket details for marketing ticket 11", Created = DateTime.Now, ProjectId = marketingId, TicketPriorityId = priorityHigh, TicketStatusId = statusDev,  TicketTypeId = typeChangeRequest},
                                new Ticket() {Title = "Marketing Ticket 12", Description = "Ticket details for marketing ticket 12", Created = DateTime.Now, ProjectId = marketingId, TicketPriorityId = priorityUrgent, TicketStatusId = statusNew,  TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Marketing Ticket 13", Description = "Ticket details for marketing ticket 13", Created = DateTime.Now, ProjectId = marketingId, TicketPriorityId = priorityLow, TicketStatusId = statusNew, TicketTypeId = typeDefect},
                                new Ticket() {Title = "Marketing Ticket 14", Description = "Ticket details for marketing ticket 14", Created = DateTime.Now, ProjectId = marketingId, TicketPriorityId = priorityMedium, TicketStatusId = statusDev,  TicketTypeId = typeEnhancement},
                                new Ticket() {Title = "Marketing Ticket 15", Description = "Ticket details for marketing ticket 15", Created = DateTime.Now, ProjectId = marketingId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew,  TicketTypeId = typeChangeRequest},
                                new Ticket() {Title = "Marketing Ticket 16", Description = "Ticket details for marketing ticket 16", Created = DateTime.Now, ProjectId = marketingId, TicketPriorityId = priorityUrgent, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Marketing Ticket 17", Description = "Ticket details for marketing ticket 17", Created = DateTime.Now, ProjectId = marketingId, TicketPriorityId = priorityHigh, TicketStatusId = statusDev,  TicketTypeId = typeNewDev},
                                //BUGTRACKER                                                                                                                 
                                new Ticket() {Title = "Bug Tracker Demo Button", Description = "Change Demo Login Button to Primary", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Index Font Corrections", Description = "Change font on Index page to match Dashboard text", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Update Email Service", Description = "Enable email messaging for team members", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Controller Clean-up", Description = "Add null-coalescing operators where appropriate", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Views: commented code", Description = "Remove any deprecated or unused comments", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Notifications", Description = "Enable Notifications", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Companies View", Description = "Add option to select from multiple companies", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Deployment", Description = "Update db migration and deployment", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Notifications Card margin", Description = "Add margin to bottom of Notifications card", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Projects Page color scheme", Description = "Add custom css color scheme to match app pages", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Duplicate Role", Description = "Remove the duplicate IdentityRole service in the Program.cs file", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Account menu button removal", Description = "Remove the Friends button", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Ticket 13", Description = "Ticket details for bug tracker 13", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Ticket 14", Description = "Ticket details for bug tracker 14", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Ticket 15", Description = "Ticket details for bug tracker 15", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Ticket 16", Description = "Ticket details for bug tracker 16", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Ticket 17", Description = "Ticket details for bug tracker 17", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Ticket 18", Description = "Ticket details for bug tracker 18", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Ticket 19", Description = "Ticket details for bug tracker 19", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Ticket 20", Description = "Ticket details for bug tracker 20", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Ticket 21", Description = "Ticket details for bug tracker 21", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Ticket 22", Description = "Ticket details for bug tracker 22", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Ticket 23", Description = "Ticket details for bug tracker 23", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Ticket 24", Description = "Ticket details for bug tracker 24", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Ticket 25", Description = "Ticket details for bug tracker 25", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Ticket 26", Description = "Ticket details for bug tracker 26", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Ticket 27", Description = "Ticket details for bug tracker 27", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Ticket 28", Description = "Ticket details for bug tracker 28", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Ticket 29", Description = "Ticket details for bug tracker 29", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Bug Tracker Ticket 30", Description = "Ticket details for bug tracker 30", Created = DateTime.Now, ProjectId = bugtrackerId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                //MOVIE
                                new Ticket() {Title = "Movie Ticket 1", Description = "Ticket details for movie ticket 1", Created = DateTime.Now, ProjectId = movieId, TicketPriorityId = priorityLow, TicketStatusId = statusNew, TicketTypeId = typeDefect},
                                new Ticket() {Title = "Movie Ticket 2", Description = "Ticket details for movie ticket 2", Created = DateTime.Now, ProjectId = movieId, TicketPriorityId = priorityMedium, TicketStatusId = statusDev, TicketTypeId = typeEnhancement},
                                new Ticket() {Title = "Movie Ticket 3", Description = "Ticket details for movie ticket 3", Created = DateTime.Now, ProjectId = movieId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeChangeRequest},
                                new Ticket() {Title = "Movie Ticket 4", Description = "Ticket details for movie ticket 4", Created = DateTime.Now, ProjectId = movieId, TicketPriorityId = priorityUrgent, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Movie Ticket 5", Description = "Ticket details for movie ticket 5", Created = DateTime.Now, ProjectId = movieId, TicketPriorityId = priorityLow, TicketStatusId = statusDev,  TicketTypeId = typeDefect},
                                new Ticket() {Title = "Movie Ticket 6", Description = "Ticket details for movie ticket 6", Created = DateTime.Now, ProjectId = movieId, TicketPriorityId = priorityMedium, TicketStatusId = statusNew,  TicketTypeId = typeEnhancement},
                                new Ticket() {Title = "Movie Ticket 7", Description = "Ticket details for movie ticket 7", Created = DateTime.Now, ProjectId = movieId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeChangeRequest},
                                new Ticket() {Title = "Movie Ticket 8", Description = "Ticket details for movie ticket 8", Created = DateTime.Now, ProjectId = movieId, TicketPriorityId = priorityUrgent, TicketStatusId = statusDev,  TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Movie Ticket 9", Description = "Ticket details for movie ticket 9", Created = DateTime.Now, ProjectId = movieId, TicketPriorityId = priorityLow, TicketStatusId = statusNew,  TicketTypeId = typeDefect},
                                new Ticket() {Title = "Movie Ticket 10", Description = "Ticket details for movie ticket 10", Created = DateTime.Now, ProjectId = movieId, TicketPriorityId = priorityMedium, TicketStatusId = statusNew, TicketTypeId = typeEnhancement},
                                new Ticket() {Title = "Movie Ticket 11", Description = "Ticket details for movie ticket 11", Created = DateTime.Now, ProjectId = movieId, TicketPriorityId = priorityHigh, TicketStatusId = statusDev,  TicketTypeId = typeChangeRequest},
                                new Ticket() {Title = "Movie Ticket 12", Description = "Ticket details for movie ticket 12", Created = DateTime.Now, ProjectId = movieId, TicketPriorityId = priorityUrgent, TicketStatusId = statusNew,  TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Movie Ticket 13", Description = "Ticket details for movie ticket 13", Created = DateTime.Now, ProjectId = movieId, TicketPriorityId = priorityLow, TicketStatusId = statusNew, TicketTypeId = typeDefect},
                                new Ticket() {Title = "Movie Ticket 14", Description = "Ticket details for movie ticket 14", Created = DateTime.Now, ProjectId = movieId, TicketPriorityId = priorityMedium, TicketStatusId = statusDev,  TicketTypeId = typeEnhancement},
                                new Ticket() {Title = "Movie Ticket 15", Description = "Ticket details for movie ticket 15", Created = DateTime.Now, ProjectId = movieId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew,  TicketTypeId = typeChangeRequest},
                                new Ticket() {Title = "Movie Ticket 16", Description = "Ticket details for movie ticket 16", Created = DateTime.Now, ProjectId = movieId, TicketPriorityId = priorityUrgent, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Movie Ticket 17", Description = "Ticket details for movie ticket 17", Created = DateTime.Now, ProjectId = movieId, TicketPriorityId = priorityHigh, TicketStatusId = statusDev,  TicketTypeId = typeNewDev},
                                new Ticket() {Title = "Movie Ticket 18", Description = "Ticket details for movie ticket 18", Created = DateTime.Now, ProjectId = movieId, TicketPriorityId = priorityMedium, TicketStatusId = statusDev,  TicketTypeId = typeEnhancement},
                                new Ticket() {Title = "Movie Ticket 19", Description = "Ticket details for movie ticket 19", Created = DateTime.Now, ProjectId = movieId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew,  TicketTypeId = typeChangeRequest},
                                new Ticket() {Title = "Movie Ticket 20", Description = "Ticket details for movie ticket 20", Created = DateTime.Now, ProjectId = movieId, TicketPriorityId = priorityUrgent, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                      //ADDRESS BOOK
                                new Ticket() {Title = "ConnectPro Category Description returns 404", Description = "Add model/class for Description field", Created = DateTime.Now, ProjectId = addressbookId, TicketPriorityId = priorityLow, TicketStatusId = statusNew, TicketTypeId = typeDefect},
                                new Ticket() {Title = "ConnectPro Logo correction", Description = "Reduce top margin on mobile home image", Created = DateTime.Now, ProjectId = addressbookId, TicketPriorityId = priorityMedium, TicketStatusId = statusDev, TicketTypeId = typeEnhancement},
                                new Ticket() {Title = "ConnectPro Spelling errors", Description = "Correct spelling errors on Categories View", Created = DateTime.Now, ProjectId = addressbookId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeChangeRequest},
                                new Ticket() {Title = "ConnectPro Font-size corrections", Description = "Update H1 tags to H2 on Create Contact page", Created = DateTime.Now, ProjectId = addressbookId, TicketPriorityId = priorityUrgent, TicketStatusId = statusNew, TicketTypeId = typeNewDev},
                                new Ticket() {Title = "ConnectPro Edit button not working", Description = "Connect Edit button to asp-route, asp-action", Created = DateTime.Now, ProjectId = addressbookId, TicketPriorityId = priorityLow, TicketStatusId = statusDev,  TicketTypeId = typeDefect},
                                new Ticket() {Title = "ConnectPro Replace desktop Index image", Description = "Replace the desktop Index image with the new branding", Created = DateTime.Now, ProjectId = addressbookId, TicketPriorityId = priorityMedium, TicketStatusId = statusNew,  TicketTypeId = typeEnhancement},
                                new Ticket() {Title = "ConnectPro Collections View", Description = "Create Collections Folder based on Categories and Most-Viewed", Created = DateTime.Now, ProjectId = addressbookId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew, TicketTypeId = typeChangeRequest},
                                new Ticket() {Title = "ConnectPro Re-seed demo", Description = "Re-seed demo login data", Created = DateTime.Now, ProjectId = addressbookId, TicketPriorityId = priorityUrgent, TicketStatusId = statusDev,  TicketTypeId = typeNewDev},
                                new Ticket() {Title = "ConnectPro Ticket 9", Description = "Ticket details for address book ticket 9", Created = DateTime.Now, ProjectId = addressbookId, TicketPriorityId = priorityLow, TicketStatusId = statusNew,  TicketTypeId = typeDefect},
                                new Ticket() {Title = "ConnectPro Ticket 10", Description = "Ticket details for address book ticket 10", Created = DateTime.Now, ProjectId = addressbookId, TicketPriorityId = priorityMedium, TicketStatusId = statusNew, TicketTypeId = typeEnhancement},
                                new Ticket() {Title = "ConnectPro Ticket 11", Description = "Ticket details for address book ticket 11", Created = DateTime.Now, ProjectId = addressbookId, TicketPriorityId = priorityHigh, TicketStatusId = statusDev,  TicketTypeId = typeChangeRequest},
                                new Ticket() {Title = "ConnectPro Ticket 12", Description = "Ticket details for address book ticket 12", Created = DateTime.Now, ProjectId = addressbookId, TicketPriorityId = priorityUrgent, TicketStatusId = statusNew,  TicketTypeId = typeNewDev},
                                new Ticket() {Title = "ConnectPro Ticket 13", Description = "Ticket details for address book ticket 13", Created = DateTime.Now, ProjectId = addressbookId, TicketPriorityId = priorityLow, TicketStatusId = statusNew, TicketTypeId = typeDefect},
                                new Ticket() {Title = "ConnectPro Ticket 14", Description = "Ticket details for address book ticket 14", Created = DateTime.Now, ProjectId = addressbookId, TicketPriorityId = priorityMedium, TicketStatusId = statusDev,  TicketTypeId = typeEnhancement},
                                new Ticket() {Title = "ConnectPro Ticket 15", Description = "Ticket details for address book ticket 15", Created = DateTime.Now, ProjectId = addressbookId, TicketPriorityId = priorityHigh, TicketStatusId = statusNew,  TicketTypeId = typeChangeRequest},
                                new Ticket() {Title = "ConnectPro Ticket 16", Description = "Ticket details for address book ticket 16", Created = DateTime.Now, ProjectId = addressbookId, TicketPriorityId = priorityUrgent, TicketStatusId = statusNew, TicketTypeId = typeNewDev},

                };


            var dbTickets = context.Tickets.Select(c => c.Title).ToList();
            await context.Tickets!.AddRangeAsync(tickets.Where(c => !dbTickets.Contains(c.Title)));
            await context.SaveChangesAsync();
        }
        catch (Exception ex)
        {
            Console.WriteLine("*************  ERROR  *************");
            Console.WriteLine("Error Seeding Tickets.");
            Console.WriteLine(ex.Message);
            Console.WriteLine("***********************************");
            throw;
        }
    }

}