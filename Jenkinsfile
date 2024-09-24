pipeline {
    agent any
    environment {
        COMPOSE_HTTP_TIMEOUT = '200'  // Set to a higher value, e.g., 200 seconds
    }

    stages {
        stage('Build') {
            steps {
                // Build docker image
                echo "Building docker images..."
                //sh 'docker build -t vue-image .'
                script {
                    // Build the Docker images using Docker Compose
                    sh 'sudo docker-compose up --build -d vue-app'
                }
            }
        }
        stage('Test') {
            steps {
                // Run Cypress tests
                // echo "Testing with Cypress..."
                // sh 'npx cypress run'
                script {
                    sh 'npm run test:unit'
                    // Run Cypress tests
                    // sh 'docker-compose run --rm cypress --component'
                }
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

    post {
        always {
            // Clean up after the build, remove images
            sh 'docker-compose down --rmi all'
        }
    }
}