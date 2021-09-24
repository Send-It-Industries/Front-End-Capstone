# Project Catwalk
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![CircleCI](https://img.shields.io/badge/CIRCLECI-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

## About

Front end web development capstone project. Hackreactor 2021. Project Catwalk comprises a complete redesign of a ficticious retail portal in order to modernize the website. The focus of this project is to implement a minimum viable product for the retail application.

## Setup
- Clone this repo
- Checkout 'deployed' branch for most recent version
- Run `npm install` to install all the dependencies.
- Create a config/config.js file with any valid github token

## Usage
After you clone this repo to your desktop, go to its root directory and run `npm install` to install its dependencies.

Once the dependencies are installed, you can run  `npm run bundle` to start the application. This will compile all the jsx to your local machine under 'client/dist/bundle.js' and start an express server on port 3000 through nodemon. You will then be able to access it at localhost:3000

## Demo by Feature

### Product Overview
Author: Keanu Hasty

Shows landing page, image carousel, available styles, and add button that conditionally render size dropdown is none is selected.

![overview1](./readmeImages/overview1.png)

On click, will display large format of selected image with reduce size button as well as image carousel to move between images.

![overview2](./readmeImages/overview2.png)

When clicking on the image, displays magnifying glass zoom on large format image.

![overview3](./readmeImages/overview3.png)


### Questions and Answers
Author: Richard Cuffee

Initial view of QA section with answers expanded for one of the questions. Report button hides reported entries, and helpful button only allows one click per user per entry.

![qa1](./readmeImages/qa1.png)

Modal Add Review form with validation for required fields and valid email.

![qa2](./readmeImages/qa2.png)

Modal Add Answer form with validation for required fields and valid email. Allows answers to be added to specific product.

![qa3](./readmeImages/qa3.png)

### Ratings and Reviews
Author: JJ Marquis

Shows inital view of reviews section. Characteristics and review average are product specific and render according to data from reviews. Stars and rating bars fill in proportion to relevant review data

![reviews1](./readmeImages/reviews1.png)

User can sort by relevance, helpfulness, and recency, as well as expand review field to show more reviews. If users click a star rating, only reviews at the rating will display.

![reviews2](./readmeImages/reviews2.png)

Users can add reviews to a specific product with only relevant characterstics availble for rating. Form has validation for required fields, and valid email. New reviews display in real time.

![reviews3](./readmeImages/reviews3.png)

## Authors

Keanu Hasty
<a href="https://github.com/hastyk52" target="_blank">
<img src=https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
</a>
<a href="https://www.linkedin.com/in/keanu-hasty/" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
</a>

Richard Cuffee
<a href="https://github.com/rgcuffee" target="_blank">
<img src=https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
</a>
<a href="https://www.linkedin.com/in/richard-cuffee-0b0b6962/" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
</a>

JJ Marquis
<a href="https://github.com/JJMrqs" target="_blank">
<img src=https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
</a>
<a href="https://www.linkedin.com/in/jj-marquis/" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
</a>
