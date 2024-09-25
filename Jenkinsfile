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
    }
}