document.getElementById('portfolioForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const profession = document.getElementById('profession').value;
  const description = document.getElementById('description').value;

  // About Me Image
  const aboutImage = document.getElementById('aboutImage').files[0];
  const aboutImageURL = aboutImage ? URL.createObjectURL(aboutImage) : 'img-1.png';

  // Services
  const services = [
    {
      name: document.getElementById('service1').value,
      description: document.getElementById('service1Desc').value,
    },
    {
      name: document.getElementById('service2').value,
      description: document.getElementById('service2Desc').value,
    },
    {
      name: document.getElementById('service3').value,
      description: document.getElementById('service3Desc').value,
    },
    {
      name: document.getElementById('service4').value,
      description: document.getElementById('service4Desc').value,
    },
  ];

  // Projects
  const projects = [
    {
      name: document.getElementById('project1').value,
      description: document.getElementById('project1Desc').value,
      image: document.getElementById('project1Image').files[0],
    },
    {
      name: document.getElementById('project2').value,
      description: document.getElementById('project2Desc').value,
      image: document.getElementById('project2Image').files[0],
    },
    {
      name: document.getElementById('project3').value,
      description: document.getElementById('project3Desc').value,
      image: document.getElementById('project3Image').files[0],
    },
    {
      name: document.getElementById('project4').value,
      description: document.getElementById('project4Desc').value,
      image: document.getElementById('project4Image').files[0],
    },
  ];

  // Contact Information
  const contactEmail = document.getElementById('contactEmail').value;
  const contactPhone = document.getElementById('contactPhone').value;
  const contactAddress = document.getElementById('contactAddress').value;

  // Generate HTML
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="style4.css">
      <title>${name}'s Portfolio</title>
    </head>
    <body>
      <header class="header">
        <nav class="navbar">
          <a href="index.html">Home</a>
          <a href="index4.html">MY Portfolio</a>
          <a href="index3.html">Contact</a>
          <a href="index2.html">Continue Without login</a>
        </nav>
        <form action="" class="search-bar">
          <input type="text" placeholder="Search...">
          <button><i class='bx bx-search'></i></button>
        </form>
      </header>

      <!-- Hero Section -->
      <section id="hero">
        <div class="hero container">
          <div>
            <h1><span>${name}</span></h1>
            <h1><span>${profession}</span></h1>
            <a href="#" id="downloadButton" class="cta">Download Portfolio</a>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about">
        <div class="about container">
          <div class="col-left">
            <div class="about-img">
              <img src="${aboutImageURL}" alt="About Me Image">
            </div>
          </div>
          <div class="col-right">
            <h1 class="section-title">About <span>me</span></h1>
            <h2>${profession}</h2>
            <p>${description}</p>
            <a href="#" class="cta">Download Resume</a>
          </div>
        </div>
      </section>

      <!-- Service Section -->
      <section id="services">
        <div class="services container">
          <div class="service-top">
            <h1 class="section-title">Serv<span>i</span>ces</h1>
            <p>I believe in delivering services with honesty, dedication and care. Whatever I do, I make sure it is done with full attention to detail and a personal touch. My aim is to provide solutions that are not only useful but also meaningful for the people I work with. I always listen carefully to needs and ideas, then turn them into something practical and reliable. For me, it’s not just about completing a task — it’s about building trust, offering value, and making sure the result truly benefits you.</p>
          </div>
          <div class="service-bottom">
            ${services.map(service => `
              <div class="service-item">
                <div class="icon"><img src="img-1.png" /></div>
                <h2>${service.name}</h2>
                <p>${service.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects">
        <div class="projects container">
          <div class="projects-header">
            <h1 class="section-title">Recent <span>Projects</span></h1>
          <div class="all-projects">
            ${projects.map((project, index) => `
              <div class="project-item">
                <div class="project-info">
                  <h1>Project ${index + 1}</h1>
                  <h2>${project.name}</h2>
                  <p>${project.description}</p>
                </div>
                <div class="project-img">
                  <img src="${project.image ? URL.createObjectURL(project.image) : `img-${index + 1}.jpg`}" alt="img">
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact">
        <div class="contact container">
          <div>
            <h1 class="section-title">Contact <span>info</span></h1>
          </div>
          <div class="contact-items">
            <div class="contact-item">
              <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
              <div class="contact-info">
                <h1>Phone</h1>
                <h2>${contactPhone}</h2>
              </div>
            </div>
            <div class="contact-item">
              <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
              <div class="contact-info">
                <h1>Email</h1>
                <h2>${contactEmail}</h2>
              </div>
            </div>
            <div class="contact-item">
              <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
              <div class="contact-info">
                <h1>Address</h1>
                <h2>${contactAddress}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <section id="footer">
        <div class="footer container">
          <div class="brand">
            <h1><span>${name.split(' ')[0].charAt(0)}</span>${name.split(' ')[0].slice(1)} <span>${profession.split(' ')[0].charAt(0)}</span>${profession.split(' ')[0].slice(1)}</h1>
          </div>
          <h2>THANK YOU</h2>
        </div>
        <p>Copyright © ${new Date().getFullYear()} ${name}. All rights reserved</p>
      </section>

      <script>
        // Add download functionality
        document.getElementById('downloadButton').addEventListener('click', function () {
          const htmlContent = document.documentElement.outerHTML;
          const blob = new Blob([htmlContent], { type: 'text/html' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = '${name}_Portfolio.html';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        });
      </script>
    </body>
    </html>
  `;

  // Open generated HTML in a new window
  const newWindow = window.open();
  newWindow.document.write(htmlContent);
  newWindow.document.close();
});
