pipeline {
    agent any

    stages {
        stages('Checkout') {
            steps {
                echo 'Cloning repository...'
                checkout scm
            }
        }

        stages('Build') {
            steps {
                echo 'Building the project...'

                sh 'npm install'
            }
        }

        stages('Test') {
            steps {
                echo 'Running tests...'
            // Example: Add test commands here
            // sh 'npm test'
            // sh 'pytest'
            }
        }

        stages('Deploy') {
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
