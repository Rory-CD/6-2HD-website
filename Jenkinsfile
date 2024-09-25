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
        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool 'SonarQube Scanner';
                    withSonarQubeEnv() {
                    sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
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
        stage('Deploy to GitHub Pages') {
            steps {
                script {
                    // Install gh-pages globally in the Jenkins environment
                    sh 'npm install -g gh-pages'
                    
                    // Deploy the built app to GitHub Pages
                    sh 'gh-pages -d dist'
                }
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