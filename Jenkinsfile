pipeline {
    agent any
    tools {
        nodejs "NodeJS"
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'rm -rf node_modules'
                sh 'npm install'
                sh 'chmod -R 755 node_modules/'
                // Confirm vitest/vite are installed
                sh 'ls -la node_modules/vite'
                sh 'npm list vite' // Check installed version of Vite
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
                script {
                    // Test with Vitest
                    sh 'npx vitest run'
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
        // stage('Code Analysis') {
        //     steps {
        //         script {
        //             def scannerHome = tool 'SonarQube Scanner'
        //             // Access the SonarQube token stored in Jenkins credentials
        //             def sonarqubeToken = credentials('SonarQube-token')
                    
        //             withSonarQubeEnv('SonarQube Server') {
        //                 sh """
        //                 #!/bin/bash
        //                 bash ${scannerHome}/bin/sonar-scanner \
        //                     -Dsonar.projectKey=Vue-Webapp \
        //                     -Dsonar.sources=. \
        //                     -Dsonar.login=${sonarqubeToken}
        //                 """
        //             }
        //         }
        //     }
        // }
        stage('SonarQube Analysis') {
            def scannerHome = tool 'SonarQube Scanner';
            withSonarQubeEnv() {
            sh "${scannerHome}/bin/sonar-scanner"
            }
        }
        // stage('Quality Gate') {
        //     steps {
        //         // Add steps to wait for quality gate status
        //         waitForQualityGate abortPipeline: true
        //     }
        // }
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