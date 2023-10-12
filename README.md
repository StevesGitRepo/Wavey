![waveyCardGradientCropped](https://github.com/StevesGitRepo/HotBug/assets/104333881/c2470536-1256-40c9-9c14-62df49511d69)


The Wavey Bug Tracker (formerly Hotbug) is an issue tracker that I built in .NET.  It combines the back-end of C# and PostgreSQL and MVC ties the data to the front-end.  The scope of this powerful application is greater than anything I have built before and here are a few key features of the project.

  * CRUD: Create, Read, Update, Delete (Archive) Companies, Projects, Tickets
  * Manage User roles, tickets, and project data
  * User-defined roles: Some functions are only accessible for the admin and project manager
  * Service Layer: I created a service layer in order to remove direct exposure to the database
  * Security: AspNetCore Identity enabled
  * PostgreSQL: I created the database and seeded organization data originally, but demo users can also add tickets and make updates on the original data
  * Object-Relational Mapper: I manage the database through Entity Framework.  LINQ Queries are used extensively throughout the codebase.
      LINQ example in my Ticket Service:

     ![image](https://github.com/StevesGitRepo/HotBug/assets/104333881/92c4db04-67b9-4df9-a461-92de02e5c2db)
