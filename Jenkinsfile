pipeline {
    agent any
    tools {
        nodejs "NodeJS"
    }

    // Environment variables
    environment {
        SONARQUBE_URL = 'http://localhost:9000/dashboard?id=Vue-Webapp'
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
            post {
                always {
                    // Archive the build artifact
                    archiveArtifacts artifacts: 'dist/**', fingerprint: true
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Test with Vitest
                    sh 'npx vitest run'
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
        stage('Deploy') {
            steps {
                echo "deploy to staging server"
            }
        }
        stage('Release') {
            steps {
                echo "release with Octopus Deploy"
            }
        }
        stage('Monitoring and Alerting') {
            steps {
                echo "monitor with datadog"
            }
        }
        stage('Reporting') {
            steps {
                // Send email notification
                emailext(
                    to: 'rory.doug@gmail.com',
                    subject: "Build and Test Results: ${currentBuild.fullDisplayName}",
                    body: """
                    The test results are as follows:

                    ${currentBuild.currentResult}

                    Check the details in Jenkins: ${env.BUILD_URL}

                    For SonarQube analysis results, visit:
                    ${env.SONARQUBE_URL} // Define this variable as needed in your pipeline
                    """,
                    attachLog: true // Attach the console output log
                )
            }
        }
    }
}