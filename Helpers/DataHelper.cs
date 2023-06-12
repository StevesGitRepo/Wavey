using HotBug.Data;
using Microsoft.EntityFrameworkCore;

namespace HotBug.Helpers
{
    public static class DataHelper
    {
        public static async Task ManageDataAsync(IServiceProvider svcProvider)
        {
            //get an instance of the db application context
            var dbContextsvc = svcProvider.GetRequiredService<ApplicationDbContext>();

            //this is equivalent to update-database
            await dbContextsvc.Database.MigrateAsync();

        }
    }
}
