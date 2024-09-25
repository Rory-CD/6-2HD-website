pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    stages {
        stage('Install dependencies') {
            steps {
                // Clean up node modules
                sh 'rm -rf node_modules'
                // Install dependencies
                sh 'npm install'
                // Change permissions for node modules
                sh 'chmod -R 755 node_modules/'
            }
        }
        stage('Build') {
            steps {
                // Build Vue app
                sh 'npm run build'
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
        stage('Code Quality Analysis') {
            steps {
                script {
                    // Connect with scanner plugin
                    def scannerHome = tool 'SonarQube Scanner';
                    // Set up environment variables and run scanner to connect with server
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
    }
}