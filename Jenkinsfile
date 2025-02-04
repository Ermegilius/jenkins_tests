pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning repository...'
                checkout scm
            }
        }

        // stage('Setup Node.js and Install dependencies') {
        //     steps {
        //         sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash'
        //         sh '. ~/.nvm/nvm.sh && nvm install 20'
        //         sh '. ~/.nvm/nvm.sh && nvm use 20'
        //     }
        // }

        stage('Build') {
            steps {
                echo 'Building the project...'
                sh npm i
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