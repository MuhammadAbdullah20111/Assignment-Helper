const pageEl = document.querySelector('.page-a');
const paperContentEl = document.querySelector('.page-a .paper-content');
const overlayEl = document.querySelector('.overlay');

let paperContentPadding;

function isFontErrory() {
	// Some fonts have padding top errors, this function tells you if the current font has that
	const currentHandwritingFont = document.body.style.getPropertyValue(
		'--handwriting-font'
	);
	return (
		currentHandwritingFont === '' ||
		currentHandwritingFont.includes('Homemade Apple')
	);
}

function applyPaperStyles() {
	const pageEffects = document.querySelector('#page-effects').value;

	// Common styles
	pageEl.style.border = 'none';
	pageEl.style.overflowY = 'hidden';

	if (pageEffects === 'scanner') {
		// Scanner effect
		const angle = Math.floor(Math.random() * (120 - 50 + 1)) + 50;
		overlayEl.style.background =
			`linear-gradient(${angle}deg, #0008, #0000)`;
		overlayEl.classList.add('shadows');
	} else if (pageEffects === 'shadows') {
		// Shadow effect
		const angle = Math.random() * 360;
		overlayEl.style.background =
			`linear-gradient(${angle}deg, #0008, #0000)`;
		overlayEl.classList.add('shadows');
	} else {
		overlayEl.classList.remove('shadows');
	}

	if (
		isFontErrory() &&
		document.querySelector('#font-file').files.length < 1
	) {
		paperContentPadding =
			paperContentEl.style.paddingTop.replace(/px/g, '') || 5;
		const newPadding = Number(paperContentPadding) - 5;
		paperContentEl.style.paddingTop = `${newPadding}px`;
	}
}

function removePaperStyles() {
	pageEl.style.overflowY = 'auto';
	pageEl.style.border = '1px solid var(--elevation-background)';

	if (document.querySelector('#page-effects').value === 'scanner') {
		overlayEl.classList.remove('shadows');
	} else {
		overlayEl.classList.remove(
			document.querySelector('#page-effects').value
		);
	}

	if (isFontErrory()) {
		paperContentEl.style.paddingTop = `${paperContentPadding}px`;
	}
}

function renderOutput(outputImages) {
	const outputEl = document.querySelector('#output');

	if (outputImages.length <= 0) {
		outputEl.textContent =
			'Click "Generate Image" Button to generate new image.';
		document.querySelector('#download-as-pdf-button').classList.remove(
			'show'
		);
		document.querySelector('#delete-all-button').classList.remove('show');
		return;
	}

	document.querySelector('#download-as-pdf-button').classList.add('show');
	document.querySelector('#delete-all-button').classList.add('show');

	// Clear output safely
	outputEl.textContent = '';

	outputImages.forEach((outputImageCanvas, index) => {
		const container = document.createElement('div');
		container.className = 'output-image-container';
		container.style.position = 'relative';
		container.style.display = 'inline-block';

		const closeBtn = document.createElement('button');
		closeBtn.dataset.index = String(index);
		closeBtn.className = `close-button close-${index}`;
		closeBtn.textContent = '\u00d7';
		container.appendChild(closeBtn);

		const imgDataUrl = outputImageCanvas.toDataURL('image/jpeg');

		const img = document.createElement('img');
		img.className = 'shadow';
		img.alt = `Output image ${index}`;
		img.src = imgDataUrl;
		container.appendChild(img);

		const btnDiv = document.createElement('div');
		btnDiv.style.textAlign = 'center';

		const downloadLink = document.createElement('a');
		downloadLink.className = 'button download-image-button';
		downloadLink.download = `handwriting-${index}.jpg`;
		downloadLink.href = imgDataUrl;
		downloadLink.textContent = 'Download Image';
		btnDiv.appendChild(downloadLink);

		btnDiv.appendChild(document.createElement('br'));
		btnDiv.appendChild(document.createElement('br'));

		const moveLeftBtn = document.createElement('button');
		moveLeftBtn.className = 'button move-left';
		moveLeftBtn.dataset.index = String(index);
		moveLeftBtn.textContent = 'Move Left';
		btnDiv.appendChild(moveLeftBtn);

		const moveRightBtn = document.createElement('button');
		moveRightBtn.className = 'button move-right';
		moveRightBtn.dataset.index = String(index);
		moveRightBtn.textContent = 'Move Right';
		btnDiv.appendChild(moveRightBtn);

		container.appendChild(btnDiv);
		outputEl.appendChild(container);
	});
}

export { removePaperStyles, applyPaperStyles, renderOutput };
