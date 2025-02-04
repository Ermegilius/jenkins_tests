pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning repository...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                // Example: Add build commands here (e.g., for Node.js, Java, Python, etc.)
                // sh 'npm install'  # For Node.js projects
                // sh 'mvn clean package'  # For Java projects
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Example: Add test commands here
                // sh 'npm test'
                // sh 'pytest'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Example: Add deployment commands here
                // sh 'scp target/app.jar user@server:/deploy/path/'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}