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
        post {
            always {
                // Archive test results (if applicable)
                archiveArtifacts artifacts: '**/test-results.xml', fingerprint: true

                // Send email notification
                emailext(
                    to: 'your-email@example.com',
                    subject: "Test Results: ${currentBuild.fullDisplayName}",
                    body: """
                    The test results are as follows:

                    ${currentBuild.currentResult}

                    Check the details in Jenkins: ${env.BUILD_URL}
                    """,
                    attachLog: true // Attach the console output log
                )
            }
        }
    }
}