pipeline{

	agent {label 'linux'}

	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub')
	}

	stages {
	    
	    stage('gitclone') {

			steps {
				git 'https://github.com/cecasta/devops_cicd.git'
			}
		}

		stage('Build') {

			steps {
				sh 'docker build -t nodejscicd/devops:latest .'
			}
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push nodejscicd/devops:latest'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}