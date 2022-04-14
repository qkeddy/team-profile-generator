const fs = require("fs");

// Insert cards into the main HTML
const buildTeamPage = ({ managerCards, engineerCards, internCards }) => {
     const htmlPage = 
            `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>My Team</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
                    <link rel="stylesheet" href="./style.css" />
                </head>
                <body>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12 jumbotron mb-3 team-heading" style="background-color: #0d6efd; color: white">
                                <h1 class="text-center">My Team</h1>
                            </div>
                        </div>
                    </div>

                    <section class="container" style="margin-top: 10px">
                        <div class="row">
                                  
                            ${managerCards}

                            ${engineerCards}

                            ${internCards}
                            
                        </div>
                    </section>
                </body>
            </html>`;
    

    // Write the HTML file to the file system
    fs.writeFile("./dist/index.html", htmlPage, "utf8", (error, data) => (error ? console.error(error) : console.log("Team HTML file written successfully")));
};

module.exports = { buildTeamPage };
