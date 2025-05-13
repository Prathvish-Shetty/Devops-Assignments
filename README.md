
---

## 🐍 **Python / Flask**

| Command                                | Purpose                                                        |
| -------------------------------------- | -------------------------------------------------------------- |
| `pip install -r requirements.txt`      | Installs all Python dependencies listed in `requirements.txt`. |
| `python app.py`                        | Runs the Flask application.                                    |
| `from selenium import webdriver`       | Used to import Selenium’s browser automation in Python.        |
| `driver = webdriver.Chrome()`          | Launches the Chrome browser.                                   |
| `driver.get("URL")`                    | Opens the specified URL in the browser.                        |
| `driver.find_element(By.NAME, "btnK")` | Finds an element on the webpage by its name attribute.         |
| `driver.quit()`                        | Closes the browser after test completion.                      |

---

## 🐳 **Docker**

| Command                                | Purpose                                                                |
| -------------------------------------- | ---------------------------------------------------------------------- |
| `docker build -t <image-name> .`       | Builds a Docker image from the Dockerfile in the current directory.    |
| `docker run -p 5000:5000 <image-name>` | Runs the image as a container, mapping port 5000 on host to container. |
| `docker ps`                            | Lists running containers.                                              |
| `docker stop <container-id>`           | Stops a running container.                                             |
| `docker rm <container-id>`             | Removes a stopped container.                                           |
| `docker images`                        | Lists all Docker images.                                               |
| `docker rmi <image-id>`                | Deletes a Docker image.                                                |
| `docker-compose up`                    | Starts containers defined in a `docker-compose.yml` file.              |
| `docker-compose down`                  | Stops and removes containers/services defined in `docker-compose.yml`. |

---

## ⚙️ **Git / GitHub**

| Command                            | Purpose                                 |
| ---------------------------------- | --------------------------------------- |
| `git init`                         | Initializes a new Git repository.       |
| `git add .`                        | Stages all changes for commit.          |
| `git commit -m "message"`          | Commits the staged changes.             |
| `git remote add origin <repo-url>` | Links local repo to remote GitHub repo. |
| `git push -u origin main`          | Pushes code to GitHub main branch.      |

---

## ☁️ **GitHub Actions**

| Command / Step                 | Purpose                                                       |
| ------------------------------ | ------------------------------------------------------------- |
| `actions/checkout@v4`          | Checks out the code from GitHub repo.                         |
| `actions/setup-node@v4`        | Sets up Node.js for JavaScript-based projects.                |
| `actions/upload-artifact@v4`   | Uploads files like logs as artifacts for sharing across jobs. |
| `actions/download-artifact@v4` | Downloads previously uploaded artifacts.                      |
| `node index.js > log.txt 2>&1` | Runs JS file and writes stdout + stderr to `log.txt`.         |
| `mkdir -p logs`                | Creates nested log folders.                                   |

---

## 🧪 **Jenkins**

| Command / Script                 | Purpose                                                  |
| -------------------------------- | -------------------------------------------------------- |
| `pipeline { ... }`               | Jenkins Declarative Pipeline block.                      |
| `agent any`                      | Allows pipeline to run on any available agent.           |
| `bat 'command'`                  | Runs Windows batch command in Jenkins (used on Windows). |
| `git branch: 'main', url: '...'` | Clones the GitHub repo in Jenkins.                       |

Example:

```groovy
bat '"C:\\Python312\\python.exe" -m pip install -r requirements.txt'
```

Used to install dependencies when `pip` is not in PATH.

---

## 📦 **Node.js / Express**

| Command               | Purpose                                              |
| --------------------- | ---------------------------------------------------- |
| `npm init -y`         | Initializes a Node.js project with default settings. |
| `npm install express` | Installs Express framework.                          |
| `node app.js`         | Runs the Express application.                        |
| `npm install`         | Installs all dependencies listed in `package.json`.  |

---

## 🧪 **Selenium for JavaScript**

| Command                                                    | Purpose                                 |
| ---------------------------------------------------------- | --------------------------------------- |
| `npm install selenium-webdriver`                           | Installs Selenium bindings for Node.js. |
| `require('selenium-webdriver')`                            | Imports the Selenium WebDriver library. |
| `let driver = new Builder().forBrowser('chrome').build();` | Launches Chrome browser.                |
| `driver.get("https://example.com")`                        | Opens a webpage in browser.             |
| `driver.quit()`                                            | Closes browser.                         |

---

## ☸️ **Kubernetes**

| Command                             | Purpose                                              |
| ----------------------------------- | ---------------------------------------------------- |
| `kubectl apply -f deployment.yaml`  | Deploys the application to the Kubernetes cluster.   |
| `kubectl get pods`                  | Lists all running pods.                              |
| `kubectl get services`              | Lists all services.                                  |
| `kubectl delete -f deployment.yaml` | Deletes the deployed application.                    |
| `minikube start`                    | Starts a local Kubernetes cluster (on your machine). |
| `minikube dashboard`                | Launches a web-based UI for Kubernetes management.   |

---