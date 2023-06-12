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
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Th3Un1qu3M4n/node-todo-selenium']])
                sh 'npm install'
            }
        } 
    }
}
