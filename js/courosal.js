let currentContainerIndex = 1; 
    const totalContainers = 3;
    
    function displayPrevious() {
        document.getElementById('comment' + currentContainerIndex).style.display = 'none';
        currentContainerIndex = (currentContainerIndex - 2 + totalContainers) % totalContainers + 1;
        document.getElementById('comment' + currentContainerIndex).style.display = 'flex';

    }
    function displayNext() {
        document.getElementById('comment' + currentContainerIndex).style.display = 'none';
        currentContainerIndex = (currentContainerIndex % totalContainers) + 1;
        document.getElementById('comment' + currentContainerIndex).style.display = 'flex';

    }