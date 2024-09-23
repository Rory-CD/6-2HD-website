pipeline {
    agent {
            docker {
            image 'vue-image:latest' // Replace with your built image name
            args '-u root' // Use root user to avoid permission issues if necessary
        }
    }

    stages {
        stage('Build') {
            steps {
                // Clone repo
                // echo "Cloning repo..."
                // git branch: 'main', url: 'https://github.com/Rory-CD/6-2HD-website.git'

                // Build docker image
                echo "Building docker image..."
                sh 'docker build -t vue-image .'
            }
        }
        stage('Test') {
            steps {
                echo "Testing with Cypress..."
                // Sleep to ensure Docker container is running
                sh 'sleep 10'
                // Run Cypress tests
                sh 'npx cypress run'
            }
            post {
                success {
                    emailext (
                        to: "rory.doug@gmail.com",
                        subject: "Test Status: Successful",
                        body: "Test was successful!",
                        attachLog: true
                    )
                }
                failure {
                    emailext (
                        to: "rory.doug@gmail.com",
                        subject: "Test Status: Failed",
                        body: "Test failed!",
                        attachLog: true
                    )
                }
            }
        }
        stage('Code Analysis') {
            steps {
                echo "analyse code with SonarQube"
            }
        }
        stage('Security Scan') {
            steps {
                echo "scan with OWASP ZAP"
            }
            post {
                success {
                    emailext (
                        to: "rory.doug@gmail.com",
                        subject: "Security Scan Status: Successful",
                        body: "Scan was successful!",
                        attachLog: true
                    )
                }
                failure {
                    emailext (
                        to: "rory.doug@gmail.com",
                        subject: "Security Scan Status: Failed",
                        body: "Scan failed!",
                        attachLog: true
                    )
                }
            }
        }
        stage('Deploy to Staging') {
            steps {
                echo "deploy the application to AWS EC2"
            }
        }
        stage('Integration Tests on Staging') {
            steps {
                echo "test with Selenium"
            }
        }
        stage('Deploy to Production') {
            steps {
                echo "deploy the code to AWS EC2"
            }
        }
    }
}