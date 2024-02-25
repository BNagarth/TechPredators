
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#team-name">Tech Predators</a>
    </li>
    <li>
      <a href="#about-the-problem-statement">About The Problem Statement</a>
    <li>
      <a href="#about-the-project">About The Solution</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## Tech Predators


Demo: https://youtu.be/Pi2T-lYj64I

## About the problem Statement
Open Innovation | AI for Social Impact | The focus here is on open innovation for social good.


<!-- ABOUT THE PROJECT -->
## About The Solution


<ul>
  <li>
    Developing a website to detect diseases in crops by analyzing crop leaves, utilizing machine learning and image processing techniques that can empower farmers to detect and diagnose diseases early, enabling timely intervention and preventing significant crop losses.</li><li>By providing farmers with a tool to accurately identify and manage plant diseases, this solution can enhance agricultural productivity, safeguard food security, and reduce their expenses. 
</li><li>Additionally, the implementation of such technology can foster sustainable agricultural practices, aligning with broader environmental and socio-economic development goals.
</li>
<li>Through our solution, we also aim to increase awareness among farmers about crop diseases by sharing disease-related information and curing methods.
</li> 
  </ul>


### Built With


Intel OneAPI (https://www.intel.com/content/www/us/en/developer/tools/oneapi/overview.html) base toolkit played a vital role in helping us enhance the efficiency and throughput of our model

We used intel-tensorflow using the command 
```sh
  pip install intel-tensorflow
  ```

We also used intel developer console to launch our very own virtual machine with max grade GPUs which blasted through the ML training process 

For the frontend, we have used REACT which is connected to a backend fastAPI server that hosts our model downloaded from the vm after training


<!-- GETTING STARTED -->
## Getting Started

### Pre-requisites

Python (https://docs.python.org/3/using/index.html)

We need to make sure to have npm and node installed (guide: https://nodejs.org/en/download/)


clone the repo using 

  ```sh
  git clone https://github.com/Pammu10/TechPredators
  ```


### Frontend

go into fronted directory after opening cloned code in an editor

  ```sh
  cd frontend
  ```

Install necessary packages from package.json

  ```sh
  npm i package.json
  ```

run the server on port 3000 using npm start

  ```sh
  npm run start
  ```

### Backend

go into api directory using command

  ```sh
  cd api/
  ```


run server on port 8000 by running command 

 ```sh
  python main.py
  ```


Model was trained on virtual machine by ssh using commands 

 ```sh
  ssh -J guest@146.152.232.8 ubuntu@100.82.69.132 -L 8888:100.82.69.132    
  ```
Running jupyter nitebook on localhost:8000







<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
