<h1>Welcome to the Wavey Bug Tracker</h1>

![waveyCardWhiteBg](https://github.com/StevesGitRepo/HotBug/assets/104333881/d0dbdf45-cbb8-4cd4-b4ed-4c9c97a9d9c5)

I built the Wavey Bug Tracker (formerly Hotbug) with .NET, C#, PostgreSQL and MVC.  This is a powerful application that I actually use to track bugs on my own projects. 

Let's dive in!  <a href="https://hotbug-production.up.railway.app/" target="_blank">Go to Wavey</a>


<h2>First Impressions</h2>

I started by creating an inviting landing page...

![image](https://github.com/StevesGitRepo/HotBug/assets/104333881/074fb188-fe3a-43da-85d3-f396dc61dafd)

...and continued the theme to the demo log in page:

![image](https://github.com/StevesGitRepo/HotBug/assets/104333881/957f3957-ca1d-4798-be3b-a637a7fdaeba)


<h2>The Dashboard</h2>

The Dashboard is the first page the user sees after logging in. The Wavey dashboard is a mix of charts and tables.  Live data is called into corresponding cards with C# Razor Pages.
 
![image](https://github.com/StevesGitRepo/HotBug/assets/104333881/b2a74f70-1259-416d-8484-1adb902e64d5)

 
<h2>Features</h2>

The Wavey Bug Tracker is a feature-rich application and there are plans to expand the scope in the future.  Here are some of the current features of the app:

  * CRUD: Create, Read, Update, Delete (Archive) Companies, Projects, Tickets
  * Manage User roles, tickets, and project data
  * User-defined roles: Some functions are only accessible for the admin and project manager
  * Service Layer: I created a service layer in order to remove direct exposure to the database
  * Security: AspNetCore Identity enabled
  * PostgreSQL: I created the database and seeded organization data originally, but demo users can also add tickets and make updates on the original data
  * Object-Relational Mapper: I manage the database through Entity Framework.  LINQ Queries are used extensively throughout the codebase.
      The following is an example of LINQ in my Ticket Service:

     ![image](https://github.com/StevesGitRepo/HotBug/assets/104333881/92c4db04-67b9-4df9-a461-92de02e5c2db)

<h2>Design</h2>

I love the design process.  Whether it's creating a database, web page, or logo I try to balance design and function.
      See the evolution of the Wavey favicon logo:
      
      
  ![WaveyReadMe1](https://github.com/StevesGitRepo/HotBug/assets/104333881/f6ad8628-028c-4947-9423-33d958de4000)
  ![WaveyReadMe2](https://github.com/StevesGitRepo/HotBug/assets/104333881/25be4e13-f7cf-4a6b-bc61-5f6f3d33bde5)
  ![WaveyReadMe3](https://github.com/StevesGitRepo/HotBug/assets/104333881/e81e9bd2-a1d7-499a-a675-881fd8a29108)
  ![WaveyReadMe4](https://github.com/StevesGitRepo/HotBug/assets/104333881/76514740-56d3-4b1d-a832-44816a3c6eee) ... 
  ![WaveyReadMe5](https://github.com/StevesGitRepo/HotBug/assets/104333881/927b033a-a560-4c32-be61-15a6b4e0a6e8)

I started by removing the text from the original wave design. I cropped a portion of the wave and added a third layer the same color as the text, then cropped the image again to reduce the footprint. The final image may be a future iteration.


<h2>Create a Ticket</h2>

Service tickets are the heart of the app.  Wavey is designed teams to create tickets, assign users, and work through the ticket lifecycle as the bug or issue is addressed. Invitations, Comments, and Notifications are hardwired through Models and Controllers and will be wired up soon to the front-end.

![image](https://github.com/StevesGitRepo/HotBug/assets/104333881/8afed775-a1a4-43a5-baad-941aa5fd9391)
A small part of the Ticket Model.

![image](https://github.com/StevesGitRepo/HotBug/assets/104333881/0f2aec7e-d8c2-42b1-a805-e13bf89e74fc)
A part of the Invite class.

