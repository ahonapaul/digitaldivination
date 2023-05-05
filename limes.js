const dragElement = document.getElementById('drag-element');
const dropZone = document.getElementById('drag-zone');

    dragElement.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('id', e.target.id);
    });

    dropZone.addEventListener('drop', function (e) {
		e.preventDefault();
	    const dragElementID = e.dataTransfer.getData('id');
		const dropElement = document.getElementById(dragElementID);
		e.target.appendChild(dropElement);
                
        var url = []
        url[0]= "rot.html";
        url[1]= "clean.html";

        let random = Math.floor(Math.random()*url.length);

        window.location = url[random]

		});

	dropZone.addEventListener('dragover', function (e) {
		e.preventDefault();
	    });