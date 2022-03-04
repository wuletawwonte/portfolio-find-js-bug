const projects = [
  {
    id: 1,
    name: 'Ethiopia Project',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    featured_image: 'Rectangle_21.jpg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    live_link: '#',
    source_link: '#',
  },
  {
    id: 2,
    name: 'Project Two',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    featured_image: 'Rectangle_21.jpg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    live_link: '#',
    source_link: '#',
  },
  {
    id: 3,
    name: 'Project Three',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    featured_image: 'Rectangle_21.jpg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    live_link: '#',
    source_link: '#',
  },
  {
    id: 4,
    name: 'Project Four',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    featured_image: 'Rectangle_21.jpg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    live_link: '#',
    source_link: '#',
  },
];

const projectContainer = document.getElementById('projects-container');
const popupContainer = document.getElementById('project-detail');
const wrapper = document.querySelector('.wrapper');

const renderedProjects = projects
  .map(
    (element) => `<div class="project-item" id=${element.id}>
              <img src="./img/projects/${element.featured_image}" alt="${element.name}" />
              <div class="project-description">
                <h3>${element.name}</h3>
                <div class="project-actions">
                  <button type="button">HTML/CSS</button>
                  <button type="button">Ruby on Rails</button>
                  <button type="button">Javascript</button>
                </div>
                <button type="button" id="${element.name}" onclick="showPopup('${element.id}')" class="see-project-btn">
                  See this project &#10132;
                </button>
              </div>
            </div>
          `,
  ).join('');

projectContainer.innerHTML += renderedProjects;

const popupContent = (project) => `
        <div class="project-details-container" id="${project.id}">
        <button class="modal-close-btn" onclick="hidePopup()">&times;</button>
        <h2>${project.name}</h2>
        <ul class="modal-technologies">
          ${project.technologies.map((technology) => `
                <li class="single-technology">
                  <a href="#">${technology}</a>
                </li>`).join('')}
        </ul>
        <div class="caroussel">
          <img src="img/projects/${project.featured_image}" />
        </div>
        <div class="project-details">
          <p>${project.description}</p>
          <div class="project-buttons">
            <a href="${project.live_link}"
              ><span>See live</span>
              <img class="white-icon" src="img/Union.svg"/>
              <img class="black-icon" src="img/ic_link.svg"/>
            </a>
            <a href="${project.source_link}"
              ><span>See source</span>
              <img class="white-icon" src="img/ic_github.svg"/>
              <img class="black-icon" src="img/ic_github_white.svg"/>
            </a>
          </div>
        </div>
        <div class="next-previous">
          <a href="#" class="previous arrows"
            ><img src="" /><span>Previous project</span></a
          >
          <a href="#" class="next arrows"
            ><span>Next project</span><img src=""
          /></a>
        </div>
      </div>
  `;

/* eslint-disable no-unused-vars */

const showPopup = (pid) => {
  const popupProject = projects.find((item) => {
    if (Number(pid) === Number(item.id)) {
      return item;
    }
    return undefined;
  });
  popupContainer.innerHTML = popupContent(popupProject);
  wrapper.classList.add('hidden');
  window.scrollTo(0, 0);
};

function hidePopup() {
  popupContainer.innerHTML = '';
  wrapper.classList.remove('hidden');
}

/* eslint-enable no-unused-vars */
