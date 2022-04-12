const buildCards = (teamInfo) => {
    // Create separate arrays for each type of team member
    const managers = teamInfo.filter((element) => element.getRole() === "Manager");
    const engineers = teamInfo.filter((element) => element.getRole() === "Engineer");
    const interns = teamInfo.filter((element) => element.getRole() === "Intern");

    // Creat a new manager array populated with injected HTML
    const managerCards = managers
        .map((element) => {
            return `
            <div class="card col-12 col-md-6 col-lg-4">
            <div class="card-header" style="background-color: #0d6efd; color: white; flex: 1">
                <h2 class="card-title">${element.name}</h2>
                <h3 class="card-title">${element.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${element.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${element.email}">${element.email}</a></li>
                    <li class="list-group-item">Tel: ${element.officeNumber}</li>
                </ul>
            </div>
            </div>`;
        })
        .join("");

    // Creat a new engineering array populated with injected HTML
    const engineerCards = engineers
        .map((element) => {
            return `
            <div class="card col-12 col-md-6 col-lg-4">
            <div class="card-header" style="background-color: #0d6efd; color: white; flex: 1">
                <h2 class="card-title">${element.name}</h2>
                <h3 class="card-title">${element.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${element.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${element.email}">${element.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${element.gitHubUser}" target="_blank">${element.gitHubUser}</a></li>
                </ul>
            </div>
            </div>`;
        })
        .join("");

    // Creat a new intern array populated with injected HTML
    const internCards = interns
        .map((element) => {
            return `
            <div class="card col-12 col-md-6 col-lg-4">
            <div class="card-header" style="background-color: #0d6efd; color: white; flex: 1">
                <h2 class="card-title">${element.name}</h2>
                <h3 class="card-title">${element.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${element.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${element.email}">${element.email}</a></li>
                    <li class="list-group-item">School: ${element.school}</li>
                </ul>
            </div>
            </div>`;
        })
        .join("");

    return { managerCards, engineerCards, internCards };
};

module.exports = { buildCards };
