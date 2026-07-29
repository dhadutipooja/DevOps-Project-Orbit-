ORBIT: CLOUD & DEVOPS HIRING HUB

Developed a web platform connecting freelancers with clients for project collaboration and hiring. Designed the frontend, implemented a CI/CD pipeline using Jenkins and GitHub, containerized the application with Docker, and deployed it on AWS EC2 and Render.
🔧 Tools & Infrastructure Used
VS Code – Code development
Git & GitHub – Source control & repository
Webhook – To notify Jenkins on code push
Jenkins (EC2-1) – CI server
Docker (EC2-2) – For building and running frontend container
Render – To host backend
Architecture Diagram                   

                 ┌────────────────┐
                   │   Developer    │
                   │   (VS Code)    │
                   └──────┬─────────┘
                          │
                          ▼
                   ┌────────────────┐
                   │     GitHub     │◄───── Backend hosted on Render
                   └────────────────┘
                          │
      Webhook triggers    ▼
                   ┌────────────────┐
                   │    Jenkins     │ (EC2 Instance 1)
                   │  (CI Server)   │
                   └──────┬─────────┘
                          │
            SSH deploy to EC2-2
                          ▼
                ┌────────────────────┐
                │     EC2 Instance 2 │
                │   (Docker host)    │
                │ - Pulls code       │
                │ - Builds image     │
                │ - Runs container   │
                └────────────────────┘
Step-by-Step Workflow
1. Code Development
You write code in VS Code and push to GitHub repository.

2. GitHub Webhook
Webhook is configured to notify Jenkins (on EC2-1) whenever new code is pushed.

3. Jenkins CI (EC2-1)
Jenkins receives the webhook trigger.

It pulls the latest code from GitHub.

Jenkins runs build/test stages (optional: like lint, unit test, etc.).

If build is successful, Jenkins SSHs into EC2-2 to trigger deployment.

4. Docker Build & Deploy (EC2-2)
Jenkins sends code (or pulls from GitHub again) on EC2-2.

On EC2-2:

Dockerfile is used to build a Docker image.

Container is started using that image.

The frontend is now live on EC2-2’s public IP.

5. Backend Deployment (Render)
Backend code is separately deployed to Render.

Jenkins may trigger Render deploy via GitHub or manual webhook (optional).

🌐 Communication
Frontend (EC2-2) calls the Backend (Render) via public API URL.

Jenkins (EC2-1) needs SSH access to EC2-2 (with PEM key or credentials).

<img width="500" height="400" alt="WhatsApp Image 2026-07-27 at 7 27 23 PM" src="https://github.com/user-attachments/assets/8a542e4b-de15-49bc-9245-a01379e76779" />
