pipeline {
    agent any
    tools {
        nodejs "NodeJS"
    }

    stages {
        stage('Cleanup') {
            steps {
                script {
                    cleanWs() // This cleans the workspace before any build steps
                }
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install --unsafe-perm'
                sh 'chmod -R 755 node_modules/'
                // Confirm vitest/vite are installed
                sh 'ls node_modules/vitest'
                sh 'ls node_modules/vite'
            }
        }
        stage('Build') {
            steps {
                // Build Vue app
                //sh 'npm run build'
                sh 'npx vite build'
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
                script {
                    def scannerHome = tool 'SonarQube Scanner'
                    // Access the SonarQube token stored in Jenkins credentials
                    def sonarqubeToken = credentials('SonarQube-token')
                    
                    withSonarQubeEnv('SonarQube Server') {
                        sh """
                        bash ${scannerHome}/bin/sonar-scanner \
                            -Dsonar.projectKey=Vue-Webapp \
                            -Dsonar.sources=. \
                            -Dsonar.login=${sonarqubeToken}
                        """
                    }
                }
            }
        }
        stage('Quality Gate') {
            steps {
                // Add steps to wait for quality gate status
                waitForQualityGate abortPipeline: true
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