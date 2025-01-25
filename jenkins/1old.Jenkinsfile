node {
    // Define environment variables
    env.CI = 'true'

    // Use Docker container for the pipeline
    docker.image('node:lts-buster-slim').inside('-p 3000:3000') {

        try {
            // Build stage
            stage('Build') {
                sh 'npm install'
            }

            // Test stage
            stage('Test') {
                sh './jenkins/scripts/test.sh'
            }

            // Deliver stage
            stage('Deliver') {
                sh './jenkins/scripts/deliver.sh'
                // Manual input from user
                input message: 'Finished using the website? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }

        } catch (Exception e) {
            // If any stage fails, catch the exception and mark the build as failed
            currentBuild.result = 'FAILURE'
            throw e  // Re-throw the exception to fail the build
        }
    }
}
