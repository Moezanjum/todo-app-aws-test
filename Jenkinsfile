pipeline {
    agent {
        docker {
            image 'timbru31/node-alpine-firefox'
            args '-u root:root'
        }
    }
    stages {
        stage('Build') { 
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Moezanjum/todo-app-aws-test']])
                sh 'npm install'
            }
        } 
    }
}
