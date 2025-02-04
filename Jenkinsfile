pipeline {

 agent {
        docker {
            image 'node:14' // or choose the version you require
        }
    }

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
                sh 'node -v'
                sh 'npm -v'
                // Example: Add build commands here (e.g., for Node.js, Java, Python, etc.)
                sh 'npm install'
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