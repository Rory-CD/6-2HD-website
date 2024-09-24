pipeline {
    agent any
    tools {
        nodejs "NodeJS"
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
                sh 'chmod +x ./node_modules/.bin/vite'
                sh 'chmod +x ./node_modules/.bin/vitest'
                // Confirm vitest is installed
                sh 'ls node_modules/vitest'
            }
        }
        stage('Build') {
            steps {
                // Build Vue app
                sh 'npm run build'
                //sh 'npx vite build'
            }
        }
        stage('Archive artifact') {
            steps {
                // Archive the build artifact
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
        stage('Test') {
            steps {
                // Run Cypress tests
                // echo "Testing with Cypress..."
                // sh 'npx cypress run'
                script {
                    //sh 'npm run test:unit'
                    sh 'npx vitest run'
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

    // post {
    //     always {
    //         // Clean up after the build, remove images
    //         // sh 'docker-compose down --rmi all'
    //     }
    // }
}