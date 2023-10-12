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

  * Design:  I love the design process.  Whether it's creating a database, scaffolding a web page, or creating a logo I try to balance creativity and usability.
      Here is a example of the evolution of the favicon logo:
      
    ![WaveyReadMe1](https://github.com/StevesGitRepo/HotBug/assets/104333881/f6ad8628-028c-4947-9423-33d958de4000)

    ![WaveyReadMe2](https://github.com/StevesGitRepo/HotBug/assets/104333881/25be4e13-f7cf-4a6b-bc61-5f6f3d33bde5)

    ![WaveyReadMe3](https://github.com/StevesGitRepo/HotBug/assets/104333881/e81e9bd2-a1d7-499a-a675-881fd8a29108)

    ![WaveyReadMe4](https://github.com/StevesGitRepo/HotBug/assets/104333881/76514740-56d3-4b1d-a832-44816a3c6eee)
