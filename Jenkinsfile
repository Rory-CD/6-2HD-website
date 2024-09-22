pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "fetch the source code from GitHub"
                echo "compile the code using Maven"
            }
        }
        stage('Unit and Integration Tests') {
            steps {
                echo "unit tests with JUnit"
                echo "integration tests with Cucumber"
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